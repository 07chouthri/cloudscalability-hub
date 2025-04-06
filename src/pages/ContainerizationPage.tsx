import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Server,
  Package,
  RefreshCw,
  Shield,
  Database,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContainerizationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateDescription, setAnimateDescription] = useState(false);
  const [animateBenefits, setAnimateBenefits] = useState(false);

  useEffect(() => {
    const iconTimer = setTimeout(() => setAnimateIcon(true), 300);
    const titleTimer = setTimeout(() => setAnimateTitle(true), 500);
    const descTimer = setTimeout(() => setAnimateDescription(true), 700);
    const benefitsTimer = setTimeout(() => setAnimateBenefits(true), 900);
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(titleTimer);
      clearTimeout(descTimer);
      clearTimeout(benefitsTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  const benefits = [
    { label: 'Consistent environments', icon: <Server className="h-4 w-4" /> },
    { label: 'Easy scaling', icon: <RefreshCw className="h-4 w-4" /> },
    { label: 'Faster deployments', icon: <Package className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          {/* Main Hero Content */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Title */}
              <h4
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-8 animate-fade-up transition-opacity duration-1000"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="mx-2 text-wight-800">Containerization</span>
                <span className="text-hads-pink">Docker and Kubernetes</span>
              </h4>
              {/* Lottie Animation */}
              <div className="mb-6 w-full h-96 mx-auto">
                <DotLottieReact
                  src="https://lottie.host/4700b765-065e-423a-9474-9de8bfb48a4a/YSBPVoCrzy.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              {/* Description */}
              <p
                className={cn(
                  'text-xl text-gray-300 mb-10 max-w-2xl transition-all duration-700',
                  animateDescription
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                )}
              >
                Modern deployment strategies with Docker & Kubernetes
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={cn(
                      'bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3 transition-all duration-500',
                      animateBenefits
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10',
                      'hover:bg-white/20 hover:border-white/20 hover:transform hover:scale-105'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2 text-white">
                      <div
                        className={cn(
                          'text-pink-400 transition-all duration-500',
                          animateBenefits && 'animate-pulse-slow'
                        )}
                      >
                        {benefit.icon}
                      </div>
                      <span>{benefit.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Applications
              </h2>
              <p className="text-lg text-gray-700">
                Our containerization services help you modernize legacy applications, improve scalability,
                and accelerate deployment cycles with Docker and Kubernetes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Docker Implementation',
                  icon: <Server className="h-6 w-6 text-hads-purple" />,
                  color: 'hads-purple/10',
                  text: 'Package applications with all dependencies into standardized containers for consistent deployment.',
                },
                {
                  title: 'Kubernetes Orchestration',
                  icon: <Package className="h-6 w-6 text-hads-teal" />,
                  color: 'hads-teal/10',
                  text: 'Deploy, scale, and manage containerized applications with enterprise-grade orchestration.',
                },
                {
                  title: 'CI/CD Integration',
                  icon: <RefreshCw className="h-6 w-6 text-hads-pink" />,
                  color: 'hads-pink/10',
                  text: 'Streamline development workflows with integrated continuous integration and deployment pipelines.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm"
                >
                  <div
                    className={`w-12 h-12 mb-4 rounded-full bg-${service.color} flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Containerization</h2>
              <p className="text-lg text-gray-700">
                Discover how containerization can transform your business operations and technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Consistent Environments',
                  text: 'Eliminate "works on my machine" issues with containerized applications that run the same everywhere.',
                },
                {
                  title: 'Improved Resource Efficiency',
                  text: 'Containers use less resources than virtual machines, enabling higher density and cost savings.',
                },
                {
                  title: 'Faster Deployment Cycles',
                  text: 'Accelerate time-to-market with rapid, reliable deployment processes and simplified rollbacks.',
                },
                {
                  title: 'Seamless Scalability',
                  text: 'Scale containers up or down instantly to meet demand and optimize resource utilization.',
                },
                {
                  title: 'Enhanced Security',
                  text: 'Isolate applications and improve security posture with container-level protection.',
                },
                {
                  title: 'Microservices Enablement',
                  text: 'Transition from monolithic applications to flexible, maintainable microservices architecture.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.text}</p>
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
