'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const OrbitingSkills = dynamic(() => import('./orbiting-skills'), { ssr: false });

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
            title: 'Never Miss a Call Again',
            description:
                'Right now, missed calls mean missed revenue. AI can follow up instantly — so every ring turns into a real opportunity.',
        },
        {
            icon: 'settings',
            title: 'Operations That Run Themselves',
            description:
                'The busywork that eats your day — follow-ups, scheduling, reminders — can run on autopilot while you focus on what matters.',
        },
        {
            icon: 'chat',
            title: 'Instant First Impressions',
            description:
                'When someone reaches out, speed wins. AI makes sure every inquiry gets an immediate, professional response.',
        },
        {
            icon: 'link',
            title: 'Works With What You Have',
            description:
                'No rip-and-replace. These systems plug into the tools you already use — your CRM, your calendar, your workflow.',
        },
    ];

    return (
        <section className="mt-16 md:mt-24">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
                <div className="flex-1">
                    <div className="inline-block bg-[hsl(0,0%,100%)] px-5 py-2 rounded-full shadow-sm mb-6">
                        <span className="text-sm font-semibold text-[hsl(215,16%,47%)]">What AI Can Do</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        The Tools Are Here
                        <br />
                        Right Now
                        <span className="text-[hsl(48,96%,53%)] inline-block align-top text-3xl md:text-4xl ml-1">+</span>
                    </h2>
                    <p className="text-[hsl(215,16%,47%)] text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
                        The same AI that powers billion-dollar companies is now accessible to every business on every corner in the Tri-Cities. Here's what it looks like in action.
                    </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-[500px] overflow-hidden">
                    <OrbitingSkills />
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
