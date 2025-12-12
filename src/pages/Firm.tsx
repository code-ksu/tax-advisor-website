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
