import { DollarSign, ShoppingCart, TrendingUp, Users, Target, Zap } from "lucide-react";

const kpis = [
  {
    label: "Gasto",
    value: "R$ 460",
    icon: DollarSign,
    variant: "default",
  },
  {
    label: "Compras",
    value: "133",
    icon: ShoppingCart,
    variant: "default",
  },
  {
    label: "Retorno",
    value: "R$ 11.970",
    icon: TrendingUp,
    variant: "highlight",
    subtitle: "Faturamento",
  },
  {
    label: "Alcance",
    value: "11.000",
    icon: Users,
    variant: "default",
    subtitle: "pessoas",
  },
  {
    label: "Custo por Compra",
    value: "R$ 3,46",
    icon: Target,
    variant: "default",
  },
  {
    label: "ROI",
    value: "26x",
    icon: Zap,
    variant: "success",
    subtitle: "Retorno sobre investimento",
  },
];

export function KPICards() {
  return (
    <section className="fade-in">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 md:gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const cardClass =
            kpi.variant === "highlight"
              ? "kpi-card-highlight"
              : kpi.variant === "success"
              ? "kpi-card-success"
              : "kpi-card";

          return (
            <div
              key={kpi.label}
              className={cardClass}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-lg p-2 ${
                    kpi.variant === "default"
                      ? "bg-primary/10"
                      : "bg-white/20"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      kpi.variant === "default"
                        ? "text-primary"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
              <div className="mt-3">
                <p
                  className={`text-xs font-medium ${
                    kpi.variant === "default"
                      ? "text-muted-foreground"
                      : "text-white/80"
                  }`}
                >
                  {kpi.label}
                </p>
                <p
                  className={`mt-1 text-2xl font-bold ${
                    kpi.variant === "default" ? "text-foreground" : "text-white"
                  }`}
                >
                  {kpi.value}
                </p>
                {kpi.subtitle && (
                  <p
                    className={`text-xs ${
                      kpi.variant === "default"
                        ? "text-muted-foreground"
                        : "text-white/70"
                    }`}
                  >
                    {kpi.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Dados atualizados com até 10 minutos de atraso.
      </p>
    </section>
  );
}
