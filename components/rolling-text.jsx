'use client';

const RollingText = ({ text, color, visible }) => {
    return (
        <span className="inline-flex overflow-hidden" style={{ color }}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="inline-block transition-all"
                    style={{
                        transitionProperty: 'transform, opacity',
                        transitionDuration: visible ? '400ms' : '300ms',
                        transitionTimingFunction: visible
                            ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                            : 'cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: visible ? `${i * 40}ms` : `${i * 20}ms`,
                        transform: visible
                            ? 'translateY(0) rotateX(0)'
                            : 'translateY(-80%) rotateX(90deg)',
                        opacity: visible ? 1 : 0,
                        transformOrigin: 'top center',
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

export default RollingText;
