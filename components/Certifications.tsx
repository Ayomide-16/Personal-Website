import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award as AwardIcon, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="py-12 bg-gray-50/50 scroll-mt-16 border-y border-gray-200/60">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <AwardIcon className="h-6 w-6 text-primary-600" />
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cert.issuer === 'Google Cloud'
                                        ? 'bg-blue-50 text-blue-700 border-blue-100'
                                        : cert.issuer === 'MathWorks'
                                            ? 'bg-orange-50 text-orange-700 border-orange-100'
                                            : 'bg-green-50 text-green-700 border-green-100'
                                    }`}>
                                    {cert.issuer}
                                </span>
                                <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-primary-500 transition-colors" />
                            </div>

                            <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors flex-grow">
                                {cert.title}
                            </h3>

                            <div className="mt-auto pt-3 flex items-center text-xs text-gray-500 group-hover:text-gray-700 font-medium">
                                <CheckCircle2 className="h-3 w-3 mr-1.5 text-green-500" />
                                Verified
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
