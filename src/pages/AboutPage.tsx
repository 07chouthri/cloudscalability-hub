
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Users, Globe, Award, BookOpen, Briefcase, Linkedin, Twitter, Mail } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-6xl md:text-5xl font-bold text-white mb-7 tracking-wider">
                  <span className="mx-2">About</span>
                  <span className="mx-2 text-hads-pink">HADS</span>
                  <span className="mx-2">Cloud Solutions</span>
                </h1>
                <div className="mx-2">
                  <p className="text-2xl text-gray-300 mb-7 font-light leading-relaxed">
                    Delivering innovative cloud solutions to drive your business transformation
                  </p>
                  <p className="text-lg text-gray-400 mb-7">
                    At HADS TechNovations LLP, we help improve your business with cloud technology. We offer solutions for cloud migration and ongoing support, all tailored to your needs.
                  </p>
                </div>
              </div>

              {/* Animation Section */}
              <div className="w-full md:w-1/2 h-[400px] md:h-[400px]">
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

        {/* Company Overview */}
        <section className="py-16 bg-white shadow-lg rounded-lg mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">Company</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                HADS is a leading technology and cloud solutions provider, specializing in AWS
                cloud migration, consulting, and managed services. As an AWS partner,
                HADS helps businesses seamlessly transition to the cloud, optimize
                infrastructure, and leverage AWS's advanced capabilities for scalability,
                security, and cost efficiency.
              </p>
              <p className="text-xl text-gray-700 mb-8">
                With deep expertise in AWS solutions like EC2, RDS, S3, Lambda, Kubernetes,
                and AI/ML, HADS empowers businesses to innovate and scale efficiently in the
                cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="text-gray-800">Our </span>
                <span className="text-hads-pink">Leadership</span>
              </h2>
              
              {/* CEO Profile */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="h-80 bg-gradient-to-br from-hads-purple to-hads-pink flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                        alt="CEO Portrait" 
                        className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="uppercase tracking-wide text-sm text-hads-teal font-semibold">Founder & CEO</div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">John Smith</h3>
                    <p className="text-gray-600 text-lg italic mt-1 mb-4">"Empowering businesses through cloud innovation"</p>
                    
                    <p className="text-gray-700 mt-4">
                      With over 15 years of experience in cloud technology and digital transformation, John has led HADS from its inception to becoming a trusted partner for businesses worldwide. His vision for accessible cloud solutions drives our mission to empower organizations of all sizes.
                    </p>
                    
                    <p className="text-gray-700 mt-4">
                      Prior to founding HADS, John held leadership positions at Google Cloud and AWS, where he developed expertise in enterprise-scale cloud migrations and digital transformation strategies.
                    </p>
                    
                    <div className="mt-6 flex space-x-4">
                      <a href="#" className="text-hads-purple hover:text-hads-teal transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-hads-purple hover:text-hads-teal transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-hads-purple hover:text-hads-teal transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Executive Team */}
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">Executive Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    name: "Sarah Johnson",
                    title: "Chief Technology Officer",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                    bio: "Leading our technical strategy and innovation initiatives with 12+ years of cloud engineering experience."
                  },
                  {
                    name: "Michael Chen",
                    title: "Chief Operations Officer",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                    bio: "Overseeing global operations and ensuring service excellence across all client engagements."
                  },
                  {
                    name: "Priya Patel",
                    title: "VP of Client Success",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                    bio: "Dedicated to building lasting client relationships and ensuring their cloud journey exceeds expectations."
                  }
                ].map((exec, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={exec.image} 
                        alt={`${exec.name} portrait`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900">{exec.name}</h4>
                      <p className="text-hads-teal font-medium text-sm mb-3">{exec.title}</p>
                      <p className="text-gray-600 text-sm">{exec.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partners - NEW */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-gray-800">Our Strategic </span>
              <span className="text-hads-pink">Partners</span>
            </h2>
            
            <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" 
                    alt="AWS Logo" 
                    className="h-16 mb-6 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AWS Partner Network</h3>
                  <p className="text-gray-600 text-center">As a certified AWS partner, we leverage the full power of AWS's cloud ecosystem to deliver enterprise-grade solutions.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google-cloud-platform.svg/2560px-Google-cloud-platform.svg.png" 
                    alt="Google Cloud Logo" 
                    className="h-16 mb-6 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Cloud Partner</h3>
                  <p className="text-gray-600 text-center">Our Google Cloud partnership enables us to build transformative solutions using Google's innovative technologies.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" 
                    alt="Microsoft Logo" 
                    className="h-16 mb-6 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Microsoft Solutions Partner</h3>
                  <p className="text-gray-600 text-center">We're certified to deploy and manage Microsoft Azure environments and integrate Microsoft services.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png.webp" 
                    alt="Docker Logo" 
                    className="h-16 mb-6 object-contain bg-blue-600 p-2 rounded"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Docker Technology Partner</h3>
                  <p className="text-gray-600 text-center">Our containerization expertise is backed by our partnership with Docker for seamless application deployment.</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-700 mb-6">We maintain close partnerships with industry leaders to ensure our clients benefit from cutting-edge technologies and best practices across their cloud journey.</p>
                <Button className="bg-hads-purple hover:bg-hads-pink transition-colors">
                  <Link to="/partners" className="text-white">Learn More About Our Partners</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-wide">
                <span className="mx-2 text-gray-800">Our Mission</span>
                <span className="text-hads-pink">&</span>
                <span className="mx-2 text-gray-800">Values</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is to empower organizations to harness the full potential of cloud technologies, enabling them to innovate faster, operate more efficiently, and scale with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-purple/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-hads-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Client-First Approach</h3>
                <p className="text-gray-700">We prioritize our clients' needs, ensuring our solutions align with their business goals.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-teal/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-hads-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Technology-Driven Solutions</h3>
                <p className="text-gray-700">We stay ahead of the curve by exploring new technologies to create innovative solutions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-hads-pink/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-hads-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">High-Performance Standards</h3>
                <p className="text-gray-700">We deliver top-tier solutions, ensuring the highest standards in every project.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Relationships</h3>
                <p className="text-gray-700">We foster long-term partnerships built on trust and mutual success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section from component */}
        <div className="mt-8">
          <AboutSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
