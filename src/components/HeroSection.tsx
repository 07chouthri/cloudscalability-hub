import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useResponsive } from "@/components/ResponsiveContext";
import { Link } from "react-router-dom";
import Viedo_For_Home_Page_Desktop from "../video/Home Page Desktop.mp4";
import Viedo_For_Home_Page_Mobile from "../video/Home Page Mobile.mp4";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoDesktopRef = useRef<HTMLVideoElement>(null);
  const videoMobileRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { isMobile, isTablet } = useResponsive();
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute state
  const toggleMute = () => {
    if (videoDesktopRef.current && videoMobileRef.current) {
      const videoElements = [videoDesktopRef.current, videoMobileRef.current];
      videoElements.forEach(video => {
        video.muted = !video.muted;
      });
      // Update the state with the new mute status
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes fade-up {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Mobile View CSS */
    @media (max-width: 767px) {
      .video-mobile {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        box-sizing: border-box !important; /* Ensure box-sizing is applied */
      }
      .video-desktop {
        display: none !important;
      }
      .mute-button {
        top: 10px !important;
        right: 10px !important;
        font-size: 18px !important;
      }
    }

    /* Desktop and Tablet View CSS */
    @media (min-width: 768px) {
      .video-mobile {
        display: none !important;
      }

      .video-desktop {
        display: block !important;
        width: 100% !important;
        margin-bottom: 140px;      
        height: auto !important;
      }
    }
  `}
      </style>
      <div
        ref={sectionRef}
        className="relative w-full min-h-[calc(100vh-10rem)] mt-[80px] pt-[60px] pb-[60px] flex items-center justify-start bg-black overflow-hidden rounded-lg md:rounded-2xl"
      >
        {/* Background Video - Show on all devices */}
        <video
          ref={videoDesktopRef}
          src={Viedo_For_Home_Page_Desktop}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute video-desktop"
        />

        {/* Background Video - Show only on mobile */}
        <video
          ref={videoMobileRef}
          src={Viedo_For_Home_Page_Mobile}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute video-mobile"
        />

        {/* Mute/Unmute Button - Show on all devices */}
        <button
          onClick={toggleMute}
          className="absolute top-5 right-5 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition mute-button"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Content */}
        <div
          className={`z-20 px-4 sm:px-6 md:pl-12 md:pr-6 text-left text-white max-w-full md:max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Tagline */}
          <div
            className="inline-block mb-4 md:mb-6 px-2 md:px-3 py-1 bg-white/10 border border-white/20 rounded-full 
              text-xs md:text-sm font-medium uppercase tracking-wider backdrop-blur-sm"
            style={{
              animation: "fade-up 1s ease forwards",
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            Cloud Migration & Digital Transformation
          </div>

          {/* Heading */}
          <div className="flex flex-col items-start text-left p-0">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 md:mb-4"
              style={{
                animation: "fade-up 1s ease forwards",
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              <span className="block mb-1">
                Move to the Cloud Easily with HADS
              </span>

              <span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 
                  font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl font-mono whitespace-normal sm:whitespace-nowrap overflow-hidden"
                style={{
                  maxWidth: "100%",
                  animation: "typing 4s steps(40, end) forwards",
                  display: "inline-block",
                }}
              >
                Your trusted cloud migration partner...
              </span>

              <span
                className="block text-base sm:text-lg md:text-xl lg:text-2xl mt-2"
                style={{
                  animation: "fade-up 1s ease forwards",
                  animationDelay: "0.8s",
                  opacity: 0,
                }}
              >
                With expert support
              </span>
            </h1>

            <p
              className="mt-8 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-full md:max-w-lg leading-relaxed mb-4 md:mb-6"
              style={{
                animation: "fade-up 1s ease forwards",
                animationDelay: "1s",
                opacity: 0,
              }}
            >
              HADS makes your cloud journey smooth with expert guidance and smart solutions tailored to your business.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-start">
            <Link to="/contact">
              <Button
                variant="cloud"
                size={isMobile ? "default" : "hero"}
                style={{
                  animation: "fade-up 1s ease forwards",
                  animationDelay: "1.2s",
                  opacity: 0,
                }}
              >
                Free Cloud Assessment
                <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
