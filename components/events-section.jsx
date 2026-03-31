'use client';

import { useState, useMemo } from 'react';

const events = [
    {
        date: new Date(2025, 6, 15),
        title: 'AI for Local Business Workshop',
        time: '6:00 PM – 8:00 PM',
        description: 'Hands-on session showing how AI tools can automate your daily operations.',
        tag: 'Workshop',
    },
    {
        date: new Date(2025, 6, 22),
        title: 'Tri-Cities Networking Mixer',
        time: '5:30 PM – 7:30 PM',
        description: 'Connect with local business owners and learn how others are using AI.',
        tag: 'Networking',
    },
    {
        date: new Date(2025, 7, 5),
        title: 'Missed Calls = Missed Revenue',
        time: '12:00 PM – 1:00 PM',
        description: 'Lunch & learn about capturing every opportunity with AI-powered call recovery.',
        tag: 'Webinar',
    },
    {
        date: new Date(2025, 7, 19),
        title: 'Automation Demo Day',
        time: '4:00 PM – 6:00 PM',
        description: 'Live demos of workflow automation for service-based businesses.',
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
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

const DotCalendar = ({ year, month, eventDates, selectedDate, onSelectDate }) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();
    const isToday = (day) => today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

    const cells = [];
    for (let i = 0; i < firstDay; i++) {
        cells.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        cells.push(d);
    }

    const hasEvent = (day) => {
        if (!day) return false;
        const dateStr = new Date(year, month, day).toDateString();
        return eventDates.has(dateStr);
    };

    const isSelected = (day) => {
        if (!day || !selectedDate) return false;
        return new Date(year, month, day).toDateString() === selectedDate.toDateString();
    };

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
                {cells.map((day, i) => (
                    <button
                        key={i}
                        disabled={!day}
                        onClick={() => {
                            if (!day) return;
                            const d = new Date(year, month, day);
                            if (selectedDate && d.toDateString() === selectedDate.toDateString()) {
                                onSelectDate(null);
                            } else {
                                onSelectDate(d);
                            }
                        }}
                        className={`
                            relative flex flex-col items-center justify-center aspect-square rounded-xl text-base md:text-lg transition-all
                            ${!day ? 'cursor-default' : 'cursor-pointer hover:bg-[hsl(217,91%,60%)]/5'}
                            ${isSelected(day) ? 'bg-[hsl(217,91%,60%)] text-white hover:bg-[hsl(217,91%,60%)]' : ''}
                            ${isToday(day) && !isSelected(day) ? 'font-bold text-[hsl(217,91%,60%)]' : ''}
                            ${!isSelected(day) && !isToday(day) && day ? 'text-[hsl(222,84%,5%)]' : ''}
                        `}
                    >
                        <span className={`leading-none ${!day ? 'invisible' : ''}`}>{day || '·'}</span>
                        {hasEvent(day) && (
                            <span
                                className={`absolute bottom-1.5 w-1.5 h-1.5 rounded-full transition-colors ${
                                    isSelected(day) ? 'bg-white' : 'bg-[hsl(217,91%,60%)]'
                                }`}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

const EventsSection = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [calendarMonth, setCalendarMonth] = useState(() => {
        const first = events[0]?.date;
        return first ? { year: first.getFullYear(), month: first.getMonth() } : { year: 2025, month: 6 };
    });

    const eventDates = useMemo(() => new Set(events.map((e) => e.date.toDateString())), []);

    const filteredEvents = selectedDate
        ? events.filter((e) => e.date.toDateString() === selectedDate.toDateString())
        : events;

    const prevMonth = () => {
        setCalendarMonth((prev) => {
            const m = prev.month - 1;
            return m < 0 ? { year: prev.year - 1, month: 11 } : { year: prev.year, month: m };
        });
    };

    const nextMonth = () => {
        setCalendarMonth((prev) => {
            const m = prev.month + 1;
            return m > 11 ? { year: prev.year + 1, month: 0 } : { year: prev.year, month: m };
        });
    };

    return (
        <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                <span className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider">Events</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Upcoming Events</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    Join us for workshops, demos, and networking events across the Tri-Cities.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Dot Calendar */}
                <div>
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm h-full flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <button
                                onClick={prevMonth}
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[hsl(217,91%,60%)]/5 transition-colors text-[hsl(215,16%,47%)] text-xl"
                            >
                                ‹
                            </button>
                            <span className="text-lg font-bold tracking-wide">
                                {monthNames[calendarMonth.month]} {calendarMonth.year}
                            </span>
                            <button
                                onClick={nextMonth}
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[hsl(217,91%,60%)]/5 transition-colors text-[hsl(215,16%,47%)] text-xl"
                            >
                                ›
                            </button>
                        </div>

                        <div className="flex-1">
                            <DotCalendar
                                year={calendarMonth.year}
                                month={calendarMonth.month}
                                eventDates={eventDates}
                                selectedDate={selectedDate}
                                onSelectDate={setSelectedDate}
                            />
                        </div>

                        {selectedDate && (
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="mt-6 w-full text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(222,84%,5%)] transition-colors underline underline-offset-2"
                            >
                                Show all events
                            </button>
                        )}
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all hover:shadow-md"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-[hsl(217,91%,60%)] rounded-2xl flex flex-col items-center justify-center text-white">
                                    <span className="text-xs font-semibold uppercase leading-none">
                                        {monthsShort[event.date.getMonth()]}
                                    </span>
                                    <span className="text-2xl font-bold leading-none mt-0.5">{event.date.getDate()}</span>
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
                                    <p className="text-sm text-[hsl(215,16%,47%)] mb-1">🕐 {event.time}</p>
                                    <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                            <p className="text-[hsl(215,16%,47%)]">No events on this date.</p>
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="mt-2 text-sm text-[hsl(217,91%,60%)] hover:underline"
                            >
                                View all events
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
