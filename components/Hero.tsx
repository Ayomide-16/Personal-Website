import React from 'react';
import { Mail, Github, FileText, MapPin, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-24 border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight mb-4 whitespace-nowrap">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
              {PERSONAL_INFO.title}
            </h2>

            <div className="flex items-center justify-center md:justify-start text-gray-500 mb-8 font-medium">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-2 text-base font-semibold text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-5 w-5 group-hover:text-primary-600 transition-colors" />
                <span>Email</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-base font-semibold text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Github className="h-5 w-5 group-hover:text-primary-600 transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-base font-semibold text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary-600 transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-base font-semibold text-gray-500 hover:text-primary-600 transition-colors"
              >
                <FileText className="h-5 w-5 group-hover:text-primary-600 transition-colors" />
                <span>CV</span>
              </a>
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