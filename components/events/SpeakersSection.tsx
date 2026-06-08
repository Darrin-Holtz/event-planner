import { Star } from "lucide-react";

export default function SpeakersSection() {
  const speakers = [
    {
      id: 1,
      name: "Dr. James Mitchell",
      title: "Founding Director of Ministry Excellence",
      bio: "30+ years leading transformational ministry initiatives across North America.",
      image: "👤",
    },
    {
      id: 2,
      name: "Pastor Sarah Johnson",
      title: "Lead Pastor & Author",
      bio: "Award-winning speaker and author specializing in faith-based leadership development.",
      image: "👤",
    },
    {
      id: 3,
      name: "Dr. Marcus Williams",
      title: "Strategic Innovation Consultant",
      bio: "Helps churches navigate modern challenges with timeless principles and fresh approaches.",
      image: "👤",
    },
    {
      id: 4,
      name: "Rachel Chen",
      title: "Community Outreach Director",
      bio: "Leader in connecting ministries with their communities through impactful programs.",
      image: "👤",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Featured Speakers</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl flex-shrink-0">
                {speaker.image}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{speaker.name}</h3>
                <p className="text-sm text-primary font-semibold mt-1">{speaker.title}</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">{speaker.bio}</p>
            <div className="flex items-center gap-1 mt-4 text-primary">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
