import { TrendingUp, MessageCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card px-4 py-6 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Gestão de tráfego orientada a dados e performance.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <RefreshCw className="h-3 w-3 animate-spin-slow" />
              <span>Atualização automática</span>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              <MessageCircle className="mr-1 h-3 w-3" />
              Suporte via WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          © 2026 TrafficPro Dashboard. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
