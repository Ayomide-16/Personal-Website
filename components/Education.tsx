import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 bg-white/80 backdrop-blur-sm border-y border-gray-200/60 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100">
              <GraduationCap className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{EDUCATION.school}</h3>
            <div className="text-gray-800 font-medium">{EDUCATION.degree}</div>
            <div className="text-gray-600 text-sm mt-1">{EDUCATION.duration}</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;