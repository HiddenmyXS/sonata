"use client";

import Image from "next/image";
import Header from "../component/Head";
import { useState, useEffect } from "react";
import Link from "next/link";
import FastMarquee from "react-fast-marquee";
import { BubblesIcon, ChartBarIcon, CloudLightning, Code, Container, Gamepad, Gamepad2, GamepadIcon, LightbulbOff, LucideCloudLightning, MessageCircle, Server } from "lucide-react";

export default function HomeComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <main className={`flex flex-col items-center justify-center w-full transition-opacity duration-1000 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
        <Header />
        <div className="relative w-full h-screen overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-center">
              <div className="p-28 max-w-full w-1/2 text-left">
                <h1 className="text-6xl font-extrabold style-inter mb-2 text-transparent bg-clip-text 
                 bg-gradient-to-r from-gray-300/80 to-white
                 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]
                 drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                  The Solution High Performance with Cheap Price
                </h1>
                <p className="text-lg text-white/90 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id arcu eu massa hendrerit egestas vitae at turpis. Nullam tempor, augue nec ullamcorper blandit, dolor eros semper neque, ut auctor est eros vitae risus. Maecenas pulvinar mattis lectus, sit amet porttitor neque venenatis eget. Vivamus tincidunt nisl eu ultrices tempor. Vestibulum at imperdiet ipsum. Vestibulum non facilisis enim. Nam pulvinar facilisis diam, sit amet faucibus metus pellentesque a.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/list-game" className="mt-6 inline-flex gap-4 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                  <Gamepad2 className="w-5 h-5 inline-block mr-2" />
                  List Server Games
                </Link>
                <Link href="/chat" className="mt-6 inline-flex gap-4 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-slate-700">
                  <MessageCircle className="w-5 h-5 inline-block mr-2" />
                  Chat Question
                </Link>
                </div>
              </div>
            </div>
            <div className="perspective-1000">
                <div className="transform-gpu rotate-x-[35deg] -rotate-y-[-20deg] -rotate-z-[25deg] drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]
                 drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                    <div className="mockup-browser bg-slate-800/10 border border-base-100 left-210 w-200 h-110 top-90 ">
                       <div className="mockup-browser-toolbar">
                          <div className="input rounded-2xl">https://northden.com</div>
                      </div>
                      <div className="grid place-content-center flex items-center h-80">
                        <Image
                          className="dark:white md:inline-flex hidden relative group items-center mt-10 rounded-lg"
                          src="/aset/page-1.jpeg"
                          alt="Northden PulcraOS"
                          width={690}
                          height={640}
                          priority
                        />
                      </div>
                    </div>
                </div>
            </div>
        </div>
      <div className="w-full h-screen relative bg-gradient-to-r from-slate-900/60 to-transparent">
        <h2 className="text-4xl -mt-20 font-extrabold style-inter text-center justify-center mb-2 text-transparent bg-clip-text 
                 bg-gradient-to-r from-gray-300/80 to-white
                 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
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
        <img src="/aset/pulcra.svg" width={50} height={50}/>
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