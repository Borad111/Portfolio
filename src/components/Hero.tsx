import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Meet Borad
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            <span className="border-r-2 border-blue-400 pr-2 animate-blink">
              {displayText}
            </span>
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through innovative 
            web technologies and clean, efficient code.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={scrollToNext}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </button>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:john@example.com"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-bounce" style={{ animationDelay: '1s' }}>
          <button 
            onClick={scrollToNext}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;