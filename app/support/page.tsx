"use client"

import Header  from "../component/Head";
import { BubblesIcon, ChartBarIcon, CloudLightning, Code, Container, Gamepad, Gamepad2, GamepadIcon, LightbulbOff, LucideCloudLightning, MessageCircle, Server, ChevronLeft, ChevronRight, Shield, User2Icon, User } from "lucide-react";
import React, { useRef, useEffect } from 'react';
import Squares from "@/components/Squares";

export default function SupportPage() {

    return (
    <div className="relative w-full h-fit bg-gradient-to-r from-slate-900/60 to-transparent overflow-hidden">
        <Header/>
        <div className="relative z-10 container mt-40 mx-auto px-4 py-16 lg:py-32 border-b">
            <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#222'
            />
            <h2 className="text-5xl -mt-8 font-semibold justify-center text-blue-50">Layanan Dukungan</h2>
            <p className="text-2xl font-light mt-2 justify-center text-blue-50">How can i help you today?</p>
        </div>
        <div className="relative z-10 container mt-0 mx-auto px-4 py-16 lg:py-32">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                        <div className="bg-slate-800/50 border border-gray-200/10 border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]
                        drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                            <CloudLightning className="w-12 h-12 mb-4 text-cyan-400 justify-center items-center"/>
                            <h3 className="text-xl font-semibold mb-2 text-white">Inovasi Teknologi</h3>
                            <p className="text-white/90">Kami selalu mengadopsi teknologi terbaru untuk memastikan performa optimal dan keamanan data Anda.</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
