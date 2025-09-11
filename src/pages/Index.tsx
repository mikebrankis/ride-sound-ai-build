import Header from "@/components/ui/header";
import HeroSection from "@/components/audio-designer/hero-section";
import AIDesigner from "@/components/audio-designer/ai-designer";
import ServicesSection from "@/components/audio-designer/services-section";
import ContactSection from "@/components/audio-designer/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AIDesigner />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center sm:text-left">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Ride Sounds Chicago
              </h3>
              <p className="text-muted-foreground text-sm">
                Chicago's premier car audio specialists. Transforming vehicles with 
                cutting-edge audio technology since 2008.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#designer" className="hover:text-primary transition-colors">AI Designer</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1234 North Audio Street</p>
                <p>Chicago, IL 60601</p>
                <p className="text-primary font-medium">(773) 555-0123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Ride Sounds Chicago. All rights reserved. Built with AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
