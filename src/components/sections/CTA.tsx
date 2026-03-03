import { siteConfig } from '@/lib/siteConfig';

export function CTA() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="bg-primary rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-hover rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Pronto para transformar seu recrutamento?
                        </h2>
                        <p className="text-primary-light text-lg mb-10 opacity-90">
                            Junte-se a centenas de empresas que já otimizam seus processos com a {siteConfig.brandName}.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all shadow-xl">
                                Começar agora gratuitamente
                            </button>
                            <button className="w-full sm:w-auto bg-primary-hover text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 border border-white/20 transition-all">
                                Falar com consultor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
