import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  // Update active section on scroll to highlight the current link
  useEffect(() => {
    const handleScroll = () => {
      // Offset ensures the section highlights a bit before it hits the exact top
      const scrollPosition = window.scrollY + 150;

      const sections = ['home', 'about', 'projects', 'education', 'skills', 'certifications', 'awards'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Approximate header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update active state immediately for better UX
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Awards', href: '#awards', id: 'awards' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Logo */}
          <div className="flex-shrink-0 hidden md:block">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-lg font-bold text-gray-900 tracking-tight hover:text-primary-600 transition-colors"
            >
              Samuel A.
            </a>
          </div>

          {/* Navigation Bar - Horizontal Scroll on Mobile, Flex on Desktop */}
          <nav className="flex items-center gap-1 w-full md:w-auto overflow-x-auto no-scrollbar">
            {/* Mobile Logo Inline */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="md:hidden text-lg font-bold text-gray-900 tracking-tight mr-4 flex-shrink-0"
            >
              SA
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`
                  text-sm font-medium px-3 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer
                  ${activeSection === link.id
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;