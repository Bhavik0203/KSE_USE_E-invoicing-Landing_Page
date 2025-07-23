"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Shield, Globe, TrendingUp, CheckCircle, ArrowRight, Calendar, Building, Users, MapPin, Award, Briefcase, Clock, Phone, Mail, ExternalLink, Send } from 'lucide-react';
import DeliveryMethodsSection from './components/about';
import banner1 from '../../public/banner1.jpg';
export default function MacRossKSALanding() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeCompliance, setActiveCompliance] = useState(0);
   const projects1 = [
  "NEOM is a $500 billion smart city initiative aiming to redefine urban living. It will feature cutting-edge technologies, clean energy, and AI integration, making it a global model of sustainable development.",
  "The Red Sea Project is a luxury regenerative tourism destination with untouched islands and marine ecosystems. It offers sustainable resorts and immersive travel experiences along Saudi’s pristine coastline.",
  "Qiddiya is envisioned as the kingdom’s entertainment, sports, and cultural capital. It includes theme parks, motor sports, and arts venues to transform how Saudis and tourists experience leisure.",
  "AMAALA is an ultra-luxury tourism project focusing on wellness, arts, and environmental harmony. Situated on the Red Sea, it caters to elite travelers seeking bespoke health and cultural experiences.",
  "The Line is a 170 km linear smart city within NEOM that will be car-free and powered by AI. It’s designed to preserve nature while offering futuristic, high-density, and walkable urban living.",
  "Diriyah Gate is a cultural heritage site transforming the birthplace of the Saudi Kingdom into a global tourism hub. It blends traditional Najdi architecture with modern hospitality and experiences.",
  "King Salman Energy Park (SPARK) is an advanced industrial hub for energy and manufacturing. It aims to localize the supply chain and position Saudi Arabia as a global energy innovation leader."
];

   const projects = [
    "NEOM – Future City Development",
    "Red Sea Project – Luxury Tourism", 
    "Qiddiya – Entertainment Capital",
    "AMAALA – Ultra-luxury Tourism",
    "The Line – Linear Smart City",
    "Diriyah Gate – Cultural Heritage",
    "King Salman Energy Park – Industrial Hub"
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaProjects = [
    "NEOM - Future City Development",
    "Red Sea Project - Luxury Tourism",
    "Qiddiya - Entertainment Capital",
    "AMAALA - Ultra-luxury Tourism",
    "The Line - Linear Smart City",
    "Diriyah Gate - Cultural Heritage",
    "King Salman Energy Park - Industrial Hub"
  ];

  const businessSetupSteps = [
    {
      title: "Foreign Investment License",
      description: "MISA Registration for Foreign Companies",
      icon: Globe,
      details: "Ministry of Investment Saudi Arabia (MISA) license for foreign entities"
    },
    {
      title: "Commercial Registration",
      description: "CR issued by MOCI",
      icon: FileText,
      details: "Ministry of Commerce registration for KSA Local/GCC entities"
    },
    {
      title: "National Address",
      description: "Company Address Registration",
      icon: MapPin,
      details: "Register and obtain official company national address"
    },
    {
      title: "MHRSD Registration",
      description: "Human Resources Ministry",
      icon: Users,
      details: "Registration with Ministry of Human Resource & Social Development"
    },
    {
      title: "GOSI Application",
      description: "Social Insurance Registration",
      icon: Shield,
      details: "General Organization for Social Insurance registration"
    },
    {
      title: "Portal Registration",
      description: "Muqeem & Qiwa Platforms",
      icon: Building,
      details: "Register at government portals for compliance management"
    }
  ];

  const complianceItems = [
    {
      title: "GOSI Returns",
      frequency: "Monthly",
      dueDate: "15th of subsequent month",
      description: "Monthly GOSI returns for local and expat employees with payroll matching",
      color: "red"
    },
    {
      title: "VAT Compliance",
      frequency: "Monthly/Quarterly",
      dueDate: "Based on revenue threshold",
      description: "Quarterly if revenue < SAR 40M, Monthly if revenue > SAR 40M",
      color: "red"
    },
    {
      title: "Withholding Tax",
      frequency: "Monthly & Annual",
      dueDate: "15th of month / 120 days after YE",
      description: "Monthly WHT returns and annual consolidated returns",
      color: "red"
    },
    {
      title: "Financial Statements",
      frequency: "Annual",
      dueDate: "90 days from FY end",
      description: "Audited financial statements and Qawaem portal filing",
      color: "red"
    },
    {
      title: "ZATCA Returns",
      frequency: "Annual",
      dueDate: "120 days from FY end",
      description: "Corporate Zakat and Tax returns with transfer pricing disclosure",
      color: "red"
    }
  ];

  const services = [
    {
      title: "Company Formation",
      description: "Complete setup including MISA, CR, and RHQ registration",
      icon: Building,
      features: ["MISA Registration", "Commercial Registration", "RHQ Setup", "National Address"]
    },
    {
      title: "VAT Services",
      description: "Registration, compliance, and ongoing guidance",
      icon: FileText,
      features: ["VAT Registration", "Monthly/Quarterly Returns", "Compliance Guidance", "Advisory Services"]
    },
    {
      title: "Tax Compliance",
      description: "Comprehensive tax services and coordination",
      icon: Shield,
      features: ["Withholding Tax", "Zakat & Income Tax", "ZATCA Coordination", "Annual Returns"]
    },
    {
      title: "Transfer Pricing",
      description: "Complete TP documentation and compliance",
      icon: Globe,
      features: ["Master File Preparation", "Local File Documentation", "CbC Reporting", "Disclosure Forms"]
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
    number: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
    console.log('Form submitted:', formData);
    // You can add validation and API calls here
  };
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/30 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M&R</span>
            </div>
            <div>
              <span className="text-xl font-bold text-red-600 block leading-none">Mac & Ross</span>
              <span className="text-xs text-gray-600">Management Consultancy</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-red-600 transition-colors">About KSA</a>
            <a href="#setup" className="text-white hover:text-red-600 transition-colors">Business Setup</a>
            <a href="#compliance" className="text-white hover:text-red-600 transition-colors">Compliance</a>
            <a href="#services" className="text-white hover:text-red-600 transition-colors">Services</a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
  className="relative pb-20 px-4 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
  style={{ backgroundImage: `url('${banner1.src}')` }}
>
        <div className="container max-w-6xl mx-auto pt-30 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Expand with 
                  <span className="text-red-600 block">Confidence</span>
                  <span className="text-2xl text-white font-normal">KSA Company Formation & Regulatory Insights</span>
                </h1>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Your trusted partner for seamless business setup and compliance management in the Kingdom of Saudi Arabia. Navigate Vision 2030 opportunities with expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                    Start Your KSA Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* KSA Overview */}
    <DeliveryMethodsSection/>
            <section id="setup" className="py-16 px-6 bg-red-50 text-gray-900">
        <div className="container max-w-6xl mx-auto">
         <div className="md:w-full text-center mb-12">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    SETUP PROCESS
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
    KSA Business 
    <span className="text-red-600"> Setup </span>Process
  </h2>
</div>


          <div className="grid lg:grid-cols-3 gap-8">
            {businessSetupSteps.map((step, index) => (
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
           <div className="flex justify-end  items-center min-h-120 bg-gray-900 p-4 ">
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row  gap-8'>
              <div className="">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    GIGA & MEGA PROJECTS
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
    Driving<br />
    Saudi Arabia’s<br />
    <span className="text-red-600">growth</span> and innovation.
  </h2>
</div>

      <div className="w-220 h-100 rounded bg-gray-800 flex gap-1 p-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-white border-2 border-red-600 flex justify-center items-center hover:flex-[4] group"
            style={{ minWidth: '56px' }}
          >
            <div className="flex flex-col items-center w-full">
              <span className="min-w-56 p-2 text-center transform -rotate-90 transition-all duration-500 uppercase text-red-600 tracking-wider text-sm group-hover:rotate-0 group-hover:transform-none group-hover:mb-2">
                {project}
              </span>
              <span className="hidden group-hover:block min-w-56 p-2 text-center transition-all duration-500 text-red-400 tracking-wider text-xs">
                {projects1[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
          </div>
    </div>
      {/* Business Setup Process */}
      

      {/* Key Compliances */}
      <section id="compliance" className="py-16 px-6  bg-white text-gray-900">
        <div className="container mx-auto max-w-6xl">
         
            <div className="md:w-full text-center mb-6">
  <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
    Compliances
  </p>
  <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-gray-900">
    KSA Key
    <span className="text-red-600"> Compliances </span>
  </h2>
</div>


          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
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
                        <span className="text-gray-600">{item.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">{complianceItems[activeCompliance].title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-red-600" />
                  <div className='text-xl'>
                    <span className="font-semibold text-gray-900">Frequency:</span>
                    <span className="ml-2 text-gray-700">{complianceItems[activeCompliance].frequency}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div className='text-xl'>
                    <span className="font-semibold text-gray-900">Due Date:</span>
                    <span className="ml-2 text-gray-700">{complianceItems[activeCompliance].dueDate}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Details</h4>
                  <p className="text-gray-700 leading-relaxed">{complianceItems[activeCompliance].description}</p>
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

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mac & Ross Services in KSA</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
   <section id="contact"
  className="relative py-16 px-6 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen  animate-fade-in-up"
  style={{ backgroundImage: `url('${banner1.src}')` }}
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
          <h2 className="text-4xl font-bold mb-6">Ready to Expand to KSA?</h2>
         
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
                  <p className="opacity-90 mb-1">+966-55 363 7617</p>
                  <p className="opacity-90">+966-50 225 4045</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <Mail className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Email</h4>
                  <p className="opacity-90 mb-1">info@mnrksa.com</p>
                  <p className="opacity-90">compliance@mnrksa.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Location</h4>
                  <p className="opacity-90">Riyadh, Kingdom of Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <ExternalLink className="w-8 h-8 mt-1 flex-shrink-0 icon-bounce transition-transform duration-200 group-hover:text-yellow-300" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Website</h4>
                  <p className="opacity-90">www.macnross.com</p>
                </div>
              </div>
            </div>
          
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md focus:ring-2 focus:ring-white/50">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-200 shadow-md focus:ring-2 focus:ring-white/50">
                  Download Brochure
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
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent transition-all duration-200 focus:shadow-lg"
                  placeholder="+966 XX XXX XXXX"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-transparent resize-none transition-all duration-200 focus:shadow-lg"
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
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">UAE Guidelines</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tax Calculator</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Accounting Services</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Countries</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">UAE</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Saudi Arabia</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Egypt</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>support@einvoiceme.com</p>
                <p>+971 4 XXX XXXX</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 eInvoice ME. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}