import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Moderne Steuerberatung <br />
                            <span className="text-primary">für Ihre Zukunft</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Kompetent, digital und persönlich. Ich unterstütze Sie bei allen steuerlichen Fragen, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/kanzlei" className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30">
                                Über mich
                            </Link>
                            <Link to="/leistungen" className="bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-all">
                                Leistungen
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/profile.jpg"
                                alt="Markus Vogel"
                                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Ihr Erfolg ist mein Ziel</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Als erfahrener Steuerberater biete ich Ihnen maßgeschneiderte Lösungen für Ihre individuelle Situation. Ob Unternehmen oder Privatperson – ich stehe Ihnen mit Rat und Tat zur Seite.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 px-4">
                <div className="container mx-auto bg-primary rounded-2xl p-12 text-center text-white shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Lassen Sie uns sprechen</h2>
                        <p className="mb-8 opacity-90">Vereinbaren Sie ein unverbindliches Erstgespräch.</p>
                        <a href="mailto:kontakt@vogel-steuer.de" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Kontakt aufnehmen
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
