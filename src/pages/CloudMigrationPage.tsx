import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Cloud, Server, Shield, Database, BarChart, GitBranch } from 'lucide-react';
import CloudMigrationImage from '../images/servicesimages/Cloud Migrationand consulting.jpg';
import SEOHead from '@/components/SEOHead';

const CloudMigrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cloud Migration Strategy - HADS";
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Migration Services",
    "description": "HADS provides seamless cloud migration services with expert consulting to help businesses transform their digital infrastructure.",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com/"
    },
    "serviceType": "Cloud Migration",
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "lastReviewed": "2023-08-01",
      "@id": "https://www.hadstechnovations.com/cloud-migration"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "135"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SEOHead
        title="Cloud Migration and Consulting | HADS Technovations LLP"
        description="Seamlessly migrate your business to the cloud with HADS expert consulting. Our comprehensive cloud migration services ensure minimal disruption with maximum business value. Get strategic planning, execution, and post-migration support from certified AWS, Azure, and GCP professionals."
        keywords="cloud migration, cloud consulting, AWS migration, Azure migration, GCP migration, cloud transformation, hybrid cloud, cloud strategy, cloud assessment, cloud adoption, application modernization, legacy system migration, multi-cloud, workload migration, cloud ROI, digital transformation, cloud architecture, migration planning, cloud security, enterprise cloud migration,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world"
        ogUrl="/cloud-migration"
        schema={schema}
      />
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
    <main className="flex-grow pt-10 md:pt-0">
      <section className="mt-[50px] h-[500px] flex items-center justify-center">
        <div className="container px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={CloudMigrationImage}
                alt="Cloud technology illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins mb-4 leading-tight">
              <span className="text-black">Cloud </span>
              <span className="text-hads-pink">Migration</span>
              <span className="text-black"> and </span>
              <br className="hidden sm:block" />
              <span className="text-hads-pink">Consulting</span>
              <span className="text-black">...</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mt-4 sm:mt-6">
              HADS - Cloud Solutions<br />
              Seamless Cloud Migration, Expert Consulting<br />
              We help you move to the cloud with zero disruption.
              Our experts assess, plan, and execute a migration strategy tailored to your business goals.
            </p>
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
    <section ref={sectionRef} className="bg-white py-5 md:py-5 lg:py-5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold text-hads-dark mb-6",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-gray-800">Strategic </span>
            <span className="text-hads-pink">Migration</span>
            <span className="text-gray-800"> to Cloud</span>
          </h2>
          <p className={cn(
            "text-base md:text-lg text-gray-700",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            Cloud migration isn't just about shifting infrastructure—it's about aligning your technology with your business goals. At HADS, we take a business-first approach, delivering tailored AWS strategies backed by risk assessment, ROI analysis, and future-ready architecture. Our end-to-end framework ensures secure, scalable, and seamless migrations that drive long-term value and innovation.
          </p>
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
      title: "Strategic Planning & Assessment",
      description: "Evaluate existing infrastructure and define a clear migration roadmap aligned with your business goals.",
      icon: <Cloud className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 0
    },
    {
      title: "Minimal Downtime Execution",
      description: "Ensure seamless, low-risk migration with minimal disruption to operations.",
      icon: <Server className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 100
    },
    {
      title: "Modern Architecture Design",
      description: "Adopt scalable, resilient AWS-based architectures optimized for performance and growth.",
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 200
    },
    {
      title: "Security Integration",
      description: "Embed security best practices and compliance controls throughout the migration process.",
      icon: <Database className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 300
    },
    {
      title: "Resource Optimization",
      description: "Right-size cloud resources and implement cost-control strategies to drive efficiency.",
      icon: <BarChart className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 400
    },
    {
      title: "DevOps Enablement",
      description: "Establish CI/CD pipelines and infrastructure as code (IaC) for faster, more reliable deployments.",
      icon: <GitBranch className="h-6 w-6 md:h-8 md:w-8 text-hads-pink" />,
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-5 lg:py-5 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold text-hads-dark mb-6",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-gray-800">Key </span>
            <span className="text-hads-pink">Focus</span>
            <span className="text-gray-800"> Areas</span>
          </h2>
          <p className={cn(
            "text-base md:text-lg text-gray-700 max-w-3xl mx-auto",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            Our comprehensive approach targets six critical areas to ensure a successful cloud migration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100",
                isInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${area.delay}ms` }}
            >
              <div className="rounded-full bg-hads-pink/10 h-12 w-12 md:h-16 md:w-16 flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-hads-dark mb-3">{area.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{area.description}</p>
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
        "Industry-leading service portfolio",
        "Global and highly available infrastructure",
        "Mature ecosystem and marketplace",
        "Advanced security and compliance features"
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
    <section ref={sectionRef} className="py-5 md:py-5 lg:py-5 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <h2
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-bold mb-6",
              isInView ? "opacity-100" : "opacity-0"
            )}
            style={{ color: "#1F2937" }}
          >
            <span className="text-gray-800">Target </span>
            <span style={{ color: "#E91E63" }}>Cloud</span>
            <span className="text-gray-800"> Platforms</span>
          </h2>
          <p
            className={cn(
              "text-base md:text-lg max-w-3xl mx-auto",
              isInView ? "opacity-100" : "opacity-0"
            )}
            style={{ color: "#4B5563" }}
          >
            We support migration to multiple cloud platforms, each offering unique
            advantages for different business needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg md:rounded-2xl p-5 md:p-8 border transition-all bg-white/80 backdrop-blur-md shadow-md h-full",
                isInView ? "opacity-100" : "opacity-0"
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
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.icon || "🌐"}
                </div>
                <h3
                  className="text-lg md:text-xl font-bold ml-4"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{platform.description}</p>

              {/* Key Strengths */}
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Key Strengths:</h4>
              <ul className="space-y-2 md:space-y-3">
                {platform.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 rounded-full flex items-center justify-center mt-1 shadow"
                      style={{
                        backgroundColor: `${platform.color}20`,
                      }}
                    >
                      <span
                        className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      ></span>
                    </div>
                    <p className="ml-3 text-gray-700 leading-snug text-sm md:text-base">{strength}</p>
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
      description: "Evaluate current infrastructure, applications, and dependencies to identify migration candidates and challenges. Identify dependencies, risks, and cost implications.",
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
      description: "Choose the right AWS architecture based on scalability, performance, and resilience. Integrate security, compliance, and automation best practices. Design for high availability and disaster recovery.",
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
      description: "Conduct rigorous post-migration testing for performance and functionality. Fine-tune resources to ensure optimal cost, scalability, and efficiency. Implement monitoring and alerting systems.",
      delay: 400
    },
    {
      number: "06",
      title: "Management",
      description: "Continuous performance monitoring and troubleshooting. Security patching, updates, and compliance audits. Ongoing infrastructure management and optimization.",
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-5 lg:py-5 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-bold text-hads-dark mb-6",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-gray-800">Migration </span>
            <span className="text-hads-pink">Process</span>
          </h2>
          <p className={cn(
            "text-base md:text-lg text-gray-700 max-w-3xl mx-auto",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            Our structured migration methodology ensures a smooth transition to the cloud
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "bg-gradient-to-r from-hads-purple to-hads-pink rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm h-full",
                isInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="flex items-start mb-4">
                <span className="text-2xl md:text-3xl font-bold text-white opacity-50">{step.number}</span>
                <h3 className="text-lg md:text-xl font-semibold text-white ml-3 mt-1">{step.title}</h3>
              </div>
              <p className="text-white text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationPage;
