"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ClientLogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  // Logo data with actual client image paths from Logo folder
  const logos = [
    { id: 1, name: 'Client 1', src: '/Logo/Group 10736.png' },
    { id: 2, name: 'Client 2', src: '/Logo/Group 10737.png' },
    { id: 3, name: 'Client 3', src: '/Logo/Group 10738.png' },
    { id: 4, name: 'Client 4', src: '/Logo/Group 10739.png' },
    { id: 5, name: 'Client 5', src: '/Logo/Group 10740.png' },
    { id: 6, name: 'Client 6', src: '/Logo/Group 10741.png' },
    { id: 7, name: 'Client 7', src: '/Logo/Group 10742.png' },
    { id: 8, name: 'Client 8', src: '/Logo/Group 10743.png' },
    { id: 9, name: 'Client 9', src: '/Logo/Group 10744.png' },
    { id: 10, name: 'Client 10', src: '/Logo/Group 10745.png' },
    { id: 11, name: 'Client 11', src: '/Logo/Group 10746.png' },
    { id: 12, name: 'Client 12', src: '/Logo/Group 10747.png' },
    { id: 13, name: 'Client 13', src: '/Logo/Group 10748.png' },
    { id: 14, name: 'Client 14', src: '/Logo/Group 10749.png' },
    { id: 15, name: 'Client 15', src: '/Logo/Group 10750.png' },
    { id: 16, name: 'Client 16', src: '/Logo/Group 10751.png' },
    { id: 17, name: 'Client 17', src: '/Logo/Group 10752.png' },
    { id: 18, name: 'Client 18', src: '/Logo/Group 10753.png' },
    { id: 19, name: 'Client 19', src: '/Logo/Group 10754.png' },
    { id: 20, name: 'Client 20', src: '/Logo/Group 10755.png' },
    { id: 21, name: 'Client 21', src: '/Logo/Group 10756.png' },
    { id: 22, name: 'Client 22', src: '/Logo/Group 10757.png' },
    { id: 23, name: 'Client 23', src: '/Logo/Group 10758.png' },
    { id: 24, name: 'Client 24', src: '/Logo/Group 10759.png' },
    { id: 25, name: 'Client 25', src: '/Logo/Group 10760.png' },
    { id: 26, name: 'Client 26', src: '/Logo/Group 10761.png' },
    { id: 27, name: 'Client 27', src: '/Logo/Group 10762.png' },
    { id: 28, name: 'Client 28', src: '/Logo/Group 10763.png' },
    { id: 29, name: 'Client 29', src: '/Logo/Group 10764.png' },
    { id: 30, name: 'Client 30', src: '/Logo/Group 10765.png' },
    { id: 31, name: 'Client 31', src: '/Logo/Group 10766.png' },
    { id: 32, name: 'Client 32', src: '/Logo/Group 10767.png' },
    { id: 33, name: 'Client 33', src: '/Logo/Group 10768.png' },
    { id: 34, name: 'Client 34', src: '/Logo/Group 10769.png' },
    { id: 35, name: 'Client 35', src: '/Logo/Group 10770.png' },
    { id: 36, name: 'Client 36', src: '/Logo/Group 10771.png' },
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