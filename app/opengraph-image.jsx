import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AI 4 TRI — AI for Tri-Cities Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0D3456 0%, #1A587A 40%, #28A8CC 70%, #D7B05A 100%)',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '96px',
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-2px',
                            lineHeight: 1,
                        }}
                    >
                        AI 4 TRI
                    </div>
                    <div
                        style={{
                            fontSize: '28px',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.85)',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                        }}
                    >
                        AI for Tri-Cities Businesses
                    </div>
                    <div
                        style={{
                            marginTop: '16px',
                            fontSize: '20px',
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: '600px',
                            textAlign: 'center',
                            lineHeight: 1.5,
                        }}
                    >
                        Bringing innovation back to the Tri-Cities — one business at a time.
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
