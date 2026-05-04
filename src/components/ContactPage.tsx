import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, MapPin, Calendar, Users, Heart, Camera, Coffee, Briefcase, DollarSign, CheckCircle2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

type FormData = {
  destination: string;
  dates: string;
  guests: string;
  tripType: string;
  budget: string;
  name: string;
  email: string;
};

const steps = [
  { 
    id: 'destination', 
    title: 'Where shall we look?', 
    subtitle: 'Select the landscape that resonates with your current state of mind.',
    icon: <MapPin size={24} />
  },
  { 
    id: 'dates', 
    title: 'The Time of Departure', 
    subtitle: 'When do you wish to leave the world behind?',
    icon: <Calendar size={24} />
  },
  { 
    id: 'guests', 
    title: 'The Company You Keep', 
    subtitle: 'How many souls are joining this expedition?',
    icon: <Users size={24} />
  },
  { 
    id: 'type', 
    title: 'The Essence of the Journey', 
    subtitle: 'Define the spirit of your escape.',
    icon: <Heart size={24} />
  },
  { 
    id: 'budget', 
    title: 'The Scale of Imagination', 
    subtitle: 'Help us calibrate the level of exclusivity.',
    icon: <DollarSign size={24} />
  },
  { 
    id: 'contact', 
    title: 'The Connection', 
    subtitle: 'Entrust us with your details to begin the design.',
    icon: <Coffee size={24} />
  }
];

const destinationOptions = [
  "Amalfi Coast & Mediterranean",
  "Kyoto & Rural Japan",
  "Private Islands & Maldives",
  "South African Savanna",
  "Alpine Peaks & Remote Valleys",
  "Uncharted & Bespoke Location"
];

