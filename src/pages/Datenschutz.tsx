import React from 'react';

const Datenschutz = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Allgemeine Hinweise</h2>
                        <p className="text-gray-700">
                            Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Nachfolgend informiere ich Sie darüber, wie mit Ihren Daten umgegangen wird.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Datenerfassung auf dieser Website</h2>
                        <p className="text-gray-700 font-medium">
                            Es werden keine personenbezogenen Daten gespeichert.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Beim Besuch dieser Website werden keine IP-Adressen gespeichert. Es werden keine Cookies verwendet. Es erfolgt keine Analyse Ihres Nutzerverhaltens.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-2">Kontakt per E-Mail</h2>
                        <p className="text-gray-700">
                            Wenn Sie mich per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei mir gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
