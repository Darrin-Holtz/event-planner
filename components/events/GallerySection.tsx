export default function GallerySection() {
  const gallery = [
    { id: 1, title: "Keynote Sessions", category: "Speaking" },
    { id: 2, title: "Networking Events", category: "Community" },
    { id: 3, title: "Worship Experience", category: "Worship" },
    { id: 4, title: "Breakout Discussions", category: "Learning" },
    { id: 5, title: "Evening Fellowship", category: "Community" },
    { id: 6, title: "Attendee Highlights", category: "Speaking" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Event Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
              📸
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-1">
                  {item.category}
                </p>
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
