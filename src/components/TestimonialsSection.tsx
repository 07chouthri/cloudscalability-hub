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
  colorScheme: 'teal' | 'coral';
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Well executed wedding reception event by your professional team. The decoration was beautiful and elegant according to our requirement. Thankyou so much!",
    name: "David Onley",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'teal'
  },
  {
    id: 2,
    quote: "Would like to thankyou for your professionalism in ABC corporate event. All our visited clients are impressed by your quality. Looking forward for more projects",
    name: "Ben Watts",
    title: "Add text here", 
    company: "Designation",
    colorScheme: 'coral'
  },
  {
    id: 3,
    quote: "Add testimonial here",
    name: "Erika Blackwell",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'teal'
  },
  {
    id: 4,
    quote: "Add testimonial here",
    name: "Lewis Owen",
    title: "Add text here",
    company: "Designation",
    colorScheme: 'coral'
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-700 transform mb-4",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Client testimonials
          </h2>

          <p className={cn(
            "text-lg text-gray-600 max-w-5xl mx-auto transition-all duration-700 delay-150 transform",
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
            <div key={testimonial.id} className="flex flex-col items-center text-center">
              {/* Avatar with colored border */}
              <div className={cn(
                "relative mb-6 p-1 rounded-full transition-all duration-500",
                testimonial.colorScheme === 'teal' ? "bg-gradient-to-br from-teal-500 to-teal-600" : "bg-gradient-to-br from-pink-400 to-pink-500",
                isInView ? `opacity-100 translate-y-0 delay-${300 + index * 100}` : "opacity-0 translate-y-10"
              )}>
                <Avatar className="h-32 w-32">
                  <AvatarImage 
                    src={testimonial.avatar || `/lovable-uploads/61fba1ac-6762-41c7-876f-a64cb628ba1e.png`} 
                    alt={testimonial.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-semibold bg-gray-200">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Name badge */}
              <div className={cn(
                "px-6 py-3 rounded-full text-white font-semibold text-lg mb-4 transition-all duration-500",
                testimonial.colorScheme === 'teal' ? "bg-teal-600" : "bg-pink-500",
                isInView ? `opacity-100 translate-y-0 delay-${400 + index * 100}` : "opacity-0 translate-y-10"
              )}>
                {testimonial.name}
              </div>

              {/* Designation */}
              <p className={cn(
                "text-gray-600 mb-6 transition-all duration-500",
                isInView ? `opacity-100 translate-y-0 delay-${500 + index * 100}` : "opacity-0 translate-y-10"
              )}>
                {testimonial.company}: {testimonial.title}
              </p>

              {/* Testimonial card with speech bubble effect */}
              <div className={cn(
                "relative bg-white border-2 rounded-2xl p-6 shadow-sm transition-all duration-500",
                testimonial.colorScheme === 'teal' ? "border-teal-600" : "border-pink-500",
                isInView ? `opacity-100 translate-y-0 delay-${600 + index * 100}` : "opacity-0 translate-y-10"
              )}>
                {/* Speech bubble dots */}
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-2 h-2 rounded-full",
                        testimonial.colorScheme === 'teal' ? "bg-teal-600" : "bg-pink-500"
                      )}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Bottom line accent */}
                <div className={cn(
                  "h-1 mx-auto mt-6 rounded-full w-16",
                  testimonial.colorScheme === 'teal' ? "bg-teal-600" : "bg-pink-500"
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