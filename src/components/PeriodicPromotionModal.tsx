
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Download, Check, Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Add type guard for checking if gtag exists
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

const PeriodicPromotionModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if we've shown the modal in this session
    const modalShown = sessionStorage.getItem('modalShown');
    
    // Set timer to show modal after 60 seconds if not shown in this session
    if (!modalShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        // Mark that we've shown the modal in this session
        sessionStorage.setItem('modalShown', 'true');
        
        // Track modal impression for analytics (helps with SEO indirectly)
        if (isGtagAvailable()) {
          try {
            window.gtag('event', 'modal_impression', {
              'event_category': 'engagement',
              'event_label': 'security_guide_modal'
            });
          } catch (e) {
            console.error('Error tracking modal impression:', e);
          }
        }
      }, 60000); // 60 seconds
      
      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, []);
  
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleCloseModal = () => {
    setOpen(false);
    
    // Track modal close for analytics
    if (isGtagAvailable()) {
      try {
        window.gtag('event', 'modal_closed', {
          'event_category': 'engagement',
          'event_label': 'security_guide_modal'
        });
      } catch (e) {
        console.error('Error tracking modal close:', e);
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate API call to record email
    console.log("Email submitted:", email);
    
    // Track form submission for analytics
    if (isGtagAvailable()) {
      try {
        window.gtag('event', 'guide_download', {
          'event_category': 'conversion',
          'event_label': 'security_guide_download',
          'value': 1
        });
      } catch (e) {
        console.error('Error tracking guide download:', e);
      }
    }
    
    // Simulate successful submission after 1 second
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast({
        title: "Success!",
        description: "Your cloud security guide is ready to download.",
      });
    }, 1000);
  };
  
  const handleDownload = () => {
    // Initiate download of the PDF
    const link = document.createElement('a');
    link.href = '/pdfs/Cloud-Migration-Strategy-Guide.pdf';
    link.download = 'HADS-Cloud-Migration-Strategy-Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the modal after download
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 1000);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-indigo-100">
        <button 
          onClick={handleCloseModal} 
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Shield className="h-6 w-6 text-indigo-600" />
            <span>Free Cloud Migration Guide</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {!submitted ? (
            <>
              <p className="text-center text-sm text-gray-700 mb-6">
                Get our expert guide on implementing a secure cloud migration strategy. Enter your email to download.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${error ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {error && <p className="text-xs text-red-500">{error}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Get Your Free Guide"}
                  </Button>
                </div>
              </form>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                We respect your privacy. Your email won't be shared with third parties.
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">Thank You!</h3>
              <p className="text-center text-sm text-gray-600 mb-4">
                Your guide is ready to download. Click the button below to access it.
              </p>
              <Button 
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700"
              >
                <Download className="h-4 w-4" />
                Download Guide
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PeriodicPromotionModal;
