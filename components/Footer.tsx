import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200/60 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 font-medium">
            © {year} {PERSONAL_INFO.name}
          </p>
        </div>

        <div className="text-center md:text-right">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-sm text-gray-500 font-medium hover:text-primary-600 transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;