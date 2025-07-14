"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    techStack?: string[];
    status?: string;
    year?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const CardContent = (
          <>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-blue-500/10 block rounded-xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mr-3">
                  <span className="text-blue-400 font-bold">{item.title.charAt(0)}</span>
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  {item.status && (
                    <span className="text-xs px-2 py-1 bg-blue-900/30 text-blue-400 rounded-full">
                      {item.status}
                    </span>
                  )}
                  {item.year && (
                    <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded-full ml-1">
                      {item.year}
                    </span>
                  )}
                </div>
              </div>
              <CardDescription>{item.description}</CardDescription>
              
              {item.techStack && (
                <div className="mt-4">
                  {/* Updated Tech Stack label with bold font */}
                  <div className="text-xs font-bold text-blue-300 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        // Updated background to darker blue shade
                        className="text-xs px-2 py-1 bg-blue-900/80 text-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </>
        );

        return item.link ? (
          <Link
            href={item.link}
            key={item?.title}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {CardContent}
          </Link>
        ) : (
          <div
            key={item?.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-6 overflow-hidden bg-gray-800 border border-gray-700 group-hover:border-blue-500 relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold text-lg tracking-wide mb-1", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-400 tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};