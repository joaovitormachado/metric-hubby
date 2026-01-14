import { useState } from "react";
import { Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const periods = [
  { label: "Hoje", value: "today" },
  { label: "7 dias", value: "7days" },
  { label: "30 dias", value: "30days" },
  { label: "Personalizado", value: "custom" },
];

const campaignStatus = [
  { label: "Ativas", count: 4, status: "active" },
  { label: "Em aprendizado", count: 2, status: "learning" },
  { label: "Em ajuste", count: 1, status: "adjusting" },
];

export function Header() {
  const [selectedPeriod, setSelectedPeriod] = useState("30days");

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-border/50 px-4 py-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">TrafficPro</h1>
              <p className="text-xs text-muted-foreground">Dashboard de Tráfego</p>
            </div>
          </div>

          {/* Period Selector */}
          <div className="flex flex-wrap items-center gap-2">
            {periods.map((period) => (
              <Button
                key={period.value}
                variant={selectedPeriod === period.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period.value)}
                className="text-xs"
              >
                {period.value === "custom" && <Calendar className="mr-1 h-3 w-3" />}
                {period.label}
              </Button>
            ))}
          </div>

          {/* Campaign Status */}
          <div className="flex items-center gap-3">
            {campaignStatus.map((item) => (
              <div
                key={item.status}
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                  item.status === "active"
                    ? "status-active"
                    : item.status === "learning"
                    ? "status-learning"
                    : "status-adjusting"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.status === "active"
                      ? "bg-success"
                      : item.status === "learning"
                      ? "bg-warning"
                      : "bg-destructive"
                  }`}
                />
                <span>{item.count} {item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
