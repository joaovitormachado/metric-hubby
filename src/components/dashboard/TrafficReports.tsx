import { useState } from "react";
import { Filter, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const campaigns = [
  {
    id: 1,
    name: "Campanha Principal - Conversão",
    platform: "Meta",
    objective: "Compras",
    spend: "R$ 180",
    purchases: 52,
    cpa: "R$ 3,46",
    roi: "28x",
    status: "active",
  },
  {
    id: 2,
    name: "Remarketing - Carrinho Abandonado",
    platform: "Meta",
    objective: "Conversão",
    spend: "R$ 85",
    purchases: 31,
    cpa: "R$ 2,74",
    roi: "32x",
    status: "active",
  },
  {
    id: 3,
    name: "Google Shopping - Produtos",
    platform: "Google",
    objective: "Vendas",
    spend: "R$ 120",
    purchases: 38,
    cpa: "R$ 3,16",
    roi: "24x",
    status: "active",
  },
  {
    id: 4,
    name: "Awareness - Público Frio",
    platform: "Meta",
    objective: "Alcance",
    spend: "R$ 45",
    purchases: 8,
    cpa: "R$ 5,62",
    roi: "16x",
    status: "learning",
  },
  {
    id: 5,
    name: "Display - Retargeting",
    platform: "Google",
    objective: "Conversão",
    spend: "R$ 30",
    purchases: 4,
    cpa: "R$ 7,50",
    roi: "12x",
    status: "adjusting",
  },
];

export function TrafficReports() {
  const [filter, setFilter] = useState("all");

  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Relatórios de Tráfego</h2>
            <p className="text-sm text-muted-foreground">
              Detalhamento por campanha
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <Filter className="mr-1 h-3 w-3" />
              Filtros
            </Button>
            {["all", "Meta", "Google"].map((item) => (
              <Button
                key={item}
                variant={filter === item ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(item)}
                className="text-xs"
              >
                {item === "all" ? "Todas" : item}
              </Button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    Campanha
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-xs font-semibold">Plataforma</TableHead>
                <TableHead className="text-xs font-semibold">Objetivo</TableHead>
                <TableHead className="text-xs font-semibold text-right">Gasto</TableHead>
                <TableHead className="text-xs font-semibold text-right">Compras</TableHead>
                <TableHead className="text-xs font-semibold text-right">CPA</TableHead>
                <TableHead className="text-xs font-semibold text-right">ROI</TableHead>
                <TableHead className="text-xs font-semibold">Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns
                .filter((c) => filter === "all" || c.platform === filter)
                .map((campaign) => (
                  <TableRow key={campaign.id} className="table-row-hover">
                    <TableCell className="font-medium text-sm">
                      {campaign.name}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          campaign.platform === "Meta"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {campaign.platform}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {campaign.objective}
                    </TableCell>
                    <TableCell className="text-right text-sm font-medium">
                      {campaign.spend}
                    </TableCell>
                    <TableCell className="text-right text-sm font-semibold">
                      {campaign.purchases}
                    </TableCell>
                    <TableCell className="text-right text-sm">
                      {campaign.cpa}
                    </TableCell>
                    <TableCell className="text-right text-sm font-bold text-success">
                      {campaign.roi}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                          campaign.status === "active"
                            ? "status-active"
                            : campaign.status === "learning"
                            ? "status-learning"
                            : "status-adjusting"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            campaign.status === "active"
                              ? "bg-success"
                              : campaign.status === "learning"
                              ? "bg-warning"
                              : "bg-destructive"
                          }`}
                        />
                        {campaign.status === "active"
                          ? "Ativa"
                          : campaign.status === "learning"
                          ? "Aprendizado"
                          : "Ajuste"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
