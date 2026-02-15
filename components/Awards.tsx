import React from 'react';
import { AWARDS } from '../constants';
import { Award } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-12 bg-white/80 backdrop-blur-sm pb-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Honors & Awards</h2>
        <div className="space-y-4">
          {AWARDS.map((award, index) => (
            <div key={index} className="flex items-start md:items-center group">
              <Award className="h-5 w-5 text-gray-400 mt-0.5 md:mt-0 mr-3 group-hover:text-primary-600 transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                <div>
                  <span className="font-semibold text-gray-900">{award.title}</span>
                  <span className="hidden md:inline mx-2 text-gray-300">—</span>
                  <span className="text-gray-600 block md:inline">{award.organization}</span>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0 font-medium">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;