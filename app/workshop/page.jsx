'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function WorkshopPage() {
    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-[hsl(186,76%,94%)] text-[hsl(222,84%,5%)]">
            <Script async src="https://js.stripe.com/v3/buy-button.js" />

            <div className="max-w-[1600px] w-full mx-auto">
                {/* Navbar */}
                <nav className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center bg-white px-4 py-2 rounded-2xl shadow-sm no-underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 250 250">
                            <path d="m10 27.36v5.63c35.22-0.1 69.85 10.44 97.83 24.96l15.96 3.45c-20.81-14.34-58.71-33.58-113.8-34.04z" fill="url(#wp0)" />
                            <path d="m10 39.88v27.1c21.12 3.31 39.91 9.8 56.62 20.26l5.62 2.6c-0.1-2.96 0.46-7.48 4.97-12.03 5-4.52 12.5-7.68 18.39-9.73-24.96-16.3-55.45-28.19-85.6-28.2z" fill="url(#wp1)" />
                            <path d="m243 27.36v40.21c-24.24 4.44-48.16 13.73-72.59 31.31l-5.31 4.73c-8.94-4.74-18.02-7.17-28.68-10.34 25.55-22.99 63.47-50.04 106.6-61.53v-4.38z" fill="url(#wp2)" />
                            <path d="m243 44.09v23.48c-21.66 3.45-45.2 12.54-66.92 27.87 15.97-20.38 38.1-37.82 66.92-51.35z" fill="url(#wp3)" />
                            <path d="m10 72.24v17.87c28.88 6.93 57.01 19.82 80.95 45.74-19.34 7.65-48.27 16.2-80.95 24.19v-87.8z" fill="url(#wp4)" />
                            <path d="m10 114.8v45.34c16.74-5.12 29.41-8.57 48.41-14.5-12.58-11.3-30.27-23.52-48.41-30.84z" fill="url(#wp5)" />
                            <path d="m242.8 72.67v43.58c-24.47 11.77-43.8 28.48-61.94 48.06h-35.92c19.99-12.38 36.89-23.62 36.77-38.83-0.07-8.42-5.8-14.75-11.61-18.72 17.53-13.64 42.2-26.65 72.7-34.09z" fill="url(#wp6)" />
                            <path d="m242.8 90.79v25.7c-23.72 10.67-44.83 28.73-61.52 47.82h61.52v-73.52z" fill="url(#wp7)" />
                            <path d="m10.62 33.15v-5.64c38.76 0.06 76.55 13.22 113.1 33.47-9.91 1.46-21.37 4.31-30.93 7.42-23.77-15.43-52.73-31.34-82.14-35.25z" fill="url(#wp8)" />
                            <path d="m10.12 42.04v24.74c23.29 3.62 36.94 10.24 62.59 23.06-0.6-4.52 0.41-8.87 7.01-14.02 5-3.71 11.09-5.81 15.89-7.61-19.69-13.07-48.35-26.92-85.49-26.17z" fill="url(#wp9)" />
                            <path d="m243 27.36c-39.03 2.96-70.64 17.91-109.8 42.8-8.39 5.68-23.03 8.91-22.88 13.5 0.08 2.96 9.89 5.95 25.96 9.35 10.22 2.35 20.09 5.31 28.87 10.27 21.99-18.66 45.8-30.12 77.62-36.08l0.23-39.84z" fill="url(#wp10)" />
                            <path d="m10.99 72.28c25.26 3.81 47.29 13.19 63.72 22.88 8.1 5.7 14.47 9.88 25.45 14.25 7.67 3.2 16.46 7.25 16.16 12.37-0.41 5.9-18.09 12.63-26.38 15.18-22.03-21.81-48.72-36.9-79.94-46.85l0.99-17.83z" fill="url(#wp11)" />
                            <path d="m12.63 164.3h120.6c19.7-10.84 42.7-22.6 42.14-39.33-0.68-21.6-31.64-25.24-55.18-31.14-7.26-1.98-14.76-4.63-14.66-9.92 0.1-6.67 16.85-12.15 26.1-18.51-14.83 2.6-40.34 7.15-51.12 18.01-4.57 4.69-3.43 11.4 6.76 17.49 9.86 6.15 17.03 6.51 28.71 13.52 5 3.49 7.16 9.48 3.23 13.43-12.81 13.3-50.63 22.81-106.6 36.45z" fill="url(#wp12)" />
                            <path d="m85.11 163.9c25.51-8.7 61.98-23.08 61.66-40.64-0.21-11.2-15.89-17.02-40.76-26.42-9.4-3.6-14.24-7.97-12.84-12.55 2.9-9.67 22.06-13.08 33.64-18.02-15.4 2.77-33.01 7.9-42.58 14.74-5.95 4.34-7.17 11.28 1.48 16.73 9.9 6.91 17.64 8.41 29.21 15.45 5.49 3.65 7.79 10.07 3.09 14.49-10.96 10.32-31.5 17.22-104.8 36.22h71.92z" fill="url(#wp13)" />
                            <path d="m44.86 211.4h-23.46l-4.14 10.31h-10.9l20.85-47.44h12.03l22.23 47.44h-12.35l-4.26-10.31zm-3.67-8.9-8.04-17.44-8.13 17.44h16.17z" fill="url(#wp14)" />
                            <path d="m64.41 174h10.88v47.67h-10.88v-47.67z" fill="url(#wp15)" />
                            <path d="m132.9 211.1h-7.43v10.57h-9.99v-10.57h-25.35v-8.07l21.61-28.94h11.44l-19.98 28.34h12.71v-8.91h9.56v8.91h7.43v8.67z" fill="url(#wp16)" />
                            <path d="m152.7 183.5h-14.59v-9.24h41.44v9.24h-14.84v38.2h-12.01v-38.2z" fill="url(#wp17)" />
                            <path d="m213 221.7-8.18-13.77h-10.15v13.77h-10.95v-47.44h19.92c12 0 21.4 6.5 21.4 17.19 0 7.09-3.95 11.89-10.04 14.64l11.52 15.61h-13.52zm-18.33-22.48h8.64c6.5 0 9.98-3.59 9.98-8.08 0-5.03-3.61-7.89-9.69-7.89h-8.93v15.97z" fill="url(#wp18)" />
                            <path d="m232 174h10.88v47.67h-10.88v-47.67z" fill="url(#wp19)" />
                            <defs>
                                <linearGradient id="wp0" x1="66.89" x2="66.89" y1="27.36" y2="61.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A"/><stop stopColor="#F2D36C" offset=".509"/><stop stopColor="#F2D36C" offset="1"/></linearGradient>
                                <linearGradient id="wp1" x1="52.8" x2="52.8" y1="39.88" y2="91.14" gradientUnits="userSpaceOnUse"><stop stopColor="#CBA554"/><stop stopColor="#B17F37" offset="1"/></linearGradient>
                                <linearGradient id="wp2" x1="189.7" x2="189.7" y1="27.36" y2="103.6" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A"/><stop stopColor="#F2D36C" offset=".509"/><stop stopColor="#D19D3B" offset="1"/></linearGradient>
                                <linearGradient id="wp3" x1="209.5" x2="209.5" y1="44.09" y2="95.44" gradientUnits="userSpaceOnUse"><stop stopColor="#CBA554"/><stop stopColor="#B17F37" offset="1"/></linearGradient>
                                <linearGradient id="wp4" x1="50.48" x2="50.48" y1="72.24" y2="160" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449"/><stop stopColor="#496F3D" offset="1"/></linearGradient>
                                <linearGradient id="wp5" x1="34.2" x2="34.2" y1="114.8" y2="160.1" gradientUnits="userSpaceOnUse"><stop stopColor="#5A7C3E"/><stop stopColor="#3F6A3C" offset="1"/></linearGradient>
                                <linearGradient id="wp6" x1="193.8" x2="193.8" y1="72.67" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449"/><stop stopColor="#496F3D" offset="1"/></linearGradient>
                                <linearGradient id="wp7" x1="212" x2="212" y1="90.79" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#969649"/><stop stopColor="#3F6A3C" offset="1"/></linearGradient>
                                <linearGradient id="wp8" x1="67.16" x2="67.16" y1="27.51" y2="68.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A"/><stop stopColor="#F2D36C" offset=".509"/><stop stopColor="#F2D36C" stopOpacity=".75" offset="1"/></linearGradient>
                                <linearGradient id="wp9" x1="52.86" x2="52.86" y1="41.95" y2="89.84" gradientUnits="userSpaceOnUse"><stop stopColor="#C29B4D"/><stop stopColor="#B17F37" offset="1"/></linearGradient>
                                <linearGradient id="wp10" x1="176.6" x2="176.6" y1="27.36" y2="103.3" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A"/><stop stopColor="#F2D36C" offset=".509"/><stop stopColor="#D19D3B" offset="1"/></linearGradient>
                                <linearGradient id="wp11" x1="50.33" x2="50.33" y1="72.28" y2="137" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449"/><stop stopColor="#7C8A47" offset="1"/></linearGradient>
                                <linearGradient id="wp12" x1="94.21" x2="94.21" y1="65.41" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#28A8CC"/><stop stopColor="#1A587A" offset=".509"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp13" x1="99.87" x2="99.87" y1="66.24" y2="163.9" gradientUnits="userSpaceOnUse"><stop stopColor="#3DB6D3"/><stop stopColor="#2A8198" offset=".509"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp14" x1="33.91" x2="33.91" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp15" x1="69.85" x2="69.85" y1="174" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp16" x1="111.5" x2="111.5" y1="174.1" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp17" x1="158.8" x2="158.8" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp18" x1="204.6" x2="204.6" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                                <linearGradient id="wp19" x1="237.4" x2="237.4" y1="174" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95"/><stop stopColor="#0D3456" offset="1"/></linearGradient>
                            </defs>
                        </svg>
                    </Link>

                    <a href="#register" className="px-6 py-3 rounded-full border-2 border-[hsl(222,84%,5%)] font-semibold hover:bg-[hsl(222,84%,5%)] hover:text-white transition-all bg-white no-underline text-sm">
                        Reserve Your Spot
                    </a>
                </nav>

                {/* Hero */}
                <section className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm mb-6 text-center">
                    <div className="max-w-[800px] mx-auto">
                        <div className="inline-block bg-[hsl(217,91%,60%)]/10 px-5 py-2 rounded-full mb-8">
                            <span className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-wider">Seats Are Limited</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                            Automate Your Operations.{' '}
                            <br />
                            <span className="bg-gradient-to-r from-[#496F3D] to-[#28A8CC] bg-clip-text text-transparent">
                                Build Your Vision.
                            </span>
                        </h1>

                        <p className="text-[hsl(215,16%,47%)] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            A hands-on, live-environment workshop for Tri-Cities business owners. Transform everyday operations into revenue-generating systems using <strong className="text-[hsl(222,84%,5%)]">Claude Code</strong>, <strong className="text-[hsl(222,84%,5%)]">n8n</strong>, and <strong className="text-[hsl(222,84%,5%)]">Lovable</strong>.
                        </p>

                        {/* Event Details */}
                        <div className="bg-[hsl(186,76%,94%)] rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-left max-w-[600px] mx-auto">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="w-12 h-12 rounded-2xl bg-[hsl(217,91%,60%)]/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-[hsl(217,91%,60%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <strong className="text-base">When</strong>
                                    <span className="text-[hsl(215,16%,47%)] text-sm">April 27th, 1:00 PM - 4:00 PM</span>
                                </div>
                            </div>

                            <div className="hidden sm:block w-px h-14 bg-[hsl(214,32%,91%)]" />

                            <div className="flex items-start gap-4 flex-1">
                                <div className="w-12 h-12 rounded-2xl bg-[hsl(217,91%,60%)]/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-[hsl(217,91%,60%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <strong className="text-base">Where</strong>
                                    <span className="text-[hsl(215,16%,47%)] text-sm">Sunset Gardens, Richland WA</span>
                                    <a
                                        href="https://www.google.com/maps/dir//Sunset+Gardens,+915+Bypass+Hwy,+Richland,+WA+99352/@46.2086916,-119.1870464,14z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[hsl(217,91%,60%)] text-sm font-semibold no-underline hover:underline mt-1"
                                    >
                                        Get Directions &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="mt-16 md:mt-24">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-white px-5 py-2 rounded-full shadow-sm mb-6">
                            <span className="text-sm font-semibold text-[hsl(215,16%,47%)]">What You'll Learn</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Tools That Change Everything
                            <span className="text-[hsl(48,96%,53%)] inline-block align-top text-2xl md:text-3xl ml-1">+</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/workshop-logo/claudecode-color.png" alt="Claude Code" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Claude Code</h3>
                            <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">
                                Learn how to use Anthropic's powerful AI model to write, review, and ship code faster than ever before. Real-world coding inside your terminal.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/workshop-logo/n8n-color.png" alt="n8n" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">n8n</h3>
                            <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">
                                Visual workflow automation. Connect your apps and databases to create self-running operations — no heavy backend systems required.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                                <img src="/images/workshop-logo/lovable-logo-icon (7).svg" alt="Lovable" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Lovable</h3>
                            <p className="text-[hsl(215,16%,47%)] text-sm leading-relaxed">
                                Instantly generate complex, beautiful frontend applications from simple prompts. Next-generation UI development is here.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Registration */}
                <section id="register" className="mt-16 md:mt-24 pb-16">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-white px-5 py-2 rounded-full shadow-sm mb-6">
                            <span className="text-sm font-semibold text-[hsl(215,16%,47%)]">Register</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Secure Your Spot Today</h2>
                        <p className="text-[hsl(215,16%,47%)] text-lg max-w-2xl mx-auto mt-4">
                            Tickets are strictly limited to ensure a quality hands-on learning environment. Bring your laptop!
                        </p>
                    </div>

                    <div className="max-w-[600px] mx-auto bg-[hsl(222,84%,5%)] text-white rounded-[2rem] p-8 sm:p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(48,96%,53%)]" />

                        <div className="text-2xl font-bold mb-8 text-center">Event Admission</div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-white/70">
                                <span className="text-[hsl(48,96%,53%)] font-bold">&#10004;</span> 3 Hours of Live Instruction
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <span className="text-[hsl(48,96%,53%)] font-bold">&#10004;</span> Hands-On Automation Setup
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <span className="text-[hsl(48,96%,53%)] font-bold">&#10004;</span> Direct Help with Your Business Workflows
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <span className="text-[hsl(48,96%,53%)] font-bold">&#10004;</span> Access to Workshop Materials
                            </li>
                        </ul>

                        <div className="flex justify-center min-h-[50px]">
                            <stripe-buy-button
                                buy-button-id="buy_btn_1THvIqATvU3dJnpD0ohcDjXf"
                                publishable-key="pk_live_51S5xMwATvU3dJnpDYHJgLlf7ZaUQsJqL9eXxQhe4897eAP02o7Nif7KtUhYeDjSQuMuCXLlMn0lmzZipxFRopm2u00aXXdVPkp"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[hsl(214,32%,91%)] py-12 text-center">
                    <Link href="/" className="font-bold text-lg text-[hsl(215,16%,47%)] no-underline">AI 4 TRI</Link>
                    <p className="text-[hsl(215,16%,47%)] text-sm mt-2">Helping Tri-Cities businesses transform operations.</p>
                    <p className="text-[hsl(215,16%,47%)] text-sm mt-4">&copy; {new Date().getFullYear()} AI 4 TRI. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
