"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight, FileText, Shield, ShieldCheck, Globe, TrendingUp, CheckCircle, ArrowRight, Calendar, Building, Users, MapPin, Award, Briefcase, Clock, Phone, Mail, ExternalLink, Send, Scale, Calculator, FileCheck, UserCheck, BarChart3, Handshake, Search } from 'lucide-react';
import { FaHandshake } from 'react-icons/fa';
import DeliveryMethodsSection from './components/about';
import banner1 from '../../public/banner1.jpg';
import bn from '../../public/model.jpg';
import banner2 from '../../public/1.png';
import mrLogo from '../../public/Picture1.png';
import taxLogo from '../../public/Picture2.png';
import UAEInvoiceModel from './components/invoicemodel';
export default function UAEEInvoicingLanding() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeCompliance, setActiveCompliance] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const faqItems = [
    {
      question: "What is UAE E-Invoicing?",
      answer: "UAE E-Invoicing is a digital platform that helps businesses comply with the Federal Tax Authority's mandatory electronic invoicing requirements. It enables businesses to create, send, and receive invoices electronically while ensuring full compliance with UAE tax regulations."
    },
    {
      question: "Are the invoices generated through the system FTA compliant?",
      answer: "Yes, all invoices generated through our system are fully compliant with FTA requirements. Our platform is designed to meet all technical and regulatory standards set by the Federal Tax Authority for electronic invoicing in the UAE."
    },
    {
      question: "Can I integrate the system with my existing accounting software?",
      answer: "Absolutely! Our E-Invoicing solution offers seamless integration with most popular accounting software including QuickBooks, Xero, SAP, and many others. We provide API integration and pre-built connectors for easy setup."
    },
    {
      question: "How do I get started with UAE E-Invoicing compliance?",
      answer: "Getting started is simple. Contact our team to schedule a consultation, and we'll help you register with an Accredited Service Provider, set up your system, and ensure your business is fully compliant with UAE E-Invoicing regulations."
    },
    {
      question: "What support do you provide for E-Invoicing implementation?",
      answer: "We provide comprehensive support including system setup, staff training, ongoing technical support, and compliance monitoring. Our team ensures your business stays compliant with all FTA requirements throughout the implementation process."
    }
  ];

   const eInvoicingTrends = [
  "Contributing to the growth and competitiveness of the economy and utilizing big data",
  "Reduce human intervention and making the UAE and its fiscal eco system digitally enabled",
  "Increased transparency and improved audits / cultivating compliance",
  "Enhanced taxpayer and user experience",
  "Optimizing cost and core operations whilst reducing processing times encouraging less paper wastage and meeting sustainability objectives",
  "Reduce the tax gap maximize compliance and tackle the shadow economy"
 ];

   const globalTrends = [
    "Economic Contribution",
    "Digitization",
    "Effectiveness", 
    "Taxpayer* Experience",
    " Efficiency",
    "Compliance",
   
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const timelinePhases = [
    "Phase 1: Large Companies (Revenue > AED 500M) - January 2026",
    "Phase 2: Medium Companies (Revenue > AED 375M) - January 2027",
    "Phase 3: Small Companies (Revenue > AED 250M) - January 2028",
    "Phase 4: All VAT Registered Businesses - January 2029",
    "Preparation Period: Assessment & System Integration - Now",
    "ASP Selection: Choose Accredited Service Provider - Q2 2025",
    "Testing Phase: Pre-implementation Testing - Q4 2025"
  ];

  const eInvoicingSteps = [
    {
      title: "Business Assessment",
      description: "Evaluate Current Systems",
      icon: Search,
      details: "Comprehensive assessment of existing invoicing processes and system capabilities"
    },
    {
      title: "ASP Selection",
      description: "Choose Service Provider",
      icon: Handshake,
      details: "Select and engage with a UAE Accredited Service Provider for e-invoicing"
    },
    {
      title: "System Integration",
      description: "Connect Your Systems",
      icon: Globe,
      details: "Integrate existing ERP/accounting systems with ASP platform via APIs"
    },
    {
      title: "Testing & Validation",
      description: "Pre-Go-Live Testing",
      icon: Shield,
      details: "Comprehensive testing of invoice generation, transmission, and receipt processes"
    },
    {
      title: "Staff Training",
      description: "Team Preparation",
      icon: Users,
      details: "Training finance and operations teams on new e-invoicing workflows"
    },
    {
      title: "Go-Live Support",
      description: "Implementation Support",
      icon: CheckCircle,
      details: "Ongoing support during transition to ensure smooth e-invoicing operations"
    }
  ];

  const complianceTimeline = [
    {
      title: "Data Dictionary Release",
      frequency: "09 Feb, 2025",
      dueDate: "Public Consultation",
      description: "Release of Data Dictionary for Public consultation ",
      color: "red"
    },
    {
      title: "PINT AE Test Bed",
      frequency: "09 Apr, 2025",
      dueDate: "Test Environment",
      description: "PNT AE Test Bed Details made available for testing and integration",
      color: "red"
    },
    {
      title: "E-Invoice Legislation",
      frequency: "Q2, 2025",
      dueDate: "Regulatory Framework",
      description: "E-invoice legislation (Tentative) - Legal framework establishment",
      color: "red"
    },
    {
      title: "Pilot Phase",
      frequency: "Dec, 2025",
      dueDate: "Expected Launch",
      description: "Expected Pilot Phase for selected businesses to test the system",
      color: "red"
    },
    {
      title: "Phase-1 Go-Live",
      frequency: "Jul, 2026",
      dueDate: "E-invoicing & Reporting",
      description: "Phase-1 go-live for e-invoicing and reporting (Tentative)",
      color: "red"
    }
  ];


  const services = [
    {
      title: "Expert Local Guidance",
      description: "Deep knowledge of UAE VAT and FTA procedures from Mac and Ross.",
      icon: UserCheck,
      // features: ["UAE Tax Expertise", "FTA Compliance", "Local Regulatory Knowledge", "Business Advisory"]
    },
    {
      title: "Proven Global Technology",
      description: "Taxilla's robust, battle-tested e-invoicing compliance platform.",
      icon: Globe,
      features: ["25+ Countries Experience", "Cutting-edge Software", "API Integration", "Real-time Processing"]
    },
    {
      title: "End-to-End Support",
      description: "From initial system assessment and ASP integration to ongoing support and training.",
      icon: Handshake,
      features: ["System Assessment", "ASP Integration", "Staff Training", "Ongoing Support"]
    }
    
  ];

  const opportunities = [
    {
      title: "Strategic Location",
      description: "Gateway between Europe, Asia, and Africa with access to Red Sea and Persian Gulf",
      icon: Globe
    },
    {
      title: "Business-Friendly Reforms",
      description: "Vision 2030 driving regulatory improvements and investment incentives",
      icon: TrendingUp
    },
    {
      title: "Mega Projects",
      description: "Trillion-dollar projects creating massive business opportunities",
      icon: Award
    },
    {
      title: "Skilled Workforce",
      description: "Saudization support programs and growing local talent pool",
      icon: Users
    }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971', // default value
    number: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'number') return; // handled inline below
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Phone number validation: only digits and exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!formData.name || !formData.email || !formData.number || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!phoneRegex.test(formData.number)) {
      alert('Phone number must be exactly 10 digits and contain only numbers.');
      return;
    }
    const fullPhoneNumber = formData.countryCode + formData.number;
    console.log('Form submitted:', { ...formData, fullPhoneNumber });
    // You can add validation and API calls here
  };
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M&R</span>
            </div>
            <div>
              <span className="text-xl font-bold text-red-600 block leading-none">Mac & Ross</span>
              <span className="text-xs text-white">Management Consultancy</span>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-red-600 transition-colors">Global Trends</a>
            <a href="#setup" className="text-white hover:text-red-600 transition-colors">E-Invoicing Process</a>
            <a href="#compliance" className="text-white hover:text-red-600 transition-colors">Timeline</a>
            <a href="#services" className="text-white hover:text-red-600 transition-colors">Services</a>
            <a href="#faq" className="text-white hover:text-red-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a>
          </div>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col items-center justify-center space-y-8 transition-all duration-300 animate-fade-in-up">
            <button
              className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#about" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Global Trends</a>
            <a href="#setup" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>E-Invoicing Process</a>
            <a href="#compliance" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Timeline</a>
            <a href="#services" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#faq" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
  className="hero-section relative pb-20 px-4 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
  style={{ backgroundImage: `url('${banner1.src}')` }}
