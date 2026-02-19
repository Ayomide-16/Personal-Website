import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Trophy, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-16 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Selected Projects</h2>
          <a
            href="https://github.com/Ayomide-16?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            View All Projects <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-6 md:p-0 transition-all duration-300 hover:bg-gray-50/50 rounded-2xl md:hover:bg-transparent"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {project.year || '2024'}
                </span>

                {project.link && (
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label="View Project"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {/* Add a secondary link icon if needed, or just keep one. Inspiration has two usually. */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
                  {project.title}
                </a>
              </h3>

              {project.subtitle && (
                <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>
              )}

              <p className="text-gray-600 leading-relaxed text-base flex-grow">
                {project.description}
              </p>

              {project.award && (
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-100">
                    <Trophy className="h-3 w-3" />
                    {project.award}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/Ayomide-16?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            View All Projects <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;