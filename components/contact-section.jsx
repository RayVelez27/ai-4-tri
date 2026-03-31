'use client';

import { useState } from 'react';

const WEBHOOK_URL = 'https://propellerfocal.app.n8n.cloud/webhook/e1bcf4ca-16bc-427b-ae13-a9b5b1d0e20b';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Failed to submit');
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="mt-16 md:mt-24 pb-16">
            <div className="text-center mb-12">
                <span className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Get in Touch</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    Ready to put AI to work for your business? Our team is here to help you get started.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information Card */}
                <div className="bg-[hsl(0,0%,100%)] rounded-[2rem] p-8 md:p-10">
                    <h3 className="text-xl font-bold mb-8">Contact Information</h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[hsl(48,96%,53%)]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-[hsl(48,96%,53%)] text-xl">✉</span>
                            </div>
                            <div>
                                <div className="text-sm text-[hsl(215,16%,47%)] mb-1">Email</div>
                                <a
                                    href="mailto:info@ai4tri.org"
                                    className="text-[hsl(222,84%,5%)] font-medium hover:text-[hsl(48,96%,53%)] transition-colors"
                                >
                                    info@ai4tri.org
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[hsl(48,96%,53%)]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-[hsl(48,96%,53%)] text-xl">📞</span>
                            </div>
                            <div>
                                <div className="text-sm text-[hsl(215,16%,47%)] mb-1">Phone</div>
                                <span className="text-[hsl(222,84%,5%)] font-medium">+1 (555) 019-2834</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[hsl(48,96%,53%)]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-[hsl(48,96%,53%)] text-xl">📍</span>
                            </div>
                            <div>
                                <div className="text-sm text-[hsl(215,16%,47%)] mb-1">Basecamp</div>
                                <div className="text-[hsl(222,84%,5%)] font-medium">Tri-Cities, WA</div>
                                <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[hsl(48,96%,53%)] bg-[hsl(48,96%,53%)]/10 px-2 py-1 rounded-full">
                                    ★ Headquarters
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Card */}
                <div className="bg-[hsl(0,0%,100%)] rounded-[2rem] p-8 md:p-10">
                    <h3 className="text-xl font-bold mb-8">Send us a Message</h3>

                    {status === 'success' && (
                        <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-700 text-sm font-medium">
                            Message sent! We'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[hsl(222,84%,5%)] mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[hsl(186,76%,94%)] border border-[hsl(214,32%,91%)] text-sm focus:outline-none focus:border-[hsl(217,91%,60%)] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[hsl(222,84%,5%)] mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[hsl(186,76%,94%)] border border-[hsl(214,32%,91%)] text-sm focus:outline-none focus:border-[hsl(217,91%,60%)] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[hsl(222,84%,5%)] mb-2">
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[hsl(186,76%,94%)] border border-[hsl(214,32%,91%)] text-sm focus:outline-none focus:border-[hsl(217,91%,60%)] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[hsl(222,84%,5%)] mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Tell us how we can help your business..."
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[hsl(186,76%,94%)] border border-[hsl(214,32%,91%)] text-sm focus:outline-none focus:border-[hsl(217,91%,60%)] transition-colors resize-none"
                            />
                        </div>

                        <p className="text-sm text-[hsl(215,16%,47%)]">We'll get back to you within 24 hours.</p>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-xl bg-[hsl(222,84%,5%)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
