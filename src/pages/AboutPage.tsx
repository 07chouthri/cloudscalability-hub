
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Users, Globe, Award, BookOpen } from 'lucide-react';

const AboutPage = () => {
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
                <span className="mx-2 text-wight-800">About</span>
                <span className="text-hads-pink">HADS Cloud</span>
                <span className="mx-2 text-wight-800">Solutions</span>

                </h1>
              <p className="text-xl text-gray-300 mb-8">
                Delivering innovative cloud solutions to drive your business transformation
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Company</h2>
              <p className="text-lg text-gray-700 mb-8">
                HADS Cloud Solutions was founded in 2015 with a mission to help businesses of all sizes 
                leverage the power of cloud computing. What started as a small consultancy has grown into 
                a comprehensive cloud solutions provider with expertise in migration, modernization, 
                optimization, and ongoing management.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of certified cloud professionals brings together decades of collective experience 
                across all major cloud platforms including AWS, Google Cloud, Microsoft Azure, and more. 
                We pride ourselves on our ability to deliver tailored solutions that address unique business 
                challenges while ensuring scalability, security, and cost-efficiency.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission & Values</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is to empower organizations to harness the full potential of cloud technologies, 
                enabling them to innovate faster, operate more efficiently, and scale with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Client Focus</h3>
                <p className="text-gray-700">We put our clients' needs first, ensuring solutions align with their business objectives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-700">We continuously explore emerging technologies to deliver cutting-edge solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-700">We hold ourselves to the highest standards in every engagement.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Partnership</h3>
                <p className="text-gray-700">We build long-term relationships based on trust, transparency, and mutual success.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Leadership Team</h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Meet the experts leading our cloud innovation initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-hads-purple to-hads-teal"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Sarah Chen</h3>
                <p className="text-hads-purple font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-700 text-sm">15+ years in cloud architecture and enterprise solutions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-hads-teal to-blue-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Marcus Johnson</h3>
                <p className="text-hads-teal font-medium mb-3">CTO</p>
                <p className="text-gray-700 text-sm">Former AWS solutions architect with expertise in serverless</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-hads-pink to-purple-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Aisha Patel</h3>
                <p className="text-hads-pink font-medium mb-3">COO</p>
                <p className="text-gray-700 text-sm">Specialist in cloud FinOps and operational efficiency</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-hads-purple text-hads-purple hover:bg-hads-purple/10">
                Join Our Team
                <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how HADS Cloud Solutions can help you achieve your business objectives.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
