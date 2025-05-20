
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

// Lazy load page components
const IndexPage = lazyLoadComponent(() => import('./pages/index'));
const AboutPage = lazyLoadComponent(() => import('./pages/AboutPage'));
const CloudMigrationPage = lazyLoadComponent(() => import('./pages/CloudMigrationPage'));
const ContactPage = lazyLoadComponent(() => import('./pages/ContactPage'));
const FinOpsPage = lazyLoadComponent(() => import('./pages/FinOpsPage'));
const DevOpsPage = lazyLoadComponent(() => import('./pages/DevOpsPage'));
const ContainerizationPage = lazyLoadComponent(() => import('./pages/ContainerizationPage'));
const SecurityCompliancePage = lazyLoadComponent(() => import('./pages/SecurityCompliancePage'));
const PartnersPage = lazyLoadComponent(() => import('./pages/PartnersPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center w-full h-screen bg-white">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
  </div>
);

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // Create a QueryClient instance with optimized settings
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  }));

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="hads-theme">
        <QueryClientProvider client={queryClient}>
          <ResponsiveProvider>
            <Router>
              <ScrollToTop />
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
