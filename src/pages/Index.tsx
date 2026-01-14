import { Header } from "@/components/dashboard/Header";
import { KPICards } from "@/components/dashboard/KPICards";
import { PerformanceIndicator } from "@/components/dashboard/PerformanceIndicator";
import { TrafficReports } from "@/components/dashboard/TrafficReports";
import { CreativesGrid } from "@/components/dashboard/CreativesGrid";
import { OptimizationTimeline } from "@/components/dashboard/OptimizationTimeline";
import { StrategicObservations } from "@/components/dashboard/StrategicObservations";
import { MeetingScheduler } from "@/components/dashboard/MeetingScheduler";
import { WhatsAppWidget } from "@/components/dashboard/WhatsAppWidget";
import { Footer } from "@/components/dashboard/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 md:px-6">
        <div className="space-y-6">
          {/* KPIs */}
          <KPICards />

          {/* Performance Indicator */}
          <PerformanceIndicator />

          {/* Traffic Reports Table */}
          <TrafficReports />

          {/* Creatives Grid */}
          <CreativesGrid />

          {/* Two columns layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Optimization Timeline */}
            <OptimizationTimeline />

            {/* Strategic Observations */}
            <StrategicObservations />
          </div>

          {/* Two columns layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Meeting Scheduler */}
            <MeetingScheduler />

            {/* WhatsApp Widget */}
            <WhatsAppWidget />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
