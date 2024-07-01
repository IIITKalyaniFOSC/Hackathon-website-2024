import React, { useState, useEffect } from 'react';
import Bgimage from '../../assets/images/discord/JOIN2.png';
import stars from '../../assets/images/discord/stars.svg'
import './Discord.css';

function Discord() {
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
        <div id="footer" className="section pt-[55px]">
            <div className="star-background" style={{ transform: `translate(${bgPosition.x}px, ${bgPosition.y}px)` }}></div>
            <img src={Bgimage} alt="" className='img-background' />
            <a
                href="https://discord.gg/UHwPBzy7UF"
                className="bottom-overlay"
                target="_blank"
                rel="noopener noreferrer"
            ></a>
        </div>
    );
}

export default Discord;
