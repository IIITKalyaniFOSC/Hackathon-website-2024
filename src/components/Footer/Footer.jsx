import React, { useState, useEffect } from 'react';
import instaLogo from '../../assets/images/footer/insta_logo.png';
import twitterLogo from '../../assets/images/footer/twitter.svg';
import linkedinLogo from '../../assets/images/footer/linkedin_logo.png';
import discordLogo from '../../assets/images/footer/discord_logo.png';
import stars from '../../assets/images/footer/stars.svg';
import './Footer.css';
import footer from '../../assets/images/footer/footer.png';

function Footer() {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 3; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 3; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div  className='main-footer'>
                <div id="upfooter" className='bg-cover upfooter relative'>
                    <div className="flex flex-col py-5 xl:py-10 h-[100%] xl:h-[100%]  gap-5 justify-center item-center">
                    <div className="absolute inset-0 z-0" style={{backgroundImage: `url(${stars})`,
                    backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                    backgroundSize: 'cover',
          }}
        ></div>
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-5">
                            <div className="address footerelements text-center">
                                <h1 className="footerheading text-2xl md:text-4xl md:mt-0 m-0 text-heading-footer">
                                    ADDRESS
                                </h1>
                                <p className="footercontent text-xl md:text-2xl addresscontent text-[#BEBEBE] hover:text-white">
                                    <a href="https://goo.gl/maps/PPd7UW3EXEUvu7po7" target="_blank" rel="noopener noreferrer">
                                        <span className="text-style-footer">APC Ray Lecture Hall Complex <br /></span>
                                        <span className="text-style-footer">IISER Kolkata</span>
                                    </a>
                                </p>
                            </div>
                            <div className="resources footerelements text-center">
                                <h1 className="footerheading text-2xl md:text-4xl m-0 text-heading-footer">RESOURCES</h1>
                                <a href="https://drive.google.com/file/d/1thr3gYMwAX-h0DmaEIGyba44lG53hRxg/view?usp=sharing" className="footercontent text-xl md:text-2xl resourcecontent  text-[#BEBEBE] hover:text-white mb-2" target="_blank" rel="noopener noreferrer text-style-footer">
                                    Sponsorship Brochure<br />
                                </a>
                                {/* <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="footercontent text-xl md:text-2xl resourcecontent cursor-pointer text-[#BEBEBE] hover:text-white" target="_blank" rel="noopener noreferrer text-style-footer">
                                    Code Of Conduct<br />
                                </a>
                            <a href="" className="footercontent text-xl md:text-2xl resourcecontent  text-[#BEBEBE] hover:text-white mb-2" target="_blank" rel="noopener noreferrer text-style-footer">
                                    Community Partners<br />
                                </a>
                                <a href="" className="footercontent text-xl md:text-2xl resourcecontent text-[#BEBEBE] hover:text-white mb-2" target="_blank" rel="noopener noreferrer text-style-footer">
                                    Hackers Guide<br />
                                </a>  */}
                            </div>
                            <div className="social text-center xl:text-left">
                                <h1 className="footerheading footerelements text-center text-2xl md:text-4xl m-0 mb-2 text-heading-footer">
                                    STAY CONNECTED
                                </h1>
                                <div className="flex justify-center xl:justify-between gap-7 md:gap-10">
                                    <a href="https://www.instagram.com/status._code_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                        <img className="sociallogos insta_logo brightness-0 invert-[1] hover:filter-none w-auto h-auto max-w-[30px]" src={instaLogo} alt="insta_logo" />
                                    </a>
                                    <a href="https://twitter.com/Status_Code_" target="_blank" rel="noopener noreferrer">
                                        <img className="twitter_logo sociallogos brightness-0 invert-[1] hover:invert-[0.5] w-auto h-auto max-w-[30px]" src={twitterLogo} alt="twitter_logo" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/statuscode0/" target="_blank" rel="noopener noreferrer" className="relative w-[30px]">
                                        <img className="sociallogos linkedin_logo absolute w-auto h-auto max-w-[30px] peer z-10 brightness-0 invert-[1] hover:filter-none" src={linkedinLogo} alt="linkedin_logo" />
                                        <div className="w-[70%] h-[75%] absolute top-2 left-2 peer-hover:bg-white"></div>
                                    </a>
                                    <a href="https://discord.gg/UHwPBzy7UF" target="_blank" rel="noopener noreferrer">
                                        <img className="sociallogos discord_logo brightness-0 invert-[1] hover:filter-none w-auto h-auto max-w-[30px]" src={discordLogo} alt="discord_logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-container'>
                    <img src={footer} alt="" className='img-background' />
                    <h1 className="m-0 text-xl xl:text-2xl text-bottom-footer">© 2024 IIIT Kalyani</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;
