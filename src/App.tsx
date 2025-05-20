
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import IndexPage from './pages/index';
import AboutPage from './pages/AboutPage';
import CloudMigrationPage from './pages/CloudMigrationPage';
import ContactPage from './pages/ContactPage';
import FinOpsPage from './pages/FinOpsPage';
import DevOpsPage from './pages/DevOpsPage';
import ContainerizationPage from './pages/ContainerizationPage';
import SecurityCompliancePage from './pages/SecurityCompliancePage';
import PartnersPage from './pages/PartnersPage';
import NotFound from './pages/NotFound';
import Logo from './components/logo'
import { Toaster } from './components/ui/toaster';
import { ThemeProvider } from './components/theme-provider';
import { ResponsiveProvider } from './components/ResponsiveContext';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // Create a QueryClient instance
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="hads-theme">
        <QueryClientProvider client={queryClient}>
          <ResponsiveProvider>
            <Router>
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
              <Toaster />
            </Router>
          </ResponsiveProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
