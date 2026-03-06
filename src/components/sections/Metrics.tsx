"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/tokens';

export function Metrics() {
    return (
        <section className="bg-bg py-20 overflow-hidden relative">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {siteData.metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight">
                                {metric.value}
                            </div>
                            <div className="text-lg font-bold text-primary mb-2">
                                {metric.label}
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed max-w-[200px] mx-auto">
                                {metric.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
