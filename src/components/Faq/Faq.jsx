import React, { useState } from 'react';
import stars from '../../assets/images/footer/stars.svg';

const faqData = [
  {
    question: "How many team members do I need?",
    answer: "You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
  },
  {
    question: "Will the hackathon be in person or online?",
    answer: "The Status Code 1 hackathon will be conducted in complete offline/in person mode.",
  },
  {
    question: "How much are the participation fees?",
    answer: "Participation is absolutely free inclusive of resources.",
  },
  {
    question: "What are the prerequisites to participate in this hackathon?",
    answer: "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
  },
  {
    question: "How do I register?",
    answer: (
      <span>
        Register your team @
        <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500" href="https://statuscode1.devfolio.co/">Devfolio</a>
      </span>
    ),
  },
  {
    question: "What is the venue for Status Code 1?",
    answer: "APC Ray Lecture Hall Complex, IISER KOLKATA",
  },
  {
    question: "Is the food and accommodation provided free of charge or are there any associated costs?",
    answer: "We've got you covered when it comes to food, water, and coffee they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
  },
  {
    question: "Can my friend join our team after we have already submitted the application for review?",
    answer: (
      <span>
        Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team. For more information, please refer to devfolio's guide:
        <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500" href="https://guide.devfolio.co/hackers/faqs#after-submitting-the-team-for-review">How To Add Team Members</a>
      </span>
    ),
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="w-full h-screen bg-[url('/src/assets/images/faq/faqbg.svg')] flex items-center justify-center" id='faq'>
        <img src={stars} alt="" className="absolute object-cover w-full h-full" />
        <div className="mb-10 text-center">
          <h1 className="text-[#9E9E9E] text-3xl md:text-4xl xl:text-5xl m-0 flex justify-center md:justify-start">
            $ ./<span id="heading-rules" className="text-white">FAQ</span>
          </h1>
          <div className="relative z-10 w-full max-w-4xl mx-4 xl:mx-7 p-6 bg-opacity-50 rounded-lg">
            <div className="mt-6">
              <div id="accordionFaq">
                {faqData.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <h1 className="text-white text-xl sm:text-2xl xl:text-3xl m-0 flex">
                      <button
                        onClick={() => handleToggle(index)}
                        className={`faq-collapsible text-[#E5B567] mr-2 h-[50%] group relative flex items-center justify-center rounded-none border-0 transition hover:z-[2] focus:z-[3] focus:outline-none ${openIndex === index ? "text-[#169B81]" : ""}`}
                        type="button"
                      >
                        {openIndex === index ? "[-]" : "[+]"}
                      </button>
                      <span className="text-left">{faq.question}</span>
                    </h1>
                    <div
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                      <div className="example text-[#D6D6D6] text-left text-xl sm:text-2xl pl-8 sm:pl-10 2xl:pl-12 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
