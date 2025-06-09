import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
const lambdaUrl = "https://z39vcztuxh.execute-api.ap-south-1.amazonaws.com/PROD/PROD-HADS-TECHNOVATIONS";

const CloudMigrationExitModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    console.log("Email submitted:", email);
    setSubmitted(true);

    toast({
      title: "Success!",
      description: "Your cloud migration guide is on its way to your inbox.",
    });

    // ✅ Trigger PDF download from public folder
    const link = document.createElement('a');
    link.href = '/pdfs/Cloud-Migration-Strategy-Guide.pdf'; // Ensure file is located at public/pdfs/basic-text.pdf
    link.download = 'Cloud-Migration-Strategy-Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const formValues = {
      type: 'CONTACT_MAILE',
      data: {
        email: email,

      }
    };
    // ✅ Send email to Lambda
    try {
      const response = await fetch(lambdaUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues), // Wrap in object
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you! Your message has been sent successfully.",
        });
      } else {
        toast({
          title: "Failed",
          description: "There was an error sending your message.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to reach the server. Try again later.",
        variant: "destructive"
      });
      console.error("Lambda error:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md max-w-[95vw] mx-auto bg-blue-50 border-0 p-0 overflow-hidden">
        <div className="relative">
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 z-10"
            onClick={handleClose}
          >
          </button>

          <div className="p-6 md:p-8">
            <DialogHeader className="text-left">
              <DialogTitle className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Wait!
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700">
                Download for Free
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Cloud Migration Strategy Guide
              </h2>
              <p className="text-gray-800 mb-1">
                trusted by <span className="text-blue-600 font-medium">200+ Cloud Architects</span>
              </p>
              <p className="text-gray-700">
                to Accelerate Your Cloud Migration Success Now!
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="grid gap-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="h-12 border-gray-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="h-12 bg-blue-700 hover:bg-blue-800 text-white font-medium text-lg"
                    >
                      Download For Free
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    We respect your privacy and won't spam you.
                  </p>
                </form>
              ) : (
                <div className="mt-6 text-center">
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-3">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    Your guide is on its way to your inbox.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloudMigrationExitModal;
