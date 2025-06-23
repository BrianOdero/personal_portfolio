import Image from "next/image";
import { FloatingNav, navItems } from "./components/ui/floating-navbar";
import HeroSection from "./components/hero-section";
import { WhatIDo } from "./components/skill-section";
import TechStack from "./components/tech-stack";
import FooterSection from "./components/footer";
import ContactSection from "./components/contact-section";



export default function Home() {
  return (
   <div className="flex-1 bg-gray-900  bg-cover " >
    
    <HeroSection />
    <WhatIDo/>
    <TechStack/>
    <ContactSection/>
    <FooterSection/>

   </div>
  );
}
