import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';

const DunningLetterBeforeInteractive = () => {
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
                  <div className="text-xs text-gray-500">Beitragszahlung</div>
                </div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </div>

            {/* Email Content - Scrollable */}
            <div className="h-full overflow-y-auto pb-20">
              {/* Yellow Header Section */}
              <div className="bg-[#F5C842] px-6 py-8 text-white">
                <div className="space-y-3">
                  <div className="text-lg font-semibold">
                    Kundennummer 8773 2690 8423 /
                  </div>
                  <div className="text-lg font-semibold">
                    Vertragsnummer 23025BCGA02A
                  </div>
                  <div className="text-lg font-semibold mt-6">
                    Beitragszahlung vom 19.10.2023
                  </div>
                </div>
              </div>

              {/* White Content Section */}
              <div className="px-6 py-6 bg-white text-gray-900 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                <div className="space-y-4">
                  <p style={{ fontSize: '16px' }}>
                    <strong>Sehr geehrter Herr Hoffmann,</strong>
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    vielen Dank für Ihre Beitragszahlung vom <strong>19.10.2023</strong> in Höhe von <strong>14,00 EUR</strong>.
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    Leider reicht Ihre Zahlung nicht aus, um alle ausstehenden Beiträge zu begleichen. Gerne geben wir Ihnen einen Überblick über die noch offenen Beiträge:
                  </p>

                  <div className="ml-4">
                    <p style={{ fontSize: '16px' }}>• 95,88 EUR für den Zeitraum vom 17.02.2023 - 16.02.2024 (Teilzahlung)</p>
                  </div>

                  <p style={{ fontSize: '16px' }}>
                    Wir bitten daher um Zahlung des noch ausstehenden Betrags von <strong>81,88 EUR</strong> an folgende IBAN <strong>DE89370400440532013000</strong>.
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    Als Verwendungszweck geben Sie bitte Ihre Versicherungsnummer <strong>23025BCGA02A</strong> an.
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    <strong>Wir bitten um Verständnis, dass die im vorherigen Mahnschreiben genannten Rechtsfolgen bis zum vollständigen Ausgleich des Beitragsrückstandes bestehen bleiben.</strong>
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    Wenn Sie Fragen dazu haben, melden Sie sich bitte bei uns. Wir helfen gerne weiter!
                  </p>

                  <p className="mt-6" style={{ fontSize: '16px' }}>
                    Mit freundlichen Grüßen
                  </p>

                  <p style={{ fontSize: '16px' }}>
                    Ihr Jeep E-Bikes Team
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

export default DunningLetterBeforeInteractive;