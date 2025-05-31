  import React from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { DotLottieReact } from '@lottiefiles/dotlottie-react';
  import AboutSection from '@/components/AboutSectionvisionmission';
  import { useResponsive } from '@/components/ResponsiveContext';
  import SEOHead from '@/components/SEOHead';

  const AboutPage = () => {
    const { isMobile } = useResponsive();
    
    // Schema.org structured data for the about page
    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About HADS TechNovations LLP",
      "description": "HADS is a leading provider of AWS cloud migration, consulting, and managed services. Learn about our mission, vision, and company story.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.hadstechnovations.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HADS TechNovations LLP",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.hadstechnovations.com/logo.png"
        }
      }
    };

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <SEOHead
          title="About HADS | AWS Partner & Cloud Solutions Provider"
          description="HADS TechNovations LLP is a leading AWS partner specializing in cloud migration, DevOps automation, and managed services. Learn about our mission, vision, and expertise."
          keywords="about HADS, cloud solutions company, AWS partner, cloud migration experts, DevOps services, IT consulting firm,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world"
          ogUrl="/about"
          schema={schema}
        />
        
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {/* Hero Section - Mobile Responsive */}
          <section className="relative py-6 sm:py-8 md:py-10 lg:py-20 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
            </div>
            <div className="container relative z-10 mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-7 tracking-wider">
                    <span className="mx-1">About</span>
                    <span className="mx-1 text-hads-pink">HADS..</span>
                  </h1>
                  <div className="mx-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 sm:mb-3 md:mb-4 lg:mb-5 font-light leading-relaxed">
                      Transforming Your Business with Advanced Cloud Solutions
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                      At HADS TechNovations LLP, we help improve your business with cloud technology. We offer solutions for cloud migration and provide continuous support, delivering tailored solutions that meet your unique needs.
                    </p>
                  </div>
                </div>

                {/* Animation Section - Responsive Height */}
                <div className="w-full md:w-1/2 h-[300px] sm:h-[320px] md:h-[320px] lg:h-[300px] xl:h-[400px]">
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

          {/* Company Overview - Mobile Responsive */}
          <section className="py-4 sm:py-5 md:py-5 bg-white shadow-md sm:shadow-lg rounded-lg mx-4 sm:mx-6 md:mx-8 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-wide">
                  <span className="text-gray-800">Our </span>
                  <span className="text-hads-pink">Company</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  HADS is a leading provider of technology and cloud solutions, specializing in AWS cloud migration, consulting, and managed services. As an AWS partner, we help businesses transition seamlessly to the cloud, optimize infrastructure, and leverage AWS's powerful capabilities for scalability, security, and cost efficiency.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  With deep expertise in over 50 AWS services including EC2, RDS, S3, Lambda, Kubernetes, AI/ML, CloudWatch, VPC, DynamoDB, and more, HADS empowers businesses to innovate, scale, and drive success in the cloud.
                </p>
              </div>
            </div>
          </section>

          {/* Mission and Values - Mobile Responsive */}
          <section className="py-4 sm:py-5 md:py-5 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-wide">
                  <span className="text-gray-800">Our </span>
                  <span className="text-hads-pink">Mission</span>
                  <span className="mx-1 text-gray-800">&</span>
                  <span className="text-hads-pink">Vision</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  At HADS, our mission is to empower organizations to unlock the full potential of cloud technologies, enabling them to innovate rapidly, operate with greater efficiency, and scale confidently. We are committed to delivering cutting-edge, secure, and scalable solutions that drive business transformation and long-term success.
                </p>
              </div>
              {/* About Section from component - Already responsive */}
              <AboutSection />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  };

  export default AboutPage;
