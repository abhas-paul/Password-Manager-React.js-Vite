import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-slate-800 to-slate-900 py-4 px-6 shadow-xl">
            <section className="max-w-7xl mx-auto flex justify-between items-center">
                <a className="flex items-center text-2xl font-bold text-white hover:opacity-90 transition-opacity" href="/">
                    <img
                        src="/public/icon.png"
                        width={70}
                        alt="Logo"
                        className="mr-2 rounded-lg shadow-md hover:shadow-emerald-500/30 transition-all duration-300"
                    />
                    <span className="tracking-wide hover:text-emerald-200 transition-colors duration-300">Pass</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-wide hover:from-emerald-300 hover:to-teal-200 transition-all duration-300">Matters</span>
                </a>
                
               
                <button 
                    onClick={toggleMenu} 
                    className={`text-white p-2 cursor-pointer rounded-full hover:bg-emerald-600 hover:text-white hover:scale-110 transition-all duration-300 ${isMenuOpen ? 'bg-emerald-600 shadow-inner scale-110' : 'shadow-sm'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </section>
            
           
            {isMenuOpen && (
                <section className="absolute right-6 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl py-2 z-10 overflow-hidden border border-slate-200 dark:border-slate-700 transform origin-top-right transition-all duration-300 ease-in-out animate-fadeIn">
                    <section className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Navigation</p>
                    </section>
                    
                    <a href="/about" className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 group">
                        <section className="w-8 h-8 mr-3 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </section>
                        <section className="group-hover:translate-x-1 transition-transform duration-300">
                            <span className="font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">About</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Learn about our mission</p>
                        </section>
                    </a>

                    <a href="https://github.com/abhas-paul" className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-purple-50 hover:to-fuchsia-50 dark:hover:from-purple-900/20 dark:hover:to-fuchsia-900/20 transition-all duration-300 group">
                        <section className="w-8 h-8 mr-3 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-all duration-300">
                            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                        </section>
                        <section className="group-hover:translate-x-1 transition-transform duration-300">
                            <span className="font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">GitHub</span>
                            <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Explore our code repository</p>
                        </section>
                    </a>
                </section>
            )}
        </nav>
    );
};

export default Navbar;