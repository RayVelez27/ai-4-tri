'use client';

const events = [
    {
        title: 'AI for Local Business Workshop',
        time: 'April 27th, 1:00 PM – 4:00 PM',
        location: 'Sunset Gardens, Richland WA',
        description: 'A hands-on look at how local businesses are using AI to automate the work that used to eat their day.',
        tag: 'Workshop',
        link: '/workshop',
    },
    {
        title: 'Tri-Cities Networking Mixer',
        time: 'TBD',
        description: 'Meet other Tri-Cities business owners who are exploring AI — share ideas, ask questions, and see what others are building.',
        tag: 'Networking',
    },
    {
        title: 'Missed Calls = Missed Revenue',
        time: 'TBD',
        description: 'A lunch-hour deep dive into why missed calls are the biggest silent revenue leak — and what businesses here are doing about it.',
        tag: 'Webinar',
    },
    {
        title: 'Automation Demo Day',
        time: 'TBD',
        description: 'Watch real automation systems get built live — and see how quickly a business can go from manual to modern.',
        tag: 'Demo',
    },
];

const tagColors = {
    Workshop: 'bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,60%)]',
    Networking: 'bg-[hsl(48,96%,53%)]/10 text-[hsl(222,84%,5%)]',
    Webinar: 'bg-[hsl(210,40%,96%)] text-[hsl(222,47%,11%)]',
    Demo: 'bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,60%)]',
};

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

const ComingSoonCalendar = () => {
    const year = 2026;
    const month = 3; // April
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const cells = [];
    for (let i = 0; i < firstDay; i++) {
        cells.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        cells.push(d);
    }

    return (
        <div>
            <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((d) => (
                    <div key={d} className="text-center text-sm font-semibold text-[hsl(215,16%,47%)]/50 py-2">
                        {d}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {cells.map((day, i) => {
                    const isEventDay = day === 27;
                    if (isEventDay) {
                        return (
                            <a
                                key={i}
                                href="/workshop"
                                className="relative flex flex-col items-center justify-center aspect-square rounded-xl text-base md:text-lg bg-[hsl(217,91%,60%)] text-white font-bold no-underline hover:bg-[hsl(217,91%,65%)] transition-colors cursor-pointer"
                            >
                                <span className="leading-none">{day}</span>
                                <span className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-white" />
                            </a>
                        );
                    }
                    return (
                        <div
                            key={i}
                            className="relative flex flex-col items-center justify-center aspect-square rounded-xl text-base md:text-lg text-[hsl(222,84%,5%)]/30"
                        >
                            <span className={`leading-none ${!day ? 'invisible' : ''}`}>{day || '·'}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const EventsSection = () => {
    return (
        <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                <span className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider">Events</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">See It for Yourself</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    No pitch decks. No sales pressure. Just live demos, honest conversations, and a room full of local business owners figuring out what AI actually means for them.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm h-full flex flex-col">
                        <div className="flex items-center justify-center mb-8">
                            <span className="text-lg font-bold tracking-wide">
                                April 2026
                            </span>
                        </div>

                        <div className="flex-1">
                            <ComingSoonCalendar />
                        </div>
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {events.map((event, index) => {
                        const Wrapper = event.link ? 'a' : 'div';
                        const wrapperProps = event.link ? { href: event.link } : {};
                        return (
                            <Wrapper
                                key={index}
                                {...wrapperProps}
                                className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all hover:shadow-md relative no-underline text-inherit ${event.link ? 'cursor-pointer' : ''}`}
                            >
                                {event.link && (
                                    <span className="absolute -top-2 -right-2 bg-[hsl(48,96%,53%)] text-[hsl(222,84%,5%)] text-[10px] font-bold px-2.5 py-1 rounded-full leading-none z-10">
                                        Sign Up
                                    </span>
                                )}
                                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${event.link ? 'bg-[hsl(217,91%,60%)] text-white' : 'bg-[hsl(215,16%,47%)]/10'}`}>
                                    <span className={`text-xs font-semibold uppercase leading-none ${event.link ? '' : 'text-[hsl(215,16%,47%)]'}`}>Apr</span>
                                    <span className={`text-lg font-bold leading-none mt-0.5 ${event.link ? '' : 'text-[hsl(215,16%,47%)]'}`}>{event.time === 'TBD' ? 'TBD' : '27'}</span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold">{event.title}</h3>
                                        <span
                                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                                tagColors[event.tag] || 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            {event.tag}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[hsl(215,16%,47%)] mb-1">
                                        {event.time === 'TBD' ? 'Date & time to be announced' : `${event.time} — ${event.location}`}
                                    </p>
                                    <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
