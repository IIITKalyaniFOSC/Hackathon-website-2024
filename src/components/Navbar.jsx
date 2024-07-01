import SwipeableTemporaryDrawer from "./HamburgerMenu";
import iiit_logo from '../assets/images/Navbar/IIITlogo.svg';
import iiit_logo_mobile from '../assets/images/Navbar/iiit_kalyani_logo.svg';
import sc1_logo from '../assets/images/Navbar/logo.svg';
export default function Navbar(){
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFooter = () => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSponsors = () => {
        const footerSection = document.getElementById('sponsors');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFaq = () => {
        const footerSection = document.getElementById('faq');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToTracks = () => {
        const footerSection = document.getElementById('tracks');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <section className="w-full relative">
        <nav className="fixed  min-[3840px]:px-[250px] px-7 z-30 flex md:justify-between bg-gradient-to-b max-[768px]:space-x-5 from-[#040842] to-[#040842]  w-full h-[96px] min-[3840px]:h-[250px] max-[540px]:h-[60px] mt-0 bg-blue-800 font-vt323 leading-[96px] ">
            
            <img className="justify-start min-[3840px]:w-[300px] max-[450px]:w-[86px] max-[540px]:w-[90px] max-[640px]:w-[100px] sm:w-[107px] md:w-[88px] lg:w-[107px] xl:w-[120px] " src={sc1_logo}></img>
            
            <ul className=" justify-center flex min-[3840px]:text-[80px] min-[3840px]:space-x-[7rem]  xl:space-x-[4rem] lg:space-x-[3rem] sm:space-x-[1.6rem] sm:text-[22px] min-[540px]:space-x-[1.6rem] min-[540px]:text-[22px] md:text-[25px] md:space-x-5 lg:text-[1.8 rem] xl:text-[2.3rem] text-white items-center max-[768px]:hidden ">
                <a onClick={scrollToSchedule} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">SCHEDULE</li></a>
                <a onClick={scrollToTracks} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">TRACKS</li></a>
                <a onClick={scrollToSponsors} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">SPONSORS</li></a>
                <a onClick={scrollToFaq} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">FAQ</li></a>
                <a onClick={scrollToFooter} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">CONTACT US</li></a>

            </ul>
            <img className= "justify-end min-[3840px]:w-[400px] md:w-[110px] lg:w-[154px] xl:w-[175px] max-[768px]:hidden" src={iiit_logo}></img>
            <img className="min-[768px]:hidden sm:w-[50px] max-[450px]:w-[35px] max-[540px]:w-[40px] max-[640px]:w-[50px]" src={iiit_logo_mobile}></img>
            
        </nav>
        <div className=" absolute right-0 max-[540px]:mt-[22px] mt-[39px] w-[50px] mr-8">
        <SwipeableTemporaryDrawer/>
        </div>
        </section>
    )
}
