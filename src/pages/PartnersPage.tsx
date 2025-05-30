
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import { ArrowRight, Building, Globe, ShieldCheck } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Freshworks from '../images/Freshworks.png';
import { useResponsive } from '@/components/ResponsiveContext';
import SEOHead from '@/components/SEOHead';

const PartnersPage = () => {
  const { isMobile } = useResponsive();
  
  const logos = [
    { src: Freshworks, name: 'Freshworks' },
    { src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", name: 'GitHub' },
    { src: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", name: 'GitLab' },
    { src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", name: 'Git' },
    { src: "https://cdn.worldvectorlogo.com/logos/grafana.svg", name: 'Grafana' },
    { src: "https://cdn.worldvectorlogo.com/logos/prometheus.svg", name: 'Prometheus' }
  ];

  // Schema.org structured data for the partners page
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HADS Partners",
    "description": "Explore HADS TechNovations LLP ' strategic partnerships with industry leaders in cloud technology and solutions.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hadstechnovations.com/partners"
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
        title="Our Partners | HADS TechNovations - Cloud Solutions Provider"
        description="Discover HADS TechNovations' strategic partnerships with leading technology providers including AWS, Google Cloud, and Azure to deliver exceptional cloud solutions."
        keywords="technology partners, cloud partners, AWS partner, Azure partner, Google Cloud partner, tech ecosystem,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world"
        ogUrl="/partners"
        schema={schema}
      />
      
      <Navbar />

      {/* Flip Card Styles */}
      <style>
        {`
          .flip-card {
            perspective: 1000px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-10 md:py-12 lg:py-20 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-7 tracking-wider">
                  <span className="mx-1 md:mx-2">Our</span>
                  <span className="mx-1 md:mx-2 text-hads-pink">Strategic</span>
                  <span className="mx-1 md:mx-2">Partners..</span>
                </h1>
                <div className="mx-1 md:mx-2">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 md:mb-5 font-light leading-relaxed">
                    Driving digital transformation with cloud-first solutions.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-3 sm:mb-4 md:mb-5">
                    At HADS TechNovation LLP, we team up with global leaders to co-create innovative cloud services. Our partnerships deliver scalable, secure, and future-ready infrastructures, tailored to meet your business needs.
                  </p>
                </div>
              </div>
              <div className="mx-10 w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
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
        <section className=" sm:py-5 md:py-5 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-6 md:mb-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">
                Why Partner With HADS? Unlock <span className="text-hads-pink">Growth</span> & <span className="text-hads-pink">Innovation</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                Join our partner ecosystem and access unmatched opportunities for growth. At HADS, we empower partners with cutting-edge cloud-native solutions and deep technical expertise.
                From cloud migration and DevOps automation to application modernization, we provide end-to-end support led by AWS-certified professionals.
                {!isMobile && " Accelerate your time-to-market with scalable microservices, CI/CD pipelines, IaC, and real-time monitoring via CloudWatch, Prometheus, and Grafana. Whether you're optimizing efficiency, integrating AI/ML, or enabling secure multi-cloud environments, HADS ensures precision and performance."}
                Partner with us and stay ahead in the fast-evolving tech landscape!
              </p>
            </div>

            {/* Flip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
              {/* Flip Card 1 */}
              <div className="flip-card h-56 sm:h-64 md:h-80 mb-4 md:mb-0">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-4 md:p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">Industry Expertise</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white text-center">
                      Unlock specialized knowledge and resources across leading cloud platforms.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-4 md:p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 mb-2 text-white" />
                    <p className="text-xs md:text-sm text-center">
                      At HADS, we bring deep industry expertise to help you navigate and leverage the best cloud solutions. With our insights and experience, you'll gain a competitive edge in today's cloud-driven world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flip Card 2 */}
              <div className="flip-card h-56 sm:h-64 md:h-80 mb-4 md:mb-0">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-4 md:p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">Global Reach</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white text-center">
                      Expand your market presence with our global network and diverse clientele.
                    </p>
                  </div>

                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-4 md:p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 mb-2 text-white" />
                    <p className="text-xs md:text-sm text-center">
                      Leverage HADS' international connections to grow your business, tap into new markets, and build relationships with clients worldwide. Let us help you scale beyond borders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flip Card 3 */}
              <div className="flip-card h-56 sm:h-64 md:h-80 mb-4 md:mb-0">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front bg-gradient-to-r from-hads-purple to-hads-pink shadow-md p-4 md:p-8 flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">Innovation Focus</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white text-center">
                      Stay ahead of the curve with early access to cutting-edge cloud technologies and solutions.
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-hads-purple to-hads-teal text-white p-4 md:p-8 flex flex-col items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 mb-2 text-white" />
                    <p className="text-xs md:text-sm text-center">
                      At HADS, we keep you at the forefront of innovation, providing exclusive access to the latest advancements in cloud technology, so you can lead, not follow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Logos */}
        <section className="py-5 sm:py-5 md:py-5 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-6 md:mb-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Technology<span className="mx-2 text-hads-pink">Ecosystem</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                We collaborate with industry-leading platforms to deliver scalable cloud solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-8">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center w-[110px] sm:w-[140px] md:w-[200px] p-3 sm:p-4 md:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={typeof logo.src === 'string' ? logo.src : Freshworks}
                    alt={logo.name}
                    className="h-8 sm:h-10 md:h-14 object-contain"
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-700 mt-2 text-center">
                    {logo.name}
                  </p>
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

export default PartnersPage;
