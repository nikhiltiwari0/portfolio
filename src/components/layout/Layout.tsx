import Navbar from '../NavBar';
import React from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-primary overflow-hidden">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <footer className="py-6 px-4 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} | Designed with passion
        </div>
      </footer>
    </div>
  );
};

export default Layout;