const typeOptions = [
  { name: "Honeymoon & Romance", icon: <Heart size={18} /> },
  { name: "Family & Legacy", icon: <Users size={18} /> },
  { name: "Wellness & Transformation", icon: <Coffee size={18} /> },
  { name: "Adventure & Wilderness", icon: <Camera size={18} /> },
  { name: "Business & Retreat", icon: <Briefcase size={18} /> }
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    dates: '',
    guests: '',
    tripType: '',
    budget: '',
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => currentStep < steps.length - 1 && setCurrentStep(curr => curr + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep(curr => curr - 1);

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (currentStep < 5) nextStep(); // Auto-advance for selection steps including budget
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isSubmitted) {
    return (
      <div className="bg-luxury-cream min-h-screen selection:bg-luxury-ink selection:text-luxury-cream flex flex-col">
        <Header variant="dark" />
        <main className="flex-1 pt-32 pb-20 flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-xl relative z-10 w-full"
          >
            <div className="mb-10 flex justify-center">
              <div className="relative">
                <CheckCircle2 size={64} className="text-luxury-accent/40" strokeWidth={1} />
                {/* <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-ink rounded-full"
                /> */}
              </div>
            </div>
            <span className="text-luxury-muted text-[10px] uppercase tracking-[0.5em] mb-6 block font-semibold opacity-60">Inquiry Confirmed</span>
            <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tightest leading-tight">
              Your journey will be <br /> 
              <span className="font-serif italic text-luxury-muted">designed & shared</span> <br /> 
              within 24 hours.
            </h1>
            <p className="text-luxury-muted text-base md:text-lg font-light mb-12 leading-relaxed opacity-80">
              Our specialists are currently exploring the archives to find the perfect alignment for your preferences.
            </p>
            <div className="pt-4">
              <Link to="/" className="inline-block px-10 py-5 bg-luxury-ink text-white text-[10px] uppercase tracking-[0.4em] font-semibold hover:bg-luxury-accent transition-all duration-500 shadow-lg">
                Return to Home
              </Link>
            </div>
          </motion.div>
          
          {/* Background Branding Fragment */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
            <span className="text-[40vw] font-bold font-serif leading-none">UNICO</span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen selection:bg-luxury-ink selection:text-luxury-cream">
      <Header variant="dark" />
      
      <main className="pt-24 min-h-[calc(100vh-80px)] flex flex-col">
        {/* Progress bar */}
        <div className="fixed top-[90px] left-0 w-full h-0.5 bg-luxury-ink/5 z-40">
          <motion.div 
            className="h-full bg-luxury-ink" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left: Sticky Context */}
          <div className="md:col-span-4 bg-white/40 p-12 md:p-24 border-r border-luxury-ink/5 flex flex-col justify-between">
            <div>
              <span className="text-luxury-muted text-[10px] uppercase tracking-[0.4em] mb-12 block font-semibold opacity-60">The Inquest</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-8 text-luxury-accent">
                    {steps[currentStep].icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-luxury-muted font-light text-base leading-loose max-w-xs">
                    {steps[currentStep].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

           <div className="space-y-4 mt-4">
  {(Object.keys(formData) as Array<keyof FormData>).map((key) => {
    const value = formData[key];
    
    // Only show the summary if the field has a value
    if (!value) return null;

    // Mapping keys to more elegant display labels
   const labels: Record<keyof FormData, string> = {
  destination: "Discovery",
  dates: "Departure",
  guests: "Company",
  tripType: "Essence",
  budget: "Caliber",
  name: "Identity",
  email: "Connection"
};

    return (
      <motion.div 
        key={key}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 0.4, x: 0 }}
        className="flex items-center gap-4 text-[10px] uppercase tracking-widest"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-luxury-ink " />
        <div className="flex flex-col gap-1">
          <span className="opacity-50 text-[8px] tracking-[0.5em]">{labels[key]}</span>
          <span>{value}</span>
        </div>
      </motion.div>
    );
  })}
</div>
          </div>

          {/* Right: Step Inputs */}
          <div className="md:col-span-8 p-12 md:p-24 flex flex-col justify-center bg-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full mx-auto"
              >
                {/* Destination Step */}
                {currentStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destinationOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionSelect('destination', opt)}
                        className={`text-left p-10 border transition-all duration-500 hover:border-luxury-ink/60 ${
                          formData.destination === opt ? 'bg-luxury-ink text-white border-luxury-ink' : 'bg-white border-luxury-ink/5'
                        }`}
                      >
                        <span className="text-xs uppercase tracking-widest font-medium">{opt}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Dates Step */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <input 
                      type="text" 
                      placeholder="e.g. October 2024 or Flexible"
                      value={formData.dates}
                      onChange={(e) => setFormData({...formData, dates: e.target.value})}
                      className="w-full bg-transparent border-b border-luxury-ink/20 py-8 text-3xl font-light focus:outline-none focus:border-luxury-ink transition-colors placeholder:opacity-20"
                      autoFocus
                    />
                    <button 
                      onClick={nextStep}
                      disabled={!formData.dates}
                      className="flex items-center gap-6 group disabled:opacity-30"
                    >
                      <span className="text-[10px] uppercase tracking-[0.4em] font-semibold">Proceed</span>
                      <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                )}

                {/* Guests Step */}
                {currentStep === 2 && (
                  <div className="flex flex-wrap gap-4">
                    {["1-2", "3-5", "6-10", "10+"].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleOptionSelect('guests', num)}
                        className={`px-12 py-10 border text-center transition-all duration-500 min-w-[120px] ${
                          formData.guests === num ? 'bg-luxury-ink text-white border-luxury-ink' : 'bg-white border-luxury-ink/5'
                        }`}
                      >
                        <span className="text-2xl font-serif">{num}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Trip Type Step */}
                {currentStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {typeOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => handleOptionSelect('tripType', opt.name)}
                        className={`flex items-center gap-6 p-8 border transition-all duration-500 text-left ${
                          formData.tripType === opt.name ? 'bg-luxury-ink text-white border-luxury-ink' : 'bg-white border-luxury-ink/5'
                        }`}
                      >
                        <div className={formData.tripType === opt.name ? 'text-white' : 'text-luxury-muted'}>{opt.icon}</div>
                        <span className="text-xs uppercase tracking-widest font-medium">{opt.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Budget Step */}
                {currentStep === 4 && (
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 gap-4">
                      {["€10k - €30k", "€30k - €75k", "€75k - €150k", "€150k+"].map((range) => (
                        <button
                          key={range}
                          onClick={() => handleOptionSelect('budget', range)}
                          className={`p-10 border text-left transition-all duration-500 ${
                            formData.budget === range ? 'bg-luxury-ink text-white border-luxury-ink' : 'bg-white border-luxury-ink/5'
                          }`}
                        >
                          <span className="text-xl font-serif">{range}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Final Step: Contact Info */}
                {currentStep === 5 && (
                  <form onSubmit={handleSubmit} className="space-y-12 max-w-xl">
                    <div className="space-y-4">
                       <label className="text-[10px] uppercase tracking-[0.4em] opacity-40">Your Name</label>
                       <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-luxury-ink/20 py-4 text-2xl font-light focus:outline-none focus:border-luxury-ink transition-colors"
                       />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] uppercase tracking-[0.4em] opacity-40">Communication Channel (Email)</label>
                       <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-luxury-ink/20 py-4 text-2xl font-light focus:outline-none focus:border-luxury-ink transition-colors"
                       />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-6 bg-luxury-ink text-white uppercase tracking-[0.4em] text-[10px] font-semibold hover:bg-luxury-accent transition-all duration-500 shadow-xl"
                    >
                      Request a Bespoke Itinerary
                    </button>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <div className="mt-20 flex items-center justify-between max-w-3xl w-full mx-auto">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-4 text-[10px] uppercase tracking-widest font-medium transition-opacity ${currentStep === 0 ? 'opacity-0' : 'opacity-100 hover:opacity-100 opacity-40'}`}
              >
                <ChevronLeft size={14} />
                Back
              </button>
              <div className="text-[10px] uppercase tracking-widest opacity-20">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
