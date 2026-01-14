import { MessageCircle, Send, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const messages = [
  {
    id: 1,
    sender: "client",
    name: "Cliente",
    message: "Olá! Gostaria de saber sobre os resultados da campanha.",
    time: "10:30",
  },
  {
    id: 2,
    sender: "agency",
    name: "Agência",
    message: "Olá! Claro, as campanhas estão com ROI de 26x este mês. Excelente performance!",
    time: "10:32",
  },
  {
    id: 3,
    sender: "client",
    name: "Cliente",
    message: "Incrível! Podemos aumentar o investimento?",
    time: "10:35",
  },
  {
    id: 4,
    sender: "agency",
    name: "Agência",
    message: "Sim! Recomendo um aumento gradual de 20% para manter a performance.",
    time: "10:38",
  },
];

export function WhatsAppWidget() {
  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-emerald-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold">WhatsApp</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
            <Lock className="h-3 w-3" />
            <span>Apenas visualização</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto bg-[#e5ddd5] p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "agency" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  msg.sender === "agency"
                    ? "bg-emerald-100 rounded-br-none"
                    : "bg-white rounded-bl-none"
                }`}
              >
                <p className="text-sm text-gray-800">{msg.message}</p>
                <p className="mt-1 text-right text-xs text-gray-500">
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input (disabled) */}
        <div className="flex items-center gap-2 border-t border-border bg-muted/50 p-3">
          <Input
            placeholder="Mensagem desabilitada"
            disabled
            className="bg-white"
          />
          <Button size="icon" disabled>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
