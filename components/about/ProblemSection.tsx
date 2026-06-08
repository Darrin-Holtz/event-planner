import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    { icon: CheckCircle2, title: "Endless Spreadsheets", description: "Manually tracking registrations in Excel wastes precious time" },
    { icon: CheckCircle2, title: "Payment Chaos", description: "Processing payments through email and collecting checks is error-prone" },
    { icon: CheckCircle2, title: "Communication Bottlenecks", description: "Sending updates to attendees through multiple channels creates confusion" },
    { icon: CheckCircle2, title: "Capacity Confusion", description: "Overbooking and no-shows happen when you can't track real-time signups" },
    { icon: CheckCircle2, title: "No Insights", description: "Missing data on attendance, feedback, and event performance metrics" },
    { icon: CheckCircle2, title: "Repetitive Work", description: "Setting up the same event details repeatedly across different platforms" },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ministry Leaders Waste Hours on Event Admin
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Without the right tools, event planning consumes time and energy that could be spent on ministry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-primary/30 transition-all">
              <AlertCircle className="h-8 w-8 text-primary mb-3 flex-shrink-0" />
              <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
