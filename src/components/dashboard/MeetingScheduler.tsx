import { Calendar, Video, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMetaTracking } from "@/hooks/useMetaTracking";

const meetingTypes = [
  {
    id: 1,
    title: "Alinhamento Mensal",
    description: "Revisão de resultados e planejamento do próximo mês",
    duration: "45 min",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Reunião Estratégica",
    description: "Discussão de novas oportunidades e ajustes",
    duration: "30 min",
    icon: Video,
  },
];

export function MeetingScheduler() {
  const { trackLead, trackSchedule } = useMetaTracking();

  const handleScheduleClick = (meetingTitle: string) => {
    trackLead({ content_name: meetingTitle });
    trackSchedule({ content_name: meetingTitle });
  };

  return (
    <section className="fade-in">
      <div className="rounded-2xl border border-border/50 bg-card p-4 md:p-6">
        <div className="mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold text-foreground">Agenda de Reuniões</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {meetingTypes.map((meeting) => {
            const Icon = meeting.icon;
            return (
              <div
                key={meeting.id}
                className="rounded-xl border border-border/50 bg-muted/30 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {meeting.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {meeting.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{meeting.duration}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="mt-4 w-full" 
                  size="sm"
                  onClick={() => handleScheduleClick(meeting.title)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Integração com Google Agenda • Confirmação automática
        </p>
      </div>
    </section>
  );
}
