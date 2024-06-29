import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import left_key from '../../assets/images/left_key.svg';
import right_key from '../../assets/images/right_key.svg';
import medical from '../../assets/images/tracks/medical.png';
import medical_card from '../../assets/images/tracks/medical_card.png';
import wildlife from '../../assets/images/tracks/wildlife.png';
import wildlife_card from '../../assets/images/tracks/wildlife_card.png';
import hardware_card from '../../assets/images/tracks/hardware_card.png';
import hardware from '../../assets/images/tracks/hardware.png';
import open_innovation_card from '../../assets/images/tracks/open_innovation_card.png';
import open_innovation from '../../assets/images/tracks/open_innovation.png';
import education_card from '../../assets/images/tracks/hardware_card.png';
import education from '../../assets/images/tracks/hardware.png';
import web3_card from '../../assets/images/tracks/web3_card.png';
import web3 from '../../assets/images/tracks/web3.png';

const Tracks = () => {
    const [selectedTrack, setSelectedTrack] = useState(1);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const trackData = [
        { id: 1, title: 'MEDICAL', description: 'In this track, participants work on developing software solutions related to healthcare and medicine. They might build applications that help patients manage their health, or tools that assist healthcare providers in diagnosing and treating patients.', image: medical, card: medical_card },
        { id: 2, title: 'HARDWARE', description: 'The Hardware track emphasizes hands-on implementation and encourages teams to create detailed and innovative prototypes that showcase the functionality and feasibility of their ideas. Participants are encouraged to explore diverse challenges and develop hardware-based solutions that address these issues effectively. ', image: hardware, card: hardware_card},
        { id: 3, title: 'WILDLIFE', description: 'This track focuses on building software solutions that promote sustainability and protect the environment. Participants might create applications that help reduce waste, conserve energy, prevent illegal wildlife trade, or even provide early warning systems for natural calamities that can impact wildlife and their habitats. ', image: wildlife, card: wildlife_card},
        { id: 4, title: 'EDUCATION', description: 'The education track encourages participants to build software solutions that enhance the quality of education. Participants might develop applications that provide personalized learning experiences, improve access to education for disadvantaged communities, or help teachers and students collaborate more effectively. ', image: education, card: education_card},
        { id: 5, title: 'WEB3', description: 'As part of this track, participants may explore decentralized finance (DeFi) applications, enabling seamless peer-to-peer financial transactions, decentralized marketplaces, and novel governance models. One can design secure and transparent systems that empower users with greater control over their digital assets. ', image: web3, card: web3_card},
        { id: 6, title: 'OPEN INNOVATION', description: 'The Open Innovation track offers limitless scope for creativity, encouraging participants to explore diverse ideas and solve real-world problems outside conventional boundaries. Let your imagination run wild and propose exciting solutions that can reform the world. ', image: open_innovation, card: open_innovation_card},
        // Add more tracks here...
    ];

    const handleCardClick = (trackId) => {
        setSelectedTrack(trackId);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id='tracks' className="relative mb-10 px-5 bg-no-repeat" style={{
            backgroundImage: `url(${stars})`,
            backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
            backgroundSize: 'cover',
        }}>
            {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen opacity-50"></img> */}
            <img src={trackData[selectedTrack - 1].image} alt="" className='z-1 absolute pointer-events-none left-0 right-0 mx-auto max-w-full xl:-translate-y-48 opacity-50'/>
            <div className='text-white max-w-[1280px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl text-[#9E9E9E]'>$ ls -a <span className='text-white'>TRACKS</span></h1>
                <div className='xl:flex'>   
                    <div className="track-section pl-12 xl:w-1/2 mr-5 mb-5 xl:mb-0" >
                        {selectedTrack ? (
                            <div>
                                <h2 className='text-5xl md:text-7xl xl:text-8xl my-4 md:my-12'>{trackData[selectedTrack - 1].title}</h2>
                                <p className='text-lg md:text-xl xl:text-2xl'>{trackData[selectedTrack - 1].description}</p>
                            </div>
                        ) : (
                            <p>Select a track to see more information.</p>
                        )}
                    </div>
                    <div className="carousel flex items-center gap-5 h-fit self-end">
                        <img src={left_key} alt="" className='opacity-50 hover:opacity-100'onClick={() => {document.querySelector('.tracks-wrapper').scrollLeft -= 158}}/>
                        <div className='tracks-wrapper flex gap-5 max-w-[480px] overflow-x-auto scroll-smooth no-scrollbar'>
                            {trackData.map((track) => (
                                <div key={track.id} className="card min-w-24 sm:min-w-36 grid place-items-center relative" onClick={() => handleCardClick(track.id)}>
                                    <img src={track.card} alt="" className='opacity-70'/>
                                    <h4 className='absolute text-xl md:text-2xl xl:text-3xl left-0 top-0 right-0 bottom-0 m-auto w h-fit text-center'>{track.title}</h4>
                                </div>
                            ))}
                        </div>
                        <img src={right_key} alt="" className='opacity-50 hover:opacity-100' onClick={() => {document.querySelector('.tracks-wrapper').scrollLeft += 158}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tracks;
