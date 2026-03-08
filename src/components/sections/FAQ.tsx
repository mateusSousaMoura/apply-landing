"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteData } from '@/lib/tokens';
import { siteConfig } from '@/lib/siteConfig';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-bg">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex p-3 bg-primary/20 rounded-2xl text-primary mb-6">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl font-black text-text-primary mb-4 tracking-tight">Perguntas Frequentes</h2>
                        <p className="text-lg text-text-muted">
                            Tire suas principais dúvidas sobre como o {siteConfig.brandName} pode escalar o seu RH.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {siteData.faq.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`card-dark rounded-3xl border transition-all duration-300 ${
                                        isOpen ? 'border-primary/40 shadow-xl shadow-primary/10' : 'hover:border-white/15'
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                                    >
                                        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                                            {item.q}
                                        </span>
                                        <div className={`p-1 rounded-full transition-all flex-shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-white/[0.07] text-text-muted'}`}>
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 text-lg text-text-secondary leading-relaxed border-t border-white/[0.06] pt-4">
                                                    {item.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
