import React from 'react';

const ExperienceItem = ({ role, company, period, description }: { role: string, company: string, period: string, description?: string }) => (
    <div className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-0 last:pb-0">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
        <div className="mb-1 text-sm text-primary font-bold uppercase tracking-wider">{period}</div>
        <h3 className="text-xl font-bold text-gray-900">{role}</h3>
        <div className="text-lg text-gray-700 font-medium mb-2">{company}</div>
        {description && <p className="text-gray-500">{description}</p>}
    </div>
);

const Firm = () => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Die Kanzlei</h1>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-gray-200">
                            <img src="/profile.jpg" alt="Markus Vogel" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">Über Markus Vogel</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Mit Leidenschaft für Zahlen und einem klaren Blick für komplexe Zusammenhänge berate ich meine Mandanten umfassend und vorausschauend.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Steuerberater</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">LL.M.</span>
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">CMAAS</span>
                            </div>
                            <div className="mt-6">
                                <a href="https://www.linkedin.com/in/markus-vogel-ll-m-443264158/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0077b5] hover:text-[#006097] transition-colors font-medium">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span>LinkedIn Profil</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Beruflicher Werdegang</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <ExperienceItem
                            role="Steuerberater | Selbstständig"
                            company="Berlin, Deutschland"
                            period="Juli 2025 – Heute"
                        />
                        <ExperienceItem
                            role="Manager | CMAAS"
                            company="Rödl & Partner"
                            period="Jan. 2024 – Juni 2025"
                            description="Capital Markets und Auditing"
                        />
                        <ExperienceItem
                            role="Steuerberater | Manager"
                            company="Mazars in Germany"
                            period="Sept. 2023 – Dez. 2023"
                        />
                        <ExperienceItem
                            role="Steuerberater | Senior"
                            company="Mazars in Germany"
                            period="Apr. 2021 – Aug. 2023"
                            description="Business Consulting und Team-focused"
                        />
                        <ExperienceItem
                            role="Steuerberater | Senior"
                            company="Mazars in Germany"
                            period="Apr. 2021"
                        />
                        <ExperienceItem
                            role="Steuerfachangestellter"
                            company="Dr. Bischoff & Partner mbB"
                            period="Juli 2013 – März 2015"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Firm;
