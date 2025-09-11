import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageSquare,
  Navigation,
  Star
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Audio?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our showroom, call for a consultation, or request a custom quote. 
            We're here to bring your audio dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Visit Our Showroom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Ride Sounds Chicago</p>
                  <p className="text-muted-foreground">1234 North Audio Street</p>
                  <p className="text-muted-foreground">Chicago, IL 60601</p>
                </div>
                <Button variant="outline" className="w-full hover:border-primary hover:text-primary">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Call Us Today
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-lg">(773) 555-0123</p>
                  <p className="text-muted-foreground text-sm">Free consultation & quotes</p>
                </div>
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@ridesoundschicago.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">11:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="bg-gradient-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold">4.9/5 Average Rating</p>
                <p className="text-sm text-muted-foreground">Based on 200+ Google reviews</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle>Request a Custom Quote</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your vehicle and preferences, and we'll provide a detailed estimate.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(773) 555-0123" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="year">Vehicle Year</Label>
                      <Input id="year" placeholder="2020" />
                    </div>
                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input id="make" placeholder="Toyota" />
                    </div>
                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input id="model" placeholder="Camry" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input id="budget" placeholder="$1,000 - $3,000" />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your audio goals, preferred brands, or any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all text-lg py-6">
                    Request My Custom Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;