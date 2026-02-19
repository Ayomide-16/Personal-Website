import React from 'react';
import { RESEARCH_INTERESTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 scroll-mt-16 border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
          Research Focus
        </h3>
        <p className="text-base text-gray-700 mb-6 font-medium">
          My academic and project work is driven by a curiosity to solve complex problems through intelligent systems. I am particularly focused on:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {RESEARCH_INTERESTS.map((interest, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-3" />
              <span className="text-gray-800 font-medium">{interest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;