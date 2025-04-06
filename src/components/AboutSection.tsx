import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '../hooks/use-in-view';
import { Button } from './ui/button';
import { ArrowRight, Check, Award, Shield, Zap } from 'lucide-react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const [expanded, setExpanded] = useState(false);
  const { toast } = useToast();

  const handleLearnMore = () => {
    if (expanded) {
      toast({
        title: "About HADS",
        description: "HADS is a leading cloud solutions provider offering a comprehensive suite of services including cloud migration, containerization, DevOps, and FinOps. With certifications from AWS, Google Cloud, and Microsoft Azure, we help businesses transform their digital infrastructure.",
        duration: 5000,
      });
    } else {
      setExpanded(true);
      
      setTimeout(() => {
        const additionalContent = document.getElementById('additional-about-content');
        if (additionalContent) {
          additionalContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-hads-dark mb-4 transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            About 
            <span className=" mx-2 text-hads-pink">HADS</span>
          </h2>
          <p className={cn(
            "text-xl md:text-2xl text-hads-dark/90 max-w-3xl mx-auto transition-all duration-700 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Your Trusted Partner in Cloud Solutions
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={cn(
            "bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-700 delay-200 transform hover:shadow-md",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-semibold text-hads-purple mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To empower organizations with innovative cloud solutions that drive digital transformation and business growth.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-hads-teal to-hads-purple rounded"></div>
          </div>
          
          <div className={cn(
            "bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-700 delay-300 transform hover:shadow-md",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-semibold text-hads-purple mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              To be the leading cloud solutions provider, recognized for excellence in service delivery and client satisfaction.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-hads-teal to-hads-purple rounded"></div>
          </div>
          
          <div className={cn(
            "bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-700 delay-400 transform hover:shadow-md",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-xl font-semibold text-hads-purple mb-4">Our Values</h3>
            <p className="text-gray-700 mb-4">
              Innovation, Integrity, Collaboration, Excellence, and Client-Centricity guide everything we do.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-hads-teal to-hads-purple rounded"></div>
          </div>
        </div>

        {/* Competencies Section */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-500 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-bold text-center mb-8">Our
             Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.7023 2.89862L17.4599 4.40807C16.8481 3.94598 16.1682 3.5604 15.4446 3.26186L14.9362 1.5H9.06382L8.55545 3.26186C7.83181 3.5604 7.1519 3.94598 6.54006 4.40807L5.29772 2.89862L1.5 6.9686L2.90851 8.17117C2.67604 8.7561 2.5 9.3733 2.5 10C2.5 10.6267 2.67604 11.2439 2.90851 11.8288L1.5 13.0314L5.29772 17.1014L6.54006 15.5919C7.1519 16.054 7.83181 16.4396 8.55545 16.7381L9.06382 18.5H14.9362L15.4446 16.7381C16.1682 16.4396 16.8481 16.054 17.4599 15.5919L18.7023 17.1014L22.5 13.0314L21.0915 11.8288C21.324 11.2439 21.5 10.6267 21.5 10C21.5 9.3733 21.324 8.7561 21.0915 8.17117L22.5 6.9686L18.7023 2.89862ZM12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">AWS Solutions</h4>
              </div>
              <p className="text-sm text-gray-600">
                Expertise in deploying and managing AWS infrastructure, storage, compute, and serverless services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.4 7.5C22.2 8.3 22.2 9.5 21.4 10.3L18.6 13.1L10.8 5.3L13.6 2.5C14.4 1.7 15.6 1.7 16.4 2.5L18.5 4.6L16.5 6.6L18.4 8.5L20.4 6.5L21.4 7.5M3.1 14.9L0 22L7.1 18.9L21.1 4.9L19.1 2.9L5.1 16.9L3.1 14.9Z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">DevOps & CI/CD</h4>
              </div>
              <p className="text-sm text-gray-600">
                Streamlined development workflows with automated testing, deployment pipelines, and infrastructure as code.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16V7.5C21 5.6 19.4 4 17.5 4H14V2H10V4H6.5C4.6 4 3 5.6 3 7.5V16C3 17.9 4.6 19.5 6.5 19.5H17.5C19.4 19.5 21 17.9 21 16M19 16C19 16.8 18.3 17.5 17.5 17.5H6.5C5.7 17.5 5 16.8 5 16V13H19V16M19 11H5V7.5C5 6.7 5.7 6 6.5 6H17.5C18.3 6 19 6.7 19 7.5V11M17 8H15V10H17V8M8 16H16V15H8V16"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">Containerization</h4>
              </div>
              <p className="text-sm text-gray-600">
                Docker and Kubernetes implementation for scalable, portable application deployment across cloud environments.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18,14H14V18H10V14H6V10H10V6H14V10H18M20,2H4C2.89,2 2,2.89 2,4V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.11,2 20,2Z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold">FinOps</h4>
              </div>
              <p className="text-sm text-gray-600">
                Cloud cost optimization and financial management to maximize ROI on cloud investments.
              </p>
            </div>
          </div>
        </div>

        {/* Additional expanded content */}
        {expanded && (
          <div 
            id="additional-about-content"
            className="animate-fade-down mb-16"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-hads-purple mb-6">Our Company Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2015, HADS began as a small team of cloud enthusiasts with a vision to simplify cloud adoption for businesses of all sizes. What started as a specialized AWS consulting firm has grown into a comprehensive cloud solutions provider with global reach.
                </p>
                <p>
                  Our journey has been defined by continuous learning and adaptation to the rapidly evolving cloud landscape. From helping startups build their first cloud-native applications to guiding enterprise clients through complex digital transformations, we've built a reputation for technical excellence and outstanding client service.
                </p>
                <p>
                  Today, HADS is proud to be a certified partner with all major cloud providers and employs over 200 cloud specialists across four continents. Our diverse team brings together expertise in cloud architecture, DevOps, security, data engineering, and financial operations to deliver holistic cloud solutions.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-hads-purple mb-4">Our Leadership Team</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-hads-purple to-hads-pink flex items-center justify-center text-white font-semibold mr-3 mt-1">JD</div>
                    <div>
                      <h5 className="font-semibold">Jane Doe</h5>
                      <p className="text-sm text-gray-600">Founder & CEO</p>
                      <p className="text-sm text-gray-700 mt-1">15+ years in cloud architecture and digital transformation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-hads-teal to-blue-500 flex items-center justify-center text-white font-semibold mr-3 mt-1">JS</div>
                    <div>
                      <h5 className="font-semibold">John Smith</h5>
                      <p className="text-sm text-gray-600">CTO</p>
                      <p className="text-sm text-gray-700 mt-1">Former AWS Solution Architect with expertise in enterprise cloud migration.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-hads-purple mb-4">Global Presence</h4>
                <p className="text-gray-700 mb-4">With offices in key technology hubs and a distributed team of experts, we deliver cloud solutions to clients worldwide.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <p className="font-semibold text-hads-purple">San Francisco</p>
                    <p className="text-sm text-gray-600">Headquarters</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <p className="font-semibold text-hads-purple">London</p>
                    <p className="text-sm text-gray-600">EMEA Office</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <p className="font-semibold text-hads-purple">Singapore</p>
                    <p className="text-sm text-gray-600">APAC Office</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <p className="font-semibold text-hads-purple">Toronto</p>
                    <p className="text-sm text-gray-600">Canada Office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-600 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Awards</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.7023 2.89862L17.4599 4.40807C16.8481 3.94598 16.1682 3.5604 15.4446 3.26186L14.9362 1.5H9.06382L8.55545 3.26186C7.83181 3.5604 7.1519 3.94598 6.54006 4.40807L5.29772 2.89862L1.5 6.9686L2.90851 8.17117C2.67604 8.7561 2.5 9.3733 2.5 10C2.5 10.6267 2.67604 11.2439 2.90851 11.8288L1.5 13.0314L5.29772 17.1014L6.54006 15.5919C7.1519 16.054 7.83181 16.4396 8.55545 16.7381L9.06382 18.5H14.9362L15.4446 16.7381C16.1682 16.4396 16.8481 16.054 17.4599 15.5919L18.7023 17.1014L22.5 13.0314L21.0915 11.8288C21.324 11.2439 21.5 10.6267 21.5 10C21.5 9.3733 21.324 8.7561 21.0915 8.17117L22.5 6.9686L18.7023 2.89862ZM12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-lg">AWS Certified Partner</h4>
              <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200">Gold Level</Badge>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22L3.80404 14.0179C2.8078 13.0507 2.0768 11.8221 1.6733 10.4666C1.26979 9.11101 1.19906 7.67634 1.46648 6.28433C1.7339 4.89232 2.33201 3.5886 3.20184 2.48407C4.07167 1.37954 5.18879 0.501852 6.44631 0.0294109C7.70384 -0.44303 9.05576 -0.147153 10.4789 0.394668C11.902 0.93649 13.2395 1.80083 14.3478 2.93608C15.4561 4.07132 16.299 5.44929 16.8135 6.95964C17.328 8.46999 17.5002 10.0746 17.3162 11.6596" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.25 17C22.25 17.4142 21.9142 17.75 21.5 17.75C21.0858 17.75 20.75 17.4142 20.75 17H22.25ZM16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697C15.7374 11.1768 15.2626 11.1768 14.9697 11.4697L16.0303 12.5303ZM19.5 21.25C17.7761 21.25 16.25 19.7239 16.25 18H17.75C17.75 18.9665 18.5335 19.75 19.5 19.75V21.25ZM16.25 18C16.25 16.2761 17.7761 14.75 19.5 14.75V16.25C18.5335 16.25 17.75 17.0335 17.75 18H16.25ZM19.5 14.75C21.2239 14.75 22.75 16.2761 22.75 18H21.25C21.25 17.0335 20.4665 16.25 19.5 16.25V14.75ZM20.75 17V21H19.25V17H20.75ZM12 21.75H19.5V23.25H12V21.75ZM14.9697 11.4697L11.4697 14.9697L12.5303 16.0303L16.0303 12.5303L14.9697 11.4697Z" fill="currentColor"/>
                </svg>
              </div>
              <h4 className="font-semibold text-lg">Google Cloud Partner</h4>
              <Badge className="mt-2 bg-green-100 text-green-700 hover:bg-green-200">Premier</Badge>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 8H10V14H18V18H6V8Z" fill="currentColor"/>
                  <path d="M18 8H14V4H6V14H10V18H18V8Z" fill="currentColor" fillOpacity="0.3"/>
                </svg>
              </div>
              <h4 className="font-semibold text-lg">Microsoft Azure Gold</h4>
              <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200">Certified</Badge>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 text-gray-700">
                <Shield className="w-full h-full" />
              </div>
              <h4 className="font-semibold text-lg">ISO 27001 Certified</h4>
              <Badge className="mt-2 bg-gray-100 text-gray-700 hover:bg-gray-200">Security</Badge>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-700 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-bold text-center mb-8">Our Partners</h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <svg className="h-10 w-24" viewBox="0 0 120 60" fill="currentColor">
                <path d="M33.458,57.844H22.212V34.386L13.636,51.813h-5.318L-0.045,34.386v23.457h-11.247V2.115h10.275l17.124,27.367L33.232,2.115h10.274v55.729H33.458z M45.623,42.934v-0.174c0-8.893,7.129-16.092,16.751-16.092c9.623,0,16.751,7.027,16.751,15.92v0.173c0,8.891-7.129,16.09-16.75,16.09C52.752,58.851,45.623,51.825,45.623,42.934 M68.087,42.934v-0.174c0-3.248-2.348-6.063-5.713-6.063c-3.335,0-5.622,2.74-5.622,5.987v0.175c0,3.247,2.348,6.06,5.714,6.06C65.799,48.92,68.087,46.181,68.087,42.934 M84.607,2.114h11.247v55.729H84.607V2.114z M97.088,42.934v-0.174c0-8.893,7.128-16.092,16.752-16.092c9.621,0,16.75,7.027,16.75,15.92v0.173c0,8.891-7.129,16.09-16.75,16.09C104.217,58.851,97.088,51.825,97.088,42.934 M119.552,42.934v-0.174c0-3.248-2.349-6.063-5.712-6.063c-3.337,0-5.624,2.74-5.624,5.987v0.175c0,3.247,2.348,6.06,5.714,6.06C117.262,48.92,119.552,46.181,119.552,42.934"></path>
              </svg>
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <svg className="h-10 w-24" viewBox="0 0 120 60" fill="currentColor">
                <path d="M104.5,25l15-24.5h-30L104.5,25z M104.5,35L89.5,10.5h30L104.5,35z M75,20.5l15-25h-30L75,20.5z M135,20.5l15-25h-30L135,20.5z M165,20.5l15-25h-30L165,20.5z M75,31l-15,25h30L75,31z M135,31l-15,25h30L135,31z M165,31l-15,25h30L165,31z M15,39.5L0,64h30L15,39.5z M15,29.5L30,5H0L15,29.5z M45,39.5L30,64h30L45,39.5z M45,29.5L60,5H30L45,29.5z"></path>
              </svg>
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <svg className="h-10 w-24" viewBox="0 0 120 60" fill="currentColor">
                <path d="M39.5,15C32.6,15,27,20.6,27,27.5S32.6,40,39.5,40S52,34.4,52,27.5S46.4,15,39.5,15z M39.5,35c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S43.6,35,39.5,35z M64,25c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S67.9,25,64,25z M89.5,20c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S93.6,20,89.5,20z M64,35c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S65.7,35,64,35z M14,35h-4V15h14c3.9,0,7,3.1,7,7s-3.1,7-7,7h-6v-4h6c1.7,0,3-1.3,3-3s-1.3-3-3-3H14V35z M79,35h-4V19h-6v-4h16v4h-6V35z M114,35h-4V19h-6v-4h16v4h-6V35z"></path>
              </svg>
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <svg className="h-10 w-24" viewBox="0 0 120 60" fill="currentColor">
                <path d="M40.9,40.4h20.6c3.8,0,6.9-3.1,6.9-6.9V18.2L40.9,40.4z M33.1,33.3l6.3-4.9l-6.3-4.9v9.8z M68.3,11.5H47.7c-3.8,0-6.9,3.1-6.9,6.9v15.3L68.3,11.5z M76.1,18.6L69.8,23.5l6.3,4.9V18.6z"></path>
              </svg>
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <svg className="h-10 w-24" viewBox="0 0 120 60" fill="currentColor">
                <path d="M14,35h5v-9h15v9h5V15H34v6H19v-6h-5V35z M67,20h-9v-5H48v5h-9v5h9v10h10V25h9V20z M96,20l-5-5H76v5v5v10h5h15v-5H81v-5h15V20z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

