
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, GitBranch, RefreshCw, Workflow } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DevOpsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="mx-2 text-wight-800">Cloud</span>
                <span className="text-hads-pink">DevOps</span>
                <span className="mx-2 text-wight-800">Services</span>
              </h1>
              <div className="mb-6 w-full h-96 mx-auto">
                <DotLottieReact
                  src="https://lottie.host/f0c7359b-5970-4e13-a927-8b79ded6f236/4bxrlL1XGl.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Streamline development and operations workflows for faster delivery
              </p>

            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accelerate Your Development Lifecycle</h2>
              <p className="text-lg text-gray-700">
                Our DevOps services unite development and operations teams to deliver software faster,
                more reliably, and with improved quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">CI/CD Implementation</h3>
                <p className="text-gray-700">Establish automated pipelines for continuous integration and delivery of your applications.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Infrastructure as Code</h3>
                <p className="text-gray-700">Manage your infrastructure using code for consistency, version control and automation.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Monitoring & Observability</h3>
                <p className="text-gray-700">Implement comprehensive monitoring solutions for real-time visibility into your applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Transformation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps Transformation Journey</h2>
              <p className="text-lg text-gray-700">
                We guide your organization through the complete DevOps transformation process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-hads-purple via-hads-teal to-hads-pink transform -translate-y-1/2 z-0"></div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Assessment</h3>
                <p className="text-sm text-gray-700">Evaluate current processes and identify opportunities</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-purple/80 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Planning</h3>
                <p className="text-sm text-gray-700">Develop roadmap and strategy for transformation</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-teal mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Implementation</h3>
                <p className="text-sm text-gray-700">Execute tools and process changes</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-teal/80 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Training</h3>
                <p className="text-sm text-gray-700">Upskill teams with new methodologies</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm z-10 text-center relative">
                <div className="w-12 h-12 rounded-full bg-hads-pink mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Optimization</h3>
                <p className="text-sm text-gray-700">Continuous improvement of processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of DevOps</h2>
              <p className="text-lg text-gray-700">
                Experience the transformative impact of DevOps practices on your development lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Faster Time to Market</h3>
                <p className="text-gray-700">Accelerate software delivery with automated processes and reduced deployment friction.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Enhanced Quality</h3>
                <p className="text-gray-700">Improve application reliability through automated testing and consistent delivery processes.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Increased Collaboration</h3>
                <p className="text-gray-700">Break down silos between development, operations, and business teams for better outcomes.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Greater Scalability</h3>
                <p className="text-gray-700">Handle increased workloads efficiently with automated, repeatable deployment processes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DevOpsPage;
