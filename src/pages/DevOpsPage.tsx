
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, GitBranch, RefreshCw, Workflow } from 'lucide-react';
import DevOpsPageviedo from '../viedo/DevOps Automation.mp4';

const DevOpsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
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
                marginLeft: "300px",
                borderRadius: "250px",
                objectFit: "cover",
                zIndex: 0,
              }}
            >
              <source src={DevOpsPageviedo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                marginTop: "35px",
                borderRadius: 12,
                background: "rgba(6, 5, 5, 0.3)", // optional overlay
              }}
            />

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
                color: "#ffffff",
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
                  // color: "#ffffff",
                  // textShadow: "2px 2px 6px rgba(3, 3, 3, 0.5)", // stylish white with dark shadow
                }}
              >
                <span style={{ color: "#ff2d75", 
                  // textShadow: "2px 2px 6px rgba(6, 5, 5, 0.5)" 
                  }}>
                  DevOps
                </span>
                <span className="mx-3">Automation</span>
                <span className="mx-2">...</span>
                
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  maxWidth: "520px",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.6,
                  marginTop: "40px",
                  // color: "#ffffff",
                  // textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)", // subtle stylish glow
                }}
              >
                FinOps helps organizations manage and reduce cloud costs by bringing
                finance, tech, and business teams together. It’s a process that focuses
                on visibility, cost control, and smart decision-making. FinOps follows
                three steps: understand spending, find ways to save, and continuously
                monitor. Simple actions like turning off unused services or adjusting
                server sizes can save big. FinOps ensures better budgeting, avoids
                waste, and maximizes value from your cloud investment.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">Accelerate Your Development </span>
                <span className="text-hads-pink">Lifecycle</span>
              </h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-gray-800">DevOps </span>
                <span className="text-hads-pink">Transformation</span>
                <span className="text-gray-800"> Journey</span>
              </h2>
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
            {/* Section Header */}
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span className="text-hads-pink">Benefits</span>
                <span className="text-gray-800"> of DevOps</span>
              </h2>
              <p className="text-lg text-gray-700">
                Experience the transformative impact of DevOps practices on your development lifecycle.
              </p>
            </div>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Faster Time to Market",
                  description:
                    "Accelerate software delivery with automated processes and reduced deployment friction.",
                },
                {
                  title: "Enhanced Quality",
                  description:
                    "Improve application reliability through automated testing and consistent delivery processes.",
                },
                {
                  title: "Increased Collaboration",
                  description:
                    "Break down silos between development, operations, and business teams for better outcomes.",
                },
                {
                  title: "Greater Scalability",
                  description:
                    "Handle increased workloads efficiently with automated, repeatable deployment processes.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  {/* Benefit Title with Icon */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center gap-2">
                    <ArrowRight className="h-6 w-6 text-hads-teal" />
                    {benefit.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-gray-700">{benefit.description}</p>
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

export default DevOpsPage;
