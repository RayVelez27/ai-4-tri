'use client';

import React, { useEffect, useState, memo } from 'react';

const iconComponents = {
    brain: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M9.5 2a3.5 3.5 0 0 0-3.4 2.7A3.5 3.5 0 0 0 3 8.2a3.5 3.5 0 0 0 .7 6.9A3.5 3.5 0 0 0 7.5 19a3.5 3.5 0 0 0 4.5-2" />
                <path d="M14.5 2a3.5 3.5 0 0 1 3.4 2.7A3.5 3.5 0 0 1 21 8.2a3.5 3.5 0 0 1-.7 6.9A3.5 3.5 0 0 1 16.5 19a3.5 3.5 0 0 1-4.5-2" />
                <path d="M12 2v20" />
            </svg>
        ),
        color: '#06B6D4',
        bg: 'rgba(6, 182, 212, 0.1)',
    },
    phone: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        color: '#D7B05A',
        bg: 'rgba(215, 176, 90, 0.1)',
    },
    calendar: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        color: '#496F3D',
        bg: 'rgba(73, 111, 61, 0.1)',
    },
    chat: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        color: '#3B82F6',
        bg: 'rgba(59, 130, 246, 0.1)',
    },
    zap: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        color: '#F97316',
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    link: {
        component: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
        color: '#1A587A',
        bg: 'rgba(26, 88, 122, 0.1)',
    },
};

const SkillIcon = memo(({ type }) => {
    const IconComponent = iconComponents[type]?.component;
    return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const skillsConfig = [
    { id: 'phone', orbitRadius: 100, size: 40, speed: 1, iconType: 'phone', phaseShift: 0, label: 'Call Recovery' },
    { id: 'calendar', orbitRadius: 100, size: 45, speed: 1, iconType: 'calendar', phaseShift: (2 * Math.PI) / 3, label: 'Scheduling' },
    { id: 'chat', orbitRadius: 100, size: 40, speed: 1, iconType: 'chat', phaseShift: (4 * Math.PI) / 3, label: 'Lead Response' },
    { id: 'brain', orbitRadius: 180, size: 50, speed: -0.6, iconType: 'brain', phaseShift: 0, label: 'AI Systems' },
    { id: 'zap', orbitRadius: 180, size: 45, speed: -0.6, iconType: 'zap', phaseShift: (2 * Math.PI) / 3, label: 'Automation' },
    { id: 'link', orbitRadius: 180, size: 40, speed: -0.6, iconType: 'link', phaseShift: (4 * Math.PI) / 3, label: 'Integrations' },
];

const OrbitingSkill = memo(({ config, angle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { orbitRadius, size, iconType, label } = config;

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;
    const icon = iconComponents[iconType];

    return (
        <div
            className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative w-full h-full p-2 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isHovered ? 'scale-125' : ''}`}
                style={{
                    backgroundColor: icon?.color,
                    boxShadow: isHovered
                        ? `0 4px 20px ${icon?.color}50, 0 0 40px ${icon?.color}30`
                        : `0 2px 8px ${icon?.color}25, 0 1px 3px rgba(0,0,0,0.1)`,
                }}
            >
                <SkillIcon type={iconType} />
                {isHovered && (
                    <div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap pointer-events-none"
                        style={{ color: icon?.color }}
                    >
                        {label}
                    </div>
                )}
            </div>
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, color, animationDelay = 0 }) => {
    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
            }}
        >
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1.5px solid ${color}`,
                }}
            />
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    border: `1px solid transparent`,
                    boxShadow: `0 0 20px ${color}`,
                    animation: 'pulse 4s ease-in-out infinite',
                    animationDelay: `${animationDelay}s`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

const orbitConfigs = [
    { radius: 100, color: 'rgba(6, 182, 212, 0.2)', delay: 0 },
    { radius: 180, color: 'rgba(215, 176, 90, 0.25)', delay: 1.5 },
];

export default function OrbitingSkills() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        let animationFrameId;
        let lastTime = performance.now();

        const animate = (currentTime) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;
            setTime((prevTime) => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                {/* Center icon */}
                <div className="w-20 h-20 bg-[hsl(222,84%,5%)] rounded-full flex items-center justify-center z-10 relative" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 0 40px rgba(6, 182, 212, 0.15)' }}>
                    <div className="absolute inset-0 rounded-full bg-[hsl(48,96%,53%)]/10 blur-xl animate-pulse"></div>
                    <div className="relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <defs>
                                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#06B6D4" />
                                    <stop offset="100%" stopColor="#D7B05A" />
                                </linearGradient>
                            </defs>
                            <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
                            <path d="M12 12v4" />
                            <path d="M8 18h8" />
                            <circle cx="12" cy="20" r="2" />
                        </svg>
                    </div>
                </div>

                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath key={`path-${config.radius}`} radius={config.radius} color={config.color} animationDelay={config.delay} />
                ))}

                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0);
                    return <OrbitingSkill key={config.id} config={config} angle={angle} />;
                })}
            </div>
        </div>
    );
}
