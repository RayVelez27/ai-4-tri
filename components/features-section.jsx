'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import missedCallAnimation from '../public/images/Missed_Call.json';
import briefcaseAnimation from '../public/images/Briefcase.json';
import chatBubbleAnimation from '../public/images/Chat_Bubble.json';
import threeLayersAnimation from '../public/images/Three_Layers.json';

const lottieMap = {
    phone_missed: missedCallAnimation,
    settings: briefcaseAnimation,
    chat: chatBubbleAnimation,
    link: threeLayersAnimation,
};

const FeaturesSection = () => {
    const features = [
        {
            icon: 'phone_missed',
            title: 'Missed Call Recovery',
            description:
                'Capture every missed call with instant SMS follow-ups that engage leads, answer questions, and book appointments automatically.',
        },
        {
            icon: 'settings',
            title: 'Workflow Automation',
            description:
                'Automate repetitive tasks like follow-ups, scheduling, and internal processes so your business runs efficiently without manual effort.',
        },
        {
            icon: 'chat',
            title: 'Smart Lead Response',
            description:
                'Every new inquiry gets an immediate response — turning more interest into real customers without delays.',
        },
        {
            icon: 'link',
            title: 'Seamless Integrations',
            description:
                'We connect directly into the tools you already use, so everything works together without disruption.',
        },
    ];

    return (
        <section className="mt-16 md:mt-24">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
                <div className="flex-1">
                    <div className="inline-block bg-[hsl(0,0%,100%)] px-5 py-2 rounded-full shadow-sm mb-6">
                        <span className="text-sm font-semibold text-[hsl(215,16%,47%)]">What We Install</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        AI Systems Built for
                        <br />
                        Real Businesses
                        <span className="text-[hsl(48,96%,53%)] inline-block align-top text-3xl md:text-4xl ml-1">+</span>
                    </h2>
                    <p className="text-[hsl(215,16%,47%)] text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
                        We're helping local businesses take the next step — turning everyday operations into automated systems that capture more
                        opportunities, respond instantly, and run smoother behind the scenes.
                    </p>
                </div>

                <div className="flex-shrink-0 w-[560px] md:w-[680px] overflow-hidden rounded-2xl">
                    <img
                        src="/images/Untitled design - 2026-03-30T174402.289.png"
                        alt="Tri-Cities vineyard landscape"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[hsl(0,0%,100%)] rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-[hsl(217,91%,60%)]/10 rounded-2xl flex items-center justify-center mb-6">
                            <Lottie animationData={lottieMap[feature.icon]} loop={true} className="w-16 h-16" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
