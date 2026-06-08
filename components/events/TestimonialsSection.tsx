import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Rodriguez",
      role: "Church Communications Director",
      text: "This event completely transformed how our team approaches ministry. The speakers were inspiring and the networking opportunities were invaluable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Pastor David Kim",
      role: "Lead Pastor, Community Chapel",
      text: "Outstanding experience from start to finish. The organization was impeccable and I learned practical strategies I'm already implementing.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      role: "Ministry Volunteer",
      text: "As a first-time attendee, I felt so welcomed. The breakout sessions were tailored perfectly for my level of experience. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">What Attendees Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-muted leading-relaxed mb-6">"{testimonial.text}"</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-primary">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
