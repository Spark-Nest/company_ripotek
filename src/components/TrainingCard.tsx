import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BarChart } from "lucide-react";

interface TrainingCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  format: string;
  highlights: string[];
}

const TrainingCard = ({ title, description, duration, level, format, highlights }: TrainingCardProps) => {
  return (
    <Card className="hover-lift h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{level}</Badge>
          <Badge variant="outline">{format}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Small Groups</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            <span>Hands-on</span>
          </div>
        </div>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
          Enroll Now
        </Button>
        <Button variant="outline" className="flex-1">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrainingCard;
