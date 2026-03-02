"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { siteData } from '@/lib/tokens';

export function Press() {
    const { press } = siteData;

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card overflow-hidden grid lg:grid-cols-2 group hover:shadow-2xl transition-all duration-700 max-w-5xl mx-auto"
                >
                    {/* Image Side */}
                    <div className="bg-slate-900 relative h-64 lg:h-full flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                        <div className="relative z-10 text-center p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 scale-90 group-hover:scale-110 transition-transform duration-700">
                                <Linkedin className="w-12 h-12 text-blue-400" />
                            </div>
                            <p className="text-white/50 font-bold uppercase tracking-[0.2em] text-xs">Comunicado Oficial</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Calendar className="w-4 h-4" />
                            {press.date}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors">
                            {press.title}
                        </h3>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed italic">
                            "Este investimento nos permitirá acelerar o desenvolvimento de nossa suíte de IA generativa para recrutamento, consolidando nossa liderança no mercado enterprise."
                        </p>

                        <div>
                            <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-colors group/btn shadow-xl shadow-slate-900/10">
                                {press.linkText}
                                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
