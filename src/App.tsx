// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import LoadingScreen from './components/LoadingScreen';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { ChevronRight, CreditCard as Edit3, Users, Star, Mail, Phone, MapPin, ArrowUp, Menu, X, BookOpen, PenTool, Target, Zap, Award, Coffee, TrendingUp, Globe, Shield, Clock, Lightbulb , MessageSquare, FileText, Search, Smartphone, Monitor, Palette, Code, Camera, Video, Headphones, Play, Quote, ArrowRight, Calendar, User, Building, Briefcase } from 'lucide-react';
import { CheckCircle ,BarChart3} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ projects: 0, clients: 0, satisfaction: 0, years: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'services', 'process', 'portfolio', 'team', 'testimonials', 'blog', 'pricing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = { projects: 1250, clients: 450, satisfaction: 98, years: 8 };
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          years: Math.floor(targets.years * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepDuration);
    };
    
    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "ContentCraft transformed our blog from a neglected corner of our website into our primary lead generation tool. The quality and consistency of their work is exceptional. Our organic traffic increased by 300% in just 6 months!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "EcoSolutions",
      content: "The team at ContentCraft doesn't just write content; they understand our business and create content that truly resonates with our audience. Our engagement rates have tripled and conversion rates doubled!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Davis",
      role: "Brand Manager",
      company: "Fashion Forward",
      content: "Working with ContentCraft has been a game-changer. Their strategic approach to content creation has helped us build a strong brand voice across all our platforms. ROI increased by 250%!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Rodriguez",
      role: "VP Marketing",
      company: "FinanceFlow",
      content: "ContentCraft's expertise in financial content writing is unmatched. They've helped us explain complex financial concepts in simple terms, resulting in 40% more qualified leads.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & Creative Director",
      bio: "10+ years in content strategy with expertise in brand storytelling and digital marketing.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Content Strategy", "Brand Storytelling", "SEO"]
    },
    {
      name: "Maria Garcia",
      role: "Senior Content Writer",
      bio: "Award-winning writer specializing in B2B content and thought leadership articles.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["B2B Writing", "Thought Leadership", "Technical Writing"]
    },
    {
      name: "James Wilson",
      role: "SEO Content Specialist",
      bio: "Data-driven content creator with proven track record of ranking content on page 1.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["SEO Writing", "Keyword Research", "Analytics"]
    },
    {
      name: "Sophie Chen",
      role: "Social Media Content Manager",
      bio: "Creative storyteller who crafts engaging social media content that drives engagement.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Social Media", "Visual Content", "Community Building"]
    },
    {
      name: "Robert Kim",
      role: "Technical Writer",
      bio: "Expert in translating complex technical concepts into clear, actionable content.",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Technical Documentation", "API Writing", "User Guides"]
    },
    {
      name: "Lisa Anderson",
      role: "Content Strategist",
      bio: "Strategic thinker who develops comprehensive content plans that align with business goals.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Content Planning", "Audience Research", "Performance Analysis"]
    }
  ];

  const portfolioItems = [
    {
      title: "TechStart Inc. Blog Transformation",
      category: "Blog Writing",
      description: "Complete blog overhaul resulting in 300% traffic increase and 150% lead generation boost.",
      image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["300% Traffic Increase", "150% More Leads", "Page 1 Rankings"]
    },
    {
      title: "EcoSolutions Content Strategy",
      category: "Content Strategy",
      description: "Comprehensive content strategy for sustainable technology company across all digital channels.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["250% ROI Increase", "Triple Engagement", "Brand Authority"]
    },
    {
      title: "Fashion Forward Social Campaign",
      category: "Social Media",
      description: "Multi-platform social media content campaign that went viral and increased brand awareness.",
      image: "https://images.pexels.com/photos/7688466/pexels-photo-7688466.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["2M+ Impressions", "50K New Followers", "Viral Content"]
    },
    {
      title: "FinanceFlow Educational Series",
      category: "Educational Content",
      description: "Complex financial concepts simplified into engaging educational content series.",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["40% More Qualified Leads", "Expert Positioning", "Industry Recognition"]
    },
    {
      title: "HealthTech Product Launch",
      category: "Product Marketing",
      description: "Complete content package for healthcare technology product launch campaign.",
      image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["Successful Launch", "Media Coverage", "Industry Awards"]
    },
    {
      title: "RetailMax E-commerce Content",
      category: "E-commerce",
      description: "Product descriptions and category content that increased conversion rates significantly.",
      image: "https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=500",
      results: ["35% Conversion Boost", "Reduced Bounce Rate", "Higher AOV"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Edit3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">ContentCraft</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Team', 'Testimonials', 'Blog', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 relative group ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full ${
                    activeSection === item.toLowerCase() ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2 max-h-96 overflow-y-auto">
              {['Home', 'About', 'Services', 'Process', 'Portfolio', 'Team', 'Testimonials', 'Blog', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  #1 Content Writing Agency
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Crafting Words That{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 animate-gradient-x">
                    Convert & Captivate
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                  Transform your brand's voice with compelling content that engages, educates, and drives extraordinary results. From strategic blog posts to conversion-focused copy, we craft words that matter and deliver measurable impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105"
                >
                  <span className="font-semibold">Explore Our Services</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span className="font-semibold">View Our Work</span>
                </button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stats.projects}+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stats.clients}+</div>
                  <div className="text-slate-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stats.satisfaction}%</div>
                  <div className="text-slate-400 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{stats.years}+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-1 animate-gradient-x">
                <div className="bg-white rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>
                      </div>
                      <div className="text-xs text-slate-400">ContentCraft Editor</div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-4/5 animate-pulse delay-75"></div>
                      <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-3/5 animate-pulse delay-150"></div>
                      <div className="h-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-2/5 animate-pulse delay-225"></div>
                      <div className="flex space-x-2 pt-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full animate-bounce"></div>
                        <div className="w-8 h-8 bg-purple-100 rounded-full animate-bounce delay-100"></div>
                        <div className="w-8 h-8 bg-pink-100 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full animate-bounce shadow-lg">
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full animate-pulse shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              About ContentCraft
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Transforming Businesses Through Strategic Content</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another content agency. We're strategic partners who understand that great content is the foundation of digital success. Our mission is to help businesses tell their stories in ways that resonate, engage, and convert.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Journey & Vision</h3>
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    Founded in 2016 by a team of passionate writers and digital strategists, ContentCraft emerged from a simple yet powerful belief: every business has a unique story worth telling, and when told right, it can transform entire organizations.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    What started as a small team of three writers has grown into a full-service content agency with over 25 specialists, serving everyone from innovative startups to Fortune 500 companies across 15+ industries.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our approach combines creative storytelling with data-driven strategy, ensuring every piece of content we create not only engages your audience but drives measurable business results.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Our Mission</h4>
                  <p className="text-slate-600 text-sm">To help businesses connect authentically with their audience through strategic, results-driven content.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <Zap className="h-12 w-12 text-purple-600 mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Our Vision</h4>
                  <p className="text-slate-600 text-sm">To be the leading content agency that transforms how businesses communicate in the digital age.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Award className="h-16 w-16 text-green-600 mb-4" />
                    <h4 className="font-bold text-slate-800 mb-2">Excellence</h4>
                    <p className="text-slate-600 text-sm">We deliver high-quality content that exceeds expectations and drives real business results.</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Coffee className="h-16 w-16 text-yellow-600 mb-4" />
                    <h4 className="font-bold text-slate-800 mb-2">Culture</h4>
                    <p className="text-slate-600 text-sm">A collaborative environment where creativity, innovation, and client success thrive together.</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Shield className="h-16 w-16 text-red-600 mb-4" />
                    <h4 className="font-bold text-slate-800 mb-2">Integrity</h4>
                    <p className="text-slate-600 text-sm">Transparent communication, honest feedback, and ethical practices in everything we do.</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <TrendingUp className="h-16 w-16 text-indigo-600 mb-4" />
                    <h4 className="font-bold text-slate-800 mb-2">Growth</h4>
                    <p className="text-slate-600 text-sm">Continuous learning and adaptation to stay ahead of industry trends and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Achievements */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Achievements & Recognition</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We're proud of the recognition we've received and the impact we've made for our clients across various industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Best Content Agency 2023</h4>
                  <p className="text-slate-600 text-sm">Digital Marketing Awards</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">500% Avg ROI</h4>
                  <p className="text-slate-600 text-sm">Client Campaign Results</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Global Reach</h4>
                  <p className="text-slate-600 text-sm">25+ Countries Served</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Expert Team</h4>
                  <p className="text-slate-600 text-sm">25+ Content Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Comprehensive Content Solutions</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From strategy to execution, we provide end-to-end content solutions tailored to your business needs and designed to drive measurable results across all digital channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: "Blog Writing & SEO Content",
                description: "Strategic blog posts and SEO-optimized content that drives organic traffic, builds authority, and converts readers into loyal customers.",
                features: ["SEO Optimization", "Keyword Research", "Content Calendar", "Performance Analytics"],
                color: "blue"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Social Media Content",
                description: "Engaging social media content that builds communities, drives engagement, and amplifies your brand voice across all platforms.",
                features: ["Multi-Platform Content", "Visual Content Creation", "Community Management", "Trend Analysis"],
                color: "purple"
              },
              {
                icon: <Edit3 className="h-10 w-10" />,
                title: "Copywriting & Sales Content",
                description: "Persuasive copy that converts visitors into customers through compelling sales pages, email campaigns, and ad copy.",
                features: ["Sales Pages", "Email Sequences", "Ad Copy", "Landing Pages"],
                color: "green"
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Content Strategy & Planning",
                description: "Data-driven content strategies that align with your business goals, audience needs, and market opportunities.",
                features: ["Audience Research", "Competitive Analysis", "Content Roadmap", "ROI Tracking"],
                color: "red"
              },
              {
                icon: <Monitor className="h-10 w-10" />,
                title: "Website Content & UX Writing",
                description: "Professional website content that communicates your value proposition clearly and guides users toward conversion.",
                features: ["Homepage Copy", "Service Pages", "About Pages", "UX Microcopy"],
                color: "yellow"
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Content Auditing & Optimization",
                description: "Comprehensive content audits to identify opportunities, optimize existing content, and maximize your content ROI.",
                features: ["Performance Analysis", "Gap Identification", "Optimization Plan", "Competitor Benchmarking"],
                color: "indigo"
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Technical Writing",
                description: "Clear, comprehensive technical documentation that makes complex information accessible to your target audience.",
                features: ["API Documentation", "User Guides", "White Papers", "Case Studies"],
                color: "pink"
              },
              {
                icon: <Video className="h-10 w-10" />,
                title: "Video Script Writing",
                description: "Compelling video scripts for marketing videos, explainers, tutorials, and social media content that engage and convert.",
                features: ["Marketing Videos", "Explainer Scripts", "Social Video Content", "YouTube Optimization"],
                color: "orange"
              },
              {
                icon: <Mail className="h-10 w-10" />,
                title: "Email Marketing Content",
                description: "High-converting email campaigns, newsletters, and automated sequences that nurture leads and drive sales.",
                features: ["Email Campaigns", "Newsletter Content", "Automation Sequences", "A/B Testing"],
                color: "teal"
              }
            ].map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-${service.color}-500`}>
                <div className={`text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className={`h-4 w-4 text-${service.color}-500 mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`text-${service.color}-600 font-semibold hover:text-${service.color}-700 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center`}>
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Service Packages */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Popular Service Packages</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Choose from our carefully crafted service packages designed to meet different business needs and budgets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-slate-200 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Starter Package</h4>
                  <p className="text-slate-600 text-sm">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    4 Blog Posts per Month
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Social Media Content
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Basic SEO Optimization
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Monthly Performance Report
                  </li>
                </ul>
                <button className="w-full bg-slate-100 text-slate-800 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-semibold">
                  Starting at $1,200/month
                </button>
              </div>

              <div className="border-2 border-blue-500 rounded-xl p-8 relative transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Growth Package</h4>
                  <p className="text-slate-600 text-sm">Ideal for growing companies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    8 Blog Posts per Month
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Complete Social Media Management
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Advanced SEO & Content Strategy
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Email Marketing Content
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Bi-weekly Strategy Calls
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">
                  Starting at $2,500/month
                </button>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Enterprise Package</h4>
                  <p className="text-slate-600 text-sm">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Unlimited Content Creation
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Custom Content Strategy
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Priority Support & Rush Orders
                  </li>
                  <li className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Weekly Strategy Sessions
                  </li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">
                  Custom Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">How We Create Content That Converts</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our proven 6-step process ensures every piece of content we create is strategic, engaging, and designed to achieve your specific business objectives.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "We start by understanding your business, audience, goals, and competitive landscape to create a comprehensive content strategy.",
                  details: ["Business goal analysis", "Audience research & personas", "Competitive analysis", "Content audit", "Strategy development"],
                  icon: <Search className="h-8 w-8" />,
                  color: "blue",
                  position: "left"
                },
                {
                  step: "02",
                  title: "Content Planning",
                  description: "Based on our research, we develop detailed content calendars, topic clusters, and editorial guidelines tailored to your brand.",
                  details: ["Content calendar creation", "Topic research & clustering", "Editorial guidelines", "Brand voice definition", "Content templates"],
                  icon: <Calendar className="h-8 w-8" />,
                  color: "purple",
                  position: "right"
                },
                {
                  step: "03",
                  title: "Content Creation",
                  description: "Our expert writers craft compelling, original content that aligns with your brand voice and resonates with your target audience.",
                  details: ["Expert writing team", "Original research", "Brand voice consistency", "SEO optimization", "Visual content integration"],
                  icon: <PenTool className="h-8 w-8" />,
                  color: "green",
                  position: "left"
                },
                {
                  step: "04",
                  title: "Review & Optimization",
                  description: "Every piece of content goes through our rigorous review process to ensure quality, accuracy, and alignment with your objectives.",
                  details: ["Multi-level review process", "Fact-checking & accuracy", "SEO optimization check", "Brand compliance", "Client feedback integration"],
                  icon: <CheckCircle className="h-8 w-8" />,
                  color: "yellow",
                  position: "right"
                },
                {
                  step: "05",
                  title: "Publishing & Distribution",
                  description: "We handle the publishing and distribution of your content across all relevant channels to maximize reach and engagement.",
                  details: ["Multi-channel publishing", "Social media distribution", "Email marketing integration", "SEO implementation", "Performance tracking setup"],
                  icon: <Globe className="h-8 w-8" />,
                  color: "red",
                  position: "left"
                },
                {
                  step: "06",
                  title: "Analysis & Improvement",
                  description: "We continuously monitor performance, analyze results, and optimize our approach to ensure maximum ROI from your content investment.",
                  details: ["Performance analytics", "ROI measurement", "A/B testing", "Strategy refinement", "Continuous optimization"],
                  icon: <BarChart3 className="h-8 w-8" />,
                  color: "indigo",
                  position: "right"
                }
              ]?.map((item, index) => (
                <div key={index} className={`flex items-center ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:w-1/2 ${item.position === 'right' ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                      <div className="flex items-center mb-6">
                        <div className={`bg-${item.color}-100 p-3 rounded-lg mr-4`}>
                          <div className={`text-${item.color}-600`}>
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className={`text-${item.color}-600 font-bold text-sm mb-1`}>STEP {item.step}</div>
                          <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details?.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                            <div className={`w-2 h-2 bg-${item.color}-500 rounded-full mr-3`}></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot for desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-6 h-6 bg-${item.color}-500 rounded-full border-4 border-white shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Success Stories & Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful content campaigns and see how we've helped businesses across various industries achieve remarkable results through strategic content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.results?.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
                    View Case Study <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Portfolio Highlights</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our work speaks for itself. Here are some key metrics from our most successful campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                  <div className="text-3xl font-bold mb-2">450%</div>
                  <div className="text-blue-100 text-sm">Average Traffic Increase</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <Target className="h-12 w-12 mx-auto mb-4 text-green-300" />
                  <div className="text-3xl font-bold mb-2">280%</div>
                  <div className="text-blue-100 text-sm">Lead Generation Boost</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 text-pink-300" />
                  <div className="text-3xl font-bold mb-2">350%</div>
                  <div className="text-blue-100 text-sm">ROI Improvement</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <Users className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-blue-100 text-sm">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Meet the Content Experts</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of writers, strategists, and content specialists brings together decades of experience across multiple industries to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden border border-slate-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties?.map((specialty, specialtyIndex) => (
                      <span key={specialtyIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Culture */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Team Culture</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We believe that great content comes from great people. Our culture fosters creativity, collaboration, and continuous learning.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Innovation</h4>
                  <p className="text-slate-600 text-sm">Always exploring new ideas and creative approaches to content.</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Collaboration</h4>
                  <p className="text-slate-600 text-sm">Working together to achieve the best possible outcomes for our clients.</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <BookOpen className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Learning</h4>
                  <p className="text-slate-600 text-sm">Continuous education and staying ahead of industry trends.</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="font-bold text-slate-800 mb-2">Excellence</h4>
                  <p className="text-slate-600 text-sm">Striving for the highest quality in everything we do.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with ContentCraft and the results they've achieved.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
              <div className="flex items-center justify-center mb-8">
                {[...Array(5)]?.map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-white text-center mb-8 leading-relaxed font-light">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-white/30"
                />
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-slate-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-blue-300 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3)?.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.content.substring(0, 150)}..."</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-slate-600"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    <div className="text-blue-300 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentTestimonial === index ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Latest Insights
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Content Marketing Blog</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and strategies in content marketing, SEO, and digital communication. Learn from our experts and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "Content Strategy",
                title: "The Complete Guide to Content Marketing ROI in 2024",
                excerpt: "Learn how to measure, track, and optimize your content marketing ROI with proven strategies and tools that deliver measurable business results.",
                author: "Alex Thompson",
                date: "Jan 15, 2024",
                readTime: "12 min read",
                featured: true
              },
              {
                image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "SEO Writing",
                title: "How to Write SEO Content That Actually Ranks in 2024",
                excerpt: "Master the art of SEO content writing with our comprehensive guide covering keyword research, content optimization, and ranking strategies.",
                author: "Maria Garcia",
                date: "Jan 12, 2024",
                readTime: "8 min read"
              },
              {
                image: "https://images.pexels.com/photos/7688466/pexels-photo-7688466.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "Social Media",
                title: "Creating Viral Social Media Content: A Data-Driven Approach",
                excerpt: "Discover the science behind viral content and learn proven techniques to create social media posts that people can't help but share.",
                author: "Sophie Chen",
                date: "Jan 10, 2024",
                readTime: "10 min read"
              },
              {
                image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "Email Marketing",
                title: "Email Marketing Content That Converts: Best Practices Guide",
                excerpt: "Transform your email marketing with content strategies that increase open rates, engagement, and conversions across all industries.",
                author: "James Wilson",
                date: "Jan 8, 2024",
                readTime: "7 min read"
              },
              {
                image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "Copywriting",
                title: "Psychology of Persuasive Copywriting: What Really Works",
                excerpt: "Explore the psychological principles behind persuasive copy and learn how to apply them to increase conversions and sales.",
                author: "Lisa Anderson",
                date: "Jan 5, 2024",
                readTime: "9 min read"
              },
              {
                image: "https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=500",
                category: "Content Planning",
                title: "Building a Content Calendar That Drives Results",
                excerpt: "Learn how to create and manage a content calendar that aligns with your business goals and keeps your audience engaged year-round.",
                author: "Robert Kim",
                date: "Jan 3, 2024",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <article key={index} className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden border border-slate-100 ${post.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${post.featured ? 'h-64 lg:h-80' : 'h-48'}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`p-6 ${post.featured ? 'lg:p-8' : ''}`}>
                  <h3 className={`font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200 ${post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  <p className={`text-slate-600 mb-4 leading-relaxed ${post.featured ? 'text-lg' : ''}`}>{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
                    Read Full Article <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 font-semibold">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-4">
              {/* <CreditCard className="h-4 w-4 mr-2" /> */}
              Pricing Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Choose Your Content Strategy</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Flexible pricing plans designed to meet your business needs and budget. All plans include our signature quality guarantee and dedicated support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Starter",
                price: "$1,200",
                period: "/month",
                description: "Perfect for small businesses and startups looking to establish their content presence.",
                features: [
                  "4 Blog Posts per Month",
                  "Social Media Content (20 posts)",
                  "Basic SEO Optimization",
                  "Content Calendar",
                  "Monthly Performance Report",
                  "Email Support",
                  "2 Revisions per Content"
                ],
                popular: false,
                color: "blue"
              },
              {
                name: "Growth",
                price: "$2,500",
                period: "/month",
                description: "Ideal for growing companies ready to scale their content marketing efforts.",
                features: [
                  "8 Blog Posts per Month",
                  "Complete Social Media Management",
                  "Advanced SEO & Content Strategy",
                  "Email Marketing Content",
                  "Bi-weekly Strategy Calls",
                  "Priority Support",
                  "Unlimited Revisions",
                  "Performance Analytics Dashboard"
                ],
                popular: true,
                color: "purple"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "Comprehensive content solutions for large organizations with complex needs.",
                features: [
                  "Unlimited Content Creation",
                  "Dedicated Account Manager",
                  "Custom Content Strategy",
                  "Multi-Channel Distribution",
                  "Weekly Strategy Sessions",
                  "24/7 Priority Support",
                  "Advanced Analytics & Reporting",
                  "Custom Integrations"
                ],
                popular: false,
                color: "green"
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                      <span className="text-slate-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <CheckCircle className={`h-5 w-5 text-${plan.color}-500 mr-3 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing FAQ */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Have questions about our pricing or services? Here are some common questions from our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">What's included in the setup?</h4>
                  <p className="text-slate-600 text-sm">All plans include initial strategy consultation, content calendar setup, and brand voice development at no extra cost.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Can I upgrade or downgrade my plan?</h4>
                  <p className="text-slate-600 text-sm">Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Do you offer custom packages?</h4>
                  <p className="text-slate-600 text-sm">Absolutely! We can create custom packages tailored to your specific needs and budget requirements.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">What's your revision policy?</h4>
                  <p className="text-slate-600 text-sm">Starter plan includes 2 revisions per content piece. Growth and Enterprise plans include unlimited revisions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">How quickly can you deliver content?</h4>
                  <p className="text-slate-600 text-sm">Standard turnaround is 3-5 business days. Rush orders available for Growth and Enterprise clients.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Do you provide performance reports?</h4>
                  <p className="text-slate-600 text-sm">Yes, all plans include regular performance reports with key metrics and insights for continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Let's discuss your content goals and create a strategy that drives real results. Get in touch with our team today for a free consultation and content audit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Start the Conversation</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-1">Email Us</div>
                      <div className="text-slate-600">hello@contentcraft.com</div>
                      <div className="text-slate-500 text-sm">We'll respond within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-1">Call Us</div>
                      <div className="text-slate-600">+1 (555) 123-4567</div>
                      <div className="text-slate-500 text-sm">Mon-Fri, 9AM-6PM EST</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 mb-1">Visit Our Office</div>
                      <div className="text-slate-600">123 Content Street<br />Writing City, WC 12345</div>
                      <div className="text-slate-500 text-sm">By appointment only</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-4">What Happens Next?</h4>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span>Free 30-minute strategy consultation</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span>Comprehensive content audit of your current materials</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span>Custom content strategy proposal within 48 hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-xl">
                <h4 className="font-bold mb-4">Ready to Get Started?</h4>
                <p className="text-slate-300 mb-6">
                  Join 450+ businesses that trust ContentCraft with their content marketing success.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">450+ Happy Clients</div>
                    <div className="text-xs text-slate-400">Average 4.9/5 rating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                    <option>Select a service</option>
                    <option>Blog Writing & SEO Content</option>
                    <option>Social Media Content</option>
                    <option>Copywriting & Sales Content</option>
                    <option>Content Strategy & Planning</option>
                    <option>Website Content & UX Writing</option>
                    <option>Email Marketing Content</option>
                    <option>Complete Content Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Budget Range</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                    <option>Select budget range</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details *</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Tell us about your content goals, target audience, and any specific requirements..."
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-slate-600">
                    I'd like to receive content marketing tips and insights via email
                  </label>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
                  Get Free Consultation
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. We'll never spam you or share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Edit3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">ContentCraft</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Transforming businesses through strategic content that engages, educates, and converts. Your trusted partner in digital storytelling and content marketing success.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-bold">yt</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog Writing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Social Media Content</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Copywriting</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Content Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">SEO Content</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Email Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Content Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Free Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Content Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">eBooks</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-slate-400 text-sm">
                © 2024 ContentCraft. All rights reserved. Crafting content that converts since 2016.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">GDPR Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
}