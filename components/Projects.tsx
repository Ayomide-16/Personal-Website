import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Selected Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border-x border-b border-gray-100 border-t-4 border-t-primary-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500 font-medium mt-1">{project.subtitle}</p>
                  )}
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center text-gray-400 hover:text-primary-600 transition-colors mt-2 md:mt-0"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              {project.award && (
                <div className="inline-flex items-center gap-2 mt-2 mb-3 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-100">
                  <Trophy className="h-3 w-3" />
                  {project.award}
                </div>
              )}

              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Mobile Only Link */}
              {project.link && (
                <div className="mt-4 md:hidden">
                  <a 
                    href={project.link} 
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center"
                  >
                    View Project <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;