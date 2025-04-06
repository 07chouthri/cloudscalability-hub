
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";
import CloudMigrationPage from "./pages/CloudMigrationPage";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import ContainerizationPage from "./pages/ContainerizationPage";
import FinOpsPage from "./pages/FinOpsPage";
import DevOpsPage from "./pages/DevOpsPage";

function App() {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/cloud-solutions" element={<ContainerizationPage />} />
            <Route path="/services/applications" element={<DevOpsPage />} />
            <Route path="/services/data-analytics" element={<FinOpsPage />} />
            <Route path="/services" element={<NotFound />} />
            <Route path="/careers" element={<NotFound />} />
            <Route path="/resources/:slug" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
