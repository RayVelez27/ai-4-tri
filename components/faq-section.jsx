'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'What exactly does AI 4 TRI install for my business?',
        answer: 'We set up AI-powered systems that handle missed call recovery, automated lead follow-ups, appointment scheduling, and workflow automation — all customized to fit your specific business needs.',
    },
    {
        question: 'How long does it take to get up and running?',
        answer: 'Most businesses are fully set up in as little as 1 hour. We handle the entire installation and configuration so you can start seeing results immediately.',
    },
    {
        question: 'Do I need any technical skills to use this?',
        answer: 'Not at all. Our systems are designed to run in the background with zero technical knowledge required. We handle all the setup, and you get a simple dashboard to monitor performance.',
    },
    {
        question: 'What kind of businesses do you work with?',
        answer: 'We work with local businesses across Eastern WA — from contractors and clinics to restaurants and service providers. If you rely on phone calls and leads, we can help.',
    },
    {
        question: 'How much does it cost?',
        answer: "Pricing depends on the systems you need. We offer flexible plans designed for small and mid-size businesses. Reach out for a free consultation and custom quote.",
    },
    {
        question: 'Can I try it before committing?',
        answer: 'Yes! We offer a demo so you can see exactly how the AI systems work for your business before making any commitment.',
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    Everything you need to know about how AI 4 TRI helps local businesses grow.
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
