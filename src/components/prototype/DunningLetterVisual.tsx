import React from 'react';
import { ArrowLeft, MoreVertical, AlertCircle, Camera } from 'lucide-react';

const DunningLetterVisual = () => {
  return (
    <div className="flex justify-center items-center p-8">
      {/* Tilted Phone Container */}
      <div
        className="relative w-[320px] transform rotate-12 drop-shadow-2xl"
        style={{ perspective: '1000px' }}
      >
        {/* Phone Frame */}
        <div
          className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl"
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          {/* Screen */}
          <div className="bg-white rounded-[2rem] overflow-hidden relative h-[640px]">
            {/* Status Bar */}
            <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm font-medium">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-black rounded-sm">
                  <div className="w-3 h-1 bg-black rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>

            {/* Email Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Jeep E-Bikes</div>
                  <div className="text-xs text-gray-500">Zahlungserinnerung</div>
                </div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </div>

            {/* Email Content - Static (not scrollable) */}
            <div className="h-full" style={{ fontFamily: 'Arial, sans-serif' }}>
              {/* Yellow Header Section with Warning */}
              <div className="bg-[#F5C842] px-6 py-4 text-black flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-black" />
                <div className="font-semibold text-sm">
                  1. Zahlungserinnerung
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 bg-white space-y-4">
                {/* White Background Title */}
                <div className="text-black font-bold" style={{ fontSize: '18px' }}>
                  Ausstehender betrag überweisen
                </div>

                {/* Product Info Card */}
                <div className="bg-gray-100 rounded-md p-4" style={{ fontSize: '14px' }}>
                  <div className="text-black font-bold mb-2">E-Bike Schutz bei Jeep E-bikes</div>
                  <div className="text-black font-bold mb-3">95,88 € Jährlich</div>

                  <div className="space-y-1">
                    <div className="text-black">
                      <strong>Kundennummer:</strong> 8504 6578 8079
                    </div>
                    <div className="text-black">
                      <strong>Vertragsnummer:</strong> 230998B1B391
                    </div>
                  </div>
                </div>

                {/* Amount and Due Date Card */}
                <div className="bg-gray-100 rounded-md p-4" style={{ fontSize: '14px' }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-black">Ausstehender Betrag</span>
                    <span className="text-black font-bold">61,88 EUR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Zahlungsfrist</span>
                    <span className="text-red-600 font-bold">Do, 30.11.2023</span>
                  </div>
                </div>

                {/* Pay Now Button */}
                <button className="w-full bg-[#F5C842] text-black font-bold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2">
                  Jetzt bezahlen
                  <span>›</span>
                </button>
                <div className="text-xs text-gray-500 text-center">Login wird benötigt</div>

                {/* Greeting - White Background */}
                <div className="pt-2">
                  <p className="text-black mb-2" style={{ fontSize: '12px' }}>
                    <strong>Sehr geehrter Frau Hoffmann,</strong>
                  </p>
                  <p className="text-black mb-2" style={{ fontSize: '12px' }}>
                    wir danken Ihnen herzlich für Ihre Zahlung vom
                    15.09.2023 in Höhe von 34,00 EUR.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DunningLetterVisual;