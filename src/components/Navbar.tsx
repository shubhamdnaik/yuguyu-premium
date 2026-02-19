'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Languages, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('EN');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Brand', href: '#twin' },
        { name: 'How it Works', href: '#model' },
        { name: 'FAQs', href: '#faqs' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-slate-900/95 backdrop-blur-xl border-white/10 py-4 shadow-2xl'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="z-50">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-yellow-400 transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-800/50 border border-white/10 text-xs hover:bg-slate-800 transition-colors"
                        >
                            <Languages className="w-3 h-3 text-yellow-400" />
                            <span>{currentLang}</span>
                            <ChevronDown className="w-3 h-3" />
                        </button>
                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-2 w-24 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden"
                                >
                                    {['EN', 'HI', 'KN'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setCurrentLang(lang);
                                                setLangOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-2 text-xs hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Login */}
                    <Link
                        href="/login"
                        className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
                    >
                        <User className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                        <span>Member Login</span>
                    </Link>

                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] active:scale-95"
                    >
                        Become a Partner
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-white p-2 focus:outline-none z-50"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-medium border-b border-white/10 pb-4 text-slate-300 hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-medium border-b border-white/10 pb-4 flex items-center gap-3 text-slate-300"
                        >
                            <User className="w-6 h-6 text-yellow-400" />
                            <span>Member Login</span>
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-4 bg-yellow-400 text-slate-900 font-bold text-lg rounded-xl mt-4 shadow-lg shadow-yellow-400/20 text-center"
                        >
                            Become a Partner
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
