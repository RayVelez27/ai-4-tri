'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CountUp from 'components/count-up';
import FeaturesSection from 'components/features-section';
import FoundersSection from 'components/founders-section';
import FAQSection from 'components/faq-section';
import EventsSection from 'components/events-section';
import TestimonialsSection from 'components/testimonials-section';
import ContactSection from 'components/contact-section';
import RollingText from 'components/rolling-text';
import AI4TriFooter from 'components/ai4tri-footer';
import MasonryGallery from 'components/masonry-gallery';

export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredCol, setHoveredCol] = useState(null);

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 flex items-center justify-center transition-colors duration-300 bg-[hsl(186,76%,94%)] text-[hsl(222,84%,5%)]">
            <div className="max-w-[1600px] w-full mx-auto">
                {/* Navigation */}
                <nav className="flex items-center justify-between mb-8">
                    {/* Logo */}
                    <div className="flex items-center bg-white px-4 py-2 rounded-2xl shadow-sm">
                        <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            fill="none"
                            viewBox="0 0 250 250"
                        >
                            <path
                                d="m10 27.36v5.63c35.22-0.1 69.85 10.44 97.83 24.96l15.96 3.45c-20.81-14.34-58.71-33.58-113.8-34.04z"
                                fill="url(#paint0_linear_1211_13551)"
                            />
                            <path
                                d="m10 39.88v27.1c21.12 3.31 39.91 9.8 56.62 20.26l5.62 2.6c-0.1-2.96 0.46-7.48 4.97-12.03 5-4.52 12.5-7.68 18.39-9.73-24.96-16.3-55.45-28.19-85.6-28.2z"
                                fill="url(#paint1_linear_1211_13551)"
                            />
                            <path
                                d="m243 27.36v40.21c-24.24 4.44-48.16 13.73-72.59 31.31l-5.31 4.73c-8.94-4.74-18.02-7.17-28.68-10.34 25.55-22.99 63.47-50.04 106.6-61.53v-4.38z"
                                fill="url(#paint2_linear_1211_13551)"
                            />
                            <path
                                d="m243 44.09v23.48c-21.66 3.45-45.2 12.54-66.92 27.87 15.97-20.38 38.1-37.82 66.92-51.35z"
                                fill="url(#paint3_linear_1211_13551)"
                            />
                            <path
                                d="m10 72.24v17.87c28.88 6.93 57.01 19.82 80.95 45.74-19.34 7.65-48.27 16.2-80.95 24.19v-87.8z"
                                fill="url(#paint4_linear_1211_13551)"
                            />
                            <path
                                d="m10 114.8v45.34c16.74-5.12 29.41-8.57 48.41-14.5-12.58-11.3-30.27-23.52-48.41-30.84z"
                                fill="url(#paint5_linear_1211_13551)"
                            />
                            <path
                                d="m242.8 72.67v43.58c-24.47 11.77-43.8 28.48-61.94 48.06h-35.92c19.99-12.38 36.89-23.62 36.77-38.83-0.07-8.42-5.8-14.75-11.61-18.72 17.53-13.64 42.2-26.65 72.7-34.09z"
                                fill="url(#paint6_linear_1211_13551)"
                            />
                            <path
                                d="m242.8 90.79v25.7c-23.72 10.67-44.83 28.73-61.52 47.82h61.52v-73.52z"
                                fill="url(#paint7_linear_1211_13551)"
                            />
                            <path
                                d="m10.62 33.15v-5.64c38.76 0.06 76.55 13.22 113.1 33.47-9.91 1.46-21.37 4.31-30.93 7.42-23.77-15.43-52.73-31.34-82.14-35.25z"
                                fill="url(#paint8_linear_1211_13551)"
                            />
                            <path
                                d="m10.12 42.04v24.74c23.29 3.62 36.94 10.24 62.59 23.06-0.6-4.52 0.41-8.87 7.01-14.02 5-3.71 11.09-5.81 15.89-7.61-19.69-13.07-48.35-26.92-85.49-26.17z"
                                fill="url(#paint9_linear_1211_13551)"
                            />
                            <path
                                d="m243 27.36c-39.03 2.96-70.64 17.91-109.8 42.8-8.39 5.68-23.03 8.91-22.88 13.5 0.08 2.96 9.89 5.95 25.96 9.35 10.22 2.35 20.09 5.31 28.87 10.27 21.99-18.66 45.8-30.12 77.62-36.08l0.23-39.84z"
                                fill="url(#paint10_linear_1211_13551)"
                            />
                            <path
                                d="m10.99 72.28c25.26 3.81 47.29 13.19 63.72 22.88 8.1 5.7 14.47 9.88 25.45 14.25 7.67 3.2 16.46 7.25 16.16 12.37-0.41 5.9-18.09 12.63-26.38 15.18-22.03-21.81-48.72-36.9-79.94-46.85l0.99-17.83z"
                                fill="url(#paint11_linear_1211_13551)"
                            />
                            <path
                                d="m12.63 164.3h120.6c19.7-10.84 42.7-22.6 42.14-39.33-0.68-21.6-31.64-25.24-55.18-31.14-7.26-1.98-14.76-4.63-14.66-9.92 0.1-6.67 16.85-12.15 26.1-18.51-14.83 2.6-40.34 7.15-51.12 18.01-4.57 4.69-3.43 11.4 6.76 17.49 9.86 6.15 17.03 6.51 28.71 13.52 5 3.49 7.16 9.48 3.23 13.43-12.81 13.3-50.63 22.81-106.6 36.45z"
                                fill="url(#paint12_linear_1211_13551)"
                            />
                            <path
                                d="m85.11 163.9c25.51-8.7 61.98-23.08 61.66-40.64-0.21-11.2-15.89-17.02-40.76-26.42-9.4-3.6-14.24-7.97-12.84-12.55 2.9-9.67 22.06-13.08 33.64-18.02-15.4 2.77-33.01 7.9-42.58 14.74-5.95 4.34-7.17 11.28 1.48 16.73 9.9 6.91 17.64 8.41 29.21 15.45 5.49 3.65 7.79 10.07 3.09 14.49-10.96 10.32-31.5 17.22-104.8 36.22h71.92z"
                                fill="url(#paint13_linear_1211_13551)"
                            />
                            <path
                                d="m44.86 211.4h-23.46l-4.14 10.31h-10.9l20.85-47.44h12.03l22.23 47.44h-12.35l-4.26-10.31zm-3.67-8.9-8.04-17.44-8.13 17.44h16.17z"
                                fill="url(#paint14_linear_1211_13551)"
                            />
                            <path d="m64.41 174h10.88v47.67h-10.88v-47.67z" fill="url(#paint15_linear_1211_13551)" />
                            <path
                                d="m132.9 211.1h-7.43v10.57h-9.99v-10.57h-25.35v-8.07l21.61-28.94h11.44l-19.98 28.34h12.71v-8.91h9.56v8.91h7.43v8.67z"
                                fill="url(#paint16_linear_1211_13551)"
                            />
                            <path
                                d="m152.7 183.5h-14.59v-9.24h41.44v9.24h-14.84v38.2h-12.01v-38.2z"
                                fill="url(#paint17_linear_1211_13551)"
                            />
                            <path
                                d="m213 221.7-8.18-13.77h-10.15v13.77h-10.95v-47.44h19.92c12 0 21.4 6.5 21.4 17.19 0 7.09-3.95 11.89-10.04 14.64l11.52 15.61h-13.52zm-18.33-22.48h8.64c6.5 0 9.98-3.59 9.98-8.08 0-5.03-3.61-7.89-9.69-7.89h-8.93v15.97z"
                                fill="url(#paint18_linear_1211_13551)"
                            />
                            <path d="m232 174h10.88v47.67h-10.88v-47.67z" fill="url(#paint19_linear_1211_13551)" />
                            <defs>
                                <linearGradient id="paint0_linear_1211_13551" x1="66.89" x2="66.89" y1="27.36" y2="61.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A" offset="0" /><stop stopColor="#F2D36C" offset=".509" /><stop stopColor="#F2D36C" offset="1" /></linearGradient>
                                <linearGradient id="paint1_linear_1211_13551" x1="52.8" x2="52.8" y1="39.88" y2="91.14" gradientUnits="userSpaceOnUse"><stop stopColor="#CBA554" offset="0" /><stop stopColor="#B17F37" offset="1" /></linearGradient>
                                <linearGradient id="paint2_linear_1211_13551" x1="189.7" x2="189.7" y1="27.36" y2="103.6" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A" offset="0" /><stop stopColor="#F2D36C" offset=".509" /><stop stopColor="#D19D3B" offset="1" /></linearGradient>
                                <linearGradient id="paint3_linear_1211_13551" x1="209.5" x2="209.5" y1="44.09" y2="95.44" gradientUnits="userSpaceOnUse"><stop stopColor="#CBA554" offset="0" /><stop stopColor="#B17F37" offset="1" /></linearGradient>
                                <linearGradient id="paint4_linear_1211_13551" x1="50.48" x2="50.48" y1="72.24" y2="160" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449" offset="0" /><stop stopColor="#496F3D" offset="1" /></linearGradient>
                                <linearGradient id="paint5_linear_1211_13551" x1="34.2" x2="34.2" y1="114.8" y2="160.1" gradientUnits="userSpaceOnUse"><stop stopColor="#5A7C3E" offset="0" /><stop stopColor="#3F6A3C" offset="1" /></linearGradient>
                                <linearGradient id="paint6_linear_1211_13551" x1="193.8" x2="193.8" y1="72.67" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449" offset="0" /><stop stopColor="#496F3D" offset="1" /></linearGradient>
                                <linearGradient id="paint7_linear_1211_13551" x1="212" x2="212" y1="90.79" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#969649" offset="0" /><stop stopColor="#3F6A3C" offset="1" /></linearGradient>
                                <linearGradient id="paint8_linear_1211_13551" x1="67.16" x2="67.16" y1="27.51" y2="68.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A" offset="0" /><stop stopColor="#F2D36C" offset=".509" /><stop stopColor="#F2D36C" stopOpacity=".75" offset="1" /></linearGradient>
                                <linearGradient id="paint9_linear_1211_13551" x1="52.86" x2="52.86" y1="41.95" y2="89.84" gradientUnits="userSpaceOnUse"><stop stopColor="#C29B4D" offset="0" /><stop stopColor="#B17F37" offset="1" /></linearGradient>
                                <linearGradient id="paint10_linear_1211_13551" x1="176.6" x2="176.6" y1="27.36" y2="103.3" gradientUnits="userSpaceOnUse"><stop stopColor="#D7B05A" offset="0" /><stop stopColor="#F2D36C" offset=".509" /><stop stopColor="#D19D3B" offset="1" /></linearGradient>
                                <linearGradient id="paint11_linear_1211_13551" x1="50.33" x2="50.33" y1="72.28" y2="137" gradientUnits="userSpaceOnUse"><stop stopColor="#CCB449" offset="0" /><stop stopColor="#7C8A47" offset="1" /></linearGradient>
                                <linearGradient id="paint12_linear_1211_13551" x1="94.21" x2="94.21" y1="65.41" y2="164.3" gradientUnits="userSpaceOnUse"><stop stopColor="#28A8CC" offset="0" /><stop stopColor="#1A587A" offset=".509" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint13_linear_1211_13551" x1="99.87" x2="99.87" y1="66.24" y2="163.9" gradientUnits="userSpaceOnUse"><stop stopColor="#3DB6D3" offset="0" /><stop stopColor="#2A8198" offset=".509" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint14_linear_1211_13551" x1="33.91" x2="33.91" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint15_linear_1211_13551" x1="69.85" x2="69.85" y1="174" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint16_linear_1211_13551" x1="111.5" x2="111.5" y1="174.1" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint17_linear_1211_13551" x1="158.8" x2="158.8" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint18_linear_1211_13551" x1="204.6" x2="204.6" y1="174.2" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                                <linearGradient id="paint19_linear_1211_13551" x1="237.4" x2="237.4" y1="174" y2="221.7" gradientUnits="userSpaceOnUse"><stop stopColor="#2A7B95" offset="0" /><stop stopColor="#0D3456" offset="1" /></linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden lg:flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-sm text-sm font-semibold text-[hsl(215,16%,47%)]">
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors no-underline" href="#events">Events</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors no-underline" href="#features">Mission</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors no-underline" href="#founders">Who We Are</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors no-underline" href="#faq">FAQ</a>
                    </div>

                    {/* CTA Button - Desktop */}
                    <a href="/workshop" className="hidden lg:block px-6 py-3 rounded-full border-2 border-[hsl(222,84%,5%)] font-semibold hover:bg-[hsl(222,84%,5%)] hover:text-white transition-all bg-white no-underline">
                        Save Your Spot
                    </a>

                    {/* Hamburger - Mobile/Tablet */}
                    <button
                        className="lg:hidden p-3 bg-white rounded-full shadow-sm"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white rounded-3xl p-6 mb-6 shadow-sm flex flex-col gap-4 text-sm font-semibold text-[hsl(215,16%,47%)]">
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors py-2 no-underline" href="#events">Events</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors py-2 no-underline" href="#features">Mission</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors py-2 no-underline" href="#founders">Who We Are</a>
                        <a className="hover:text-[hsl(217,91%,60%)] transition-colors py-2 no-underline" href="#faq">FAQ</a>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[800px]">
                    {/* Left Column - Hero */}
                    <div
                        className="flex flex-col gap-6 h-full transition-all duration-700 ease-in-out"
                        style={{ flex: hoveredCol === 'img1' ? '5' : hoveredCol === 'img2' ? '4' : '7' }}
                    >
                        {/* Hero Content */}
                        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center shadow-sm relative overflow-hidden">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6 relative z-10">
                                <span className="block overflow-hidden">
                                    <span className="block hero-slide-in" style={{ animationDelay: '0ms' }}>
                                        Tri-Cities was
                                    </span>
                                </span>
                                <span className="block overflow-hidden">
                                    <span className="block hero-slide-in" style={{ animationDelay: '120ms' }}>
                                        built on
                                    </span>
                                </span>
                                <span className="block overflow-hidden">
                                    <span className="hero-slide-in inline-block" style={{ animationDelay: '240ms' }}>
                                        <span className="relative inline-block" style={{ minWidth: '3ch' }}>
                                            <span
                                                className={`${!hoveredCol ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                                style={{
                                                    transition: !hoveredCol
                                                        ? 'opacity 500ms ease-in 350ms'
                                                        : 'opacity 200ms ease-out 0ms',
                                                }}
                                            >
                                                <span className="bg-gradient-to-r from-[#496F3D] to-[#28A8CC] bg-clip-text text-transparent">innovation.</span>
                                            </span>
                                            <span className="absolute left-0 top-0">
                                                <RollingText text="opportunity." color="#28A8CC" visible={hoveredCol === 'img1'} />
                                            </span>
                                            <span className="absolute left-0 top-0">
                                                <RollingText text="connection." color="#D7B05A" visible={hoveredCol === 'img2'} />
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </h1>
                            <p className={`text-[hsl(215,16%,47%)] text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-xl leading-relaxed transition-all duration-500 ${hoveredCol ? 'lg:opacity-0 lg:max-h-0 lg:mb-0 lg:overflow-hidden opacity-100 max-h-96' : 'opacity-100 max-h-96'}`}>
Through local events and live demos, we show Tri-Cities business owners how to turn everyday operations into automated, revenue-generating systems.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/workshop" className="group bg-[hsl(222,84%,5%)] text-white pl-8 pr-2 py-2 rounded-full font-semibold flex items-center justify-between gap-4 transition-all hover:opacity-90 no-underline">
                                    <span>Reserve Your Seat</span>
                                    <div className="bg-white text-[hsl(222,84%,5%)] rounded-full w-10 h-10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                        <span className="text-sm font-bold">→</span>
                                    </div>
                                </a>
                                <div className="relative self-start">
                                    <a href="#contact" className="px-8 h-14 rounded-full border border-[hsl(214,32%,91%)] font-semibold hover:border-[hsl(222,84%,5%)] transition-colors flex items-center no-underline">
                                        See It In Action
                                    </a>
                                    <span className="absolute -top-2 -right-2 bg-[hsl(48,96%,53%)] text-[hsl(222,84%,5%)] text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 h-auto sm:h-64 lg:h-auto shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0 snap-x snap-mandatory">
                            <div className="bg-[hsl(217,91%,60%)] rounded-[2rem] p-6 sm:p-8 text-white flex flex-col justify-between relative shadow-sm min-w-[200px] sm:min-w-0 h-36 sm:h-full snap-start">
                                <span className="text-[hsl(48,96%,53%)] absolute top-4 sm:top-6 right-4 sm:right-6 text-2xl font-bold">+</span>
                                <div className="text-2xl md:text-3xl font-bold mt-auto"><CountUp end={21} prefix="$" suffix="B+" /></div>
                                <div className="text-blue-100 text-sm md:text-base font-medium mt-2">Local Economy</div>
                            </div>

                            <div className="bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between relative shadow-sm min-w-[200px] sm:min-w-0 h-36 sm:h-full snap-start">
                                <span className="text-[hsl(217,91%,60%)] absolute top-4 sm:top-6 right-4 sm:right-6 text-3xl font-bold">+</span>
                                <div className="text-2xl md:text-3xl font-bold mt-auto"><CountUp end={60} suffix="%+" /></div>
                                <div className="text-[hsl(215,16%,47%)] text-sm md:text-base font-medium mt-2">First Contact Is Digital</div>
                            </div>

                            <div className="bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between relative shadow-sm min-w-[200px] sm:min-w-0 h-36 sm:h-full snap-start">
                                <span className="text-[hsl(217,91%,60%)] absolute top-4 sm:top-6 right-4 sm:right-6 text-3xl font-bold">+</span>
                                <div className="text-2xl md:text-3xl font-bold mt-auto"><CountUp end={9900} suffix="+" /></div>
                                <div className="text-[hsl(215,16%,47%)] text-sm md:text-base font-medium mt-2">Local Businesses</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column 1 */}
                    <div
                        className="hidden lg:block relative rounded-[2rem] overflow-hidden lg:h-full transition-all duration-700 ease-in-out cursor-pointer"
                        style={{ flex: hoveredCol === 'img1' ? '4' : hoveredCol === 'img2' ? '1' : '2' }}
                        onMouseEnter={() => setHoveredCol('img1')}
                        onMouseLeave={() => setHoveredCol(null)}
                    >
                        <img
                            alt="Eastern Washington"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            style={{ transform: hoveredCol === 'img1' ? 'scale(1.05)' : 'scale(1)' }}
                            src="/images/eastern-wa.png"
                        />
                        <div className={`absolute inset-0 transition-all duration-500 ${hoveredCol === 'img1' ? 'bg-black/50' : 'bg-gradient-to-b from-transparent via-transparent to-black/30'}`}></div>
                        <div
                            className={`absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-500 ${hoveredCol === 'img1' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            <p className="text-white text-lg md:text-xl leading-relaxed text-center max-w-md drop-shadow-lg">
                                From Hanford to today, innovation has defined the Tri-Cities. Our mission is to carry that forward—helping local businesses transform everyday operations into systems that drive real growth.
                            </p>
                        </div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="text-xs font-bold text-[hsl(222,84%,5%)] whitespace-nowrap">Mission</span>
                        </div>
                    </div>

                    {/* Image Column 2 */}
                    <div
                        className="hidden lg:block relative rounded-[2rem] overflow-hidden lg:h-full transition-all duration-700 ease-in-out cursor-pointer"
                        style={{ flex: hoveredCol === 'img2' ? '5' : hoveredCol === 'img1' ? '2' : '3' }}
                        onMouseEnter={() => setHoveredCol('img2')}
                        onMouseLeave={() => setHoveredCol(null)}
                    >
                        <img
                            alt="Tri-Cities"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            style={{ transform: hoveredCol === 'img2' ? 'scale(1.05)' : 'scale(1)' }}
                            src="/images/tri-cities.png"
                        />
                        <div className={`absolute inset-0 transition-all duration-500 ${hoveredCol === 'img2' ? 'bg-black/50' : 'bg-gradient-to-b from-transparent via-transparent to-black/40'}`}></div>
                        <div
                            className={`absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-500 ${hoveredCol === 'img2' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            <p className="text-white text-lg md:text-xl leading-relaxed text-center max-w-md drop-shadow-lg">
                                These aren't typical workshops. They're live environments where local businesses see exactly how modern systems are built—and how quickly they can change the way they operate.
                            </p>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 bg-[hsl(222,84%,5%)]/40 backdrop-blur-md border border-white/10 p-2 rounded-full flex items-center gap-3">
                            <div className="bg-white/20 px-3 py-1 rounded-full text-xs text-white font-medium whitespace-nowrap">
                                Jul 12-22, 2025
                            </div>
                            <span className="text-[hsl(48,96%,53%)] font-bold">+</span>
                            <div className="text-xs text-white font-medium truncate">Tri-Cities, WA</div>
                        </div>
                    </div>
                </main>

                <div id="events">
                    <EventsSection />
                </div>

                <div id="features">
                    <FeaturesSection />
                </div>

                <div id="founders">
                    <FoundersSection />
                </div>

                <div id="gallery">
                    <MasonryGallery />
                </div>

                <div id="faq">
                    <FAQSection />
                </div>

                <div id="contact">
                    <ContactSection />
                </div>

                <AI4TriFooter />
            </div>

        </div>
    );
}
