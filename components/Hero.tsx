import React from 'react';
import { Mail, Github, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
              <button 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-colors duration-200"
                onClick={() => alert("Resume download would be linked here.")}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-shrink-0 relative group">
             {/* Decorative blob or shadow behind image */}
            <div className="absolute inset-0 bg-primary-100/50 rounded-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-2xl overflow-hidden border-[6px] border-gray-100 shadow-xl">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Samuel+Abolarinwa&background=2563EB&color=fff&size=256';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;