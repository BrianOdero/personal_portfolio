import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export function WhatIDo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-900">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">What I Do</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>
      
      <div className="px-4">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Android Development",
    description: "Building performant, scalable mobile apps using React Native Expo tailored for the Android ecosystem.",
  },
  {
    title: "Web Development",
    description: "Creating responsive and modern websites and web apps using Next.js with an emphasis on performance and user experience.",
  },
  {
    title: "Payment Integration",
    description: "Implementing secure and seamless payment solutions using Daraja API for M-PESA and other local gateways.",
  },
  {
    title: "Backend Development",
    description: "Developing robust backend services and APIs using Python and modern frameworks to power mobile and web apps.",
  },
  {
    title: "Figma Design",
    description: "Designing clean, intuitive user interfaces and prototypes in Figma, focused on user-centered experiences.",
  },
  {
    title: "WordPress Development",
    description: "Building fast, customized websites with WordPress for blogging, business, or e-commerce using modern tools like Locofy.",
  },
];