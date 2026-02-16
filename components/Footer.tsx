import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 font-medium">
            © {year} {PERSONAL_INFO.name}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {PERSONAL_INFO.email}
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors text-sm font-medium"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-abolarinwa-02b070295/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors text-sm font-medium"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;