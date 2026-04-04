import EventCard, { type EventEntry } from './event-card';

interface EventsSectionProps {
  events: EventEntry[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  const upcomingEvents = events.filter(
    (e) => !e.entry.date || new Date(e.entry.date) >= new Date(new Date().setHours(0, 0, 0, 0))
  );
  const pastEvents = events
    .filter((e) => e.entry.date && new Date(e.entry.date) < new Date(new Date().setHours(0, 0, 0, 0)))
    .slice(-3);

  return (
    <div className="bg-brand-black bg-jungle-pattern py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">What's On</p>
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <div className="gold-divider" />
          <p className="font-body text-sm text-brand-cream-muted/70 tracking-wider max-w-xl mx-auto">
            World-class DJs, immersive jungle atmosphere, and nights you&apos;ll never forget.
          </p>
        </div>

        {/* Events grid */}
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-brand-forest-green/20">
            <div className="font-display text-6xl text-brand-gold/10 mb-4">&#9834;</div>
            <p className="font-body text-sm text-brand-cream-muted/50 tracking-widest uppercase">
              New events coming soon
            </p>
            <p className="font-body text-xs text-brand-cream-muted/30 tracking-wider mt-2">
              Follow us on Instagram for announcements
            </p>
          </div>
        )}

        {/* Past events */}
        {pastEvents.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="section-label text-brand-forest-light">Archive</p>
              <h3 className="font-display text-2xl text-brand-cream/50 tracking-widest uppercase">
                Past Events
              </h3>
              <div className="w-10 h-px bg-brand-forest-green/40 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
