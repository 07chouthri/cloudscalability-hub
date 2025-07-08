
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from './components/theme-provider';
import { ResponsiveProvider } from './components/ResponsiveContext';
import { Toaster } from './components/ui/toaster';
import { lazyLoadComponent } from './utils/lazyLoad';
import Logo from './components/logo';
import NotFound from './pages/NotFound';
import StylesInjector from './components/StylesInjector';

// Optimized lazy loading with better error handling and preloading
const IndexPage = lazyLoadComponent(() => import('./pages/index'));
const AboutPage = lazyLoadComponent(() => import('./pages/AboutPage'));
const CloudMigrationPage = lazyLoadComponent(() => import('./pages/CloudMigrationPage'));
const ContactPage = lazyLoadComponent(() => import('./pages/ContactPage'));
const FinOpsPage = lazyLoadComponent(() => import('./pages/FinOpsPage'));
const DevOpsPage = lazyLoadComponent(() => import('./pages/DevOpsPage'));
const ContainerizationPage = lazyLoadComponent(() => import('./pages/ContainerizationPage'));
const SecurityCompliancePage = lazyLoadComponent(() => import('./pages/SecurityCompliancePage'));
const PartnersPage = lazyLoadComponent(() => import('./pages/PartnersPage'));
const BlogsPage = lazyLoadComponent(() => import('./pages/BlogsPage'));

// Optimized loading fallback with better UX
const PageLoader = () => (
  <div className="flex items-center justify-center w-full h-screen bg-white" aria-label="Loading content">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-hads-purple" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-sm text-gray-600 animate-pulse">Loading...</p>
    </div>
  </div>
);

// Optimized scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top with performance optimization
    const scrollToTop = () => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(scrollToTop);
  }, [pathname]);
  
  return null;
}

function App() {
  // Optimized QueryClient with better caching and performance settings
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => failureCount < 2,
        staleTime: 10 * 60 * 1000, // 10 minutes
        gcTime: 15 * 60 * 1000, // 15 minutes
        refetchOnMount: false,
        refetchOnReconnect: 'always',
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="hads-theme">
        <QueryClientProvider client={queryClient}>
          <ResponsiveProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <ScrollToTop />
              <StylesInjector />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/finops" element={<FinOpsPage />} />
                  <Route path="/devops" element={<DevOpsPage />} />
                  <Route path="/cloud-managed-services" element={<ContainerizationPage />} />
                  <Route path="/security-compliance" element={<SecurityCompliancePage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/logo.png" element={<Logo />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Toaster />
            </Router>
          </ResponsiveProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
