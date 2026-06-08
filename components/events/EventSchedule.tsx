import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventSchedule({ event }: any) {
  // Demo schedule data
  const schedule = [
    {
      day: 1,
      date: "Friday, April 15",
      sessions: [
        { time: "9:00 AM", title: "Registration & Welcome", speaker: "Welcome Team" },
        { time: "10:00 AM", title: "Opening Keynote", speaker: "Dr. James Mitchell" },
        { time: "11:30 AM", title: "Breakout Sessions (Choose 1)", speaker: "Multiple Speakers" },
        { time: "1:00 PM", title: "Lunch", speaker: "" },
        { time: "2:30 PM", title: "Afternoon Workshops", speaker: "Multiple Speakers" },
        { time: "5:00 PM", title: "Evening Worship", speaker: "Worship Team" },
        { time: "7:00 PM", title: "Dinner & Networking", speaker: "" },
      ],
    },
    {
      day: 2,
      date: "Saturday, April 16",
      sessions: [
        { time: "8:00 AM", title: "Breakfast & Prayer", speaker: "Prayer Team" },
        { time: "9:00 AM", title: "Main Session", speaker: "Pastor Sarah Johnson" },
        { time: "10:30 AM", title: "Extended Breakout Sessions", speaker: "Multiple Speakers" },
        { time: "12:30 PM", title: "Lunch", speaker: "" },
        { time: "2:00 PM", title: "Interactive Panel Discussion", speaker: "Leadership Panel" },
        { time: "3:30 PM", title: "Coffee Break", speaker: "" },
        { time: "4:00 PM", title: "Final Workshops", speaker: "Multiple Speakers" },
        { time: "6:00 PM", title: "Closing Ceremony & Dinner", speaker: "Leadership Team" },
      ],
    },
    {
      day: 3,
      date: "Sunday, April 17",
      sessions: [
        { time: "8:00 AM", title: "Breakfast", speaker: "" },
        { time: "9:00 AM", title: "Worship & Reflection", speaker: "Worship Team" },
        { time: "10:30 AM", title: "Closing Session & Takeaways", speaker: "Pastor James & Dr. Sarah" },
        { time: "12:00 PM", title: "Departure", speaker: "" },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Event Schedule</h2>
      <div className="space-y-8">
        {schedule.map((day, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <span className="text-lg font-bold text-primary">Day {day.day}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">{day.date}</p>
              </div>
            </div>

            <div className="space-y-3">
              {day.sessions.map((session, sessionIdx) => (
                <div
                  key={sessionIdx}
                  className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{session.time}</p>
                      <p className="text-lg font-medium text-foreground mt-1">{session.title}</p>
                      {session.speaker && <p className="text-sm text-muted mt-1">{session.speaker}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
