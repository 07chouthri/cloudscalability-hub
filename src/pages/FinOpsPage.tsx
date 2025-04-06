import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BarChart, DollarSign, TrendingDown } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FinOpsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="mx-2 text-wight-800">Cloud</span>
                <span className="text-hads-pink">FinOps</span>
                <span className="mx-2 text-wight-800">Services</span>
              </h1>
              <div className="mb-6 w-full h-96 mx-auto">
                <DotLottieReact
                  src="https://lottie.host/30fcd361-d7ca-4887-af62-c1abad2bf750/laCPvlQJl6.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Optimize your cloud spending and enhance resource utilization
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Take Control of Your Cloud Costs</h2>
              <p className="text-lg text-gray-700">
                Our FinOps services help you gain visibility, optimize spending, and implement
                governance across your cloud infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Cost Visibility */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cost Visibility</h3>
                <p className="text-gray-700">
                  Gain insights into your cloud spending with clear, detailed reports.
                </p>
              </div>

              {/* Resource Optimization */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Resource Optimization</h3>
                <p className="text-gray-700">
                  Reduce cloud waste by identifying and right-sizing unused resources.
                </p>
              </div>

              {/* Cost Governance */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cost Governance</h3>
                <p className="text-gray-700">
                  Set policies and controls to manage and forecast spending effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven ROI</h2>
              <p className="text-lg text-gray-700">
                Our FinOps services deliver measurable results for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-purple mb-2">25-40%</div>
                <p className="text-gray-700">Average cost reduction for optimized cloud environments</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-teal mb-2">3-6 months</div>
                <p className="text-gray-700">Typical payback period for FinOps implementations</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-hads-pink mb-2">99%</div>
                <p className="text-gray-700">Clients report improved visibility into cloud spending</p>
              </div>
            </div>

            {/* Optimization Methodology */}
            <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cost Optimization Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: '1', title: 'Assessment', desc: 'Analyze current spending' },
                  { step: '2', title: 'Planning', desc: 'Develop optimization strategies' },
                  { step: '3', title: 'Implementation', desc: 'Execute efficiency measures' },
                  { step: '4', title: 'Monitoring', desc: 'Continuous improvement' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-hads-purple/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-hads-purple font-bold">{step}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-sm text-gray-700">{desc}</p>
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
