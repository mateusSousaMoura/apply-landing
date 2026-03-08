"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteData } from '@/lib/tokens';

export function Testimonials() {
    return (
        <section className="section-padding bg-bg overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
                        Quem usa, aprova e recomenda.
                    </h2>
                    <p className="text-lg text-text-muted">
                        Histórias reais de times que transformaram seu RH com a nossa tecnologia.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {siteData.testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="card-dark p-8 flex flex-col h-full hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Quote className="w-10 h-10 fill-current opacity-20" />
                            </div>

                            <blockquote className="text-xl text-text-secondary mb-8 leading-relaxed font-medium italic flex-grow">
                                "{item.quote}"
                            </blockquote>

                            <div className="mt-auto border-t border-white/[0.07] pt-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center font-black text-primary border-2 border-primary/30">
                                        {item.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-text-primary font-bold">{item.author}</h4>
                                        <p className="text-sm text-text-muted">{item.role}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="badge-dark text-[10px]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
