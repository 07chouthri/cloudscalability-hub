'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Cloudvieod from "../viedo/Cloud managed service.mp4";
import { ArrowRight, Cloud, ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContainerizationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: 'Cloud Infrastructure Management',
      icon: <Cloud className="h-6 w-6 text-hads-purple" />,
      color: 'hads-purple/10',
      text: '24/7 monitoring, provisioning, and management of your cloud resources for optimal performance.',
      backText: 'Ensures uptime, cost efficiency, and operational continuity with expert support.',
    },
    {
      title: 'Security & Compliance',
      icon: <ShieldCheck className="h-6 w-6 text-hads-teal" />,
      color: 'hads-teal/10',
      text: 'Enforce enterprise-grade cloud security, governance policies, and industry compliance.',
      backText: 'Reduces risk with proactive security auditing, patching, and compliance automation.',
    },
    {
      title: 'Cost Optimization & Analytics',
      icon: <TrendingUp className="h-6 w-6 text-hads-pink" />,
      color: 'hads-pink/10',
      text: 'Gain visibility and control over your cloud spend with smart analytics and cost-saving strategies.',
      backText: 'Maximizes ROI with right-sizing, forecasting, and usage-based recommendations.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section>
          <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", fontFamily: "'Poppins', 'Inter', sans-serif" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                marginTop: "36px",
                marginLeft: "200px",
                borderRadius: "250px",
                zIndex: 0,
              }}
            >
              <source src={Cloudvieod} type="video/mp4" />
            </video>

            <div style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              width: "100%",
              padding: "2rem 4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              color: "black",
              borderRadius: 12,
              textAlign: "left",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease, transform 1s ease',
            }}>
              <h1 style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                fontWeight: 800,
                color: "#000000",
                textShadow: "1px 1px 2px rgba(21, 21, 21, 0.3)"
              }}>
                <span>Cloud </span>
                <span style={{ color: "#ff2d75" }}>Managed</span>
                <span> Services ...</span>
              </h1>
              <p style={{
                fontSize: "1.2rem",
                color: "#1a1a1a",
                maxWidth: "520px",
                fontWeight: 500,
                lineHeight: 1.6,
                textShadow: "1px 1px 2px rgba(21, 21, 21, 0.3)"
              }}>
                Managing cloud environments can be <br />
                complex and time-consuming — from ensuring performance, security, updates, backups,
                and cost optimization. HADS Cloud Solutions takes over your cloud ops so you can focus on innovation and scaling your business.
              </p>
            </div>
          </div>
        </section>

        {/* Flip Cards Section */}
        <section className="py-16 bg-white">
          <style>{`
            .flip-card {
              perspective: 1000px;
            }
            .flip-card-inner {
              transition: transform 0.8s;
              transform-style: preserve-3d;
              position: relative;
            }
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            .flip-card-front, .flip-card-back {
              backface-visibility: hidden;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 0.75rem;
            }
            .flip-card-front {
              background-color: white;
              border: 1px solid #e5e7eb;
              box-shadow: 0 4px 6px rgba(0,0,0,0.05);
              padding: 2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              transition: box-shadow 0.3s ease;
            }
            .flip-card:hover .flip-card-front {
              box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            }
            .flip-card-back {
              transform: rotateY(180deg);
              background-color: #f9fafb;
              border: 1px solid #e5e7eb;
              padding: 2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
          `}</style>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-gray-800">Managed Cloud </span>
                <span className="text-hads-pink">Maximum Efficiency</span>
              </h2>
              <p className="text-lg text-gray-600">
                We deliver proactive, secure, and scalable cloud management tailored to your unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flip-card h-80 relative">
                  <div className="flip-card-inner w-full h-full">
                    <div className="flip-card-front">
                      <div className={cn(
                        'w-12 h-12 mb-4 rounded-full flex items-center justify-center',
                        service.color === 'hads-purple/10' && 'bg-hads-purple/10',
                        service.color === 'hads-teal/10' && 'bg-hads-teal/10',
                        service.color === 'hads-pink/10' && 'bg-hads-pink/10'
                      )}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.text}</p>
                    </div>
                    <div className="flip-card-back">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                        <p className="text-gray-700">{service.backText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">  
                <span className="text-gray-800">Why </span>
                <span className="text-hads-pink">Choose</span>
                <span className="text-gray-800"> Managed Services?</span>
              </h2>
              <p className="text-lg text-gray-700">
                Streamline your cloud operations with our end-to-end managed services that deliver peace of mind and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Proactive Monitoring & Support', text: 'We handle all maintenance, alerts, and incident response to keep your systems running smoothly.' },
                { title: 'Customized Cloud Solutions', text: 'Services tailored to your tech stack, business goals, and operational needs.' },
                { title: 'Scalability On Demand', text: 'Automatically scale up or down based on usage to maintain performance and cost-efficiency.' },
                { title: 'Compliance Assurance', text: 'Meet industry standards and regulations effortlessly with our expert guidance.' },
                { title: 'Business Continuity', text: 'Disaster recovery, backups, and availability strategies built in by design.' },
                { title: 'Single Pane of Glass Visibility', text: 'Real-time dashboards, reporting, and insights on your cloud ecosystem.' },
              ].map((item, index) => (
                <div key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-7 w-7 text-hads-teal flex-shrink-0 mt-4" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContainerizationPage;
