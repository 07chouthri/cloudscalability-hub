import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { ArrowRight, Cloud, Server, Shield, Database, BarChart, GitBranch } from 'lucide-react';
import Cloudvieod from "../viedo/Cloud Migration Strategy and consulting.mp4"; // adjust the path as necessary


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
    <main className="flex-grow pt-20">
      <section>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            fontFamily: "'Poppins', 'Inter', sans-serif",
          }}
        >
          {/* Background Video */}
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
              marginTop: "36px",
              marginLeft: "210px",
              borderRadius: "250px",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={Cloudvieod} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Sky Blue Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // backgroundColor: "rgba(190, 222, 235, 0.25)", // sky blue overlay
              zIndex: 1,
              marginTop: "35px",
              borderRadius: 12,
            }}
          />

          {/* Text Content */}
          <div
            style={{
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
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                fontWeight: 800,
                fontFamily: "'Poppins', sans-serif",
                color: "#000000",
                textShadow: "1px 1px 2px rgba(21, 21, 21, 0.3)",
              }}
            >
              <span style={{ color: "#000000" }}>Cloud </span>
              <span style={{ color: "#ff2d75" }}>Managed</span>
              <span style={{ color: "#000000" }}> Services ...</span>
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                // color: "#1a1a1a",
                maxWidth: "520px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
                textAlign: "left",
                marginTop:'40px',
                textShadow: "1px 1px 2px rgba(21, 21, 21, 0.3)",
              }}
            >
              At HADS Cloud Solutions, we offer comprehensive Cloud Manage
              d Services designed to simplify your IT operations, reduce costs, 
              and ensure peak performance of your cloud environment. Our expert
               team handles the day-to-day management of your infrastructure so 
              your team can focus on  <br/> innovation and growth.</p>
          </div>
        </div>
      </section>
    </main>
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
            <span className="text-gray-800">Strategic </span>
            <span className="text-hads-pink">Migration</span>
            <span className="text-gray-800"> to Cloud</span>
          </h2>
          <p className={cn(
            "text-lg text-gray-700 transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Strategic Cloud Migration is more than just moving infrastructure—it’s about aligning technology with business goals. At HADS, we take a business-first approach to cloud adoption, ensuring every migration is backed by a clear strategy, risk assessment, and ROI analysis. From selecting the right AWS architecture to implementing security, scalability, and automation, our strategic migration framework enables organizations to modernize with confidence, minimize disruption, and unlock long-term value from the cloud.          </p>
        </div>

        <div className={cn(
          "bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 delay-200 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-xl font-semibold text-hads-purple mb-4">Technical Focus Areas          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Build a resilient and scalable cloud infrastructure to ensure high availability, performance, and reliability.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Execute a smooth and disruption-free migration, minimizing downtime and business impact.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">
                Leverage cloud-native services for proactive monitoring, automated security, and efficient system maintenance.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Improve deployment speed and agility through containerization and orchestration tools.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Drive cost efficiency by optimizing cloud resource utilization to maximize return on investment (ROI).
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hads-pink/10 flex items-center justify-center mt-0.5">
                <span className="h-3 w-3 rounded-full bg-hads-pink"></span>
              </div>
              <p className="ml-3 text-gray-700">Accelerate development and release cycles by implementing streamlined CI/CD workflows and DevOps practices.</p>
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
            <span className="text-gray-800">Key </span>
            <span className="text-hads-pink">Focus</span>
            <span className="text-gray-800"> Areas</span>
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
      delay: 0,
      icon: ""
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
      delay: 200,
      icon: ""
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
      delay: 400,
      icon: ""
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ color: "#1F2937" }} // text-hads-dark
          >
            <span className="text-gray-800">Target </span>
            <span style={{ color: "#E91E63" }}>Cloud</span> {/* text-hads-pink */}
            <span className="text-gray-800"> Platforms</span>
          </h2>
          <p
            className={cn(
              "text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ color: "#4B5563" }}
          >
            We support migration to multiple cloud platforms, each offering unique
            advantages for different business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-8 border transition-all duration-700 ease-in-out transform bg-white/80 backdrop-blur-md shadow-md",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                "hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-white"
              )}
              style={{
                transitionDelay: `${platform.delay}ms`,
                borderTop: `5px solid ${platform.color}`,
                borderColor: "#F3F4F6",
              }}
            >
              {/* Header Section */}
              <div className="flex items-center mb-4">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon || "🌐"} {/* Now safely using the icon property */}
                </div>
                <h3
                  className="text-xl font-bold ml-4"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>

              {/* Key Strengths */}
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Strengths:</h4>
              <ul className="space-y-3">
                {platform.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-1 shadow"
                      style={{
                        backgroundColor: `${platform.color}20`,
                      }}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      ></span>
                    </div>
                    <p className="ml-3 text-gray-700 leading-snug">{strength}</p>
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
            <span className="text-gray-800">Migration </span>
            <span className="text-hads-pink">Process</span>
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
