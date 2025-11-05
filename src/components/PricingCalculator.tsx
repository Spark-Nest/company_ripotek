import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type PricingProgram = {
  id: string;
  name: string;
  basePrice: number;
  durationWeeks: number;
  formats?: { id: string; label: string; priceMultiplier?: number }[];
};

export type PricingAddOn = {
  id: string;
  label: string;
  price: number;
  per: "student" | "program" | "week";
};

export type PricingDiscount = {
  code: string;
  label?: string;
  type: "percent" | "fixed";
  amount: number;
};

export type PricingCalculatorConfig = {
  currency?: "CAD" | "USD" | "EUR" | string;
  taxPercent?: number;
  programs: PricingProgram[];
  addOns?: PricingAddOn[];
  discounts?: PricingDiscount[];
};

type Props = {
  config?: PricingCalculatorConfig;
  defaultProgramId?: string;
  onTotalChange?: (totals: {
    perStudent: number;
    cohortTotal: number;
    breakdown: Record<string, number>;
  }) => void;
};

function formatMoney(n: number, currency: string) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${currency} ${Math.round(n).toLocaleString()}`;
  }
}

const sampleConfig: PricingCalculatorConfig = {
  currency: "CAD",
  taxPercent: 5,
  programs: [
    { id: "power-bi", name: "Power BI Analyst", basePrice: 1599, durationWeeks: 12 },
    { id: "azure-de", name: "Azure Data Engineer", basePrice: 3999, durationWeeks: 24 },
    { id: "databricks", name: "Databricks Engineer", basePrice: 3999, durationWeeks: 24 },
  ],
  addOns: [
    { id: "mentorship", label: "1:1 Mentorship", price: 300, per: "student" },
    { id: "labs", label: "Extra Lab Hours", price: 25, per: "week" },
    { id: "corp", label: "Corporate Admin & Reporting", price: 800, per: "program" },
  ],
  discounts: [
    { code: "EARLY10", label: "Early-bird 10%", type: "percent", amount: 10 },
    { code: "SAVE200", label: "Save $200", type: "fixed", amount: 200 },
  ],
};

export default function PricingCalculator({ config, defaultProgramId, onTotalChange }: Props) {
  const cfg = config ?? sampleConfig;
  const currency = cfg.currency ?? "CAD";

  const [programId, setProgramId] = useState<string>(
    defaultProgramId ?? cfg.programs[0]?.id ?? ""
  );
  const [cohortSize, setCohortSize] = useState<number>(5);
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>({});
  const [discountCode, setDiscountCode] = useState<string>("");
  const [includeTax, setIncludeTax] = useState<boolean>(Boolean(cfg.taxPercent));

  const program = useMemo(
    () => cfg.programs.find((p) => p.id === programId) ?? cfg.programs[0],
    [cfg.programs, programId]
  );

  const discount = useMemo(() => {
    const code = discountCode.trim().toUpperCase();
    if (!code) return undefined;
    return cfg.discounts?.find((d) => d.code.toUpperCase() === code);
  }, [cfg.discounts, discountCode]);

  const totals = useMemo(() => {
    if (!program) return { perStudent: 0, cohortTotal: 0, breakdown: {} as Record<string, number> };

    const basePerStudent = program.basePrice;

    const addOns = (cfg.addOns ?? []).filter((a) => selectedAddOns[a.id]);

    const addOnsPerStudent = addOns.reduce((sum, a) => {
      if (a.per === "student") return sum + a.price;
      if (a.per === "program") return sum + a.price / Math.max(1, cohortSize);
      if (a.per === "week") return sum + a.price * program.durationWeeks;
      return sum;
    }, 0);

    const perStudentBeforeDiscount = basePerStudent + addOnsPerStudent;

    let perStudentAfterDiscount = perStudentBeforeDiscount;
    if (discount) {
      if (discount.type === "percent") perStudentAfterDiscount *= 1 - discount.amount / 100;
      else perStudentAfterDiscount -= discount.amount;
    }

    const perStudentSubtotal = Math.max(0, perStudentAfterDiscount);
    const perStudentTax = includeTax && cfg.taxPercent ? perStudentSubtotal * (cfg.taxPercent / 100) : 0;
    const perStudentTotal = perStudentSubtotal + perStudentTax;

    const addOnsCohort = addOns.reduce((sum, a) => {
      if (a.per === "student") return sum + a.price * cohortSize;
      if (a.per === "program") return sum + a.price;
      if (a.per === "week") return sum + a.price * program.durationWeeks * cohortSize;
      return sum;
    }, 0);

    const baseCohort = basePerStudent * cohortSize;
    let cohortBeforeDiscount = baseCohort + addOnsCohort;
    if (discount) {
      if (discount.type === "percent") cohortBeforeDiscount *= 1 - discount.amount / 100;
      else cohortBeforeDiscount -= discount.amount * cohortSize;
    }
    cohortBeforeDiscount = Math.max(0, cohortBeforeDiscount);
    const cohortTax = includeTax && cfg.taxPercent ? cohortBeforeDiscount * (cfg.taxPercent / 100) : 0;
    const cohortTotal = cohortBeforeDiscount + cohortTax;

    const breakdown: Record<string, number> = {
      basePerStudent,
      addOnsPerStudent,
      perStudentSubtotal,
      perStudentTax,
      perStudentTotal,
      baseCohort,
      addOnsCohort,
      cohortBeforeDiscount,
      cohortTax,
      cohortTotal,
    };

    return { perStudent: perStudentTotal, cohortTotal, breakdown };
  }, [program, cfg.addOns, cfg.taxPercent, cohortSize, selectedAddOns, discount, includeTax]);

  if (onTotalChange) onTotalChange(totals);

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle>Pricing Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="program">Program</Label>
              <Select value={program?.id} onValueChange={setProgramId}>
                <SelectTrigger id="program" className="w-full">
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  {cfg.programs.map((p) => (
                    <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cohort">Cohort size</Label>
                <Input
                  id="cohort"
                  type="number"
                  min={1}
                  value={cohortSize}
                  onChange={(e) => setCohortSize(Math.max(1, Number(e.target.value)))}
                />
              </div>
              <div className="grid gap-2">
                <Label>Duration</Label>
                <div className="h-10 px-3 py-2 rounded-md border flex items-center bg-muted/30">
                  {program?.durationWeeks ?? "-"} weeks
                </div>
              </div>
            </div>

            {cfg.addOns && cfg.addOns.length > 0 && (
              <div className="grid gap-3">
                <Label>Add-ons</Label>
                <div className="space-y-2">
                  {cfg.addOns.map((a) => (
                    <label key={a.id} className="flex items-center gap-3 text-sm">
                      <Checkbox
                        checked={Boolean(selectedAddOns[a.id])}
                        onCheckedChange={(v) =>
                          setSelectedAddOns((s) => ({ ...s, [a.id]: Boolean(v) }))
                        }
                      />
                      <span className="flex-1">{a.label}</span>
                      <span className="text-muted-foreground">
                        {a.per === "student" && `${formatMoney(a.price, currency)} / student`}
                        {a.per === "program" && `${formatMoney(a.price, currency)} / program`}
                        {a.per === "week" && `${formatMoney(a.price, currency)} / week`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="discount">Discount code</Label>
                <Input
                  id="discount"
                  placeholder="Enter code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tax-toggle">Include tax</Label>
                <Button
                  id="tax-toggle"
                  type="button"
                  variant={includeTax ? "default" : "outline"}
                  onClick={() => setIncludeTax((v) => !v)}
                >
                  {includeTax ? "Tax Included" : "No Tax"}
                </Button>
              </div>
            </div>

            <div>
              <Button variant="outline" onClick={() => {
                setProgramId(cfg.programs[0]?.id ?? "");
                setCohortSize(5);
                setSelectedAddOns({});
                setDiscountCode("");
                setIncludeTax(Boolean(cfg.taxPercent));
              }}>Reset</Button>
            </div>
          </div>

          <div className="rounded-2xl border p-5 bg-card h-max">
            <div className="flex items-baseline justify-between">
              <div className="text-sm text-muted-foreground">Per student</div>
              <div className="text-3xl font-bold">{formatMoney(totals.perStudent, currency)}</div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Base: {formatMoney(totals.breakdown.basePerStudent ?? 0, currency)}
              {" • "}Add-ons: {formatMoney(totals.breakdown.addOnsPerStudent ?? 0, currency)}
              {discount ? (
                <>
                  {" • "}Discount: {discount.type === "percent" ? `${discount.amount}%` : formatMoney(discount.amount, currency)}
                </>
              ) : null}
              {includeTax && cfg.taxPercent ? (
                <> {" • "}Tax: {cfg.taxPercent}%</>
              ) : null}
            </div>
            <div className="mt-6 h-px bg-border" />
            <div className="mt-6 flex items-baseline justify-between">
              <div className="text-sm text-muted-foreground">Cohort total</div>
              <div className="text-3xl font-bold">{formatMoney(totals.cohortTotal, currency)}</div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Cohort: {cohortSize} students
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

