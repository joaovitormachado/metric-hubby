import { Play, Eye, MousePointerClick, ShoppingCart, DollarSign } from "lucide-react";

const creatives = [
  {
    id: 1,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    campaign: "Campanha Principal",
    spend: "R$ 95",
    purchases: 28,
    cpa: "R$ 3,39",
    ctr: "4.2%",
  },
  {
    id: 2,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop",
    campaign: "Remarketing",
    spend: "R$ 65",
    purchases: 22,
    cpa: "R$ 2,95",
    ctr: "5.1%",
  },
  {
    id: 3,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=400&fit=crop",
    campaign: "Google Shopping",
    spend: "R$ 80",
    purchases: 24,
    cpa: "R$ 3,33",
    ctr: "3.8%",
  },
  {
    id: 4,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=400&fit=crop",
    campaign: "Awareness",
    spend: "R$ 45",
    purchases: 12,
    cpa: "R$ 3,75",
    ctr: "2.9%",
  },
];

export function CreativesGrid() {
  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground">Criativos em Execução</h2>
          <p className="text-sm text-muted-foreground">
            Ordenados por desempenho
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {creatives.map((creative, index) => (
            <div key={creative.id} className="creative-card">
              {/* Thumbnail */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={creative.thumbnail}
                  alt={`Criativo ${creative.id}`}
                  className="h-full w-full object-cover"
                />
                {creative.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                      <Play className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                )}
                {/* Ranking badge */}
                <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  #{index + 1}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">
                  {creative.campaign}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <DollarSign className="h-3 w-3" />
                    <span>{creative.spend}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShoppingCart className="h-3 w-3" />
                    <span>{creative.purchases} vendas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>CPA: {creative.cpa}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-success">
                    <MousePointerClick className="h-3 w-3" />
                    <span>CTR: {creative.ctr}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
