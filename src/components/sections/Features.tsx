export function Features() {
    const features = [
        {
            title: "Triagem com IA",
            description: "Identifique automaticamente os candidatos mais qualificados com base nos requisitos da vaga."
        },
        {
            title: "Pipeline Visual",
            description: "Gerencie candidatos em um funil intuitivo e saiba exatamente em que estágio cada um se encontra."
        },
        {
            title: "Multicanais",
            description: "Publique suas vagas nos principais portais e receba todos os currículos em um único lugar."
        }
    ]

    return (
        <section id="features" className="py-24 bg-surface-elevated">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Tudo o que você precisa para <span className="text-primary">contratar melhor</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Processos simples, organizados e eficientes para o seu RH.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
