"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import { siteData } from '@/lib/tokens';
import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
    const { footer } = siteData;

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Col */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <span className="text-white font-black text-xl">{siteConfig.brandInitials}</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">{siteConfig.brandName}</span>
                        </Link>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-sm mb-8">
                            A plataforma completa para gerenciar processos seletivos, atrair talentos e otimizar o seu RH com inteligência e eficiência.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Col 1 - Produto */}
                    <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6">Produto</h4>
                        <ul className="space-y-4">
                            {footer.produto.map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-slate-600 hover:text-primary transition-colors font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 2 - Empresa */}
                    <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            {footer.empresa.map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-slate-600 hover:text-primary transition-colors font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 3 - Legal */}
                    <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footer.legal.map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-slate-600 hover:text-primary transition-colors font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-400 font-medium">
                        © 2026 {siteConfig.legalName}. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">Termos</Link>
                        <Link href="#" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">Privacidade</Link>
                        <Link href="#" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
