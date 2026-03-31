'use client';

import { useEffect, useRef } from 'react';

const items = [
    {
        title: 'Missed Call Recovery',
        description:
            'Every unanswered call gets an instant SMS follow-up — engaging leads, answering questions, and booking appointments automatically.',
        image: '/images/eastern-wa.png',
    },
    {
        title: 'Smart Lead Response',
        description:
            'New inquiries get an immediate, intelligent reply so you never lose a prospect to slow response times again.',
        image: '/images/tri-cities.png',
    },
    {
        title: 'Workflow Automation',
        description:
            'Repetitive tasks like follow-ups, scheduling, and internal hand-offs run on autopilot — freeing your team to focus on what matters.',
        image: '/images/eastern-wa.png',
    },
    {
        title: 'Seamless Integrations',
        description:
            'We plug directly into the tools you already use — your CRM, calendar, and communication stack — so nothing breaks.',
        image: '/images/tri-cities.png',
    },
    {
        title: 'Built for Tri-Cities',
        description:
            'We work exclusively with local businesses. Every system we install is tailored to how the Tri-Cities market actually operates.',
        image: '/images/eastern-wa.png',
    },
];

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="acc-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="acc-btn-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="acc-btn-icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const AccordionSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const detailsEls = section.querySelectorAll('details[name="feature"]');
        const nextBtn = section.querySelector('[data-action="next"]');
        const prevBtn = section.querySelector('[data-action="previous"]');
        const exitBtn = section.querySelector('[data-action="exit"]');

        const getOpen = () => Array.from(detailsEls).findIndex((d) => d.open);

        const onNext = () => {
            const i = getOpen();
            if (i !== -1) {
                detailsEls[i].open = false;
                detailsEls[(i + 1) % detailsEls.length].open = true;
            }
        };

        const onPrev = () => {
            const i = getOpen();
            if (i !== -1) {
                detailsEls[i].open = false;
                detailsEls[(i - 1 + detailsEls.length) % detailsEls.length].open = true;
            }
        };

        const onExit = () => {
            const i = getOpen();
            if (i !== -1) detailsEls[i].open = false;
        };

        const syncState = async () => {
            if (!section.matches(':has([open])')) {
                section.dataset.checkingDetails = 'false';
            } else {
                await Promise.allSettled(
                    section.getAnimations({ subtree: true }).map((a) => a.finished)
                );
                section.dataset.checkingDetails = 'true';
            }
        };

        nextBtn?.addEventListener('click', onNext);
        prevBtn?.addEventListener('click', onPrev);
        exitBtn?.addEventListener('click', onExit);
        section.addEventListener('toggle', syncState, true);

        return () => {
            nextBtn?.removeEventListener('click', onNext);
            prevBtn?.removeEventListener('click', onPrev);
            exitBtn?.removeEventListener('click', onExit);
            section.removeEventListener('toggle', syncState, true);
        };
    }, []);

    return (
        <div className="acc-wrapper">
            <section className="acc-section" ref={sectionRef}>
                <div className="acc-column-left">
                    {items.map((item, i) => (
                        <details key={i} name="feature">
                            <summary>
                                <PlusIcon />
                                <span>{item.title}</span>
                            </summary>
                            <div className="acc-content">
                                <p>{item.description}</p>
                            </div>
                        </details>
                    ))}
                </div>
                <div className="acc-column-right">
                    {/* Default image (no item open) */}
                    <div className="acc-img-block">
                        <div className="acc-img-wrapper">
                            <img src="/images/tri-cities.png" alt="Tri-Cities Washington" />
                        </div>
                    </div>
                    {/* Per-item images */}
                    {items.map((item, i) => (
                        <div key={i} className="acc-img-block">
                            <div className="acc-img-wrapper">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>

                <button aria-hidden="true" tabIndex={-1} data-action="previous">
                    <ChevronIcon />
                </button>
                <button aria-hidden="true" tabIndex={-1} data-action="next">
                    <ChevronIcon />
                </button>
                <button aria-hidden="true" tabIndex={-1} data-action="exit">
                    <CrossIcon />
                </button>
            </section>
        </div>
    );
};

export default AccordionSection;
