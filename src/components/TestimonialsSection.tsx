import { useRef } from 'react';
import { useInView } from '../hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  colorScheme: 'purple' | 'pink';
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Well executed wedding reception event by your professional team. The decoration was beautiful and elegant according to our requirement. Thank you so much!",
    name: "David Onley",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'purple'
  },
  {
    id: 2,
    quote: "Would like to thank you for your professionalism in ABC corporate event. All our visited clients are impressed by your quality. Looking forward for more projects",
    name: "Ben Watts",
    title: "Add text here", 
    company: "Designation",
    colorScheme: 'pink'
  },
  {
    id: 3,
    quote: "Add testimonial here",
    name: "Erika Blackwell",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'purple'
  },
  {
    id: 4,
    quote: "Add testimonial here",
    name: "Lewis Owen",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'pink'
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hads-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-hads-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hads-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-hads-purple transition-all duration-700 transform mb-6",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Client testimonials
          </h2>

          <p className={cn(
            "text-lg text-gray-600 max-w-5xl mx-auto transition-all duration-700 delay-150 transform leading-relaxed",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            This slide focuses on client reviews and testimonials post experiencing event management services which helps to build credibility and reliability to business and helps in decision making process.
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={cn(
              "flex flex-col items-center text-center transition-all duration-500",
              isInView ? `opacity-100 translate-y-0 delay-${300 + index * 100}` : "opacity-0 translate-y-10"
            )}>
              {/* Avatar with animated colored border */}
              <div className={cn(
                "relative mb-6 p-1 rounded-full transition-all duration-500 hover:scale-105",
                testimonial.colorScheme === 'purple' 
                  ? "bg-gradient-to-br from-hads-purple to-hads-teal shadow-lg shadow-hads-purple/20" 
                  : "bg-gradient-to-br from-hads-pink to-hads-purple shadow-lg shadow-hads-pink/20"
              )}>
                <div className="bg-white rounded-full p-1">
                  <Avatar className="h-32 w-32">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className={cn(
                      "text-2xl font-semibold text-white",
                      testimonial.colorScheme === 'purple' ? "bg-hads-purple" : "bg-hads-pink"
                    )}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Name badge with gradient */}
              <div className={cn(
                "px-8 py-3 rounded-full text-white font-semibold text-lg mb-4 transition-all duration-500 hover:scale-105 shadow-lg",
                testimonial.colorScheme === 'purple' 
                  ? "bg-gradient-to-r from-hads-purple to-hads-teal shadow-hads-purple/30" 
                  : "bg-gradient-to-r from-hads-pink to-hads-purple shadow-hads-pink/30"
              )}>
                {testimonial.name}
              </div>

              {/* Designation */}
              <p className="text-gray-600 mb-6 font-medium">
                {testimonial.company}: {testimonial.title}
              </p>

              {/* Testimonial card with enhanced design */}
              <div className={cn(
                "relative bg-white border-2 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group",
                testimonial.colorScheme === 'purple' 
                  ? "border-hads-purple shadow-hads-purple/10 hover:shadow-hads-purple/20" 
                  : "border-hads-pink shadow-hads-pink/10 hover:shadow-hads-pink/20"
              )}>
                {/* Gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                  testimonial.colorScheme === 'purple' 
                    ? "bg-gradient-to-br from-hads-purple to-hads-teal" 
                    : "bg-gradient-to-br from-hads-pink to-hads-purple"
                )} />

                {/* Speech bubble dots with animation */}
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125",
                        testimonial.colorScheme === 'purple' ? "bg-hads-purple" : "bg-hads-pink"
                      )}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed relative z-10">
                  {testimonial.quote}
                </p>

                {/* Bottom accent line with gradient */}
                <div className={cn(
                  "h-1 mx-auto mt-6 rounded-full w-16 transition-all duration-300 group-hover:w-20",
                  testimonial.colorScheme === 'purple' 
                    ? "bg-gradient-to-r from-hads-purple to-hads-teal" 
                    : "bg-gradient-to-r from-hads-pink to-hads-purple"
                )} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;