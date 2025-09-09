"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Shield, ShieldCheck, Globe, TrendingUp, CheckCircle, ArrowRight, Calendar, Building, Users, MapPin, Award, Briefcase, Clock, Phone, Mail, ExternalLink, Send, Scale, Calculator, FileCheck, UserCheck, BarChart3, Handshake, Search } from 'lucide-react';
import DeliveryMethodsSection from './components/about';
import banner1 from '../../public/banner1.jpg';
import banner2 from '../../public/1.png';
export default function UAEEInvoicingLanding() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeCompliance, setActiveCompliance] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqItems = [
    {
      question: "What is the procedure to deliver the tax invoice to the customer?",
      answer: "Businesses in the UAE must engage with an Accredited Service Provider to issue and receive eInvoices. The buyer's electronic address (endpoint) will be used to share the invoice over the Peppol network."
    },
    {
      question: "Will it be required that every legal entity within a VAT tax group must integrate with an Accredited Service Provider separately?",
      answer: "Each member of the VAT group must have an endpoint via a UAE Accredited Service Provider. All entities that are part of VAT tax group cannot have a single integration through the representative member."
    },
    {
      question: "Who will create and exchange the eInvoice in case of Self-billing?",
      answer: "In case of self-billing the buyer (customer) should create the eInvoice and will exchange the document with the seller and will also report to the FTA via the Accredited Service Provider."
    },
    {
      question: "Does business to business (B2B) include also businesses not VAT registered?",
      answer: "The eInvoicing framework encompasses all business-to-business (B2B) and business-to-government (B2G) transactions, regardless of the VAT registration status of the entities involved."
    },
    {
      question: "What are the allowed modes of error correction on tax invoices under the eInvoicing system?",
      answer: "In case of any errors in tax invoices, a credit note is required to be issued for its rectification. Standard amendment processes through credit notes ensure proper audit trail and compliance."
    }
  ];

   const eInvoicingTrends = [
  "Over 70 countries worldwide have implemented or are implementing mandatory e-invoicing systems, demonstrating the global shift towards digital compliance.",
  "European Union leads with widespread adoption across member states, resulting in 15-20% reduction in processing costs and improved tax compliance.",
  "Latin America pioneered real-time e-invoicing with countries like Brazil, Mexico, and Chile achieving 95%+ compliance rates within 3-5 years.",
  "Asia-Pacific region shows rapid adoption with India, Singapore, and Malaysia implementing comprehensive e-invoicing frameworks for B2B transactions.",
  "Middle East countries including Saudi Arabia, Egypt, and now UAE are implementing e-invoicing to combat tax evasion and improve business efficiency.",
  "Studies show e-invoicing reduces invoice processing time by 60-80% and paper costs by 90%, while improving cash flow and reducing errors.",
  "Global e-invoicing market is expected to reach $24.7 billion by 2027, driven by regulatory mandates and digital transformation initiatives."
];

   const globalTrends = [
    "Europe – Comprehensive Implementation",
    "Latin America – Real-time Pioneers", 
    "Asia-Pacific – Rapid Digital Adoption",
    "Middle East – Emerging Compliance",
    "North America – Voluntary Adoption",
    "Africa – Government-led Initiatives",
    "Global Market – $24.7B by 2027"
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
      title: "Phase 1: Large Companies",
      frequency: "January 2026",
      dueDate: "Revenue > AED 500M",
      description: "First wave of implementation targeting largest enterprises in UAE",
      color: "red"
    },
    {
      title: "Phase 2: Medium Companies",
      frequency: "January 2027",
      dueDate: "Revenue > AED 375M",
      description: "Second wave expanding to medium-sized businesses across sectors",
      color: "orange"
    },
    {
      title: "Phase 3: Small Companies",
      frequency: "January 2028",
      dueDate: "Revenue > AED 250M",
      description: "Third wave including smaller businesses with significant revenue",
      color: "yellow"
    },
    {
      title: "Phase 4: All VAT Registered",
      frequency: "January 2029",
      dueDate: "All VAT Entities",
      description: "Final phase covering all VAT-registered businesses regardless of size",
      color: "green"
    },
    {
      title: "Preparation Window",
      frequency: "Now - 2025",
      dueDate: "Assessment Period",
      description: "Critical preparation period for system assessment and ASP selection",
      color: "blue"
    }
  ];

  const services = [
    {
      title: "Expert Local Guidance",
      description: "Deep knowledge of UAE VAT and FTA procedures from Mac and Ross.",
      icon: UserCheck,
      features: ["UAE Tax Expertise", "FTA Compliance", "Local Regulatory Knowledge", "Business Advisory"]
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
    },
    {
      title: "System Assessment & Planning",
      description: "Comprehensive evaluation of your current invoicing processes and readiness.",
      icon: Search,
      features: ["Process Analysis", "Gap Assessment", "Timeline Planning", "Risk Evaluation"]
    },
    {
      title: "ASP Integration Services",
      description: "Seamless integration with Accredited Service Providers and your existing systems.",
      icon: BarChart3,
      features: ["API Development", "System Integration", "Testing Support", "Go-live Assistance"]
    },
    {
      title: "Training & Change Management",
      description: "Comprehensive training programs for your finance and operations teams.",
      icon: Users,
      features: ["Staff Training", "Process Documentation", "Change Management", "Best Practices"]
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
  className="relative pb-20 px-4 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
  style={{ backgroundImage: `url('${banner1.src}')` }}
>
        <div className="container max-w-6xl mx-auto pt-30 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 ">
                  UAE E-Invoicing:
                  <span className="text-red-600 block">Your Countdown</span>
                  <span className="text-2xl text-white font-normal">to Compliance Has Begun</span>
                </h1>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Time is ticking for E-invoicing implementation in the UAE. Don't wait - start your assessment process now with Mac & Ross and Taxilla's proven expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                    Start Your E-Invoicing Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-colors">
                    Download UAE Guide
                  </button>
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
          <div className="md:w-full text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              UNDERSTANDING E-INVOICING
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              What is E-Invoicing
              <span className="text-red-600"> in UAE</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What E-Invoicing IS</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  E-Invoicing is the digital exchange of invoice documents between suppliers and buyers in a structured, 
                  integrated electronic format. E-invoicing involves the electronic generation, transmission, and receipt 
                  of invoices, replacing traditional paper-based methods.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What E-Invoices are NOT</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  E-Invoices are not simply digital versions of paper invoices which can be:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700">PDFs or Word documents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700">Image files i.e.; JPG or TIFF</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700">Unstructured HTML invoices (e.g., emails or webpages)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700">Scanned paper invoices (OCR)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">5-Corner Model</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="font-semibold">Supplier (Seller)</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-semibold">Buyer (Customer)</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-semibold">Accredited Service Provider (ASP)</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span className="font-semibold">Peppol Network</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <span className="font-semibold">Federal Tax Authority (FTA)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KSA Overview */}
      <section id="about">
    <DeliveryMethodsSection/>
    </section>
            <section id="setup" className="py-16 px-6 bg-red-50 text-gray-900">
        <div className="container max-w-6xl mx-auto">
         <div className="md:w-full text-center mb-12">
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
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-100 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-shadow duration-300 group-hover:shadow-lg group-hover:bg-red-700">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-red-600 font-semibold mb-3">{step.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{step.details}</p>
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
      <div className="hidden md:flex justify-end  items-center min-h-120 bg-gray-900 p-4 ">
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row  gap-8'>
              <div className="">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    GLOBAL E-INVOICING TRENDS
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
    E-Invoicing<br />
    Worldwide<br />
    <span className="text-red-600">Adoption</span> & Growth
  </h2>
</div>

      <div className="w-220 h-100 rounded bg-gray-800 flex gap-1 p-2">
        {globalTrends.map((project, index) => (
          <div
            key={index}
            className="h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-white border-2 border-red-600 flex justify-center items-center hover:flex-[4] group"
            style={{ minWidth: '56px' }}
          >
            <div className="flex flex-col items-center w-full">
              <span
                className="min-w-56 p-2 text-center transition-all duration-500 uppercase text-gray-900 tracking-wider text-sm transform group-hover:rotate-0 group-hover:mb-2 -rotate-90 mb-0"
                style={{ transitionProperty: 'transform, margin-bottom' }}
              >
                {project}
              </span>
              <span
                className="min-w-56 p-2 text-center transition-all duration-500 text-gray-800 tracking-wider text-xs opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden"
                style={{ transitionProperty: 'opacity, max-height' }}
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
     <div className="flex md:hidden justify-end items-center min-h-120 bg-gray-900 p-4 ">
  <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 w-full'>
    <div className="">
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
    <div className="w-full space-y-2">
      {globalTrends.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border-2 border-red-600 overflow-hidden"
        >
          <button
            onClick={() => setActiveService(index === activeService ? -1 : index)}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-red-50 transition-colors duration-200"
          >
            <span className="uppercase text-gray-900 tracking-wider text-sm font-semibold">
              {project}
            </span>
            <ChevronRight 
              className={`w-5 h-5 text-red-600 transition-transform duration-300 ${
                activeService === index ? 'rotate-90' : ''
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
      <section id="compliance" className="py-16 px-6  bg-white text-gray-900">
        <div className="container mx-auto max-w-6xl">
         
            <div className="md:w-full text-center mb-6">
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
                  className={`px-6 py-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border-l-4  ${
                    activeCompliance === index 
                      ? `bg-${item.color}-50 border-${item.color}-500 shadow-lg` 
                      : 'bg-white hover:shadow-lg border-red-200 border  '
                  }`}
                  onClick={() => setActiveCompliance(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <div className="flex items-center space-x-4 text-sm mb-2">
                        <span className={`px-2 py-1 rounded text-${item.color}-700 bg-${item.color}-100`}>
                          {item.frequency}
                        </span>
                        
                      </div>
                      <span className="text-gray-600">{item.dueDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">{complianceTimeline[activeCompliance].title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-red-600" />
                  <div className='text-xl'>
                    <span className="font-semibold text-gray-900">Implementation Date:</span>
                    <span className="ml-2 text-gray-700">{complianceTimeline[activeCompliance].frequency}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div className='text-xl'>
                    <span className="font-semibold text-gray-900">Criteria:</span>
                    <span className="ml-2 text-gray-700">{complianceTimeline[activeCompliance].dueDate}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-2xl hidden md:block">
                  <h4 className="font-semibold text-gray-900 mb-3">Details</h4>
                  <p className="text-gray-700 leading-relaxed">{complianceTimeline[activeCompliance].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Pricing Section */}
          {/* <div className="mt-16 bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transfer Pricing Thresholds</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Documentation Requirements</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Phase 1 (2024-2026):</span>
                    <span className="text-red-600">≤ SAR 48M</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Phase 2 (2027+):</span>
                    <span className="text-red-600"> SAR 48M</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Foreign Companies:</span>
                    <span className="text-red-600"> SAR 6M</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documentation</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Disclosure Form (All transactions)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Local File (Threshold based)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Master File (Threshold based)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Country-by-Country Reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>
        {/* <div className="md:w-full text-center mb-6">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
  Services
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
  Mac & Ross 
    <span className="text-red-600"> Services </span>in KSA
  </h2>
</div> */}
      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          
          <div className="md:w-full text-center mb-6">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
  Partnership Services
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
  Mac & Ross + Taxilla 
    <span className="text-red-600"> E-Invoicing </span>Solutions
  </h2>
</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="md:w-full text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              UAE E-Invoicing
              <span className="text-red-600"> FAQ </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border-l-4  ${
                    activeFAQ === index 
                      ? 'bg-red-50 border-red-500 shadow-lg' 
                      : 'bg-white hover:shadow-lg border-red-200 border'
                  }`}
                  onClick={() => setActiveFAQ(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h4>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-red-600 transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{faqItems[activeFAQ].question}</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">{faqItems[activeFAQ].answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="md:w-full text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
              TRUSTED PARTNERSHIP
            </p>
            <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
              Your Trusted Partner for
              <span className="text-red-600"> UAE E-Invoicing </span>Compliance
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
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

              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Combined Offering</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Expert Local Guidance:</span>
                      <span className="text-gray-700 ml-2">Deep knowledge of UAE VAT and FTA procedures from Mac and Ross.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Proven Global Technology:</span>
                      <span className="text-gray-700 ml-2">Taxilla's robust, battle-tested e-invoicing compliance platform.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">End-to-End Support:</span>
                      <span className="text-gray-700 ml-2">From initial system assessment and ASP integration to ongoing support and training.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-8">
              <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Logos</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M&R</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">+</span>
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">TAX</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 font-semibold">Mac & Ross + Taxilla</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3">Certifications & Partners</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-700">
                        UAE Licensed
                      </div>
                      <div className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-700">
                        FTA Approved
                      </div>
                      <div className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-700">
                        Peppol Certified
                      </div>
                      <div className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-700">
                        ISO Compliant
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <p className="text-sm text-gray-600 italic">
                  *We are discussing with Taxilla for use of client logos, once confirmed we can put.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
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
   <section id="contact"
  className="relative py-16 px-6 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen  animate-fade-in-up"
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
      <div className="container mx-auto max-w-6xl text-white  z-10">
        {/* Header */}
         <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">Ready for UAE E-Invoicing Compliance?</h2>
          <p className="text-xl text-white/90">Partner with experts you can trust. Ensure a smooth and successful transition to e-invoicing.</p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
      
          <div className="space-y-8 hover-lift-glow transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <Phone className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Phone</h4>
                  <p className="opacity-90 mb-1">+971-50 123 4567</p>
                  <p className="opacity-90">+971-55 987 6543</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Email</h4>
                  <p className="opacity-90 mb-1">info@macross.ae</p>
                  <p className="opacity-90">einvoicing@macross.ae</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Location</h4>
                  <p className="opacity-90">Dubai, United Arab Emirates</p>
                </div>
              </div>
             
            </div>
          
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md focus:ring-2 focus:ring-white/50">
                  Schedule E-Invoicing Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-200 shadow-md focus:ring-2 focus:ring-white/50">
                  Download UAE E-Invoicing Guide
                </button>
              </div>
            </div>
          </div>

        
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover-lift-glow transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
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
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
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
                  className="px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
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
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
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
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent resize-none transition-all duration-200 focus:shadow-lg"
                  placeholder="Tell us about your business expansion plans..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md focus:ring-2 focus:ring-white/50"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
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
                <span className="text-xl font-bold">eInvoice ME</span>
              </div>
              <p className="text-gray-400">Leading the digital transformation in Middle East invoicing.</p>
            </div>
            
            <ul className="font-semibold mb-8 leading-10">
              <li><a href="#about" className="text-white hover:text-red-600 transition-colors">Global Trends</a></li>
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
                    <p className="opacity-90 mb-1">+971-50 123 4567</p>
                    <p className="opacity-90">+971-55 987 6543</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="opacity-90 mb-1">info@macross.ae</p>
                    <p className="opacity-90">einvoicing@macross.ae</p>
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
                    <p className="opacity-90">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 eInvoice ME. All rights reserved | Crafted with care by Digitalize The Globe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}