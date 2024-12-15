import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Education', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Anmol Kumar Maurya</h1>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;