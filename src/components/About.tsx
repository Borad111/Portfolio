import React, { useEffect, useRef, useState } from 'react';
import { User, Coffee, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl transform -rotate-3 opacity-20"></div>
                <div className="relative w-full h-full bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-slate-700/50">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Passionate Developer & Creative Thinker
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              stunning, user-friendly applications that solve real-world problems. My journey 
              began with a curiosity for how things work, and has evolved into a passion for 
              crafting exceptional digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies. When I'm not coding, you'll find me exploring new frameworks, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <div className="relative w-16 h-16 mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 transition-colors duration-300">
                  <stat.icon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={24} />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default About;