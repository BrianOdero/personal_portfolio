import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/text-generate-effect';

function HeroSection() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-2 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Content container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 z-10">
        {/* Text content - centered */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-10 max-w-2xl">
          <div className="inline-block bg-blue-900/20 border border-blue-500/30 rounded-full px-4 py-1">
            <h2 className="text-blue-400 font-medium tracking-widest text-sm">WELCOME TO MY WORLD</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-blue-500">Brian Odero</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            a Full Stack Developer
          </h2>
          
          <div className="max-w-2xl">
            <TextGenerateEffect 
              words="I see design as a third dimension to simplify experiences and guide interactions. I'm not just adding features to spice things up, but doing it in ways that create meaningful impact."
              className="text-gray-400 text-lg leading-relaxed"
            />
          </div>
          
          <div className="mt-5">
              <a 
                href="/Updated_Brian_Okoth_VisualCV_Resume.pdf" // Path to your file in public folder
                download="Updated_Brian_Okoth_VisualCV_Resume.pdf" // Optional: Forces this filename
                className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer"
              >
                Download My Resume
              </a>
</div>
        </div>
        
        {/* Image section - centered */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
            <Image
              src="/profile_pic.jpg"
              alt="Brian Odero"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
              priority
            />
            {/* Decorative circle */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;