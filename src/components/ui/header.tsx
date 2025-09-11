import { Button } from "@/components/ui/button";
import { Music, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c1bc1287-fefa-4674-86c1-5208308a2a44.png" 
              alt="Ride Sounds Chicago Logo" 
              className="w-12 h-12 drop-shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ride Sounds
              </h1>
              <p className="text-sm text-muted-foreground">Chicago</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#designer" className="text-foreground hover:text-primary transition-colors">
              AI Designer
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(773) 555-0123</span>
            </div>
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;