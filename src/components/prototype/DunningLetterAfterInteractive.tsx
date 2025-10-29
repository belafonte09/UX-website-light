import React from 'react';
import { ArrowLeft, MoreVertical, AlertCircle, Camera } from 'lucide-react';

const DunningLetterAfterInteractive = () => {
  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      {/* Phone Mockup Container */}
      <div className="relative w-full max-w-[320px] md:max-w-[375px] lg:max-w-[400px]">
        {/* Phone Frame */}
        <div
          className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl mx-auto"
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          {/* Screen */}
          <div className="bg-white rounded-[2rem] overflow-hidden relative h-[600px] md:h-[700px] lg:h-[800px]">
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

            {/* Email Content - Scrollable */}
            <div className="h-full overflow-y-auto pb-32" style={{ fontFamily: 'Arial, sans-serif' }}>
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
                  <p className="text-black mb-2" style={{ fontSize: '12px' }}>
                    Leider reicht Ihre Zahlung nicht aus, um alle
                    ausstehenden Beiträge zu begleichen. Gerne geben wir
                    Ihnen einen Überblick über die <strong>noch offenen Beiträge:</strong>
                  </p>
                  <p className="text-black mb-3" style={{ fontSize: '12px' }}>
                    <strong>Überweisen</strong> Sie bitte den Ausstehenden betrag auf
                    unseren Konto:
                  </p>
                </div>

                {/* Banking Details Card */}
                <div className="bg-gray-100 rounded-md p-4" style={{ fontSize: '14px' }}>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-black">Empfänger</span>
                      <span className="text-black font-bold">Element Insurance AG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">IBAN</span>
                      <span className="text-black font-bold">DE89370400440532013000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">BIC</span>
                      <span className="text-black font-bold">BYLADEM1000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Bank</span>
                      <span className="text-black font-bold">Berliner Volksbank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Verwendungszweck</span>
                      <span className="text-black font-bold">230998B1B391</span>
                    </div>
                  </div>
                </div>

                {/* Photo Feature Card */}
                <div className="bg-gray-100 rounded-md p-4 flex items-center gap-4" style={{ fontSize: '14px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Camera className="w-8 h-8 text-gray-700 fill-current" />
                  </div>
                  <div>
                    <div className="text-black font-bold mb-1">Fotoüberweisung</div>
                    <div className="text-black">
                      Scannen Sie diese Email in ihre Banking
                      app. Die daten werden automatisch
                      aufgenommen.
                    </div>
                  </div>
                </div>

                {/* Final Information - White Background */}
                <div className="pt-2">
                  <p className="text-black mb-2" style={{ fontSize: '12px' }}>
                    Wir möchten Sie daran erinnern, dass der
                    Versicherungsschutz sowie der Versicherungsvertrag
                    am <strong>31.12.2023 um 24:00 Uhr erlöschen</strong>, falls der
                    ausstehende Betrag bis zum <strong>30.11.2023</strong> nicht beglichen
                    ist.
                  </p>
                  <p className="text-black mb-2" style={{ fontSize: '12px' }}>
                    Für Fragen oder weitere Informationen stehen wir Ihnen
                    gerne zur Verfügung.
                  </p>
                  <p className="text-black mb-1" style={{ fontSize: '12px' }}>
                    Mit freundlichen Grüßen,
                  </p>
                  <p className="text-black italic mb-3" style={{ fontSize: '12px' }}>
                    Ihr Jeep Versicherungsteam
                  </p>
                </div>

                {/* Final CTA */}
                <button className="w-full bg-[#F5C842] text-black font-bold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2">
                  Ihre Rechnungsübersicht
                  <span>›</span>
                </button>
                <div className="text-xs text-gray-500 text-center mb-8">Login wird benötigt</div>

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

export default DunningLetterAfterInteractive;