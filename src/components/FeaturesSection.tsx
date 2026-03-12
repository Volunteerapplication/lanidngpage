import { Star, Heart, MapPin, Trophy } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Discover Events",
    description: "Browse volunteer events in list or map view, filter by category, location, and date.",
    colorClass: "bg-icon-purple",
  },
  {
    icon: Heart,
    title: "Social Community",
    description: "Follow volunteers, share posts, and build your social impact profile.",
    colorClass: "bg-icon-pink",
  },
  {
    icon: MapPin,
    title: "Track Your Impact",
    description: "View your volunteer stats, history charts, and earn badges for your contributions.",
    colorClass: "bg-icon-purple",
  },
  {
    icon: Trophy,
    title: "Earn Badges",
    description: "Unlock achievements and showcase your dedication to making a difference.",
    colorClass: "bg-icon-magenta",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto">
        <div className="bg-features rounded-3xl p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center space-y-3">
                <div className={`${feature.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}>
                  <feature.icon className="h-6 w-6 text-features-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-features-foreground">{feature.title}</h3>
                <p className="text-features-muted text-sm max-w-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
