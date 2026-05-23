import Nav from "@/components/sections/Nav";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechSection from "@/components/sections/TechSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TeamSection from "@/components/sections/TeamSection";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <BeforeAfterSection />
        <TeamSection />
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
