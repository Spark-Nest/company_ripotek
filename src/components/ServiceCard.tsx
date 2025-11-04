import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  mediaUrl?: string;
  mediaPoster?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, mediaUrl, mediaPoster }: ServiceCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const onEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Card className="group hover-lift h-full border-2 hover:border-accent transition-all duration-300 overflow-hidden" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {mediaUrl && (
        <div className="relative h-36 w-full bg-gradient-to-br from-primary/20 to-accent/20">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            poster={mediaPoster}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

