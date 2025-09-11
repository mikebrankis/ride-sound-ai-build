import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavigationLinks = () => (
    <>
      <a href="#services" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Services
      </a>
      <a href="#designer" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        AI Designer
      </a>
      <a href="#gallery" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Gallery
      </a>
      <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
        Contact
      </a>
    </>
  );

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c1bc1287-fefa-4674-86c1-5208308a2a44.png" 
              alt="Ride Sounds Chicago Logo" 
              className="h-8 w-auto object-contain drop-shadow-lg"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationLinks />
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(773) 555-0123</span>
            </div>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-sm">
                <div className="flex flex-col space-y-6 mt-8">
                  <NavigationLinks />
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Phone className="w-4 h-4" />
                      <span>(773) 555-0123</span>
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Desktop CTA */}
            <Button className="hidden md:inline-flex bg-gradient-primary hover:shadow-glow transition-all">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;