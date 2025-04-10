
import React, { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

const GlobalCoverageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const countries = [
    {
      code: "AE",
      name: "UAE",
      continent: "Asia",
      logo: <img src="https://flagcdn.com/w160/ae.png" alt="UAE Flag" className="w-16 h-12 mb-4 mx-auto object-cover rounded shadow-sm" />
    },
    {
      code: "IN",
      name: "India",
      continent: "Asia",
      logo: <img src="https://flagcdn.com/w160/in.png" alt="India Flag" className="w-16 h-12 mb-4 mx-auto object-cover rounded shadow-sm" />
    },
    {
      code: "CA",
      name: "Canada",
      continent: "North America",
      logo: <img src="https://flagcdn.com/w160/ca.png" alt="Canada Flag" className="w-16 h-12 mb-4 mx-auto object-cover rounded shadow-sm" />
    },
    {
      code: "US",
      name: "United States",
      continent: "North America",
      logo: <img src="https://flagcdn.com/w160/us.png" alt="US Flag" className="w-16 h-12 mb-4 mx-auto object-cover rounded shadow-sm" />
    },
    {
      code: "AU",
      name: "Australia",
      continent: "Oceania",
      logo: <img src="https://flagcdn.com/w160/au.png" alt="Australia Flag" className="w-16 h-12 mb-4 mx-auto object-cover rounded shadow-sm" />
    },
    {
      code: "AF",
      name: "Africa",
      continent: "Africa",
      logo: (
        <img
          src="https://img.icons8.com/color/96/africa.png"
          alt="Africa Icon"
          className="w-16 h-16 mb-4 mx-auto object-contain"
        />
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 rounded-[20px] bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-hads-teal/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-hads-purple" />
            </div>
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-6 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-gray-800">Countries </span>
            <span className="text-hads-pink">We Seamlessly</span>
            <span className="text-gray-800"> Work With</span>
          </h2>
          <p className={cn(
            "text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            With a footprint that spans continents, we serve clients worldwide through localized expertise. From innovative tech hubs to emerging digital markets, we deliver seamless collaboration and top-tier solutions wherever they're needed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:border-hads-pink/50",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex justify-center">{country.logo}</div>
              <h3 className="text-xl font-semibold text-hads-dark">{country.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Reliable partners and ongoing collaborations</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCoverageSection;
