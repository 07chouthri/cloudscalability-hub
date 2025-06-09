
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BarChart, DollarSign, TrendingDown } from 'lucide-react';
import CloudCostOptimization from '../images/servicesimages/Cloud Cost Optimization.png';
import SEOHead from '@/components/SEOHead';

const FinOpsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Cost Optimization (FinOps)",
    "description": "HADS provides FinOps services to align finance, engineering, and business teams to take control of cloud spending.",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com/"
    },
    "serviceType": "Cloud Cost Optimization",
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
      "lastReviewed": "2023-09-15",
      "@id": "https://www.hadstechnovations.com/finops"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    },
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Cloud Migration Services",
        "url": "https://www.hadstechnovations.com/cloud-migration"
      },
      {
        "@type": "Service",
        "name": "DevOps Automation",
        "url": "https://www.hadstechnovations.com/devops"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden pt-7">
      <SEOHead 
        title="Cloud Cost Optimization & FinOps Services | HADS"
        description="Optimize your cloud spending with our comprehensive FinOps services. We bring financial accountability to cloud expenses through real-time cost visibility, resource optimization, and intelligent budgeting. Our FinOps experts help organizations reduce cloud costs by 30-40% while maximizing business value and operational efficiency."
        keywords="finops, cloud cost optimization, cloud spending, cost visibility, cloud budgeting, cloud ROI, cloud financial management, cost governance, AWS cost optimization, Azure cost optimization, GCP cost optimization, cloud waste reduction, resource rightsizing, cloud cost allocation, financial accountability, cloud savings, spend management, optimization recommendations, cost transparency, cloud economics,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world"
        ogUrl="/finops"
        schema={schema}
      />
      <Navbar />
      <main className="flex-grow pt-5">
        {/* Hero Section */}
        <section>
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center min-h-[80vh] py-12">
              {/* Image Column */}
              <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                <div className="max-w-[350px] md:max-w-[500px]">
                  <img
                    src={CloudCostOptimization}
                    alt="Cloud cost optimization illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 md:pl-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Cloud Cost Optimization{" "}
                  <span className="text-hads-pink">Compliances</span>
                  <span className="mx-2 text-hads-pink">...</span>
                </h1>

                <p className="text-lg md:text-xl mb-6">
                  FinOps aligns finance, engineering, and business teams to take control of cloud spending.
                  It enables cost visibility, smarter budgeting, and continuous optimization.
                  From rightsizing resources to eliminating waste, FinOps maximizes cloud value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Why Choose </span>
                <span className="text-hads-pink">FinOps</span>
                <span className="text-gray-800">?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                FinOps brings clarity, control, and accountability to your cloud expenses.
                Align teams, optimize resources, and track every dollar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Cost Visibility</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Gain full transparency into cloud spend with real-time dashboards and detailed reports for smarter decision-making.
                </p>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Smart Optimization</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Reduce waste and cut costs by identifying unused resources and implementing right-sized infrastructure.
                </p>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Cost Governance</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Establish policies, budgets, and alerts to control cloud usage, prevent overspending, and ensure financial accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-5 md:py-5 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-hads-pink">Results</span>
                <span className="text-gray-800"> You Can Measure</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Our FinOps approach delivers tangible business impact with real, trackable savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto text-center">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-hads-purple mb-2">25-40%</div>
                <p className="text-sm md:text-base text-gray-700">Reduction in cloud costs through targeted optimization</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-hads-teal mb-2">3–6 months</div>
                <p className="text-sm md:text-base text-gray-700">Months to achieve full ROI from your FinOps strategy</p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div className="text-2xl md:text-4xl font-bold text-hads-pink mb-2">99%</div>
                <p className="text-sm md:text-base text-gray-700">Improved visibility into cloud usage and spending</p>
              </div>
            </div>

            {/* FinOps Steps */}
            <div className="mt-5 md:mt-10 max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl md:rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-hads-dark mb-8 md:mb-10 text-center">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">FinOps</span>
                <span className="text-gray-800"> Optimization Steps</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { step: '1', title: 'Discover', desc: 'Analyze current usage and uncover cost-saving opportunities.' },
                  { step: '2', title: 'Plan', desc: 'Build strategic budgets and right-sizing plans for efficiency.' },
                  { step: '3', title: 'Act', desc: 'Implement automation, resource adjustments, and best practices.' },
                  { step: '4', title: 'Monitor', desc: 'Track usage, costs, and performance for ongoing improvement.' },
                ].map(({ step, title, desc }) => (
                  <div
                    key={step}
                    className="bg-gradient-to-br from-white via-hads-purple/5 to-hads-purple/10 p-6 
                            rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md
                            transition-all duration-300 ease-in-out"
                  >
                    <div className="relative w-12 h-12 mx-auto mb-4">
                      <div className="relative w-full h-full rounded-full bg-hads-purple/20 flex items-center justify-center border-2 border-hads-purple z-10">
                        <span className="text-hads-purple font-bold text-lg">{step}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-hads-dark text-lg mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinOpsPage;
