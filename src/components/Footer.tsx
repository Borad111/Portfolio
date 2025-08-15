import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Code2 className="text-blue-400" size={24} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Crafting exceptional digital experiences with passion and precision.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700/50 hover:border-blue-500/50"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-400 animate-pulse" size={16} />
              <span>by John Doe</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
            <div className="text-sm text-gray-400">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;