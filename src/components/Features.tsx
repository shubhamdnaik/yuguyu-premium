'use client';

import { motion } from 'framer-motion';
import { Target, TrendingDown, Users, BarChart3, Clock, Smartphone } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: "Unify operations",
        desc: "Consolidate membership management, billing, and scheduling into one intuitive dashboard."
    },
    {
        icon: TrendingDown,
        title: "Eliminate leakage",
        desc: "Automated billing and reminders ensure you never miss a payment or a renewal."
    },
    {
        icon: Users,
        title: "Elevate experience",
        desc: "Provide members with a seamless digital journey from signup to workout tracking."
    },
    {
        icon: BarChart3,
        title: "Data-driven growth",
        desc: "Actionable insights help you make informed decisions to scale your business."
    },
    {
        icon: Clock,
        title: "Save time",
        desc: "Automate repetitive tasks and focus on what matters most: your members."
    },
    {
        icon: Smartphone,
        title: "Mobile first",
        desc: "Manage your gym from anywhere with our powerful mobile application."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built for <span className="text-yellow-400">Scale.</span></h2>
                    <p className="text-slate-400 text-lg">
                        Everything you need to run a high-performance facility, without the complexity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-8 rounded-2xl group hover:border-yellow-400/20"
                        >
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-yellow-400 group-hover:text-slate-900 border border-white/10">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
