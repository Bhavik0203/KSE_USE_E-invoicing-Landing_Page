import React from 'react';

const UAEInvoiceModel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">UAE e-Invoice 5 Corner Model</h1>
        <hr className="border-t-2 border-gray-300" />
      </div>

      {/* Main Diagram Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg" style={{height: '600px'}}>
        
        {/* Seller Section */}
        <div className="absolute top-4 left-4">
          <div className="bg-teal-600 text-white p-4 rounded-lg w-44">
            <h3 className="font-bold mb-2">1. Seller</h3>
            <p className="text-sm">Create an invoice in their accounting software/ERP</p>
          </div>
          
          {/* Databases under Seller */}
          <div className="mt-6 flex gap-3">
            <div className="bg-cyan-100 border-2 border-cyan-400 rounded-full p-2 w-20 h-20 flex flex-col items-center justify-center">
              <div className="text-xs font-bold">SML</div>
              <div className="text-xs mt-1 text-center leading-tight">Address Registry</div>
            </div>
            <div className="bg-cyan-100 border-2 border-cyan-400 rounded-full p-2 w-20 h-20 flex flex-col items-center justify-center">
              <div className="text-xs font-bold">SMP</div>
              <div className="text-xs mt-1 text-center leading-tight">Capability Registry</div>
            </div>
          </div>
        </div>

        {/* Sender's Access Point */}
        <div className="absolute top-4 left-64">
          <div className="bg-teal-600 text-white p-4 rounded-lg w-52">
            <h3 className="font-bold mb-2">2. Sender's Access point</h3>
            <p className="text-sm">Validates the data, converts to PINT AE standard formats and send to receiver access point</p>
          </div>
        </div>

        {/* Peppol Access Point (Top) */}
        <div className="absolute top-20 left-80 transform translate-x-8">
          <div className="bg-white border-2 border-blue-400 p-3 rounded-lg w-28 flex flex-col items-center shadow-md">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mb-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-center font-semibold leading-tight">Peppol Access Point</div>
            <div className="text-xs text-gray-500 mt-1 text-center">CERTIFIED PROVIDER</div>
          </div>
        </div>

        {/* Central Secure Delivery */}
        <div className="absolute top-44 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="bg-teal-600 rounded-full p-3 w-14 h-14 flex items-center justify-center">
              <div className="bg-white rounded p-1">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-bold text-sm">Secure e-Delivery</div>
            <div className="text-xs">of domestic B2B</div>
            <div className="text-xs">and B2G invoices</div>
          </div>
          <div className="mt-2 text-center text-xs text-gray-600 bg-gray-50 p-2 rounded">
            Peppol or Email or other channels
          </div>
        </div>

        {/* Buyer Section */}
        <div className="absolute bottom-20 left-4">
          <div className="bg-teal-600 text-white p-4 rounded-lg w-44">
            <h3 className="font-bold mb-2">4. Buyer</h3>
            <p className="text-sm">Receives invoice in their accounting software/ERP</p>
          </div>
        </div>

        {/* Receiver's Access Point */}
        <div className="absolute bottom-20 left-64">
          <div className="bg-teal-600 text-white p-4 rounded-lg w-52">
            <h3 className="font-bold mb-2">3. Receiver's Access point</h3>
            <p className="text-sm">Receives valid UAE PINT documents and send to receiver system</p>
          </div>
        </div>

        {/* Peppol Access Point (Bottom) */}
        <div className="absolute bottom-36 left-80 transform translate-x-8">
          <div className="bg-white border-2 border-blue-400 p-3 rounded-lg w-28 flex flex-col items-center shadow-md">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mb-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs text-center font-semibold leading-tight">Peppol Access Point</div>
            <div className="text-xs text-gray-500 mt-1 text-center">CERTIFIED PROVIDER</div>
          </div>
        </div>

        {/* FTA Section */}
        <div className="absolute top-4 right-4">
          <div className="border-4 border-dashed border-green-400 rounded-lg p-4 bg-green-50">
            <div className="bg-teal-600 text-white p-4 rounded-lg w-44 mb-4">
              <h3 className="font-bold mb-2">5. FTA Access Point</h3>
              <p className="text-sm">Receives tax data validates and transmits it to the central data platform</p>
            </div>
            
            <div className="bg-teal-600 text-white p-4 rounded-lg w-44 mb-4">
              <h3 className="font-bold mb-2">Central Data Platform</h3>
              <p className="text-sm">Collects the tax data, process and store</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg w-44 flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-200 rounded flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2h8v2H6V6zm0 4h8v2H6v-2z"/>
                </svg>
              </div>
              <div className="text-xs font-bold text-blue-800">UAE</div>
              <div className="text-xs mt-1 text-center">Federal Tax Authority</div>
            </div>
          </div>
        </div>

        {/* Tax Data Reporting Labels */}
        <div className="absolute top-52 right-52">
          <div className="text-sm font-medium text-gray-700 border-b-2 border-dashed border-gray-400 pb-1">
            Tax data reporting
          </div>
        </div>

        <div className="absolute bottom-72 right-52">
          <div className="text-sm font-medium text-gray-700 border-b-2 border-dashed border-gray-400 pb-1">
            Tax data reporting
          </div>
        </div>

        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <div className="text-sm font-medium text-gray-700 border-b-2 border-dashed border-gray-400 pb-1">
            Tax data reporting
          </div>
        </div>

        <div className="absolute bottom-80 left-1/2 transform -translate-x-1/2">
          <div className="text-sm font-medium text-gray-700 border-b-2 border-dashed border-gray-400 pb-1">
            E-Delivery of export invoices
          </div>
        </div>

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: -1}}>
          {/* Orange dashed lines */}
          <line x1="220" y1="60" x2="260" y2="60" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="516" y1="60" x2="560" y2="60" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="140" y1="100" x2="140" y2="140" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="180" y1="100" x2="180" y2="140" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="140" y1="480" x2="140" y2="440" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="260" y1="480" x2="220" y2="480" stroke="#f97316" strokeWidth="3" strokeDasharray="8,4"/>
          
          {/* Green dashed lines */}
          <line x1="560" y1="100" x2="560" y2="160" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="560" y1="320" x2="560" y2="380" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,4"/>
          <line x1="516" y1="380" x2="480" y2="380" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,4"/>
        </svg>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-4">
        <div className="text-gray-700 font-bold text-lg">taxilla</div>
        <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-bold text-xs rounded">
          M
        </div>
      </div>
    </div>
  );
};

export default UAEInvoiceModel;