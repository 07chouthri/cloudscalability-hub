import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  Cloud,
  Settings,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  ServerCog,
  Rocket,
} from 'lucide-react';
import { Button } from './ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <>
      {/* Services Section */}
      <section ref={sectionRef} className="bg-white py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <div className="flex items-center">
                  <div className="h-px w-12 bg-hads-pink mr-4"></div>
                  <h2
                    className={cn(
                      'text-3xl md:text-4xl font-bold text-hads-dark transition-all duration-500 transform',
                      isInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    )}
                  >
                    Accelerate,<span className="text-hads-pink">innovation</span>
                  </h2>
                </div>
                <h3
                  className={cn(
                    'text-2xl md:text-3xl font-bold text-hads-dark mt-2 transition-all duration-500 delay-50 transform',
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  )}
                >
                  get the competitive edge you need
                </h3>
              </div>
            </div>

            <p
              className={cn(
                'text-gray-700 mt-6 max-w-3xl transition-all duration-500 delay-100 transform',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
            >
              Our award-winning services are designed to drive agility,
              efficiency and transformative change. So you can meet your
              customer needs faster, build resilience and position yourself for
              lasting success. Your cloud-backed transformation starts here!
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className={cn(
                'border border-gray-200 rounded-xl p-8 transition-all duration-500 transform hover:shadow-xl hover:border-hads-teal/30 group',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-hads-teal/10 flex items-center justify-center mb-6 group-hover:bg-hads-teal/20 transition-colors">
                <Cloud size={32} className="text-hads-purple" />
              </div>
              <h3 className="text-xl font-semibold text-hads-dark mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Expert cloud migration and modernization services to help you
                leverage AWS, Azure, and Google Cloud for optimized performance,
                security, and cost efficiency.
              </p>
              <Button variant="pastel" asChild>
                <Link
                  to="/services/cloud-solutions"
                  className="inline-flex items-center font-medium group"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>

            {/* Card 2 */}
            <div
              className={cn(
                'border border-gray-200 rounded-xl p-8 transition-all duration-500 transform hover:shadow-xl hover:border-hads-teal/30 group',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: isInView ? '200ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-hads-teal/10 flex items-center justify-center mb-6 group-hover:bg-hads-teal/20 transition-colors">
                <Settings size={32} className="text-hads-purple" />
              </div>
              <h3 className="text-xl font-semibold text-hads-dark mb-4">
                Applications
              </h3>
              <p className="text-gray-600 mb-6">
                End-to-end application development, modernization, and
                management services that transform legacy systems into
                cloud-native, scalable solutions.
              </p>
              <Button variant="pastel" asChild>
                <Link
                  to="/services/applications"
                  className="inline-flex items-center font-medium group"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>

            {/* Card 3 */}
            <div
              className={cn(
                'border border-gray-200 rounded-xl p-8 transition-all duration-500 transform hover:shadow-xl hover:border-hads-teal/30 group',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: isInView ? '250ms' : '0ms' }}
            >
              <div className="w-16 h-16 rounded-full bg-hads-teal/10 flex items-center justify-center mb-6 group-hover:bg-hads-teal/20 transition-colors">
                <BarChart3 size={32} className="text-hads-purple" />
              </div>
              <h3 className="text-xl font-semibold text-hads-dark mb-4">
                Data & Analytics
              </h3>
              <p className="text-gray-600 mb-6">
                Unlock the value of your data with our analytics, data
                engineering, and AI/ML services that turn information into
                actionable insights for better decision-making.
              </p>
              <Button variant="pastel" asChild>
                <Link
                  to="/services/data-analytics"
                  className="inline-flex items-center font-medium group"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Section */}
      <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          {/* Animation */}
          <div className="mb-16 w-full h-96 mx-auto">
            <DotLottieReact
              src="https://lottie.host/6622227c-d1c9-4560-a959-c74377621906/aDCFtagX7m.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-800">Em-power Your </span>
            <span className="text-hads-pink">Digital Future</span>
            <span className="text-gray-800"> with Confidence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            At <strong>Hads Innovation Solution</strong>, we design scalable,
            cloud-native, and AI-powered strategies to take your business to
            the next level—secure, agile, and built for the future.
          </p>
          {/* 🔥 Updated Grid */}
          <div className="grid md:grid-cols-3 gap-6 text-left mt-16">
            {[
              {
                title: 'Digital Transformation Consulting',
                desc: 'We assess, strategize, and guide your organization through seamless digital transformation journeys tailored to your goals.',
                icon: <Rocket size={20} className="text-blue-600" />,
                bg: 'bg-blue-100',
              },
              {
                title: 'Cloud Architecture & Migration',
                desc: 'Migrate legacy systems to modern cloud environments with robust security, scalability, and cost-efficiency.',
                icon: <Cloud size={20} className="text-green-600" />,
                bg: 'bg-green-100',
              },
              {
                title: 'AI & Intelligent Automation',
                desc: 'Automate and optimize operations with smart AI/ML solutions, from predictive analytics to process automation.',
                icon: <BarChart3 size={20} className="text-purple-600" />,
                bg: 'bg-purple-100',
              },
              {
                title: 'Full-Stack Product Engineering',
                desc: 'From MVPs to enterprise platforms, we build robust web and mobile solutions using React, Node.js, and serverless technologies.',
                icon: <Settings size={20} className="text-rose-600" />,
                bg: 'bg-rose-100',
              },
              {
                title: 'DevOps & CI/CD Implementation',
                desc: 'Accelerate delivery with best-practice CI/CD pipelines, container orchestration, and infrastructure as code.',
                icon: <ServerCog size={20} className="text-yellow-600" />,
                bg: 'bg-yellow-100',
              },
              {
                title: 'Secure & Scalable APIs',
                desc: 'Design and deploy APIs that are RESTful, secure, and ready to scale with your business demands.',
                icon: <ShieldCheck size={20} className="text-cyan-600" />,
                bg: 'bg-cyan-100',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
