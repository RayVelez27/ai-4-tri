'use client';

import React from 'react';

const placeholders = [
    { type: null },
    { type: null },
    { type: 'tall' },
    { type: 'wide' },
    { type: null },
    { type: 'tall' },
    { type: 'big' },
    { type: null },
    { type: 'wide' },
];

const typeClasses = {
    wide: 'masonry-wide',
    tall: 'masonry-tall',
    big: 'masonry-big',
};

const MasonryGallery = () => {
    return (
        <section className="mt-16 md:mt-24">
            {/* WIP Banner */}
            <div className="border border-dashed border-[hsl(215,20%,30%)] rounded-lg p-4 mb-8 text-center bg-[hsl(215,28%,12%)]">
                <p className="text-[hsl(48,96%,53%)] font-semibold text-sm uppercase tracking-wider mb-1">
                    Section Under Construction
                </p>
                <p className="text-[hsl(215,16%,55%)] text-sm">
                    This area will feature logos from past clients and previous consultation partners.
                </p>
            </div>

            <div className="masonry-grid">
                {placeholders.map((item, i) => (
                    <div
                        key={i}
                        className={`masonry-item ${typeClasses[item.type] || ''}`}
                    >
                        <div className="skeleton-placeholder">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="skeleton-icon"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                            <span className="skeleton-label">Client Logo</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MasonryGallery;
