import { Palette, Users, Wallet, TrendingUp } from "lucide-react";

const optimizations = [
  {
    id: 1,
    date: "14 Jan 2026",
    type: "criativo",
    icon: Palette,
    title: "Novos criativos em carrossel",
    description: "Teste A/B com imagens de lifestyle vs produto isolado",
    impact: "Aumento esperado de 15% no CTR",
  },
  {
    id: 2,
    date: "12 Jan 2026",
    type: "público",
    icon: Users,
    title: "Ajuste de público para escala",
    description: "Expansão para lookalike 3% baseado em compradores",
    impact: "Redução esperada de 20% no CPA",
  },
  {
    id: 3,
    date: "10 Jan 2026",
    type: "orçamento",
    icon: Wallet,
    title: "Redistribuição de budget",
    description: "Aumento de 30% no orçamento das campanhas top performers",
    impact: "Escala mantendo ROI acima de 20x",
  },
  {
    id: 4,
    date: "08 Jan 2026",
    type: "estratégia",
    icon: TrendingUp,
    title: "Implementação de CBO",
    description: "Migração para Campaign Budget Optimization",
    impact: "Melhor distribuição automática de budget",
  },
];

const typeColors = {
  criativo: "bg-purple-100 text-purple-700",
  público: "bg-blue-100 text-blue-700",
  orçamento: "bg-emerald-100 text-emerald-700",
  estratégia: "bg-orange-100 text-orange-700",
};

export function OptimizationTimeline() {
  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground">
            Linha do Tempo de Otimizações
          </h2>
          <p className="text-sm text-muted-foreground">
            Histórico de ajustes estratégicos
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-border md:left-[23px]" />

          <div className="space-y-6">
            {optimizations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex gap-4">
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="timeline-dot" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl bg-muted/50 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.date}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                            typeColors[item.type as keyof typeof typeColors]
                          }`}
                        >
                          <Icon className="h-3 w-3" />
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-2 font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-1 rounded-lg bg-success/10 px-2 py-1 text-xs font-medium text-success">
                      <TrendingUp className="h-3 w-3" />
                      {item.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
