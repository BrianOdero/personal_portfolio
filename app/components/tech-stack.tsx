import React from 'react';

export default function TechStack() {
  const technologies = [
    'JS TS', 'AWS',
    'React', 'Node.js', 'Python', 'Django', 'PostgreSQL',
    'MySQL', 'Supabase', 'Firebase', 'Figma', 'Locofy'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-900 text-gray-100">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">My Skills</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-blue-400">What I Know</h2>
        <p className="mt-4 text-lg text-gray-400 italic max-w-2xl mx-auto">
          My creative skills & experiences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column - Description */}
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-4 leading-relaxed">
            I have picked up a lot of skill in my journey as a developer. I have used the all but not limited to the tools and programming languages as shown to make softwares for startups, contracts, hackathons, personal projects, class projects and group projects.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            These projects have enhanced my problem solving skills and deeper understanding of data structure and algorithms. I have also learnt how to use different software development methodologies.
          </p>
          
          <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Project Types</h3>
            <div className="flex flex-wrap gap-2">
              {['Startups', 'Contracts', 'Hackathons', 'Personal', 'Group'].map((type, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-900/20 hover:border-blue-500 transition-colors"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Technology Grid */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-blue-400">{tech.charAt(0)}</span>
                </div>
                <span className="text-gray-300 text-center font-medium">{tech}</span>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}