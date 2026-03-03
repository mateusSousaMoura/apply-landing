"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Briefcase,
    Layout,
    Cpu,
    PieChart,
    Chrome,
    Heart,
    Menu,
    X,
    ArrowRight
} from 'lucide-react';
import { siteData } from '@/lib/tokens';
import { siteConfig } from '@/lib/siteConfig';

const iconMap: Record<string, any> = {
    Briefcase,
    Layout,
    Cpu,
    PieChart,
    Chrome,
    UserHeart: Heart,
};

export function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="glass-nav">
            <div className="container-custom h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="text-white font-black text-xl">{siteConfig.brandInitials}</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900">{siteConfig.brandName}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {/* Produto Mega Menu */}
                    <div
                        className="group relative h-20 flex items-center"
                        onMouseEnter={() => setActiveMenu('produto')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1.5 text-slate-600 font-medium hover:text-primary transition-colors">
                            Produto
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <AnimatePresence>
                            {activeMenu === 'produto' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="fixed top-20 left-0 w-full bg-white border-b border-slate-200/60 shadow-2xl py-12 z-50"
                                    onMouseEnter={() => setActiveMenu('produto')}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <div className="container-custom grid grid-cols-3 gap-8">
                                        {siteData.nav.produto.map((item, idx) => {
                                            const Icon = iconMap[item.icon] || Briefcase;
                                            return (
                                                <Link
                                                    key={idx}
                                                    href="#"
                                                    className="group/item flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200"
                                                >
                                                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                                                            {item.label}
                                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                                        </h4>
                                                        <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
                                                            {item.sub}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Empresa Dropdown */}
                    <div
                        className="group relative h-20 flex items-center"
                        onMouseEnter={() => setActiveMenu('empresa')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <button className="flex items-center gap-1.5 text-slate-600 font-medium hover:text-primary transition-colors">
                            Empresa
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <AnimatePresence>
                            {activeMenu === 'empresa' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-20 left-0 w-64 bg-white border border-slate-200/60 shadow-xl rounded-2xl p-4 overflow-hidden z-50"
                                    onMouseEnter={() => setActiveMenu('empresa')}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <div className="flex flex-col gap-1">
                                        {siteData.nav.empresa.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.href}
                                                className="px-4 py-3 rounded-lg hover:bg-slate-50 text-slate-600 font-medium hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">Preços</Link>
                    <Link href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">Clientes</Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Produto</span>
                                {siteData.nav.produto.map((item, idx) => (
                                    <Link key={idx} href="#" className="font-bold text-slate-900">{item.label}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Empresa</span>
                                {siteData.nav.empresa.map((item, idx) => (
                                    <Link key={idx} href={item.href} className="font-bold text-slate-900">{item.label}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                                <button className="btn-primary w-full">{siteData.nav.cta}</button>
                                <button className="btn-secondary w-full">Login</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
