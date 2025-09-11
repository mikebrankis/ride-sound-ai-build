import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Volume2, 
  Zap, 
  Shield, 
  Settings, 
  HeadphonesIcon, 
  Radio,
  Speaker,
  Bluetooth
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Volume2,
      title: "Premium Audio Systems",
      description: "High-end speakers, amplifiers, and subwoofers from top brands",
      features: ["JL Audio", "Alpine", "Pioneer", "Rockford Fosgate"],
      price: "Starting at $599"
    },
    {
      icon: Radio,
      title: "Head Unit Installation",
      description: "Modern infotainment systems with CarPlay/Android Auto",
      features: ["Touch Screen", "Navigation", "Bluetooth", "Voice Control"],
      price: "Starting at $399"
    },
    {
      icon: Speaker,
      title: "Custom Subwoofer Boxes",
      description: "Hand-crafted enclosures optimized for your vehicle",
      features: ["Custom Design", "Perfect Fit", "Optimal Sound", "Premium Materials"],
      price: "Starting at $299"
    },
    {
      icon: Bluetooth,
      title: "Advanced Integration",
      description: "Seamless integration with vehicle's existing systems",
      features: ["OEM Integration", "Steering Controls", "Factory Retention", "No Cutting"],
      price: "Starting at $199"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            <Settings className="w-4 h-4 mr-2" />
            Professional Services
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Complete Audio Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From premium component installations to custom fabrications, we deliver 
            exceptional audio experiences tailored to your vehicle and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Ride Sounds Chicago?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lifetime Installation Warranty</h4>
                    <p className="text-muted-foreground text-sm">We stand behind our work with comprehensive coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Installation Team</h4>
                    <p className="text-muted-foreground text-sm">MECP certified technicians with 15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Brand Partners</h4>
                    <p className="text-muted-foreground text-sm">Authorized dealer for top audio manufacturers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-metallic rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground mb-6">Satisfied Customers</div>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;