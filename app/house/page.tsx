"use client";

import Image from "next/image";
import Header from "../component/Head";
import { useState, useEffect } from "react";
import Link from "next/link";
import FastMarquee from "react-fast-marquee";
import { BubblesIcon, ChartBarIcon, CloudLightning, Code, Container, Gamepad, Gamepad2, GamepadIcon, LightbulbOff, LucideCloudLightning, MessageCircle, Server, ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const texts = [
    "The Solution High Performance with Cheap Price",
    "Maximum Speed Without Breaking Your Budget",
    "Enterprise Quality at Startup Pricing",
    "Premium Performance Everyone Can Afford",
    "Fast, Reliable, and Incredibly Affordable"
  ];

  const slides = [
    { src: '/aset/page-1.jpeg', alt: 'Northden PulcraOS - Page 1' },
    { src: '/aset/pulcra.svg', alt: 'Northden PulcraOS - Page 2' },
    { src: '/aset/page-3.jpeg', alt: 'Northden PulcraOS - Page 3' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  
  },[]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);
  

  return (
    <main className={`flex flex-col items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <div className="relative w-full h-fit min-h-screen bg-gradient-to-r from-slate-900/60 to-transparent overflow-hidden">
      <div className="container mt-40 mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content Section - Left */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-10 text-transparent bg-clip-text 
                   bg-gradient-to-r from-gray-300/80 to-white
                   drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]
                   drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]
                   transition-all duration-500
                   ${isAnimating 
                     ? 'opacity-0 translate-y-8 blur-sm scale-95' 
                     : 'opacity-100 translate-y-0 blur-0 scale-100'}`}>
              {texts[currentIndex]}
            </h1>
            
            <p className="text-base md:text-lg text-white/90 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id arcu eu massa hendrerit egestas vitae at turpis. Nullam tempor, augue nec ullamcorper blandit, dolor eros semper neque.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#list-game" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                <Gamepad2 className="w-5 h-5" />
                List Server Games
              </a>
              <a href="/chat" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                <MessageCircle className="w-5 h-5" />
                Chat Question
              </a>
            </div>
          </div>

          {/* Slider Section - Right */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-2xl">
              {/* 3D Effect wrapper */}
              <div className="hidden lg:block" style={{
                transform: 'perspective(1200px) rotateX(8deg) rotateY(-8deg)',
                transformStyle: 'preserve-3d'
              }}>
                <div className="bg-slate-900/40 border border-slate-600 rounded-lg overflow-hidden shadow-2xl drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  <div className="bg-slate-700/50 px-4 py-3 border-b border-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="bg-slate-600/50 rounded-lg px-4 py-1.5 text-slate-300 text-xs md:text-sm">
                          Powered by Chaos, Refined by Vision 🚀
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-slate-800/50 h-[300px] md:h-[400px] overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" 
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                      {slides.map((slide, index) => (
                        <div key={index} className="min-w-full h-full flex items-center justify-center p-4 md:p-8">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
                      aria-label="Previous slide">
                      <ChevronLeft size={20} className="md:w-6 md:h-6"/>
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
                      aria-label="Next slide">
                      <ChevronRight size={20} className="md:w-6 md:h-6"/>
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 md:gap-3">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`transition-all duration-300 rounded-full ${
                            currentSlide === index
                              ? 'w-6 md:w-8 h-2 md:h-3 bg-cyan-400'
                              : 'w-2 md:w-3 h-2 md:h-3 bg-slate-500 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile/Tablet Responsive*/}
              <div className="block lg:hidden">
                <div className="bg-slate-900/40 border border-slate-600 rounded-lg overflow-hidden shadow-2xl">
                  <div className="bg-slate-700/50 px-4 py-3 border-b border-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="bg-slate-600/50 rounded-lg px-4 py-1.5 text-slate-300 text-xs md:text-sm">
                          Powered by Chaos 🚀
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-slate-800/50 h-[300px] md:h-[400px] overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" 
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                      {slides.map((slide, index) => (
                        <div key={index} className="min-w-full h-full flex items-center justify-center p-4 md:p-8">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={prevSlide}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10">
                      <ChevronLeft size={20}/>
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10">
                      <ChevronRight size={20}/>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`transition-all duration-300 rounded-full ${
                            currentSlide === index
                              ? 'w-6 h-2 bg-cyan-400'
                              : 'w-2 h-2 bg-slate-500 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="w-full h-fit relative bg-gradient-to-r from-slate-900/60 to-transparent" id="list-game">
        <h2 className="text-4xl mt-40 font-extrabold style-inter text-center justify-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300/80 to-white drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
          Tersedia berbagai Macam Server Games yang anda butuhkan!
        </h2>
        <p className="text-center text-white/90 mb-10">
          Pilih server game yang sesuai dengan kebutuhan anda dan nikmati pengalaman bermain yang tak terlupakan bersama teman-teman anda.
        </p>
        <FastMarquee
          className="mt-5"
          direction="left"
          speed={80}>
          <div className="flex items-center gap-10 py-10 px-20">
            <div className="flex flex-row items-center justify-center gap-41">
              {/* Image 1 */}
              <Image className="rounded-lg"  src="/aset/minecraft.png" alt="Minecraft Server" width={150} height={150}/>
              {/* Image 2 */}
              <Image className="rounded-lg"  src="/aset/gtav.png" alt="GTA V Online" width={150} height={150}/>   
              {/* Image 3 */}
              <Image className="rounded-lg"  src="/aset/cs2.png" alt="Counter Strike 2" width={150} height={150}/>
              {/* Image 4 */}
              <Image className="rounded-lg"  src="/aset/palworld.png" alt="Palworld" width={150} height={150}/>
              {/* Image 5 */}
              <Image className="rounded-lg"  src="/aset/ark.png" alt="Ark Survival Evolved" width={150} height={150}/>
              {/* Image 6 */}
              <Image className="rounded-lg"  src="/aset/gmod.png" alt="GMOD" width={150} height={150}/>       
            </div>
          </div>
          </FastMarquee>
          <FastMarquee
          className="mt-5"
          direction="right"
          speed={80}>
          <div className="flex items-center gap-10 py-10 px-20">
            <div className="flex flex-row items-center justify-center gap-41">
              {/* Image 7 */}
              <Image className="rounded-lg"  src="/aset/asetto.png" alt="Asetto Corsa" width={150} height={150}/>
              {/* Image 8 */}
              <Image className="rounded-lg"  src="/aset/tf2.png" alt="Team Fotress 2" width={150} height={150}/>   
              {/* Image 9 */}
              <Image className="rounded-lg"  src="/aset/rust.png" alt="Rust" width={150} height={150}/> 
              {/* Image 10 */}
              <Image className="rounded-lg"  src="/aset/ets2.png" alt="Euro Truck Simulator 2" width={150} height={150}/>
              {/* Image 11 */}
              <Image className="rounded-lg"  src="/aset/f1.png" alt="Formula:One" width={150} height={150}/>
              {/* Image 12 */}
              <Image className="rounded-lg"  src="/aset/xteresstial.png" alt="XTERESSTIAL" width={150} height={150}/>      

            </div>
          </div>
          </FastMarquee>
          <h2 className="text-4xl mt-20 font-extrabold style-inter text-center justify-center mb-2 text-transparent bg-clip-text 
                 bg-gradient-to-r from-gray-300/80 to-white
                 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
          Stay Tune!
          </h2>
          <p className="text-center text-white/90 mb-10">
            Segera hadir tambahan fiturnya :)
          </p>
        </div>
      <footer className="footer sm:footer-horizontal bg-gradient-to-r to-transparent from-slate-900/40 text-neutral-content p-10">
      <aside>
        <img src="/aset/sonata.png" width={50} height={50}/>
        <p>
          Northden Software Development.
          <br />
          Member of Northden Holdings Corporation
          <br />
          Copyright © 2025 - All right reserved
        </p>
      </aside>
      <nav>
    <h6 className="footer-title">Services</h6>
    <Link href="/game-host" className="flex items-center gap-2">
      <Gamepad2 className="w-4 h-4 inline-flex" />
      <span className="gap-4">Game Host</span>
    </Link>
    <Link href="/app-host" className="flex items-center gap-2">
      <Code className="w-4 h-4 inline-flex" />
      <span className="gap-4">App Host</span>
    </Link>
    <Link href="/private-host" className="flex items-center gap-2">
      <Server className="w-4 h-4 inline-flex" />
      <span className="gap-4">Private Node</span>
    </Link>
    <Link href="/vps-host" className="flex items-center gap-2">
      <Container className="w-4 h-4 inline-flex" />
      <span className="gap-4">VPS</span>
    </Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
    </footer>
    </main>
  );
}