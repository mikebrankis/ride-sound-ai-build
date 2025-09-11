import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Car, DollarSign, Volume2, Settings, CheckCircle } from "lucide-react";

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
}

interface AudioPreferences {
  musicGenres: string[];
  budget: string;
  priority: string;
  currentSystem: string;
}

const AIDesigner = () => {
  const [step, setStep] = useState(1);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    year: "",
    make: "",
    model: ""
  });
  const [audioPrefs, setAudioPrefs] = useState<AudioPreferences>({
    musicGenres: [],
    budget: "",
    priority: "",
    currentSystem: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const musicGenres = [
    "Hip-Hop/Rap", "Rock", "Electronic/EDM", "Jazz", "Classical", 
    "Country", "Pop", "R&B/Soul", "Reggae", "Metal"
  ];

  const handleGenreToggle = (genre: string) => {
    setAudioPrefs(prev => ({
      ...prev,
      musicGenres: prev.musicGenres.includes(genre)
        ? prev.musicGenres.filter(g => g !== genre)
        : [...prev.musicGenres, genre]
    }));
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(4);
    }, 3000);
  };

  return (
    <section id="designer" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Brain className="w-4 h-4 mr-2" />
            AI System Designer
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Design Your Perfect Audio System</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI analyzes your vehicle, music preferences, and budget to recommend the perfect audio setup
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 bg-muted" />
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {step === 1 && <><Car className="w-6 h-6 text-primary" /> Vehicle Information</>}
                {step === 2 && <><Volume2 className="w-6 h-6 text-primary" /> Audio Preferences</>}
                {step === 3 && <><Settings className="w-6 h-6 text-primary" /> System Requirements</>}
                {step === 4 && <><CheckCircle className="w-6 h-6 text-primary" /> AI Recommendations</>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Step 1: Vehicle Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input
                        id="year"
                        placeholder="2020"
                        value={vehicleInfo.year}
                        onChange={(e) => setVehicleInfo(prev => ({ ...prev, year: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input
                        id="make"
                        placeholder="Toyota"
                        value={vehicleInfo.make}
                        onChange={(e) => setVehicleInfo(prev => ({ ...prev, make: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input
                        id="model"
                        placeholder="Camry"
                        value={vehicleInfo.model}
                        onChange={(e) => setVehicleInfo(prev => ({ ...prev, model: e.target.value }))}
                      />
                    </div>
                  </div>
                  <Button 
                    onClick={() => setStep(2)} 
                    disabled={!vehicleInfo.year || !vehicleInfo.make || !vehicleInfo.model}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                  >
                    Next: Audio Preferences
                  </Button>
                </div>
              )}

              {/* Step 2: Audio Preferences */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label>Favorite Music Genres (Select all that apply)</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {musicGenres.map((genre) => (
                        <Badge
                          key={genre}
                          variant={audioPrefs.musicGenres.includes(genre) ? "default" : "outline"}
                          className={`cursor-pointer transition-all ${
                            audioPrefs.musicGenres.includes(genre) 
                              ? "bg-primary hover:bg-primary/80" 
                              : "hover:border-primary hover:text-primary"
                          }`}
                          onClick={() => handleGenreToggle(genre)}
                        >
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={audioPrefs.budget} onValueChange={(value) => 
                      setAudioPrefs(prev => ({ ...prev, budget: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button 
                      onClick={() => setStep(3)} 
                      disabled={audioPrefs.musicGenres.length === 0 || !audioPrefs.budget}
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
                    >
                      Next: Requirements
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: System Requirements */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="priority">Main Priority</Label>
                    <Select value={audioPrefs.priority} onValueChange={(value) => 
                      setAudioPrefs(prev => ({ ...prev, priority: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="What's most important to you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bass">Deep Bass & Sub-woofers</SelectItem>
                        <SelectItem value="clarity">Crystal Clear Sound</SelectItem>
                        <SelectItem value="volume">Maximum Volume</SelectItem>
                        <SelectItem value="balanced">Balanced All-Around</SelectItem>
                        <SelectItem value="premium">Premium Materials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="current">Current Audio System</Label>
                    <Textarea
                      id="current"
                      placeholder="Describe your current audio setup (stock, aftermarket, specific brands, etc.)"
                      value={audioPrefs.currentSystem}
                      onChange={(e) => setAudioPrefs(prev => ({ ...prev, currentSystem: e.target.value }))}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                      Back
                    </Button>
                    <Button 
                      onClick={handleAnalyze} 
                      disabled={!audioPrefs.priority}
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
                    >
                      Analyze My System
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: AI Recommendations */}
              {step === 4 && (
                <div className="space-y-6">
                  {isAnalyzing ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                        <Brain className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">AI is analyzing your preferences...</h3>
                      <p className="text-muted-foreground">
                        Processing vehicle compatibility, music preferences, and budget constraints
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-gradient-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-primary" />
                          Recommended System for {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}
                        </h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Recommended Components:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between items-start">
                                <span className="flex-1">• Pioneer AVH-W4500NEX Head Unit</span>
                                <span className="text-primary ml-2">$599</span>
                              </li>
                              <li className="flex justify-between items-start">
                                <span className="flex-1">• JL Audio C2-650X Speakers (4)</span>
                                <span className="text-primary ml-2">$280</span>
                              </li>
                              <li className="flex justify-between items-start">
                                <span className="flex-1">• Alpine MRV-F300 Amplifier</span>
                                <span className="text-primary ml-2">$299</span>
                              </li>
                              <li className="flex justify-between items-start">
                                <span className="flex-1">• Rockford Fosgate P1S4-10 Subwoofer</span>
                                <span className="text-primary ml-2">$149</span>
                              </li>
                              <li className="flex justify-between items-start border-t pt-2 font-semibold">
                                <span className="flex-1">Installation & Materials</span>
                                <span className="text-primary ml-2">$450</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">System Features:</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Apple CarPlay & Android Auto</li>
                              <li>• 4-channel amplification</li>
                              <li>• 10" powered subwoofer</li>
                              <li>• Custom sound tuning</li>
                              <li>• Professional installation</li>
                              <li>• 2-year warranty</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-4 border-t gap-4">
                          <div>
                            <div className="text-2xl font-bold text-primary">Total: $1,777</div>
                            <div className="text-sm text-muted-foreground">Installation included</div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Button variant="outline" onClick={() => setStep(1)} className="w-full sm:w-auto">
                              Start Over
                            </Button>
                            <Button className="bg-gradient-primary hover:shadow-glow transition-all w-full sm:w-auto">
                              <DollarSign className="w-4 h-4 mr-2" />
                              Get Official Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIDesigner;