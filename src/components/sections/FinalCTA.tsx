"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function FinalCTA() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/40"
                >
                    {/* Decor */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-[100px] rounded-full -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-400/20 blur-[100px] rounded-full translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-bold uppercase tracking-widest">Pronto para começar?</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            Você está a um passo de transformar seu recrutamento
                        </h2>

                        <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
                            Junte-se a +700 empresas que reduziram o time-to-hire e humanizaram seus processos com o {siteConfig.brandName}.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-10 py-5 bg-white text-primary rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20">
                                Falar com especialista
                            </button>
                            <button className="px-10 py-5 bg-primary-hover text-white border border-white/20 rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all flex items-center gap-2 group">
                                Ver demonstração
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
