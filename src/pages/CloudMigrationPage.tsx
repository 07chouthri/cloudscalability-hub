
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ArrowRight, Cloud, Server, Shield, Database, BarChart, GitBranch } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const CloudMigrationPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update document title
    document.title = "Cloud Migration Strategy - HADS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <StrategyOverview />
        <FocusAreasSection />
        <CloudPlatformsSection />
        <MigrationProcessSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative py-32 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.15] bg-[length:16px_16px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h4
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-8 animate-fade-up transition-opacity duration-1000"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="mx-2 text-wight-800">Cloud Migration </span>
            <span className="text-hads-pink">Strategy</span>
          </h4>
          <div
            className="flex justify-center mb-10 animate-fade-up transition-opacity duration-1000"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="mb-6 w-full h-96 mx-auto">
              <DotLottieReact
                src="https://lottie.host/938c5666-2e98-4427-829f-be375a47b52a/FqriPWVaTi.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <p
            className="text-lg sm:text-xl text-gray-300 mb-6 px-4 animate-fade-up transition-opacity duration-1000"
            style={{ animationDelay: "0.5s" }}
          >
            Your journey to scalable, reliable, and cost-efficient cloud infrastructure starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

const StrategyOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Strategic Migration to Cloud
          </h2>
          <p className={cn(
            "text-lg text-gray-700 transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            This document outlines our comprehensive strategy for migrating web applications to cloud-based environments. We focus on leveraging cloud solutions, best migration practices, cloud management services, containerization, FinOps, and DevOps principles to achieve scalability, reliability, and cost efficiency.
          </p>
        </div>

        <div className={cn(
          "bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 delay-200 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-xl font-semibold text-hads-purple mb-4">Primary Objectives</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Establish robust cloud infrastructure for high availability and performance</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Ensure seamless transition with minimal downtime</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Implement cloud-native tools for monitoring, security, and maintenance</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Enhance deployment efficiency through containerization</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Optimize cloud costs to maximize ROI</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Streamline development and operations through CI/CD pipelines</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const focusAreas = [
    {
      title: "Cloud Solutions",
      description: "Establishing a robust cloud infrastructure for high availability and performance, leveraging cloud-native services for optimal scalability.",
      icon: <Cloud className="h-8 w-8 text-hads-pink" />,
      delay: 0
    },
    {
      title: "Cloud Migration",
      description: "Ensuring a seamless transition to the cloud with minimal downtime, using proven methodologies for data and application migration.",
      icon: <Server className="h-8 w-8 text-hads-pink" />,
      delay: 100
    },
    {
      title: "Cloud Management",
      description: "Utilizing cloud-native tools for monitoring, security, and maintenance to ensure optimal performance and compliance.",
      icon: <Shield className="h-8 w-8 text-hads-pink" />,
      delay: 200
    },
    {
      title: "Containerization",
      description: "Enhancing deployment efficiency and scalability through containers, enabling consistent environments across development and production.",
      icon: <Database className="h-8 w-8 text-hads-pink" />,
      delay: 300
    },
    {
      title: "FinOps",
      description: "Optimizing cloud costs to maximize ROI and prevent unnecessary expenditures through continuous monitoring and right-sizing.",
      icon: <BarChart className="h-8 w-8 text-hads-pink" />,
      delay: 400
    },
    {
      title: "DevOps",
      description: "Implementing CI/CD pipelines and automation for streamlined development and operations, reducing time-to-market.",
      icon: <GitBranch className="h-8 w-8 text-hads-pink" />,
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Key Focus Areas
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Our comprehensive approach targets six critical areas to ensure a successful cloud migration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${area.delay}ms` }}
            >
              <div className="rounded-full bg-hads-pink/10 h-16 w-16 flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-hads-dark mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CloudPlatformsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const platforms = [
    {
      name: "AWS",
      description: "Preferred for its comprehensive suite of cloud services and scalability, offering 200+ fully featured services from data centers globally.",
      strengths: [
        "Extensive service portfolio",
        "Global infrastructure",
        "Mature marketplace",
        "Advanced security features"
      ],
      color: "#FF9900",
      delay: 0
    },
    {
      name: "Google Cloud",
      description: "An alternative for AI/ML-driven applications and cost-effective solutions, with strong data analytics and machine learning capabilities.",
      strengths: [
        "Strong in big data and analytics",
        "Advanced AI/ML capabilities",
        "Competitive pricing model",
        "Global network infrastructure"
      ],
      color: "#4285F4",
      delay: 200
    },
    {
      name: "Microsoft Azure",
      description: "Ideal for enterprises requiring deep integration with Microsoft services, providing seamless connectivity with existing Microsoft ecosystems.",
      strengths: [
        "Microsoft ecosystem integration",
        "Hybrid cloud capabilities",
        "Enterprise compliance features",
        "Comprehensive identity management"
      ],
      color: "#0078D4",
      delay: 400
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Target Cloud Platforms
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            We support migration to multiple cloud platforms, each offering unique advantages for different business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: `${platform.delay}ms`,
                borderTop: `4px solid ${platform.color}`
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: platform.color }}>{platform.name}</h3>
              <p className="text-gray-600 mb-6">{platform.description}</p>
              <h4 className="font-medium text-hads-dark mb-3">Key Strengths:</h4>
              <ul className="space-y-2">
                {platform.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: `${platform.color}20` }}>
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: platform.color }}></span>
                    </div>
                    <p className="ml-3 text-gray-700">{strength}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MigrationProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "Evaluate current infrastructure, applications, and dependencies to identify migration candidates and challenges.",
      delay: 0
    },
    {
      number: "02",
      title: "Planning",
      description: "Develop a detailed migration strategy with timelines, resource requirements, and risk mitigation plans.",
      delay: 100
    },
    {
      number: "03",
      title: "Design",
      description: "Create cloud architecture designs that align with business objectives and technical requirements.",
      delay: 200
    },
    {
      number: "04",
      title: "Migration",
      description: "Execute the migration plan with minimal disruption to business operations, following established best practices.",
      delay: 300
    },
    {
      number: "05",
      title: "Optimization",
      description: "Fine-tune the cloud environment for performance, security, and cost-efficiency post-migration.",
      delay: 400
    },
    {
      number: "06",
      title: "Management",
      description: "Implement continuous monitoring, management, and improvement processes to maximize cloud benefits.",
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Migration Process
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Our structured migration methodology ensures a smooth transition to the cloud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl font-bold text-hads-pink opacity-50">{step.number}</span>
                <h3 className="text-xl font-semibold text-hads-dark ml-3 mt-1">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CloudMigrationPage;
