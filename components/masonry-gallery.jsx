'use client';

import React from 'react';

const clients = [
    { name: 'Big Green Egg', logo: '/images/logos/big-green-egg-logo-vector (1).png' },
    { name: 'Allstate', logo: '/images/logos/Allstate-logo.jpg' },
    { name: 'Apartment List', logo: '/images/logos/apartment-list-logo (1).webp' },
    { name: 'Client', logo: '/images/logos/images (27).png' },
    { name: 'Artboard', logo: '/images/logos/Artboard-1-copy-3-100.jpg' },
    { name: 'Restore', logo: '/images/logos/Restore-Logo-Blue (1).jpg' },
    { name: 'Logor', logo: '/images/logos/Logor_Hor_Full_Color_RGB.webp' },
];

const LogoCard = ({ name, logo }) => (
    <div className="flex-shrink-0 w-[360px] h-[160px] bg-white rounded-2xl flex items-center justify-center px-8 shadow-sm">
        <img src={logo} alt={name} className="max-w-full max-h-[100px] object-contain" />
    </div>
);

const MasonryGallery = () => {
    const row1 = clients.slice(0, 4);
    const row2 = clients.slice(4);

    return (
        <section className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                <span className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider">Our Network</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Trusted by Businesses We've Helped Grow</h2>
                <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto">
                    Between us, we've consulted and built systems for businesses across industries — from local shops to scaling startups.
                </p>
            </div>

            <div className="overflow-hidden space-y-4">
                {/* Row 1 - scrolls left */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(186,76%,94%)] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(186,76%,94%)] to-transparent z-10 pointer-events-none"></div>
                    <div className="flex gap-6 animate-scroll-left">
                        {[...row1, ...row1, ...row1, ...row1].map((client, i) => (
                            <LogoCard key={`r1-${i}`} name={client.name} logo={client.logo} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - scrolls right */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(186,76%,94%)] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(186,76%,94%)] to-transparent z-10 pointer-events-none"></div>
                    <div className="flex gap-6 animate-scroll-right">
                        {[...row2, ...row2, ...row2, ...row2].map((client, i) => (
                            <LogoCard key={`r2-${i}`} name={client.name} logo={client.logo} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scrollLeft 30s linear infinite;
                }
                .animate-scroll-right {
                    animation: scrollRight 30s linear infinite;
                }
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default MasonryGallery;
