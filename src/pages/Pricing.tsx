import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, CheckCircle, DollarSign, Calendar, Users, ArrowRight, Printer, Share2, Mail } from "lucide-react";

const Pricing: React.FC = () => {
  const [serviceType, setServiceType] = useState("consulting");
  const [projectScope, setProjectScope] = useState("medium");
  const [timeline, setTimeline] = useState("3-6");
  const [teamSize, setTeamSize] = useState("5-10");
  const [support, setSupport] = useState("none");
  const [currency, setCurrency] = useState<"CAD" | "USD">("CAD");
  const [includeTax, setIncludeTax] = useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");

  // --- Persistence (URL + localStorage) ---
  const STORAGE_KEY = "pricing-state@v2";
  const toParams = () => new URLSearchParams({ serviceType, projectScope, timeline, teamSize, support, currency, includeTax: includeTax ? "1" : "0", discount: discountCode });
  const applyFromParams = (params: URLSearchParams) => {
    const sv = params.get("serviceType");
    const sc = params.get("projectScope");
    const tl = params.get("timeline");
    const ts = params.get("teamSize");
    const sp = params.get("support");
    const cur = params.get("currency");
    const tax = params.get("includeTax");
    const disc = params.get("discount");
    if (sv) setServiceType(sv);
    if (sc) setProjectScope(sc);
    if (tl) setTimeline(tl);
    if (ts) setTeamSize(ts);
    if (sp) setSupport(sp);
    if (cur === "CAD" || cur === "USD") setCurrency(cur);
    if (tax != null) setIncludeTax(tax === "1");
    if (disc) setDiscountCode(disc);
  };
  // Initialize from URL or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if ([...urlParams.keys()].length > 0) {
      applyFromParams(urlParams);
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) applyFromParams(new URLSearchParams(JSON.parse(raw)));
    } catch {}
  }, []);
  // Sync to URL + localStorage on change
  useEffect(() => {
    const params = toParams();
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(params.toString())); } catch {}
  }, [serviceType, projectScope, timeline, teamSize, support, currency, includeTax, discountCode]);

  const calculatePrice = () => {
    let basePrice = 0;

    if (serviceType === "consulting") {
      basePrice = 150000;
    } else if (serviceType === "training") {
      basePrice = 25000;
    } else if (serviceType === "managed") {
      basePrice = 15000;
    }

    const scopeMultiplier: Record<string, number> = {
      small: 0.5,
      medium: 1,
      large: 1.8,
      enterprise: 2.5,
    };
    basePrice *= scopeMultiplier[projectScope];

    const timelineMultiplier: Record<string, number> = {
      "1-2": 1.3,
      "3-6": 1,
      "6-12": 0.85,
      "12+": 0.75,
    };
    basePrice *= timelineMultiplier[timeline];

    if (serviceType === "training") {
      const teamMultiplier: Record<string, number> = {
        "1-5": 1,
        "5-10": 1.6,
        "10-20": 2.8,
        "20+": 4,
      };
      basePrice *= teamMultiplier[teamSize];
    }

    if (support === "6months") {
      basePrice += 30000;
    } else if (support === "12months") {
      basePrice += 50000;
    }

    return Math.round(basePrice / 1000) * 1000;
  };

  const priceCad = calculatePrice();
  const discountDef = useMemo(() => {
    const map: Record<string, { type: "percent" | "fixed"; amount: number } > = {
      EARLY10: { type: "percent", amount: 10 },
      SAVE10000: { type: "fixed", amount: 10000 },
      SAVE5: { type: "percent", amount: 5 },
    };
    const code = discountCode.trim().toUpperCase();
    return code && map[code] ? { code, ...map[code] } : undefined;
  }, [discountCode]);

  const conversion = currency === "USD" ? 0.74 : 1;
  const taxRate = currency === "CAD" ? 0.05 : 0;

  const discountedCad = useMemo(() => {
    if (!discountDef) return priceCad;
    if (discountDef.type === "percent") return Math.max(0, priceCad * (1 - discountDef.amount / 100));
    return Math.max(0, priceCad - discountDef.amount);
  }, [priceCad, discountDef]);

  const subtotal = Math.round(discountedCad * conversion / 1000) * 1000;
  const taxAmount = includeTax ? Math.round(subtotal * taxRate) : 0;
  const total = subtotal + taxAmount;
  const monthlyPrice = Math.round(total / parseInt(timeline.split("-")[0]));

  // Line-item breakdown for transparency
  const breakdown = useMemo(() => {
    let base = 0;
    if (serviceType === "consulting") base = 150000;
    else if (serviceType === "training") base = 25000;
    else if (serviceType === "managed") base = 15000;

    const scopeMultMap: Record<string, number> = { small: 0.5, medium: 1, large: 1.8, enterprise: 2.5 };
    const timeMultMap: Record<string, number> = { "1-2": 1.3, "3-6": 1, "6-12": 0.85, "12+": 0.75 };
    const teamMultMap: Record<string, number> = { "1-5": 1, "5-10": 1.6, "10-20": 2.8, "20+": 4 };

    const scopeMult = scopeMultMap[projectScope];
    const afterScope = base * scopeMult;
    const scopeImpact = afterScope - base;

    const timeMult = timeMultMap[timeline];
    const afterTime = afterScope * timeMult;
    const timeImpact = afterTime - afterScope;

    let teamMult = 1;
    let afterTeam = afterTime;
    let teamImpact = 0;
    if (serviceType === "training") {
      teamMult = teamMultMap[teamSize];
      afterTeam = afterTime * teamMult;
      teamImpact = afterTeam - afterTime;
    }

    let supportCost = 0;
    if (support === "6months") supportCost = 30000;
    else if (support === "12months") supportCost = 50000;

    const computedTotal = Math.round(afterTeam + supportCost);

    return { base, scopeMult, scopeImpact, timeMult, timeImpact, teamMult, teamImpact, supportCost, computedTotal };
  }, [serviceType, projectScope, timeline, teamSize, support]);

  const getRecommendations = () => {
    const recommendations: string[] = [];

    if (projectScope === "enterprise" && support === "none") {
      recommendations.push("Consider adding managed services for enterprise-scale projects");
    }
    if (timeline === "1-2" && projectScope === "large") {
      recommendations.push("A longer timeline (3-6 months) could reduce costs by 20-30%");
    }
    if (serviceType === "training" && teamSize === "20+") {
      recommendations.push("Custom corporate bootcamp may offer better value for large teams");
    }

    return recommendations;
  };

  // FAQs + schema.org markup for SEO
  const faqs = [
    {
      q: "How accurate is this estimate?",
      a: "It provides a ballpark based on your inputs. Final pricing depends on detailed scope, technical complexity, and delivery constraints discovered during consultation.",
    },
    {
      q: "Do you offer payment schedules?",
      a: "Yes, milestone-based payments tied to deliverables. Extended plans available for longer programs.",
    },
    {
      q: "What drives project cost the most?",
      a: "Scope (number of use cases, integrations), timeline (expedited delivery), team size for training, and ongoing support needs.",
    },
    {
      q: "Can you work with our internal team?",
      a: "Absolutely. We typically form a blended team with client SMEs and IT to accelerate delivery and knowledge transfer.",
    },
  ];
  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }), [faqs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 font-semibold mb-4">
            <Calculator className="w-5 h-5" />
            Investment Estimator
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span>Calculate Your </span>
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Investment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your data transformation project
          </p>
        </div>

        {/* Quick presets */}
        <div className="no-print mb-8">
          <div className="text-sm font-semibold text-gray-700 mb-3">Quick Presets</div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setServiceType("consulting"); setProjectScope("small"); setTimeline("3-6"); setSupport("none"); }} className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-teal-300 bg-white">POC / Pilot</button>
            <button onClick={() => { setServiceType("training"); setProjectScope("medium"); setTimeline("3-6"); setTeamSize("10-20"); setSupport("none"); }} className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-teal-300 bg-white">Department Rollout</button>
            <button onClick={() => { setServiceType("consulting"); setProjectScope("enterprise"); setTimeline("6-12"); setSupport("12months"); }} className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-teal-300 bg-white">Enterprise Program</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl no-print">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
            {/* Currency & Tax */}
            <div className="mb-6 flex items-center gap-3 flex-wrap">
              <div className="text-sm font-semibold text-gray-700">Display Currency:</div>
              <div className="inline-flex rounded-lg overflow-hidden border">
                <button onClick={() => setCurrency('CAD')} className={`px-3 py-1.5 text-sm ${currency === 'CAD' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'}`}>CAD</button>
                <button onClick={() => setCurrency('USD')} className={`px-3 py-1.5 text-sm ${currency === 'USD' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'}`}>USD</button>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700">Include tax</label>
                <button onClick={() => setIncludeTax(v => !v)} className={`px-3 py-1.5 rounded-lg text-sm border ${includeTax ? 'bg-teal-600 text-white' : 'bg-white text-gray-700'}`}>{includeTax ? 'Yes' : 'No'}</button>
              </div>
            </div>

            {/* Service Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Service Type</label>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { value: "consulting", label: "Consulting", icon: "💼" },
                  { value: "training", label: "Training", icon: "🎓" },
                  { value: "managed", label: "Managed Services", icon: "⚙️" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setServiceType(option.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      serviceType === option.value
                        ? "border-teal-600 bg-teal-50"
                        : "border-gray-200 hover:border-teal-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">{option.icon}</div>
                    <div className="font-semibold text-gray-900">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Scope */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Project Scope</label>
              <select
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
              >
                <option value="small">Small - Single department or use case</option>
                <option value="medium">Medium - Multiple departments</option>
                <option value="large">Large - Enterprise-wide implementation</option>
                <option value="enterprise">Enterprise - Complex, multi-phase transformation</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Desired Timeline</label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
              >
                <option value="1-2">1-2 months (Rush - 30% premium)</option>
                <option value="3-6">3-6 months (Standard)</option>
                <option value="6-12">6-12 months (Extended - 15% discount)</option>
                <option value="12+">12+ months (Long-term - 25% discount)</option>
              </select>
            </div>

            {/* Team Size (Training Only) */}
            {serviceType === "training" && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Participants</label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
                >
                  <option value="1-5">1-5 people</option>
                  <option value="5-10">5-10 people</option>
                  <option value="10-20">10-20 people</option>
                  <option value="20+">20+ people</option>
                </select>
              </div>
            )}

            {/* Ongoing Support */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Post-Project Support</label>
              <select
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none"
              >
                <option value="none">No ongoing support</option>
                <option value="6months">6 months managed services (+$30K)</option>
                <option value="12months">12 months managed services (+$50K)</option>
              </select>
            </div>

            {/* Discounts */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
              <div className="flex gap-2">
                <input value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Enter code (e.g., EARLY10)" className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none" />
                <button onClick={(e) => { e.preventDefault(); }} className="px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-teal-300">Apply</button>
              </div>
              {discountDef ? (
                <div className="text-xs text-green-700 mt-1">Applied: {discountDef.code} ({discountDef.type === 'percent' ? `${discountDef.amount}%` : `$${discountDef.amount.toLocaleString()}`})</div>
              ) : (discountCode.trim() ? <div className="text-xs text-amber-700 mt-1">Code not recognized. Try EARLY10 or SAVE10000.</div> : null)}
            </div>

            {/* Recommendations */}
            {getRecommendations().length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">💡 Recommendations</h3>
                <ul className="space-y-2">
                  {getRecommendations().map((rec, idx) => (
                    <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 shadow-xl text-white sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Estimated Investment</h3>
              </div>

              <div className="mb-8">
                <div className="text-sm text-teal-100 mb-2">Total Project Cost</div>
                <div className="text-5xl font-bold mb-2">{currency} ${total.toLocaleString()}</div>
                <div className="text-teal-100">{includeTax ? `Includes ${Math.round(taxRate*100)}% tax` : 'Tax excluded'}</div>
              </div>

              <div className="mb-8 pb-8 border-b border-white/20">
                <div className="text-sm text-teal-100 mb-2">Estimated Monthly</div>
                <div className="text-3xl font-bold">{currency} ${monthlyPrice.toLocaleString()}</div>
                <div className="text-sm text-teal-100">per month over {timeline} months</div>
              </div>

              {/* Line-item breakdown */}
              <div className="mb-8 pb-8 border-b border-white/20">
                <h4 className="font-semibold text-lg mb-3">Breakdown</h4>
                <div className="space-y-2 text-sm text-teal-50/90">
                  <div className="flex justify-between"><span>Base ({serviceType})</span><span>${breakdown.base.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Scope ×{breakdown.scopeMult.toFixed(2)}</span><span>{breakdown.scopeImpact >= 0 ? "+" : ""}${Math.round(breakdown.scopeImpact).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Timeline ×{breakdown.timeMult.toFixed(2)}</span><span>{breakdown.timeImpact >= 0 ? "+" : ""}${Math.round(breakdown.timeImpact).toLocaleString()}</span></div>
                  {serviceType === "training" && (
                    <div className="flex justify-between"><span>Team size ×{breakdown.teamMult.toFixed(2)}</span><span>{breakdown.teamImpact >= 0 ? "+" : ""}${Math.round(breakdown.teamImpact).toLocaleString()}</span></div>
                  )}
                  {breakdown.supportCost > 0 && (
                    <div className="flex justify-between"><span>Support add-on</span><span>+${breakdown.supportCost.toLocaleString()}</span></div>
                  )}
                  {discountDef && (
                    <div className="flex justify-between"><span>Discount ({discountDef.code})</span><span>-{discountDef.type === 'percent' ? `${discountDef.amount}%` : `$${discountDef.amount.toLocaleString()}`}</span></div>
                  )}
                  {includeTax && (
                    <div className="flex justify-between"><span>Tax</span><span>+{currency} ${taxAmount.toLocaleString()}</span></div>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg">What's Included:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated project team</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Knowledge transfer & training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete documentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-day post-launch support</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-3 no-print">
                <button onClick={() => window.print()} className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" /> Print / Save PDF
                </button>
                <button onClick={() => { navigator.clipboard?.writeText(window.location.href); }} className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" /> Copy Share Link
                </button>
                <a
                  href={`mailto:?subject=${encodeURIComponent('Ripotek Estimate')}&body=${encodeURIComponent(
                    `Service: ${serviceType}\nScope: ${projectScope}\nTimeline: ${timeline} months${serviceType==='training' ? `\nTeam size: ${teamSize}`: ''}\nSupport: ${support}\n\nTotal: ${currency} $${total.toLocaleString()}\nMonthly: ${currency} $${monthlyPrice.toLocaleString()}\nLink: ${window.location.href}`
                  )}`}
                  className="flex-1 bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Email Estimate
                </a>
              </div>

              <Link to="/contact" className="w-full block bg-white text-teal-600 py-4 rounded-lg font-bold hover:bg-teal-50 transition text-center">
                Request Detailed Proposal <ArrowRight className="inline-block w-5 h-5 align-[-2px]" />
              </Link>

              <p className="text-xs text-teal-100 mt-4 text-center">
                *This is an estimate. Final pricing based on detailed requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Inline Lead Form */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 no-print">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Request a Detailed Proposal</h3>
            <p className="text-sm text-gray-600 mb-6">Share a few details and we’ll reach out within 1 business day.</p>
            <InlineLeadForm 
              defaults={{ 
                serviceType, projectScope, timeline, teamSize, support,
                total, monthlyPrice, currency
              }} 
            />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What drives price?</h3>
            <div className="divide-y">
              <details className="py-3" open>
                <summary className="font-semibold cursor-pointer">Scope & Complexity</summary>
                <p className="mt-2 text-sm text-gray-600">Number of use cases, integrations, data volume, governance requirements, and non-functional needs (security, SLAs, HA/DR).</p>
              </details>
              <details className="py-3">
                <summary className="font-semibold cursor-pointer">Timeline</summary>
                <p className="mt-2 text-sm text-gray-600">Shorter deadlines require more parallel workstreams, adding premium for delivery risk and staffing.</p>
              </details>
              <details className="py-3">
                <summary className="font-semibold cursor-pointer">Team Size (Training)</summary>
                <p className="mt-2 text-sm text-gray-600">Larger cohorts need additional instructors, TAs, and lab resources to maintain quality.</p>
              </details>
              <details className="py-3">
                <summary className="font-semibold cursor-pointer">Post-project Support</summary>
                <p className="mt-2 text-sm text-gray-600">Managed services add proactive monitoring, SLAs, and ongoing enhancements.</p>
              </details>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 no-print">
          <div className="bg-white/60 rounded-2xl p-6 border">
            <div className="text-center mb-4 text-sm text-gray-600">Trusted by teams using</div>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
              <img src="/logos/color/azure-color.svg" alt="Microsoft Azure" className="h-8" />
              <img src="/logos/color/databricks-color.svg" alt="Databricks" className="h-8" />
              <img src="/logos/color/fabric-color.png" alt="Microsoft Fabric" className="h-8" />
              <img src="/logos/color/powerbi-color.svg" alt="Power BI" className="h-8" />
              <img src="/logos/color/snowflake-color.svg" alt="Snowflake" className="h-8" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 no-print">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="text-sm text-gray-500 mb-2">Enterprise Client</div>
            <blockquote className="text-gray-900 text-lg leading-relaxed">“Ripotek helped us stand up a governed analytics platform in record time—clean handover, clear KPIs, and real adoption.”</blockquote>
            <div className="mt-4 flex items-center gap-3">
              <img src="/logos/color/azure-color.svg" alt="Client" className="h-6" />
              <div className="text-sm text-gray-600">VP Data & Analytics, Energy</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="text-sm text-gray-500 mb-2">Public Sector</div>
            <blockquote className="text-gray-900 text-lg leading-relaxed">“Their training-to-adoption approach cut our dashboard backlog by 60% while upskilling our team.”</blockquote>
            <div className="mt-4 flex items-center gap-3">
              <img src="/logos/color/powerbi-color.svg" alt="Client" className="h-6" />
              <div className="text-sm text-gray-600">Director BI, Public Services</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 no-print">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Flexible Payment</h3>
            <p className="text-gray-600 text-sm">Milestone-based payments aligned to deliverables</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">No Hidden Fees</h3>
            <p className="text-gray-600 text-sm">Transparent pricing with clear scope definition</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">ROI Focused</h3>
            <p className="text-gray-600 text-sm">Average 6-month payback period for clients</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 no-print">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing FAQs</h3>
          <div className="bg-white rounded-2xl p-6 shadow-lg border divide-y">
            {faqs.map((f, i) => (
              <details key={i} className="py-3">
                <summary className="font-semibold cursor-pointer text-gray-900">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-100 rounded-xl p-6 no-print">
          <h3 className="font-bold text-gray-900 mb-3">Important Notes:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600">•</span>
              <span>This calculator provides ballpark estimates only. Actual pricing depends on detailed requirements, technical complexity, and specific business needs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">•</span>
              <span>Discovery phase ($15K-$30K) recommended before full project commitment to ensure accurate scoping and ROI analysis.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">•</span>
              <span>All prices in Canadian Dollars (CAD). Travel expenses for on-site work billed separately.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">•</span>
              <span>Custom enterprise agreements available for multi-year partnerships with volume discounts.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-teal-900 rounded-2xl p-12 text-center text-white no-print">
          <h2 className="text-3xl font-bold mb-4">Ready for a Detailed Proposal?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and provide a comprehensive proposal with ROI analysis.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition shadow-xl text-lg font-semibold">
            <Calendar className="w-5 h-5" /> Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// Inline lead form component local to this page
function InlineLeadForm({ defaults }: { defaults: { serviceType: string; projectScope: string; timeline: string; teamSize: string; support: string; total: number; monthlyPrice: number; currency: string; } }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const params = useMemo(() => {
    const qp = new URLSearchParams();
    // Prefill form type based on selection
    const formType = defaults.serviceType === "training" ? "training" : "consulting";
    qp.set("formType", formType);
    if (firstName) qp.set("firstName", firstName);
    if (lastName) qp.set("lastName", lastName);
    if (email) qp.set("email", email);
    if (company) qp.set("company", company);
    const msg = [
      "Pricing Estimate",
      `Service: ${defaults.serviceType}`,
      `Scope: ${defaults.projectScope}`,
      `Timeline: ${defaults.timeline} months`,
      defaults.serviceType === "training" ? `Team size: ${defaults.teamSize}` : undefined,
      `Support: ${defaults.support}`,
      `Estimated total: ${defaults.currency} $${defaults.total.toLocaleString()}`,
      `Estimated monthly: ${defaults.currency} $${defaults.monthlyPrice.toLocaleString()}`,
      notes ? "\nNotes: " + notes : undefined,
    ].filter(Boolean).join("\n");
    qp.set("message", msg);
    return qp;
  }, [defaults.serviceType, defaults.projectScope, defaults.timeline, defaults.teamSize, defaults.support, defaults.total, defaults.monthlyPrice, defaults.currency, firstName, lastName, email, company, notes]);

  const contactUrl = "/contact?" + params.toString();

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); window.location.href = contactUrl; }}>
      <div className="grid gap-2">
        <label htmlFor="fn" className="text-sm font-semibold text-gray-700">First Name</label>
        <input id="fn" className="h-10 px-3 rounded-md border" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="ln" className="text-sm font-semibold text-gray-700">Last Name</label>
        <input id="ln" className="h-10 px-3 rounded-md border" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="em" className="text-sm font-semibold text-gray-700">Email</label>
        <input id="em" type="email" className="h-10 px-3 rounded-md border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="co" className="text-sm font-semibold text-gray-700">Company</label>
        <input id="co" className="h-10 px-3 rounded-md border" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your Company" />
      </div>
      <div className="md:col-span-2 grid gap-2">
        <label htmlFor="nt" className="text-sm font-semibold text-gray-700">Notes (optional)</label>
        <textarea id="nt" rows={3} className="px-3 py-2 rounded-md border" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything else we should know?" />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold hover:opacity-90">Send With Estimate</button>
      </div>
      <div className="md:col-span-2 text-xs text-gray-500 text-center">We’ll include your estimate details automatically.</div>
    </form>
  );
}
