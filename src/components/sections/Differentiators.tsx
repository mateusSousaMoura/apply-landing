"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smile, ShieldCheck } from 'lucide-react';
import { siteData } from '@/lib/tokens';

const iconMap: Record<string, any> = {
    Settings,
    Smile,
    ShieldCheck,
};

export function Differentiators() {
    return (
        <section className="section-padding bg-canvas">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="badge mb-4">Diferenciais</span>
                    <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6 tracking-tight">
                        Software completo, pensado com você no centro.
                    </h2>
                    <p className="text-lg text-text-dark-muted">
                        Muito além de um ATS. Construímos uma experiência que valoriza o tempo do recrutador e a jornada do candidato.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {siteData.differentiators.map((item, idx) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-primary-light rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 shadow-lg shadow-primary/5 group transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-text-dark mb-4">{item.title}</h3>
                                <p className="text-lg text-text-dark-muted leading-relaxed max-w-sm mx-auto">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
