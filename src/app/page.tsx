"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight, FileText, Shield, ShieldCheck, Globe, TrendingUp, CheckCircle, ArrowRight, Calendar, Building, Users, MapPin, Award, Briefcase, Clock, Phone, Mail, ExternalLink, Send, Scale, Calculator, FileCheck, UserCheck, BarChart3, Handshake, Search, AlertTriangle } from 'lucide-react';
import { FaHandshake } from 'react-icons/fa';
import DeliveryMethodsSection from './components/about';
import banner1 from '../../public/banner1.jpg';
import aboutCredit1 from '../../public/1.png';
import bn from '../../public/model.jpg';
import banner2 from '../../public/1.png';
import mrLogo from '../../public/Picture1.png';
import taxLogo from '../../public/Picture2.png';
import SaudiAdvantagesSection from './components/about';
import ClientLogoSection from './components/clintlogo';

export default function UAEEInvoicingLanding() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeCompliance, setActiveCompliance] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const stats = [
    { value: 25, label: "Countries Experience" },
    { value: 1000, label: "Businesses Served" },
    { value: 10, label: "Years Expertise" },
    { value: 99, label: "Compliance Rate %" }
  ];

  const faqItems = [
    {
      question: "How exchange of invoices will happen?",
      answer: "Businesses in the UAE must engage with an Accredited Service Provider to issue and receive eInvoices. The buyer's electronic address (endpoint) will be used to share the invoice over the Peppol network."
    },
    {
      question: "In case of tax group, each entity should be integrated with ASP or single integration with main entity (representative entity) should be integrated with ASP?",
      answer: "Each member of the VAT group must have an endpoint via a UAE Accredited Service Provider."
    },
    {
      question: "How invoices will be generated for export of goods/services?",
      answer: "For export transactions, if your foreign buyer is registered on the Peppol network, you'll need to provide their electronic address (endpoint). If the buyer is not registered, a dummy endpoint will be used. In this case, the invoice will not be exchanged through Peppol, but your service provider will still report it to the FTA. You can then send the invoice to the buyer directly (for example, by email). The foreign buyer doesn't need to register with a UAE e-invoicing service provider unless required under UAE VAT or Corporate Tax laws."
    },
    {
      question: "In case of error on original invoice, what is method of correction?",
      answer: "In case of any errors in tax invoices, a credit note is required to be issued for its rectification."
    },
    {
      question: "How should retail business should handle e-invoicing?",
      answer: "B2C transactions are not currently within the scope of UAE eInvoicing."
    },
    {
      question: "Will there be any QR code to be printed on E-invoice?",
      answer: "There is no requirement for QR codes to be printed on the eInvoices."
    },
    {
      question: "Is self-billing applicable to UAE-based customers for import of goods/services?",
      answer: "The MoF cannot impose its standards on foreign vendors, so these invoices will not be required to be sent through the UAE eInvoicing network, and there will be no additional obligation on taxpayers to report these transactions."
    },
    {
      question: "Business entity can use different ASP for sales and purchase or there should be one ASP only?",
      answer: "Each business entity must use the same Accredited Service Provider (ASP) for both sending (accounts receivable) and receiving (accounts payable) eInvoices."
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

  // Stats animation observer
  useEffect(() => {
    if (statsRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldAnimate(true);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(statsRef.current);
      return () => observer.disconnect();
    }
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
      title: "Pilot",
      frequency: "1 July 2026",
      revenueCriteria: "Selected group of businesses",
      aspAppointmentDate: "N/A",
      effectiveDate: "1 July 2026",
      description: "Pilot phase for selected group of businesses to test the e-invoicing system before full implementation.",
      color: "red"
    },
    {
      title: "Phase 1",
      frequency: "1 January 2027",
      revenueCriteria: "> AED 50 million",
      aspAppointmentDate: "31 July 2026",
      effectiveDate: "1 January 2027",
      description: "Phase 1 implementation for businesses with turnover greater than AED 50 million. ASP appointment must be completed by 31 July 2026.",
      color: "red"
    },
    {
      title: "Phase 2",
      frequency: "1 July 2027",
      revenueCriteria: "< AED 50 million",
      aspAppointmentDate: "31 March 2027",
      effectiveDate: "1 July 2027",
      description: "Phase 2 implementation for businesses with turnover less than AED 50 million. ASP appointment must be completed by 31 March 2027.",
      color: "red"
    },
    {
      title: "Phase 3 – Government Entities",
      frequency: "1 October 2027",
      revenueCriteria: "N/A",
      aspAppointmentDate: "31 March 2027",
      effectiveDate: "1 October 2027",
      description: "Phase 3 implementation for government entities. ASP appointment must be completed by 31 March 2027.",
      color: "red"
    }
  ];


  const services = [
    {
      title: "Specialized UAE Tax Expertise",
      description: "Leveraging deep knowledge of FTA regulations and local tax laws to ensure your business stays fully compliant.",
      icon: UserCheck,
      // features: ["UAE Tax Expertise", "FTA Compliance", "Local Regulatory Knowledge", "Business Advisory"]
    },
    {
      title: "Proven Global Technology",
      description: "Utilize Taxilla's battlefield-tested platform, trusted across 25+ countries for robust e-invoicing compliance and seamless API integration.",
      icon: Globe,
      features: ["25+ Countries Experience", "Cutting-edge Software", "API Integration", "Real-time Processing"]
    },
    {
      title: "End-to-End Implementation Support",
      description: "We handle everything: from initial gap assessment and system integration to staff training and post-go-live support.",
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
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
            <a href="#overview" className="text-white hover:text-red-600 transition-colors">Overview</a>
            <a href="#definition" className="text-white hover:text-red-600 transition-colors">Introduction</a>
            {/* <a href="#framework" className="text-white hover:text-red-600 transition-colors">Framework</a> */}
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
            <a href="#overview" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#definition" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Introduction</a>
            {/* <a href="#framework" className="text-white text-2xl font-semibold hover:text-red-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Framework</a> */}
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
                    Digital Tax Transformation:
                  </span>
                  <span className={`text-red-600 block transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Preparing for
                  </span>

                  <span className={`text-white block transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Master UAE E-Invoicing Compliance
                  </span>

                </h1>
                <p className="text-xl text-white mb-8 leading-relaxed transition-all duration-1000 delay-800 text-justify sm:text-left">
                  The Federal Tax Authority's mandate is changing how you do business. We provide the expert guidance, technology, and support you need to transition seamlessly.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a href="#contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center animate-glow hover:animate-none group">
                    <span className="group-hover:animate-bounce"> Start Your E-Invoicing Assessment</span>
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
      <section id="overview" className="relative w-full py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 min-h-[400px] lg:min-h-[550px]">
            {/* Left Side - Image */}
            <div className="relative w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-[550px] flex-shrink-0 order-1 lg:order-1">
              <div className="block w-full h-full">
                <Image
                  src={aboutCredit1}
                  alt="UAE E-Invoicing Partnership"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Side - White Overlay Box */}
            <div className="relative w-full lg:w-[70%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 bg-white p-6 sm:p-8 lg:p-12 shadow-xl lg:-ml-20 lg:mt-0 mt-4 order-2 lg:order-2 rounded-lg">
              {/* Main Headline */}
              <h2 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl lg:text-[48px] mb-4 sm:mb-5 leading-tight">
                Why E-Invoicing Matters for Your Business
              </h2>

              {/* Bullet Points */}
              <ul className="text-[#666666] leading-relaxed text-sm sm:text-base mb-6 sm:mb-7 space-y-3 sm:space-y-4 text-justify">
                <li>
                  <strong className="text-black font-semibold">Strategic Transformation:</strong> The FTA's phased roadmap marks a critical shift towards a fully digital tax ecosystem, aligning the UAE with global economic standards.
                </li>
                <li>
                  <strong className="text-black font-semibold">Secure & Standardized:</strong> Adopting the 5-Corner Model and Peppol network ensures that your financial data is exchanged securely, efficiently, and in a standardized format.
                </li>
                <li>
                  <strong className="text-black font-semibold">Regulatory Clarity:</strong> Ministerial Decisions No. 243 and 244 of 2025 provide the definitive timeline and operational framework. Now is the time to prepare.
                </li>
              </ul>

              {/* Concluding Paragraph */}
              <p className="text-[#666666] leading-relaxed text-sm sm:text-base text-justify">
                To navigate these changes, understanding the 'Why' is just as important as the 'How'. Below, we break down the key factors, definitions, and timelines that every UAE business needs to know to stay compliant and competitive.
              </p>

            </div>
          </div>

          {/* Statistics Section - Below the white box */}
          {/* <div className="w-full flex justify-center mt-6 sm:mt-8 lg:mt-16 px-4">
              <div 
                ref={statsRef}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-2 sm:px-0">
                    <div className="text-[#1A1A1A] font-bold text-2xl sm:text-4xl lg:text-6xl mb-1 sm:mb-2">
                      {shouldAnimate ? (
                        stat.value >= 1000 ? (
                          <span>{stat.value.toLocaleString()} +</span>
                        ) : (
                          <span>{stat.value} +</span>
                        )
                      ) : (
                        "0 +"
                      )}
                    </div>
                    <div className="text-[#666666] text-xs sm:text-sm lg:text-base leading-tight sm:leading-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
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
            {/* <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              
            </p> */}
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              Understanding <span className="text-red-600">UAE E-Invoicing</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What is E-Invoicing?</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4 text-justify">
                  E-Invoicing is the automated, secure exchange of invoice documents between suppliers and buyers in a structured, integrated electronic format.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  It replaces traditional paper and PDF invoices with a seamless digital workflow (XML) that integrates directly with the tax authority's systems.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What E-Invoices Are NOT:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  E- Invoices are not simply digital versions of paper invoices which can be :
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

        </div>
      </section>
      {/* <section className="relative w-full py-8 sm:py-12 lg:py-16 bg-gray-50">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 min-h-[400px] lg:min-h-[550px]">
      
    
      <div
        className="relative w-full lg:w-[70%] 
                   lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 
                   z-20 bg-white p-6 sm:p-8 lg:p-12 shadow-xl 
                   mt-4 lg:mt-0 rounded-lg
                   order-2 lg:order-1"
      >
        <h2 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl lg:text-[48px] mb-2 sm:mb-3 leading-tight">
          Scope of Application
        </h2>
        <p className="text-[#1A1A1A] italic text-sm sm:text-base mb-6 sm:mb-8">
          Ministerial Decision No. 243 and 244 of 2025
        </p>

       
        <div className="mb-6 sm:mb-8">
          <h3 className="text-[#1A1A1A] font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5 flex items-center gap-3">
            <span>👥</span>
            <span>Applies To</span>
          </h3>
          <ul className="text-[#666666] leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4 ml-6 sm:ml-8">
            <li className="list-disc">
              All persons conducting business in the UAE (except exclusions)
            </li>
            <li className="list-disc">
              Other persons or transactions as determined by the Minister
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-[#1A1A1A] font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5 flex items-center gap-3">
            <span>🚫</span>
            <span>Exclusions</span>
          </h3>
          <ul className="text-[#666666] leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4 ml-6 sm:ml-8">
            <li className="list-disc">
              Government activities in sovereign capacity (non-competitive)
            </li>
            <li className="list-disc">
              International passenger transport by airlines
            </li>
            <li className="list-disc">
              International goods transport by airlines (24-month exclusion)
            </li>
            <li className="list-disc">
              Exempt and zero-rated financial services
            </li>
            <li className="list-disc">
              B2C transactions (may be considered later)
            </li>
            <li className="list-disc">
              Other exclusions as notified by the Minister
            </li>
          </ul>
        </div>
      </div>

     
      <div
        className="relative w-full lg:w-[50%] 
                   h-[300px] sm:h-[400px] lg:h-[550px] 
                   flex-shrink-0 
                   order-1 lg:order-2 lg:ml-auto"
      >
        <div className="block w-full h-full relative">
          <Image
            src={aboutCredit1}
            alt="UAE E-Invoicing Partnership"
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
</section> */}

      <div id="model" className='py-16 flex flex-col justify-center items-center bg-red-50'>
        <h2 className="text-4xl md:text-[47px] mb-12 font-bold leading-tight justify-center items-center text-gray-900">
          UAE
          <span className="text-red-600"> E-INVOICING </span>
          (5 corner model)
        </h2>
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
      {/* FAQ Section */}


      {/* KSA Overview */}
      {/* <section id="about">
    <DeliveryMethodsSection/>
    </section> */}
      {/* <section id="setup" className="py-16 px-6 bg-red-50 text-gray-900">
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

         
        </div>
      </section> */}


      {/* <div 
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
</div> */}




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
              Critical
              <span className="text-red-600"> Timelines </span>
            </h2>
          </div>


          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-red-100 text-gray-900 border-b border-red-200">
                    <th className="p-4 font-bold">Implementation Phase</th>
                    <th className="p-4 font-bold">Revenue Criteria (Turnover)</th>
                    <th className="p-4 font-bold">ASP appointment date</th>
                    <th className="p-4 font-bold">Effective Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {complianceTimeline.map((item, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-red-50 transition-colors duration-200`}
                    >
                      <td className="p-4 font-medium text-gray-900">{item.title}</td>
                      <td className="p-4 text-gray-700">{item.revenueCriteria}</td>
                      <td className="p-4 text-gray-700">{item.aspAppointmentDate}</td>
                      <td className="p-4 text-gray-700">{item.effectiveDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-100">
            <div className="flex items-start">
              <span className="text-sm font-semibold text-red-900 mr-2">Note:</span>
              <p className="text-sm text-red-800">
                Revenue refers to gross income earned during the most recent accounting period
              </p>
            </div>
          </div>

          {/* Transfer Pricing Section */}


        </div>
      </section>

      {/* Services */}
      <section id="penalties" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div
            id="penalties-header"
            ref={(el) => {
              if (el && observerRef.current) {
                observerRef.current.observe(el);
              }
            }}
            className={`text-center mb-12 scroll-animate ${visibleElements.has('penalties-header') ? 'animate' : ''}`}
          >
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              COMPLIANCE & PENALTIES
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              UAE E-Invoicing
              <span className="text-red-600"> Penalties </span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Key violations and administrative penalties as set out under Cabinet Decision No. 106 of 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 border-b-2 border-red-500">
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider w-16">Sr. No.</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider w-[30%]">Description of Violation</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider w-[25%]">Administrative Penalty Amount (In AED)</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider">Prescribed Timelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-center font-bold text-red-600">1</td>
                    <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                      Failure by the Issuer to implement the Electronic Invoicing System, including failure to appoint an Accredited Service Provider within the timeline prescribed by the Minister.
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold text-sm">
                      AED 5,000 in case of delay for each month or part thereof.
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Phase 1 - July 31, 2026/ January 1, 2027</li>
                        <li>Phase 2 - March 31, 2027/July 1, 2027</li>
                        <li>Govt entities - March 31, 2027/October 1, 2027</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 text-center font-bold text-red-600">2</td>
                    <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                      Failure by the Issuer to issue and transmit an Electronic Invoice/ Electronic Credit Note to the Recipient through the Electronic Invoicing System within the timeline prescribed by the Minister.
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold text-sm">
                      AED 100 for each Electronic Invoice/ Electronic Credit Note, up to a maximum of AED 5,000 per calendar month.
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Within 14 days from the date of supply rules specified under UAE VAT regulations.</li>
                        <li>Within 14 days from the date of the business transaction for non-registered companies</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-center font-bold text-red-600">3</td>
                    <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                      Failure by the Issuer or recipient to notify the Authority of a System Failure within the timeline prescribed by the Minister.
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold text-sm">
                      AED 1,000 for each day of delay or part thereof.
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Within 2 business working days from date of occurrence of system failure.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4 text-center font-bold text-red-600">4</td>
                    <td className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                      Failure by the Issuer or the Recipient to notify the appointed Accredited Service Provider of changes to the data registered with the Authority within the timeline prescribed by the Minister.
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold text-sm">
                      AED 1,000 for each day of delay or part thereof.
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Within 5 business days from receiving confirmation of the amendment by Authority</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Warning Note */}
          {/* <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h4>
                <p className="text-yellow-800 leading-relaxed">
                  These penalties are subject to Cabinet Decision No. 106 of 2025. It is crucial for businesses to ensure timely compliance with all e-invoicing requirements to avoid administrative penalties. We recommend consulting with qualified professionals to ensure full compliance.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <ClientLogoSection />

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
                  className={`bg-gray-100 rounded-lg overflow-hidden scroll-animate-scale ${visibleElements.has(`faq-item-${index}`) ? 'animate' : ''
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
                          className={`w-4 h-4 text-gray-600 group-hover:text-white transition-all duration-300 ${activeFAQ === index ? 'rotate-90' : ''
                            }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed text-justify">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}

      {/* Penalties Section */}


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
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed text-justify">
                Have questions about UAE E-Invoicing? Our dedicated team is ready to provide the guidance and support you need for a seamless transition. Reach out to us directly through any of the channels below.
              </p>
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
                      <a href="mailto:einvoicing@mnrdxb.com" className="hover:text-yellow-300 transition-colors duration-300">einvoicing@mnrdxb.com</a>
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
                    placeholder="How can we help you?"
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
              <li><a href="#overview" className="text-white hover:text-red-600 transition-colors">Overview</a></li>
              <li><a href="#definition" className="text-white hover:text-red-600 transition-colors">Introduction</a></li>
              <li><a href="#framework" className="text-white hover:text-red-600 transition-colors">Framework</a></li>
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
                        +971 4358 4999
                      </a>
                    </p>
                    <p className="opacity-90">
                      <a href="tel:+971543522747" className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
                        +971 54 352 2747
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="opacity-90 mb-1">
                      <a href="mailto:einvoicing@mnrdxb.com" className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
                        einvoicing@mnrdxb.com
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