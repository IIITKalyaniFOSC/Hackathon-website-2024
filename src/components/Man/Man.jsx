import React, { useState, useEffect } from 'react';
import Bgimage from '../../assets/images/man/tracksbgimage.png';
import Up from '../../assets/images/man/pic.png';
import './Man.css';

function Man() {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 30; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 30; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="relative">
            <div className="relative z-1">
                <div className="relative">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 opacity-70 h-full stars-background"
                    ></div>
                    <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto'>
                        <h1 className='text-position md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E] px-5 py-10 '>$ man <span className='text-white'>StatusCode</span><span className='text-red'>0</span></h1>
                    </div>
                    <img src={Bgimage} alt="Background" className="w-full h-auto" />
                    <img src={Up} alt="Up Image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 up-image" />
                </div>
            </div>
        </div>
    );
}

export default Man;
