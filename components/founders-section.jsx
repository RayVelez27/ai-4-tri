const LinkedInButton = ({ url }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-md bg-[#0a66c2] hover:w-[135px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]"
    >
        <div className="w-full group-hover:w-[30%] transition-all duration-300 flex items-center justify-center group-hover:pl-[10px]">
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
        </div>
        <span className="absolute right-0 w-0 opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-[10px]">
            LinkedIn
        </span>
    </a>
);

const FoundersSection = () => {
    const founders = [
        {
            name: 'Ray Velez',
            title: 'AI Systems & Business Operations',
            bio: 'With over a decade of experience in automation and AI, Ray is passionate about helping local businesses leverage technology to grow smarter and faster.',
            image: '/images/ray.jpg',
            linkText: 'Founder of Pasco Web Designs',
            linkUrl: 'https://pascowebdesigns.com',
            linkedIn: 'https://www.linkedin.com/in/raymond-velez-96aa4a172',
        },
        {
            name: 'Parker Lydeen',
            title: 'Automation & AI Systems Engineer',
            bio: "A software engineer turned entrepreneur, Parker builds the AI systems that power our clients' growth — from missed call recovery to full workflow automation.",
            image: '/images/parker.jpg',
            linkText: 'Founder of Button Scale',
            linkUrl: 'https://buttonscale.com',
            linkedIn: 'https://www.linkedin.com/in/parker-lydeen-548695325',
        },
    ];

    return (
        <section className="mt-16 md:mt-24">
            <div className="flex flex-col items-start mb-12">
                <div className="inline-block bg-[hsl(0,0%,100%)] px-5 py-2 rounded-full shadow-sm mb-6">
                    <span className="text-sm font-semibold text-[hsl(215,16%,47%)]">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Behind the Initiative
                    <span className="text-[hsl(48,96%,53%)] inline-block align-top text-3xl md:text-4xl ml-1">+</span>
                </h2>
                <p className="text-[hsl(215,16%,47%)] text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
                    We're AI entrepreneurs and developers who've spent years building automation systems for businesses everywhere. Now, we're bringing that experience home — to help the Tri-Cities community we live in tap into what's possible.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className="bg-[hsl(0,0%,100%)] rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start"
                    >
                        <div className="shrink-0 relative w-[144px] h-[144px] md:w-[193px] md:h-[193px]">
                            <div className="w-full h-full rounded-3xl overflow-hidden">
                                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-2 left-2 z-10">
                                <LinkedInButton url={founder.linkedIn} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                            <span className="text-[hsl(217,91%,60%)] font-semibold text-sm mb-4">{founder.title}</span>
                            <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">{founder.bio}</p>
                            <a
                                href={founder.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[hsl(217,91%,60%)] font-semibold text-sm mt-2 inline-block hover:underline"
                            >
                                {founder.linkText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoundersSection;
