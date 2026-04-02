import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | AI 4 TRI',
        default: 'AI 4 TRI — AI for Tri-Cities Businesses'
    },
    description: 'Bringing AI innovation to the Tri-Cities. Join the initiative helping local businesses discover what automation can do for them.',
    metadataBase: new URL('https://ai4tri.org'),
    openGraph: {
        title: 'AI 4 TRI — AI for Tri-Cities Businesses',
        description: 'Bringing AI innovation to the Tri-Cities. Join the initiative helping local businesses discover what automation can do for them.',
        siteName: 'AI 4 TRI',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI 4 TRI — AI for Tri-Cities Businesses',
        description: 'Bringing AI innovation to the Tri-Cities. Join the initiative helping local businesses discover what automation can do for them.',
    },
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
