import { Zap, Users, BarChart3, Mail, Lock, Cpu } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    { icon: Zap, title: "One Platform", description: "All your event management in one intuitive dashboard" },
    { icon: Users, title: "Easy Registration", description: "Attendees register in seconds—no complex forms" },
    { icon: BarChart3, title: "Real-Time Analytics", description: "Track attendance, revenue, and attendee insights instantly" },
    { icon: Mail, title: "Automated Communication", description: "Send confirmations, reminders, and follow-ups automatically" },
    { icon: Lock, title: "Secure Payments", description: "Process donations and registrations with enterprise-grade security" },
    { icon: Cpu, title: "Smart Integrations", description: "Connect with your favorite tools and services seamlessly" },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Run Better Events
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Built specifically for ministry leaders, by people who understand the unique challenges you face
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => {
            const IconComponent = solution.icon;
            return (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
