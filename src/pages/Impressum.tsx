import React from 'react';

const Impressum = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Impressum</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
                        <p className="text-gray-700">
                            Markus Vogel<br />
                            Zeestower Weg 19<br />
                            13591 Berlin
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Kontakt</h2>
                        <p className="text-gray-700">
                            Telefon: +49 155-634 605 60<br />
                            E-Mail: markus@mv-steuern.de
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <p className="text-gray-700 mb-2">
                            Berufsbezeichnung: Steuerberater (verliehen in der Bundesrepublik Deutschland)
                        </p>
                        <p className="text-gray-700">
                            Zuständige Kammer:<br />
                            Steuerberaterkammer Berlin<br />
                            Wichmannstraße 6<br />
                            10787 Berlin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
