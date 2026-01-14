import { Lightbulb, Rocket, TestTube, Settings } from "lucide-react";

const observations = [
  {
    icon: Rocket,
    title: "Campanhas em fase de escala",
    description:
      "As campanhas principais estão performando acima do esperado. Momento ideal para aumentar investimento gradualmente.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: TestTube,
    title: "Testes de novos criativos",
    description:
      "3 novos criativos em formato carrossel estão em teste. Resultados preliminares mostram CTR 12% maior.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Settings,
    title: "Ajustes estratégicos",
    description:
      "Redirecionamento de budget para públicos lookalike com melhor performance. Pausando campanhas com CPA acima de R$5,00.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

export function StrategicObservations() {
  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-6">
        <div className="mb-6 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">
            Observações Estratégicas
          </h2>
        </div>

        <div className="space-y-4">
          {observations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-border/50 bg-muted/30 p-4"
              >
                <div className={`rounded-lg p-2 ${item.bgColor} h-fit`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
