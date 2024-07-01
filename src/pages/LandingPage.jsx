import React, { useState, useEffect } from "react";
import BgLandingPage from "/images/BgLandingPage.svg";
import HomeMascot from "/images/HomeMascot.svg";
import DevfolioBtn from "/images/DevfolioBtn.svg";
import DevfolioLogo from "../assets/images/LandingPage/DevfolioLogo.svg";
import TimerSection from "./TimerSection";
import Schedule from "../components/Schedule/Schedule";
import ScrollButton from "../assets/images/LandingPage/ScrollButton.svg";

function LandingPage() {
  const [bgSize, setBgSize] = useState("10%");
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 3840) {
        
        setBgSize("16%");
      } else if (width >= 2560) {
        // Adjustments for 1440p resolution
        setBgSize("18%");
      } else if (width >= 1248) {
        setBgSize("16%");
      } else if (width >= 1024) {
        setBgSize("18%");
      } else if (width >= 750) {
        setBgSize("22%");
      } else if (width >= 768) {
        setBgSize("15%");
      } else if (width >= 640) {
        setBgSize("25%");
      } else {
        setBgSize("40%");
      }
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
      const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
      setBgPosition({ x, y });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTimer = () => {
    const scheduleSection = document.getElementById("timer");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className=" h-full min-[3840px]:h-[4000px] w-full flex flex-col text-center bg-no-repeat  bg-bg_color m-0"
        style={{
          backgroundImage: `url(${BgLandingPage})`,
          backgroundPosition: `${50 + bgPosition.x}% ${20 + bgPosition.y}%`,
          backgroundSize: "cover",
        }}
      >
        {/* Hero section */}
        <section
          id="hero"
          className=" ml-5 mr-5 max-[540px]:mt-[60px] mt-[110px]  min-[3840px]:mt-[250px] "
        >
          <div className="">
            <h1
              className="text-white min-[320px]:text-5xl md:text-7xl xl:text-8xl  min-[3840px]:text-[12vh] font-vt323"
              style={{ textShadow: "2px 2px 0 rgb(236, 83, 176, 1)" }}
            >
              STATUS CODE <span className="text-red">1</span>
            </h1>
            <h3 className="text-purple-900 font-vt323 min-[320px]:text-[20px] md:text-3xl xl:text-[40px] min-[3840px]:m-11 2xl:p-10 2xl:text-[4vh] bg-gradient-to-r from-gradient_blue_purple-0 via-gradient_blue_purple-50 to-gradient_blue_purple-100  text-transparent bg-clip-text">
              Code With Purpose & Innovate, Collaborate, Dominate
            </h3>
          </div>
          <div className="flex text-center justify-center mt-5 xl:mt-1 ml-5 mr-5 min-[3840px]:m-11">
            <div
              className="bg-top bg-no-repeat flex items-end flex-col justify-center md:h-[80%] bg-cover "
              style={{
                backgroundImage: `url(${HomeMascot})`,
                backgroundSize: bgSize,
              }}
            >
              <div className="text-center justify-center gap-2 min-[320px]:mt-[25%] md:mt-0 " >
                {/* <a href="https://statuscode-1.devfolio.co/"> */}
                <div
                 
                  className="bg-no-repeat bg-center  bg-cover  text-center justify-center flex flex-row min-[320px]:mt-[25%] min-[640px]:mt-[10%] min-[750px]:mt-[6%] md:mt-[27%] lg:mt-[22%] xl:mt-[20%] min-[3840px]:mt-[21%]"
                  style={{
                    backgroundImage: `url(${DevfolioBtn})`,
                    backgroundSize: "contain",
                    
                    
                  }}
                >
                  <button  onClick={() =>
                    window.open("https://statuscode-1.devfolio.co/")
                  }
                   className="text-purple font-vt323 text-2xl text-center justify-center  flex  mt-2 mb-2 xl:text-4xl gap-3 min-[3840px]:gap-11 min-[3840px]:text-7xl min-[3840px]:m-5     ">
                    <img className="xl:w-[4vh] min-[3840px]:w-[5vh]" src={DevfolioLogo} />
                    <p className="min-[3840px]:mt-5">Apply with Devfolio </p>
                  </button>
                </div>
                {/* </a> */}
                <p className="max-[540px]:leading-normal md:leading-tight xl:leading-normal md:text-[22px] xl:text-[24px] 2xl:text-[3vh] min-[3840px]:pl-[17vh] min-[3840px]:pr-[17vh] min-[3840px]:p-11 2xl:p-5 font-vt323 min-[320px]:text-[16px] md:text-2xl m-3 bg-gradient-to-b text-purple bg-clip-text">
                  Unleash your creativity and join Status Code 1, an official
                  MLH Member Event and the ultimate 36-hour hackathon
                  extravaganza! Compete across diverse categories, showcasing
                  your skills, ingenuity, and collaborative spirit alongside
                  like-minded individuals. Discover the perfect platform to
                  challenge yourself.
                </p>

                <button className="animate-bounce 2xl:w-[5%]  ">
                  <a onClick={scrollToTimer}>
                    {" "}
                    <img src={ScrollButton} alt="Down" width="80% " />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Timer section  */}
        <section id="timer" className="pt-[60px] mt-2">
          <TimerSection />
        </section>

        {/* Schedule section */}
        <section id="schedule" className="pt-[60px] "></section>
        <Schedule />
      </div>
    </>
  );
}

export default LandingPage;
