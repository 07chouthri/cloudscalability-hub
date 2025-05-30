import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Building2, Users, Award, Globe } from 'lucide-react';

const HadsTechnovationsLLP = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS Technovations LLP",
    "legalName": "HADS Technovations Limited Liability Partnership",
    "url": "https://www.hadstechnovations.com",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "description": "HADS Technovations LLP is India's premier cloud solutions provider, specializing in AWS migration, DevOps automation, and enterprise digital transformation services.",
    "foundingDate": "2020",
    "industry": "Information Technology and Cloud Services",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Tamil Nadu"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "email": "info@hadstechnovations.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="HADS Technovations LLP - Leading Cloud Solutions Provider | Company Profile"
        description="HADS Technovations LLP is India's premier AWS partner and cloud solutions provider. Learn about our company, leadership, services, and commitment to digital transformation excellence."
        keywords="HADS Technovations LLP, HADS company profile, cloud solutions provider india, aws partner india, enterprise cloud services, digital transformation company,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world"
        ogUrl="/hads-technovations-llp"
        schema={schema}
      />

      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              HADS Technovations LLP
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              India's Leading Cloud Solutions Provider & AWS Partner
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Founded in 2020", "AWS Partner", "Global Services", "Enterprise Focus"].map((label, index) => (
                <span key={index} className="bg-white px-5 py-2 rounded-full shadow-md text-gray-800 text-sm md:text-base transition hover:bg-indigo-100">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About HADS Technovations LLP
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                HADS Technovations LLP is a premier cloud solutions provider headquartered in India, serving enterprises worldwide with cutting-edge cloud transformation services.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Since our founding in 2020, we’ve helped businesses migrate to the cloud, optimize costs, and achieve high-performance transformation as a certified AWS partner.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-100 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-blue-700">95+</div>
                  <p className="text-gray-700 mt-2">Active Clients</p>
                </div>
                <div className="bg-green-100 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-green-700">156+</div>
                  <p className="text-gray-700 mt-2">Cloud Migrations</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Building2 className="h-10 w-10 text-blue-600" />, title: "Enterprise Focus", desc: "Serving large enterprises with complex cloud requirements" },
                { icon: <Award className="h-10 w-10 text-green-600" />, title: "AWS Partner", desc: "Certified AWS partner with proven expertise" },
                { icon: <Users className="h-10 w-10 text-purple-600" />, title: "Expert Team", desc: "Certified cloud architects and DevOps engineers" },
                { icon: <Globe className="h-10 w-10 text-orange-600" />, title: "Global Reach", desc: "Serving clients across multiple continents" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cloud solutions designed to drive growth, agility, and transformation
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AWS Cloud Migration", description: "Seamless migration to AWS with zero downtime and minimal business disruption" },
                { title: "DevOps Automation", description: "End-to-end CI/CD pipeline automation for faster, reliable deployments" },
                { title: "FinOps Cost Optimization", description: "Reduce cloud spend by up to 40% with strategic cost control" },
                { title: "24/7 Managed Services", description: "Always-on monitoring and cloud infrastructure management" },
                { title: "Security & Compliance", description: "Hardened security posture and compliance-ready infrastructure" },
                { title: "Digital Transformation", description: "Consulting and implementation to digitize core business processes" }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
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

export default HadsTechnovationsLLP;
