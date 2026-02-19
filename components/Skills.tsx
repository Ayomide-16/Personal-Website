import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 scroll-mt-16 border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="group relative rounded-2xl border border-gray-200/60 bg-white/30 backdrop-blur-[2px] p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300/80 hover:bg-white/50">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200/60 pb-2">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-white/40 text-gray-700 border border-gray-200/60 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;