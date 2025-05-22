
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Index from "./pages/Index";
import Puzzles from "./pages/Puzzles";
import Worksheets from "./pages/Worksheets";
import LogicStories from "./pages/LogicStories";
import NonVerbalReasoning from "./pages/NonVerbalReasoning";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/puzzles" element={<Layout><Puzzles /></Layout>} />
          <Route path="/worksheets" element={<Layout><Worksheets /></Layout>} />
          <Route path="/stories" element={<Layout><LogicStories /></Layout>} />
          <Route path="/nonverbal" element={<Layout><NonVerbalReasoning /></Layout>} />
          <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
          <Route path="/games" element={<Layout><Puzzles /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
