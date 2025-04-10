import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Users, Globe, Award, BookOpen } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
                  <span className="mx-2">About</span>
                  <span className="mx-2 text-hads-pink">HADS</span>
                  <span className="mx-2">Cloud Solutions</span>
                </h1>
                <div className="mx-2">
                  <p className="text-2xl text-gray-300 mb-7 font-light leading-relaxed">
                    Delivering innovative cloud solutions to drive your business transformation
                  </p>
                  <p className="text-lg text-gray-400 mb-7">
                    At HADS TechNovations LLP, we help improve your business with cloud technology. We offer solutions for cloud migration and ongoing support, all tailored to your needs.
                  </p>
                </div>
              </div>

              {/* Animation Section */}
              <div className="w-full md:w-1/2 h-[400px] md:h-[400px]">
                <DotLottieReact
                  src="https://lottie.host/cc30454d-2fb4-4026-a6cb-447d8de24ce9/Z1d4REGQqD.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                  aria-label="Cloud technology animation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white shadow-lg rounded-lg mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">Company</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                HADS is a leading technology and cloud solutions provider, specializing in AWS
                cloud migration, consulting, and managed services. As an AWS partner,
                HADS helps businesses seamlessly transition to the cloud, optimize
                infrastructure, and leverage AWS's advanced capabilities for scalability,
                security, and cost efficiency.
              </p>
              <p className="text-xl text-gray-700 mb-8">
                With deep expertise in AWS solutions like EC2, RDS, S3, Lambda, Kubernetes,
                and AI/ML, HADS empowers businesses to innovate and scale efficiently in the
                cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">
                <span className="mx-2 text-gray-800">Our Mission</span>
                <span className="text-hads-pink">&</span>
                <span className="mx-2 text-gray-800">Values</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is to empower organizations to harness the full potential of cloud technologies, enabling them to innovate faster, operate more efficiently, and scale with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Client-First Approach</h3>
                <p className="text-gray-700">We prioritize our clients' needs, ensuring our solutions align with their business goals.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Technology-Driven Solutions</h3>
                <p className="text-gray-700">We stay ahead of the curve by exploring new technologies to create innovative solutions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">High-Performance Standards</h3>
                <p className="text-gray-700">We deliver top-tier solutions, ensuring the highest standards in every project.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Relationships</h3>
                <p className="text-gray-700">We foster long-term partnerships built on trust and mutual success.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
