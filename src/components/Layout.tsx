import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary transition-colors';
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-lg">M</span>
                        Markus Vogel
                    </Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/" className={isActive('/')}>Startseite</Link></li>
                            <li><Link to="/kanzlei" className={isActive('/kanzlei')}>Kanzlei</Link></li>
                            <li><Link to="/leistungen" className={isActive('/leistungen')}>Leistungen</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Markus Vogel</h3>
                        <p className="text-gray-400">Ihr vertrauensvoller Partner für steuerliche Angelegenheiten in Berlin.</p>
                    </div>
                    <div>
                        <h3 className="text-md font-bold mb-4">Kontakt</h3>
                        <p className="text-gray-400">Musterstraße 123</p>
                        <p className="text-gray-400">10115 Berlin</p>
                        <p className="text-gray-400 mt-2">Tel: +49 30 1234567</p>
                        <p className="text-gray-400">Email: kontakt@vogel-steuer.de</p>
                    </div>
                    <div>
                        <h3 className="text-md font-bold mb-4">Rechtliches</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#" className="hover:text-white">Impressum</a></li>
                            <li><a href="#" className="hover:text-white">Datenschutz</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Steuerberater Markus Vogel. Alle Rechte vorbehalten.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
