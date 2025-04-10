import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Globe, Handshake } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl md:text-5xl font-bold text-white mb-7 tracking-wider">
                  <span className="mx-2">Our</span>
                  <span className="mx-2 text-hads-pink">Strategic</span>
                  <span className="mx-2">Partners</span>
                </h1>
                <div className="mx-2">
                  <p className="text-2xl text-gray-300 mb-7 font-light leading-relaxed">
                    Powering digital transformation through strategic alliances and cloud-first solutions.
                  </p>
                  <p className="text-lg text-gray-400 mb-7">
                    At Hads TechNovation LLP, we collaborate with leading organizations worldwide to co-create, co-innovate, and deliver best-in-class cloud services. Our strategic partnerships drive scalable, secure, and future-ready infrastructures tailored to your goals.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-[400px] md:h-[400px]">
                <DotLottieReact
                  src="https://lottie.host/01cc4ff0-3df0-4a83-9425-be324c883795/bF91MiY1Pg.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                  aria-label="Cloud technology animation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Why Partner With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Why </span>
                <span className="text-hads-pink">Partner</span>
                <span className="text-gray-800"> With HADS?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <p className="text-base text-gray-600 mb-2">
                At HADS, we empower our partners with deep technical expertise and robust cloud-native solutions. From cloud migration and DevOps automation to containerization and application modernization, we provide end-to-end support backed by AWS-certified professionals.
              </p>
              <p className="text-base text-gray-600 mb-2">
                We help accelerate time-to-market through scalable microservices architecture, CI/CD pipelines, infrastructure as code (IaC), and real-time monitoring solutions using CloudWatch, Prometheus, and Grafana.
              </p>
              <p className="text-base text-gray-600">
                Whether you're looking to optimize operational efficiency, integrate AI/ML pipelines, or enable secure multi-cloud environments, HADS delivers with precision and performance. Partner with us to stay ahead in a fast-evolving tech landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry Expertise</h3>
                <p className="text-gray-700">Access to specialized knowledge and resources across multiple cloud platforms.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Reach</h3>
                <p className="text-gray-700">Expand your market presence through our international network and clientele.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation Focus</h3>
                <p className="text-gray-700">Stay ahead with early access to cutting-edge cloud technologies and solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnersPage;
