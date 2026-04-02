'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'What is AI 4 TRI?',
        answer: 'AI 4 TRI is a local initiative to bring AI awareness and education to Tri-Cities businesses. We host events, run live demos, and connect business owners with the people and tools that can help them modernize their operations.',
    },
    {
        question: 'Is this a sales pitch?',
        answer: 'No. AI 4 TRI exists to educate and inspire. Our events are free, open, and designed to show you what\'s possible — not pressure you into buying anything. If you want to go further, we can connect you with local experts who can help.',
    },
    {
        question: 'Do I need to be technical to attend an event?',
        answer: 'Not at all. Our events are built for business owners, not engineers. We keep things practical — real examples, real results, zero jargon.',
    },
    {
        question: 'What kind of businesses is this for?',
        answer: 'Any local business that relies on phone calls, leads, appointments, or repeat customers. Contractors, clinics, restaurants, agencies, service providers — if you run a business in the Tri-Cities, this is for you.',
    },
    {
        question: 'Why the Tri-Cities?',
        answer: 'This region transformed the world during the Manhattan Project. That same spirit of innovation still lives here. We believe the Tri-Cities shouldn\'t just watch the AI revolution — it should help lead it.',
    },
    {
        question: 'How do I get involved?',
        answer: 'Come to an event, bring a friend, or just reach out. Whether you\'re curious or ready to move, the first step is showing up.',
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                <span className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider">FAQ</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Questions We Get Asked</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    New to AI? Skeptical? Curious? Good — that's exactly who this is for.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-[hsl(0,0%,100%)] rounded-[2rem] p-6 md:p-10 shadow-sm">
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`border-b border-[hsl(214,32%,91%)] last:border-0`}>
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left text-base md:text-lg font-semibold py-5 hover:text-[hsl(217,91%,60%)] transition-colors flex items-center justify-between gap-4"
                            >
                                {faq.question}
                                <span
                                    className={`text-xl transition-transform duration-200 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                    &#9660;
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                                }`}
                            >
                                <p className="text-[hsl(215,16%,47%)] text-base leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
