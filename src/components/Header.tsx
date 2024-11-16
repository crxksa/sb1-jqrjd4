import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { title: 'Projects', href: '#projects' },
    { title: 'About', href: '#about' },
    { title: 'CV', href: '#cv' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 px-6 py-4 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          KineticArt
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <motion.li key={item.title} whileHover={{ y: -2 }}>
                <a 
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="text-gray-300 hover:text-white" size={20} />
            ) : (
              <Moon className="text-gray-600 hover:text-gray-900" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="text-gray-300 hover:text-white" size={20} />
            ) : (
              <Moon className="text-gray-600 hover:text-gray-900" size={20} />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-gray-600 dark:text-gray-300" size={24} />
            ) : (
              <Menu className="text-gray-600 dark:text-gray-300" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
          >
            <ul className="py-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a 
                    href={item.href}
                    className="block px-6 py-2 text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;