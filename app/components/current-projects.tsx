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
    title: "AI notepad",
    description: "Currently building a react native notepad application with AI integration",
    link: "#",  // Replace with actual GitHub link
    status: "In Development",
    techStack: ["React Native", "TensorFlow.js",]
  },
  {
    title: "Learning Management System",
    description: "Currently working on a Learning Management System using react native and appwrite with AI integration.",
    link: "#",  // Replace with actual GitHub link
    status: "In Development",
    techStack: ["React Native", "Appwrite", "OpenAI API"]
  },
  {
    title: "Miyugus Rentals Website",
    description: "Building a full website with currently completely implementation of the landing page of the website.",
    link: "#", // Replace with actual GitHub link
    status: "Beta Testing",
    techStack: ["Next.js", "Tailwind CSS", "Node.js"]
  },
];

export const pastProjects = [
  {
    title: "Weather App",
    description: "Developed a weather application using react native as practice to test my api integration.",
    link: "https://github.com/BrianOdero/Weather-App", // Replace with actual GitHub link
    year: "2024",
    techStack: ["React Native", "OpenWeather API", "Redux"]
  },
  {
    title: "Rental Car Application",
    description: "Build a rental car application using react native with integration with Daraja Api for STK push.",
    link: "https://github.com/BrianOdero/CarRental", // Replace with actual GitHub link
    year: "2025",
    techStack: ["React Native", "Daraja API", "Firebase"]
  },
  {
    title: "Visitor Management System",
    description: "Built a full stack visitor management system using Next JS for the frontend and Nodejs with express for the backend with integration with nodemailer.",
    link: "https://github.com/BrianOdero/visitor-management-system-smoothtel", // Replace with actual GitHub link
    year: "2025",
    techStack: ["Next.js", "Node.js", "Express","Node Mailer"]
  },
];