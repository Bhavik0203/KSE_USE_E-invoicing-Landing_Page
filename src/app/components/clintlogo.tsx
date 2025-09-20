"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ClientLogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  // Logo data with actual image paths
  const logos = [
    { id: 1, name: 'Logipsum', src: '/images/Logo1.png' },
    { id: 2, name: 'LUHU', src: '/images/Logo2.png' },
    { id: 3, name: 'Leningrad', src: '/images/Logo3.png' },
    { id: 4, name: 'LOGO', src: '/images/Logo4.png' },
    { id: 5, name: 'IPSUM', src: '/images/Logo5.png' },
    { id: 6, name: 'Logipsum', src: '/images/Logo6.png' },
    { id: 7, name: 'Logipsum', src: '/images/Logo7.png' },
    { id: 8, name: 'Logipsum', src: '/images/Logo8.png' },
    { id: 9, name: 'Logipsum', src: '/images/Logo9.png' },
  ];

  // Triple the logos for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos];

  const handleLogoHover = (index: number) => {
    setHoveredLogoIndex(index);
    setIsHovered(true);
  };

  const handleLogoLeave = () => {
    setHoveredLogoIndex(null);
    setIsHovered(false);
  };

  return (
    <section 
      className="w-full bg-white py-10 overflow-hidden relative border-t border-b border-gray-200"
      role="region"
      aria-label="Client logos"
    >
      <div className="relative">
        {/* Infinite scrolling logos container */}
        <div 
          className={`flex w-max ${isHovered ? '[animation-play-state:paused]' : ''}`}
          style={{
            animation: 'infiniteScroll 40s linear infinite',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {infiniteLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${Math.floor(index / logos.length)}-${index}`}
              className={`flex-shrink-0 mx-8 flex items-center justify-center transition-all duration-300 ease-in-out ${
                hoveredLogoIndex === index 
                  ? 'scale-110 opacity-100' 
                  : 'scale-100 opacity-70 hover:opacity-100'
              }`}
              style={{ width: '180px', height: '80px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
              role="img"
              aria-label={`${logo.name} logo`}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={128}
                height={64}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                priority={index < logos.length} // Prioritize first set of logos
                sizes="(max-width: 768px) 100px, 128px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSection;