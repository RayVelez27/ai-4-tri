import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | AI 4 TRI',
        default: 'AI 4 TRI — AI for Tri-Cities Businesses'
    },
    description: 'We help local businesses capture more opportunities, respond instantly, and automate the work that slows them down.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased font-sans">
                {children}
            </body>
        </html>
    );
}
