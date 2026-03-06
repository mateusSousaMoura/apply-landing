"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '@/lib/tokens';

export function ProductFunnel() {
    const [activeTab, setActiveTab] = useState<string>(siteData.funnel.steps[0].id);
    const activeStep = siteData.funnel.steps.find(s => s.id === activeTab)!;

    return (
        <section className="section-padding bg-canvas overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-6 tracking-tight">
                        {siteData.funnel.title}
                    </h2>
                    <p className="text-lg text-text-dark-muted leading-relaxed">
                        Uma abordagem completa que remove as fricções do dia a dia e permite focar na qualidade das contratações.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-black/[0.07] p-1.5 rounded-2xl border border-black/[0.09]">
                        {siteData.funnel.steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveTab(step.id)}
                                className={`relative px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                                    activeTab === step.id ? 'text-primary' : 'text-text-dark-muted hover:text-text-dark'
                                }`}
                            >
                                {activeTab === step.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-xl shadow-md border border-black/[0.06]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{step.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="relative min-h-[500px] lg:min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid lg:grid-cols-2 gap-16 items-center"
                        >
                            <div className="order-2 lg:order-1">
                                <h3 className="text-3xl font-black text-text-dark mb-6 leading-tight">
                                    {activeStep.title}
                                </h3>
                                <p className="text-xl text-text-dark-muted mb-8 leading-relaxed italic">
                                    "{activeStep.desc}"
                                </p>
                                <div className="space-y-4 mb-10">
                                    {activeStep.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-lg font-medium text-text-dark">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-primary font-black group">
                                    Explorar {activeStep.label}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    {/* Mockup Frame */}
                                    <div className="glass-card p-4 rounded-3xl relative overflow-hidden aspect-[4/3] flex items-center justify-center card-light border border-black/[0.07] shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
                                        {/* Fake Project Image Replacement */}
                                        <div className="text-center p-8 relative z-10">
                                            <div className="w-20 h-20 bg-primary/15 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                                <ArrowRight className="w-10 h-10 rotate-45" />
                                            </div>
                                            <p className="font-bold text-text-dark-muted uppercase tracking-widest text-sm mb-2">Visualização de Interface</p>
                                            <p className="text-text-dark font-medium">Dashboard de {activeStep.label} em tempo real.</p>
                                        </div>
                                    </div>
                                    {/* Floating Elements */}
                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl" />
                                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
