import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export function MyProjects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-900">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Current Projects</h2>
        <div className="px-4">
          <HoverEffect items={currentProjects} />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Past Projects</h2>
        <div className="px-4">
          <HoverEffect items={pastProjects} />
        </div>
      </div>
    </div>
  );
}

export const currentProjects = [
  {
    title: "E-commerce Mobile App",
    description: "Building a cross-platform e-commerce solution with React Native and Firebase backend.",
    link: "#", // Add actual project links if available
    status: "In Development"
  },
  {
    title: "HealthTech Dashboard",
    description: "Developing an analytics dashboard for healthcare providers using Next.js and Python APIs.",
    link: "#",
    status: "Active Development"
  },
  {
    title: "Payment Gateway Plugin",
    description: "Creating a WordPress plugin for M-PESA integration using Daraja API.",
    link: "#",
    status: "Beta Testing"
  },
];

export const pastProjects = [
  {
    title: "University LMS",
    description: "Developed a learning management system for a local university with Django backend.",
    link: "#",
    year: "2023"
  },
  {
    title: "Restaurant POS",
    description: "Built a point-of-sale system with inventory management for restaurant chains.",
    link: "#",
    year: "2022"
  },
  {
    title: "Fitness Tracking App",
    description: "Created a React Native fitness app with Google Fit integration.",
    link: "#",
    year: "2021"
  },
];