>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container max-w-6xl mx-auto pt-30 relative z-10">
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <div className={`hero-content ${isLoaded ? 'loaded' : 'loading'}`}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                  <span className={`inline-block transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    UAE E-Invoicing:
                  </span>
                  <span className={`text-red-600 block transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Your Countdown
                  </span>
                  <span className={`text-2xl text-white font-normal transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    to Compliance Has Begun
                  </span>
                </h1>
                <p className={`text-xl text-white mb-8 leading-relaxed transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Time is ticking for E-invoicing implementation in the UAE. Don't wait - start your assessment process now with Mac & Ross and Taxilla's proven expertise.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a href="#contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center animate-glow hover:animate-none group">
                    <span className="group-hover:animate-bounce">Start Your E-Invoicing Assessment</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                </div>
              </div>
            </div>
            {/* <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-red-100 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:rotate-3 transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">KSA Business</div>
                      <div className="text-lg text-red-600 font-semibold">Formation</div>
                      <div className="text-sm text-gray-600 mt-2">Vision 2030 Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* E-Invoicing Definition Section */}
      <section id="definition" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="definition-header"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`md:w-full text-center mb-12 scroll-animate ${visibleElements.has('definition-header') ? 'animate' : ''}`}
          >
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              UNDERSTANDING E-INVOICING
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              What is E-Invoicing
              <span className="text-red-600"> in UAE</span>
            </h2>
          </div>

          <div className="flex gap-12 items-start">
            <div 
              id="definition-left"
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              className={`flex-1 bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl scroll-animate-left ${visibleElements.has('definition-left') ? 'animate' : ''} hover:shadow-xl transition-all duration-300`}
              >
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What E-Invoicing IS</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  E-Invoicing is the digital exchange of invoice documents between suppliers and buyers in a structured, 
                  integrated electronic format. E-invoicing involves the electronic generation, transmission, and receipt 
                  of invoices, replacing traditional paper-based methods.
                </p>
              </div>

              
            </div>

            <div 
              id="definition-right"
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              className={`flex-1 bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl scroll-animate-right ${visibleElements.has('definition-right') ? 'animate' : ''} hover:shadow-xl transition-all duration-300`}
            >

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What E-Invoices are NOT</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  E-Invoices are not simply digital versions of paper invoices which can be:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-700">PDFs or Word documents</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-700">Image files i.e.; JPG or TIFF</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-700">Unstructured HTML invoices (e.g., emails or webpages)</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-700">Scanned paper invoices (OCR)</span>
                  </li>
                </ul>
              </div>
            </div>
          
            
          </div>

             <div className='flex justify-center items-center px-4'>
              <Image 
                src={bn} 
                alt='E-Invoicing' 
                width={1000} 
                height={1000} 
                className='w-full max-w-4xl h-auto object-contain'
              />
            </div>
        </div>
      </section>
       {/* FAQ Section */}
       <section id="faq" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="faq-header"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`text-center mb-12 scroll-animate ${visibleElements.has('faq-header') ? 'animate' : ''}`}
          >
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              UAE E-Invoicing
              <span className="text-red-600"> FAQ </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  id={`faq-item-${index}`}
                  ref={(el) => {
                    if (el && observerRef.current) {
                      observerRef.current.observe(el);
                    }
                  }}
                  className={`bg-gray-100 rounded-lg overflow-hidden scroll-animate-scale ${
                    visibleElements.has(`faq-item-${index}`) ? 'animate' : ''
                  } hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="px-6 py-4 cursor-pointer transition-all duration-300 hover:bg-gray-200 group"
                    onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-red-600 transition-colors duration-300">{item.question}</h4>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                        <ChevronRight 
                          className={`w-4 h-4 text-gray-600 group-hover:text-white transition-all duration-300 ${
                            activeFAQ === index ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KSA Overview */}
      {/* <section id="about">
    <DeliveryMethodsSection/>
    </section> */}
            <section id="setup" className="py-16 px-6 bg-red-50 text-gray-900">
        <div className="container max-w-6xl mx-auto">
         <div 
           id="setup-header"
           ref={(el) => {
             if (el && observerRef.current) {
               observerRef.current.observe(el);
             }
           }}
           className={`md:w-full text-center mb-12 scroll-animate ${visibleElements.has('setup-header') ? 'animate' : ''}`}
         >
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    IMPLEMENTATION PROCESS
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
    UAE E-Invoicing 
    <span className="text-red-600"> Implementation </span>Process
  </h2>
</div>


          <div className="grid lg:grid-cols-3 gap-8">
            {eInvoicingSteps.map((step, index) => (
              <div 
                key={index}
                id={`step-${index}`}
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el);
                  }
                }}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-100 group scroll-animate-scale ${visibleElements.has(`step-${index}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-red-200">
                    <step.icon className="w-8 h-8 text-red-600 group-hover:animate-bounce" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:shadow-lg group-hover:bg-red-700 group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-red-600 font-semibold mb-3 group-hover:text-red-700 transition-colors duration-300">{step.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.details}</p>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Post Registration</h4>
                <p className="text-gray-600">Bank account opening, GM appointment, and resident visa processing</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Gov Portal Management</h4>
                <p className="text-gray-600">Complete setup and management of all Saudi government portal accounts</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600">Continuous compliance management and regulatory updates</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* all view */}
      <div 
        id="trends-desktop"
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el);
          }
        }}
        className={`hidden md:flex justify-end items-center min-h-120 bg-gray-900 p-4 scroll-animate ${visibleElements.has('trends-desktop') ? 'animate' : ''}`}
      >
          <div className='flex flex-col md:flex-row gap-8'>
          <div 
                id="trends-header"
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el);
                  }
                }}
                className={`scroll-animate-left ${visibleElements.has('trends-header') ? 'animate' : ''}`}
              >
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    UAE E-INVOICING BACKGROUND
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
    UAE <br/> E-Invoicing<br />
    <span className="text-red-600">Objectives</span><br />
    & <br/>Implementation
  </h2>
</div>

      <div 
        id="trends-cards"
        ref={(el) => {
          if (el && observerRef.current) {
            observerRef.current.observe(el);
          }
        }}
        className={`w-220 h-100 rounded bg-gray-800 flex gap-1 p-2 scroll-animate-right ${visibleElements.has('trends-cards') ? 'animate' : ''}`}
      >
        {globalTrends.map((project, index) => (
          <div
            key={index}
            className="h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-700 bg-white border-2 border-red-600 flex justify-center items-center hover:flex-[4] group hover:shadow-2xl hover:scale-105"
            style={{ 
              minWidth: '28px',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="flex flex-col items-center w-full">
              <span
                className="min-w-28 p-2 text-center transition-all duration-700 uppercase text-gray-900 tracking-wider text-sm transform group-hover:rotate-0 group-hover:mb-2 -rotate-90 mb-0 group-hover:text-red-600"
                style={{ transitionProperty: 'transform, margin-bottom, color' }}
              >
                {project}
              </span>
              <span
                className="min-w-56 p-2 text-center transition-all duration-700 text-gray-800 tracking-wider text-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden group-hover:text-gray-700"
                style={{ transitionProperty: 'opacity, max-height, color' }}
              >
                {eInvoicingTrends[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
          </div>
    </div>
     {/* mobile view */}
     <div 
       id="trends-mobile"
       ref={(el) => {
         if (el && observerRef.current) {
           observerRef.current.observe(el);
         }
       }}
       className={`flex md:hidden justify-end items-center min-h-120 bg-gray-900 p-4 scroll-animate ${visibleElements.has('trends-mobile') ? 'animate' : ''}`}
     >
  <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 w-full'>
    <div 
      id="trends-mobile-header"
      ref={(el) => {
        if (el && observerRef.current) {
          observerRef.current.observe(el);
        }
      }}
      className={`scroll-animate-left ${visibleElements.has('trends-mobile-header') ? 'animate' : ''}`}
    >
      <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
        GLOBAL E-INVOICING TRENDS
      </p>
      <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
        E-Invoicing<br />
        Worldwide<br />
        <span className="text-red-600">Adoption</span> & Growth
      </h2>
    </div>

    {/* Accordion layout for mobile */}
    <div 
      id="trends-mobile-accordion"
      ref={(el) => {
        if (el && observerRef.current) {
          observerRef.current.observe(el);
        }
      }}
      className={`w-full space-y-2 scroll-animate-right ${visibleElements.has('trends-mobile-accordion') ? 'animate' : ''}`}
    >
      {globalTrends.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border-2 border-red-600 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <button
            onClick={() => setActiveService(index === activeService ? -1 : index)}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-red-50 transition-all duration-300 group"
          >
            <span className="uppercase text-gray-900 tracking-wider text-sm font-semibold group-hover:text-red-600 transition-colors duration-300">
              {project}
            </span>
            <ChevronRight 
              className={`w-5 h-5 text-red-600 transition-all duration-300 group-hover:scale-110 ${
                activeService === index ? 'rotate-90' : ''
              }`}
            />:
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 pt-0 border-t border-red-200 bg-red-50">
              <p className="text-gray-800 text-sm leading-relaxed">
                {eInvoicingTrends[index]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      

      {/* Key Compliances */}
      <section id="compliance" className="py-16 px-6 bg-white text-gray-900">
        <div className="container mx-auto max-w-6xl">
         
            <div 
              id="compliance-header"
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              className={`md:w-full text-center mb-6 scroll-animate ${visibleElements.has('compliance-header') ? 'animate' : ''}`}
            >
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    IMPLEMENTATION TIMELINE
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
    UAE E-Invoicing
    <span className="text-red-600"> Timeline </span>
  </h2>
</div>


          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {complianceTimeline.map((item, index) => (
                <div 
                  key={index}
                  className={`px-6 py-2 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                    activeCompliance === index 
                      ? `bg-${item.color}-50 border-${item.color}-500 shadow-md` 
                      : 'bg-white hover:shadow-md border-gray-200 border hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveCompliance(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <div className="flex items-center space-x-4 text-sm mb-1">
                        <span className={`px-3 py-1 rounded-full text-${item.color}-700 bg-${item.color}-100 font-medium`}>
                          {item.frequency}
                        </span>
                      </div>
                      {/* <span className="text-gray-600">{item.dueDate}</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-red-600 uppercase tracking-wider">
                    Step {activeCompliance + 1}
                  </span>
                  <div className="text-right">
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Implementation</div>
                    <div className="text-sm font-semibold text-gray-800">Timeline</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
                  {complianceTimeline[activeCompliance].title}
                </h3>
                <div className="w-20 h-1 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {/* Implementation Date Card */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 mb-1">Implementation Date</div>
                      <div className="text-lg font-bold text-gray-900">
                        {complianceTimeline[activeCompliance].frequency}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Criteria Card */}
                {/* <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600 mb-1">Status</div>
                      <div className="text-lg font-bold text-gray-900">
                        {complianceTimeline[activeCompliance].dueDate}
                      </div>
                    </div>
                  </div>
                </div> */}
                
                {/* Description Card */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Implementation Details
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {complianceTimeline[activeCompliance].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Pricing Section */}
          
          
        </div>
      </section>
   
      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-900">
        <div className="container max-w-6xl mx-auto">
          
          <div 
            id="services-header"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`md:w-full text-center mb-6 scroll-animate ${visibleElements.has('services-header') ? 'animate' : ''}`}
          >
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
  Partnership Services
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
  Mac & Ross  <FaHandshake className="text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300" /> Taxilla 
    <span className="text-red-600"> E-Invoicing </span>Solutions
  </h2>
</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el);
                  }
                }}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group border border-gray-100 scroll-animate-scale ${
                  visibleElements.has(`service-${index}`) ? 'animate' : ''
                } hover:scale-105 hover:ring-2 hover:ring-red-400`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-red-200 group-hover:to-red-300">
                    <service.icon className="w-10 h-10 text-red-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </div>
                
               
                
                {/* <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Partnership Section */}
      <section className="py-16 px-6  bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="partnership-header"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`md:w-full text-center mb-12 scroll-animate ${visibleElements.has('partnership-header') ? 'animate' : ''}`}
          >
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              TRUSTED PARTNERSHIP
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              Your Trusted Partner for
              <span className="text-red-600"> UAE E-Invoicing </span>Compliance
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="partnership-left"
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              className={`space-y-8 scroll-animate-left ${visibleElements.has('partnership-left') ? 'animate' : ''}`}
            >
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More than a decade</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Mac & Ross has been a leading certified audit and tax consulting firm in the UAE, providing trusted 
                  guidance to businesses navigating complex regulatory landscapes.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We are proud to partner with Taxilla, a global leader in e-invoicing solutions with a proven presence 
                  in over 25 countries. This strategic alliance allows us to provide our clients with an end-to-end, 
                  seamless compliance experience.
                </p>
              </div>

              
            </div>
            <div className="bg-red-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Combined Offering</h3>
                <div className="space-y-4">
                  {[
                    { title: "Expert Local Guidance:", desc: "Deep knowledge of UAE VAT and FTA procedures from Mac and Ross." },
                    { title: "Proven Global Technology:", desc: "Taxilla's robust, battle-tested e-invoicing compliance platform." },
                    { title: "End-to-End Support:", desc: "From initial system assessment and ASP integration to ongoing support and training." }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 group-hover:animate-bounce group-hover:text-green-500 transition-colors duration-300" />
                      <div>
                        <span className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{item.title}</span>
                        <span className="text-gray-700 ml-2 group-hover:text-gray-800 transition-colors duration-300">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          
          </div>
          
          <div 
              id="partnership-right"
              ref={(el) => {
                if (el && observerRef.current) {
                  observerRef.current.observe(el);
                }
              }}
              className={`text-center max-w-4xl mt-10 mx-auto flex flex-col justify-center items-center space-y-8 scroll-animate-right ${visibleElements.has('partnership-right') ? 'animate' : ''}`}
            >
              <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Logos</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center group-hover:animate-bounce shadow-md">
                        <Image 
                          src={mrLogo} 
                          alt="Mac & Ross Logo" 
                          width={80} 
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <FaHandshake className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300" />
                      <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center group-hover:animate-bounce shadow-md">
                        <Image 
                          src={taxLogo} 
                          alt="Taxilla Logo" 
                          width={80} 
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                     <p className="text-gray-600 mt-4 font-semibold group-hover:text-red-600 transition-colors duration-300 flex items-center justify-center gap-2">Mac & Ross <FaHandshake className="text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300" /> Taxilla</p>
                  </div>
                  
                 
                </div>
              </div>

             
            </div>
          <div 
            id="partnership-cta"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`mt-12 text-center scroll-animate ${visibleElements.has('partnership-cta') ? 'animate' : ''}`}
          >
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Partner with experts you can trust.
            </p>
            <p className="text-lg text-gray-700">
              Ensure a smooth and successful transition to e-invoicing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
   <section 
     id="contact"
     ref={(el) => {
       if (el && observerRef.current) {
         observerRef.current.observe(el);
       }
     }}
     className={`relative py-16 px-6 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen scroll-animate ${visibleElements.has('contact') ? 'animate' : ''}`}
     style={{ backgroundImage: "url('/1.png')" }}
   >
      <style jsx global>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hover-lift-glow:hover {
          box-shadow: 0 8px 32px 0 rgba(255,255,255,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10);
          transform: translateY(-8px) scale(1.02);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .icon-bounce:hover {
          animation: bounce 0.6s;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      <div className="container mx-auto max-w-6xl text-white z-10">
        {/* Header */}
         <div className="absolute inset-0 bg-black opacity-70"></div>
        <div 
          id="contact-header"
          ref={(el) => {
            if (el && observerRef.current) {
              observerRef.current.observe(el);
            }
          }}
          className={`text-center mb-12 scroll-animate ${visibleElements.has('contact-header') ? 'animate' : ''}`}
        >
          <h2 className="text-4xl font-bold mb-6">Ready for UAE E-Invoicing Compliance?</h2>
          <p className="text-xl text-white/90">Partner with experts you can trust. Ensure a smooth and successful transition to e-invoicing.</p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
      
          <div 
            id="contact-info"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`space-y-8 hover-lift-glow transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 scroll-animate-left ${visibleElements.has('contact-info') ? 'animate' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                <Phone className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300 group-hover:animate-bounce" />
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Phone</h4>
                  <p className="opacity-90 mb-1 group-hover:text-white transition-colors duration-300">
                    <a href="tel:+97143584999" className="hover:text-yellow-300 transition-colors duration-300">+971 43584999</a>
                  </p>
                  <p className="opacity-90 group-hover:text-white transition-colors duration-300">
                    <a href="tel:+971543522747" className="hover:text-yellow-300 transition-colors duration-300">+971 543522747</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300 group-hover:animate-bounce" />
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Email</h4>
                  <p className="opacity-90 mb-1 group-hover:text-white transition-colors duration-300">
                    <a href="mailto:info@mnrdxb.com" className="hover:text-yellow-300 transition-colors duration-300">info@mnrdxb.com</a>
                  </p>
                  {/* <p className="opacity-90 group-hover:text-white transition-colors duration-300">einvoicing@macross.ae</p> */}
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/Dubai,+United+Arab+Emirates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 cursor-pointer"
              >
                <MapPin className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300 group-hover:animate-bounce" />
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Location</h4>
                  <p className="opacity-90 group-hover:text-white transition-colors duration-300 group-hover:underline">Dubai, United Arab Emirates</p>
                </div>
              </a>
             
            </div>
          
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md focus:ring-2 focus:ring-white/50 group">
                  <span className="group-hover:animate-bounce">Schedule E-Invoicing Consultation</span>
                </button>
                
              </div>
            </div>
          </div>

        
          <div 
            id="contact-form"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover-lift-glow transition-all duration-300 scroll-animate-right ${visibleElements.has('contact-form') ? 'animate' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg hover:bg-black/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg hover:bg-black/30"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex space-x-2">
                {/* Country Code Dropdown */}
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={e => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                  className="px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg hover:bg-black/30"
                >
                  <option value="+971">+971</option>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  {/* Add more if needed */}
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={e => {
                    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
                    setFormData(prev => ({ ...prev, number: value }));
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg hover:bg-black/30"
                  placeholder="Enter your phone number"
                  inputMode="numeric"
                  pattern="\\d{10}"
                  maxLength={10}
                  minLength={10}
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent resize-none transition-all duration-200 focus:shadow-lg hover:bg-black/30"
                  placeholder="Tell us about your business expansion plans..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md focus:ring-2 focus:ring-white/50 group"
              >
                <Send className="w-5 h-5 group-hover:animate-bounce" />
                <span className="group-hover:animate-bounce">Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">E-Invoicing UAE</span>
              </div>
              <p className="text-gray-400">Leading the digital transformation in Middle East invoicing.</p>
            </div>
            
            <ul className="font-semibold mb-8 leading-10">
              <li><a href="#about" className="text-white hover:text-red-600 transition-colors">UAE E-Invoicing Background</a></li>
              <li><a href="#setup" className="text-white hover:text-red-600 transition-colors">E-Invoicing Process</a></li>
              <li><a href="#compliance" className="text-white hover:text-red-600 transition-colors">Timeline</a></li>
              <li><a href="#services" className="text-white hover:text-red-600 transition-colors">Services</a></li>
              <li><a href="#faq" className="text-white hover:text-red-600 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
            
            {/* <div>
              <h4 className="font-semibold mb-4">Countries</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">UAE</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Saudi Arabia</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Egypt</a>
              </div>
            </div> */}
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start space-x-4 group">
                  <Phone className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Phone</h4>
                    <p className="opacity-90 mb-1">
                      <a href="tel:+97143584999" className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
                      +971-50 123 4567
                      </a>
                    </p>
                    <p className="opacity-90">
                      <a href="tel:+971543522747" className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
                     
+971-55 987 6543
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="opacity-90 mb-1">
                      <a href="mailto:info@mnrdxb.com" className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
                        info@mnrdxb.com
                      </a>
                    </p>
                   
                  </div>
                </div>
                
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <div className="space-y-2 text-gray-400">
                
                <div className="flex items-start space-x-4 group">
                  <MapPin className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Location</h4>
                    <p className="opacity-90">
                      <a 
                        href="https://maps.google.com/maps?q=Dubai,+United+Arab+Emirates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 cursor-pointer transition-colors duration-200"
                      >
                        Dubai, United Arab Emirates
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 eInvoice ME. All rights reserved | Crafted with care by <a href="https://digitalizetheglobe.com/" target="_blank" rel="noopener noreferrer" className='text-red-600 font-bold cursor-pointer hover:text-red-500 transition-colors duration-300'>Digitalize The Globe</a>.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}