// components/Navbar.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLaptopCode, 
  faLightbulb, 
  faUserTie, 
  faEnvelope,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills', icon: faCode },
    { name: 'What I Do', href: '#projects', icon: faLaptopCode },
    { name: 'Tech Stack', href: '#experience', icon: faUserTie },
    { name: 'Contact ME', href: '#about', icon: faLightbulb },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-blue-900 `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-2xl p-2 rounded-lg">
                <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
              </span>
              <span className="text-white font-bold text-xl  sm:block">
                My <span className="text-blue-200">Personal Portfolio</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 hover:bg-opacity-30 rounded-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={link.icon} className="mr-2 h-4 w-4" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="ml-4 flex items-center bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-blue-700 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={link.icon} className="mr-3 h-5 w-5" />
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-blue-700 rounded-lg mt-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 h-5 w-5" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;