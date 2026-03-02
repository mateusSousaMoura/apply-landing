"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Cpu, ArrowUpRight } from 'lucide-react';
import { siteData } from '@/lib/tokens';

export function ProductHighlights() {
    return (
        <section className="section-padding bg-slate-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-8">
                    {siteData.highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="glass-card p-10 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                        >
                            {/* Background Icon Decor */}
                            <div className="absolute -right-8 -bottom-8 opacity-5 text-slate-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                                {idx === 0 ? <PieChart size={240} /> : <Cpu size={240} />}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/30">
                                    {idx === 0 ? <PieChart className="w-8 h-8" /> : <Cpu className="w-8 h-8" />}
                                </div>

                                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                                    {item.desc}
                                </p>

                                <div className="mt-auto">
                                    <button className="flex items-center gap-2 text-slate-900 font-black group/btn p-1">
                                        <span className="border-b-4 border-primary/20 group-hover/btn:border-primary transition-all">
                                            {item.link}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
