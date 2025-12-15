"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ClientLogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  // Logo data with actual client image paths
  const logos = [
    { id: 1, name: 'Client 1', src: '/clint (1).jpg' },
    { id: 2, name: 'Client 2', src: '/clint (2).jpg' },
    { id: 3, name: 'Client 3', src: '/clint (3).jpg' },
    { id: 4, name: 'Client 4', src: '/clint (4).jpg' },
    { id: 5, name: 'Client 5', src: '/clint (5).jpg' },
    { id: 6, name: 'Client 6', src: '/clint (6).jpg' },
    { id: 7, name: 'Client 7', src: '/clint (7).jpg' },
    { id: 8, name: 'Client 8', src: '/clint (8).jpg' },
    { id: 9, name: 'Client 9', src: '/clint (9).jpg' },
    { id: 10, name: 'Client 10', src: '/clint (10).jpg' },
    { id: 11, name: 'Client 11', src: '/clint (11).jpg' },
    { id: 12, name: 'Client 12', src: '/clint (12).jpg' },
    { id: 13, name: 'Client 13', src: '/clint (13).jpg' },
    { id: 14, name: 'Client 14', src: '/clint (14).jpg' },
    { id: 15, name: 'Client 15', src: '/clint (15).jpg' },
    { id: 16, name: 'Client 16', src: '/clint (16).jpg' },
    { id: 17, name: 'Client 17', src: '/clint (17).jpg' },
    { id: 18, name: 'Client 18', src: '/clint (18).jpg' },
    { id: 19, name: 'Client 19', src: '/clint (19).jpg' },
    { id: 20, name: 'Client 20', src: '/clint (20).jpg' },
    { id: 21, name: 'Client 21', src: '/clint (21).jpg' },
    { id: 22, name: 'Client 22', src: '/clint (22).jpg' },
    { id: 23, name: 'Client 23', src: '/clint (23).jpg' },
    { id: 24, name: 'Client 24', src: '/clint (24).jpg' },
    { id: 25, name: 'Client 25', src: '/clint (25).jpg' },
    { id: 26, name: 'Client 26', src: '/clint (26).jpg' },
    { id: 27, name: 'Client 27', src: '/clint (27).jpg' },
    { id: 28, name: 'Client 28', src: '/clint (28).jpg' },
    { id: 29, name: 'Client 29', src: '/clint (29).jpg' },
    { id: 30, name: 'Client 30', src: '/clint (30).jpg' },
    { id: 31, name: 'Client 31', src: '/clint (31).jpg' },
    { id: 32, name: 'Client 32', src: '/clint (32).jpg' },
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
            animation: 'infiniteScroll 120s linear infinite',
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
              style={{ width: '250px', height: '120px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
              role="img"
              aria-label={`${logo.name} logo`}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={200}
                height={100}
                className="object-contain transition-all duration-300"
                priority={index < logos.length} // Prioritize first set of logos
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>
          ))}
        </div>
        <div 
          className={`flex w-max ${isHovered ? '[animation-play-state:paused]' : ''}`}
          style={{
            animation: 'infiniteScrollReverse 120s linear infinite',
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
              style={{ width: '250px', height: '120px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
              role="img"
              aria-label={`${logo.name} logo`}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={200}
                height={100}
                className="object-contain transition-all duration-300"
                priority={index < logos.length} // Prioritize first set of logos
                sizes="(max-width: 768px) 150px, 200px"
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
        @keyframes infiniteScrollReverse {
          0% {
            transform: translateX(-${100 / 3}%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSection;