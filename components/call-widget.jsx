'use client';

import { Phone } from 'lucide-react';

const CallWidget = () => {
    return (
        <a
            href="tel:+15091234567"
            className="fixed bottom-4 right-4 z-50 p-4 bg-[hsl(217,91%,60%)] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Call us"
        >
            <Phone className="w-6 h-6" />
        </a>
    );
};

export default CallWidget;
