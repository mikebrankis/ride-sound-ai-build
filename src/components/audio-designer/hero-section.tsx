import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-car-audio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional car audio installation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl text-center sm:text-left">
          <Badge className="mb-4 sm:mb-6 bg-primary/20 text-primary border-primary/30 inline-flex">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered System Designer
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Car Audio
            </span>
            Experience
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Chicago's premier car audio specialists. Our AI designer creates custom audio systems 
            tailored to your vehicle, preferences, and budget. Get professional installation 
            estimates instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Design My System
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              View Gallery
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Award className="w-6 h-6 text-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-semibold">15+ Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Shield className="w-6 h-6 text-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-semibold">Lifetime</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Zap className="w-6 h-6 text-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-semibold">1000+</div>
                <div className="text-sm text-muted-foreground">Installs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;