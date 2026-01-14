import { Sparkles, TrendingUp, Award } from "lucide-react";

export function PerformanceIndicator() {
  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-success/20 bg-gradient-to-r from-success/5 via-success/10 to-success/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success/20">
              <Award className="h-7 w-7 text-success" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-success">ROI Excelente</h3>
                <span className="performance-badge flex items-center gap-1 text-xs">
                  <Sparkles className="h-3 w-3" />
                  Acima de 10x
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Performance acima da média do mercado
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3">
            <TrendingUp className="h-5 w-5 text-success" />
            <p className="text-sm font-medium text-success">
              Campanhas performando de forma altamente lucrativa.
            </p>
          </div>
        </div>

        {/* Progress bar visual */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>ROI Mercado: 3x</span>
            <span>Seu ROI: 26x</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-success to-emerald-400 transition-all duration-1000"
              style={{ width: "92%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
