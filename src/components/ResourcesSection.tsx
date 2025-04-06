
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useInView } from '../hooks/use-in-view';
import { ArrowRight, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose, DialogFooter } from './ui/dialog';
import { Skeleton } from './ui/skeleton';
import HeroImage from './HeroImage';
import CloudManagementServices from  '../images/Cloud Management Services.avif';
import CloudMigration from  '../images/Cloud Migration.avif';
import CloudSolutions from  '../images/Cloud Solutions.avif';

type Resource = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  longDescription?: string;
};

const resources: Resource[] = [
  {
    id: 1,
    title: "Cloud Solutions",
    description: "Establishing a robust cloud infrastructure for high availability and performance.",
    image: CloudSolutions,
    tags: ["AWS", "AZURE", "GOOGLE CLOUD"],
    slug: "cloud-solutions",
    longDescription: "Our cloud solutions focus on creating resilient, highly available infrastructure tailored to your business needs. We design scalable architectures that can handle peak loads while maintaining optimal performance at all times. Our experts implement robust security measures, automated scaling, and disaster recovery processes to ensure business continuity."
  },
  {
    id: 2,
    title: "Cloud Migration",
    description: "Ensuring a seamless transition to the cloud with minimal downtime.",
    image: CloudMigration,
    tags: ["CLOUD SECURITY", "DEVOPS", "CLOUD SOLUTIONS"],
    slug: "cloud-migration",
    longDescription: "Our proven migration methodology ensures minimal disruption to your business operations. We start with thorough assessment and planning, followed by careful data migration, application modernization, and rigorous testing. Throughout the process, we maintain parallel environments to eliminate risks and ensure a smooth cutover."
  },
  {
    id: 3,
    title: "Cloud Management Services",
    description: "Utilizing cloud-native tools for monitoring, security, and maintenance.",
    image:CloudManagementServices,
    tags: ["FINOPS", "DEVOPS", "CONTAINERIZATION"],
    slug: "cloud-management",
    longDescription: "Post-migration, our cloud management services ensure your cloud environment stays optimized, secure, and cost-effective. We implement 24/7 monitoring, automated alerting, security compliance checks, and regular maintenance routines. Our FinOps practices help identify cost-saving opportunities while maintaining performance standards."
  }
];

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setDialogOpen(true);
  };

  const handleLearnMore = () => {
    setDialogOpen(false);
    // Additional action if needed when Learn More is clicked
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-hads-dark mb-16 transition-all duration-700 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>Explore
          <span className='mx-2 text-hads-pink'>latest</span>resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform cursor-pointer group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isInView && `transition-delay-${index * 100}`
              )}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : '0ms',
              }}
              onClick={() => handleResourceClick(resource)}
            >
              <div className="relative overflow-hidden h-60">
                <div className="absolute inset-0 bg-gradient-to-r from-hads-purple/20 to-hads-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center justify-center py-1 px-3 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-hads-purple">
                    Professional Cloud Platform
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-hads-dark group-hover:text-hads-purple transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {resource.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs font-medium text-hads-teal border-hads-teal/30 hover:bg-hads-teal/10">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div
                  className="inline-flex items-center mt-6 text-hads-purple font-medium group-hover:text-hads-pink transition-colors"
                >
                  Read more
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-hads-dark">
              {selectedResource?.title}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          <div className="relative h-64 sm:h-72 overflow-hidden rounded-xl my-4">
            {selectedResource && (
              <img
                src={selectedResource.image}
                alt={selectedResource.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <DialogDescription className="text-base text-gray-700 leading-relaxed">
            {selectedResource?.longDescription || selectedResource?.description}
          </DialogDescription>

          {selectedResource && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedResource.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs font-medium text-hads-teal border-hads-teal/30 hover:bg-hads-teal/10">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <DialogFooter className="flex justify-between mt-6 gap-4">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>

            <Button
              variant="glow"
              onClick={handleLearnMore}
              className="flex-1"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResourcesSection;
