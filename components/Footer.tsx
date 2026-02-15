import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © {year} Samuel Ayomide Abolarinwa
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-500">
          <a href="mailto:abolarinwasa@gmail.com" className="hover:text-gray-900 transition-colors">Email</a>
          <a href="https://github.com/Ayomide-16" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/samuel-abolarinwa-02b070295/" className="hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;