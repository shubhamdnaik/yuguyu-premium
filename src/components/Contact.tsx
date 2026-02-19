'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Zap, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
    const [status, setStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mjgeralb', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 border-t border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="glass-panel rounded-[3rem] p-8 md:p-16 border-yellow-400/10 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400"></div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left Column: Info */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Pilot.</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Partner with Yuguyu to bring elite nutrition infrastructure to your facility. Replace analog tools with a digital ecosystem.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                                        <Mail className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Partnerships</p>
                                        <a href="mailto:yuguyu@zohomail.in" className="text-xl font-bold hover:text-yellow-400 transition-colors">yuguyu@zohomail.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-yellow-400/50 transition-colors">
                                        <Phone className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Call Us</p>
                                        <p className="text-xl font-bold">+91 80739 94029</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="relative">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input type="text" name="name" placeholder="Full Name" required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-slate-600" />

                                <input type="text" name="gym" placeholder="Gym / Facility Name" required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-slate-600" />

                                <input type="email" name="email" placeholder="Email Address" required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-slate-600" />

                                <input type="tel" name="phone" placeholder="Mobile Number" required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-slate-600" />

                                <input type="hidden" name="subject" value="New Partnership Request (Yuguyu Premium Site)" />

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-yellow-400 text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : status === 'success' ? (
                                        <span>Request Sent! We'll be in touch.</span>
                                    ) : (
                                        <>
                                            <span>Request Partner Deck</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto px-6 pt-20 pb-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900">
                            <Zap className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter">Yuguyu</span>
                    </div>

                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Yuguyu. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-slate-400">
                        <Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Privacy</Link>
                        <Link href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
