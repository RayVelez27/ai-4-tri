'use client';

import { useState } from 'react';

const TestimonialsSection = () => {
    const [activePosition, setActivePosition] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 2,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 3,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 4,
            image: 'https://media.licdn.com/dms/image/C4E03AQFbvYtvSeyw-g/profile-displayphoto-shrink_100_100/0?e=1574294400&v=beta&t=49_VH9HRvqymP-VLETlFhFt4idmunZPhIQfALwaTrmA',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 5,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 6,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
        {
            id: 7,
            image: 'https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            name: 'Design By',
            link: 'https://manjaygupta.com',
            linkText: 'Manjay Gupta',
        },
    ];

    const positionMap = {
        0: 'scale-[0.65] top-0 left-0',
        1: '-left-10 top-[105px] scale-[0.55]',
        2: '-left-[60px] top-[240px] scale-[0.4]',
        3: 'left-[55px] top-[380px] scale-[0.55]',
        4: 'top-[30px] right-[55px] scale-[0.55]',
        5: 'top-[225px] -right-10 scale-[0.55]',
        6: 'top-[400px] right-[45px] scale-[0.4]',
    };

    const getPositionStyles = (index) => {
        if (index === activePosition) {
            return 'top-[10%] left-1/2 -translate-x-1/2 z-10 w-[70%] md:w-[60%] lg:w-[70%]';
        }
        const relativeIndex = (index - activePosition + testimonials.length) % testimonials.length;
        return positionMap[relativeIndex] || 'scale-[0.55]';
    };

    return (
        <section className="mt-16 md:mt-24 py-16 md:py-24">
            <div className="relative h-[550px] sm:h-[600px] md:h-[580px] lg:h-[725px] -mt-20 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        onClick={() => index !== activePosition && setActivePosition(index)}
                        className={`absolute text-center transition-all duration-1000 ease-in-out cursor-pointer ${getPositionStyles(index)}`}
                    >
                        <div
                            className={`mx-auto mb-6 relative ${index === activePosition ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40' : ''}`}
                        >
                            {index === activePosition && (
                                <div
                                    className="absolute inset-0 rounded-full -m-1"
                                    style={{
                                        background: 'linear-gradient(180deg, hsl(48,96%,53%) 0%, hsl(210,40%,96%) 100%)',
                                        padding: '5px',
                                        zIndex: -1,
                                    }}
                                />
                            )}
                            <img
                                src={testimonial.image}
                                alt={`${testimonial.linkText}'s avatar`}
                                className={`rounded-full transition-all duration-300 ${
                                    index === activePosition
                                        ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 border-0'
                                        : 'w-24 h-24 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px] border-8 border-[hsl(48,96%,53%)]/20'
                                }`}
                            />
                        </div>

                        <div
                            className={`px-4 sm:px-8 transition-all duration-300 ${
                                index === activePosition ? 'opacity-100 visible' : 'opacity-0 invisible hidden'
                            }`}
                        >
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[hsl(215,16%,47%)] mb-6">
                                {testimonial.comment}
                            </h3>
                            <span className="text-4xl sm:text-5xl lg:text-6xl text-[hsl(48,96%,53%)] my-6 inline-block">&#10077;</span>
                        </div>

                        <div
                            className={`transition-all duration-300 ${
                                index === activePosition ? 'opacity-100 visible' : 'opacity-0 invisible hidden'
                            }`}
                        >
                            <h3 className="text-[hsl(222,84%,5%)] font-semibold mb-1">{testimonial.name}</h3>
                            <p className="text-[hsl(48,96%,53%)] uppercase text-sm">
                                <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {testimonial.linkText}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
