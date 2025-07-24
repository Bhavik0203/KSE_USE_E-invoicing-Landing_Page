import React from 'react';
import { Truck, Users, Package } from 'lucide-react';
import banner1 from '../../public/banner1.jpg';

const SaudiAdvantagesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 py-4">
  {/* Header Section */}
  <div className="md:w-1/2">
    <p className="text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
      GEOGRAPHICAL ADVANTAGES
    </p>
    <h2 className="text-4xl md:text-[47px] font-bold leading-tight text-white">
      Saudi Arabia<br />
      offers unique<br />
      <span className="text-red-600">business</span> opportunities.
    </h2>
  </div>

  {/* Top Service Card */}
  <div className="md:w-1/2">
   <div className="flex items-start space-x-6 group cursor-pointer bg-white backdrop-blur-[28px] p-6 rounded-2xl shadow-xl h-full transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-50 group">
<div className="flex-shrink-0">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.5 8.5L20 7L14 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L10 12L4 7L10.5 8.5L12 2Z" />
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Strategic Location</h3>
          {/* <div className="text-red-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div> */}
        </div>
         <p className="text-gray-700 leading-relaxed">
          Gateway between Europe, Asia, and Africa with access to Red Sea and Persian Gulf. <br />
          Coastline along both seas providing strategic maritime access with 13 provinces offering diverse opportunities.
        </p>
      </div>
    </div>
  </div>
</div>


        <div className="flex flex-col md:flex-row gap-8">
          {/* Business-Friendly Reforms */}
          <div className="flex items-start space-x-6 group cursor-pointer bg-white  backdrop-blur-[28px] p-6 rounded-lg shadow-lg hover:-translate-y-2 duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-50 group">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21S3 16.97 3 12 7.03 3 12 3 21 7.03 21 12Z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Business-Friendly Reforms</h3>
                {/* <div className="text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Vision 2030 driving regulatory improvements and investment incentives.
              </p>
            </div>
          </div>

          {/* Mega Projects */}
          <div className="flex items-start space-x-6 group cursor-pointer bg-white  backdrop-blur-[28px] p-6 rounded-lg shadow-lg hover:-translate-y-2 duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-50 group ">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mega Projects</h3>
                {/* <div className="text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Trillion-dollar projects creating massive business opportunities.
              </p>
            </div>
          </div>
          {/* Mega Projects */}
          <div className="flex items-start space-x-6 group cursor-pointer bg-white  backdrop-blur-[28px] p-6 rounded-lg shadow-lg hover:-translate-y-2 duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-400 hover:bg-red-50 group">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C18.67 14 22 15.33 22 16V18H10V16C10 15.33 13.33 14 16 14M8 12C10.21 12 12 10.21 12 8S10.21 4 8 4 4 5.79 4 8 5.79 12 8 12M8 14C5.33 14 0 15.33 0 18V20H8V18C8 16.9 8.45 15.87 9.22 15.1C8.5 14.65 7.75 14.3 7 14.1C6.67 14.03 6.34 14 6 14H8Z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Skilled Workforce</h3>
                {/* <div className="text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Saudization support programs and growing local talent pool with second largest proven petroleum reserves globally.
              </p>
            </div>
          </div>
           {/* <div className="flex items-start space-x-6 group cursor-pointer max-w-md bg-[#FFFFFF33]  backdrop-blur-[28px] p-6 rounded-lg shadow-lg   ">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C18.67 14 22 15.33 22 16V18H10V16C10 15.33 13.33 14 16 14M8 12C10.21 12 12 10.21 12 8S10.21 4 8 4 4 5.79 4 8 5.79 12 8 12M8 14C5.33 14 0 15.33 0 18V20H8V18C8 16.9 8.45 15.87 9.22 15.1C8.5 14.65 7.75 14.3 7 14.1C6.67 14.03 6.34 14 6 14H8Z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold mb-3">Skilled Workforce</h3>
                <div className="text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Saudization support programs and growing local talent pool with second largest proven petroleum reserves globally.
              </p>
            </div>
          </div> */}
        </div>

      
       
      </div>
    </section>
  );
};

export default SaudiAdvantagesSection;

 