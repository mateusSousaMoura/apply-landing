"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
import { siteData } from '@/lib/tokens';

export function Hero() {
    const { headline, subheadline, primaryCTA, secondaryCTA, socialProof } = siteData.hero;

    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-400/5 blur-[100px] rounded-full" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
                    >
                        {headline}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
                    >
                        {subheadline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group">
                            {primaryCTA}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 group">
                            <PlayCircle className="w-6 h-6 text-primary" />
                            {secondaryCTA}
                        </button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="pt-10 border-t border-slate-100"
                    >
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                            {socialProof.text}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {socialProof.logos.map((logo, idx) => (
                                <div key={idx} className="h-8 flex items-center justify-center text-2xl font-black text-slate-900 italic">
                                    {logo}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            <span className="ml-2 text-sm font-bold text-slate-600">4.9/5 no G2 Crowd & Capterra</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
