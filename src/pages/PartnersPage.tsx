
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Globe, Handshake } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="mx-2 text-wight-800">Our</span>
                <span className="text-hads-pink">Strategic</span>
                <span className="mx-2 text-wight-800">Partners</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Collaborating with industry leaders to deliver exceptional cloud solutions
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section (reusing existing component) */}
        <PartnersSection />

        {/* Why Partner With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With HADS?</h2>
              <p className="text-lg text-gray-700">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry Expertise</h3>
                <p className="text-gray-700">Access to specialized knowledge and resources across multiple cloud platforms.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Reach</h3>
                <p className="text-gray-700">Expand your market presence through our international network and clientele.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation Focus</h3>
                <p className="text-gray-700">Stay ahead with early access to cutting-edge cloud technologies and solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Become a Partner Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of technology leaders and expand your business opportunities.
            </p>
            <Button variant="cloud" size="lg" className="bg-white text-hads-purple hover:bg-gray-100">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnersPage;
