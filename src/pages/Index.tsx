import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import JobsSection from "@/components/JobsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CoursesSection from "@/components/CoursesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <JobsSection />
    <ServicesSection />
    <IndustriesSection />
    <CoursesSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
