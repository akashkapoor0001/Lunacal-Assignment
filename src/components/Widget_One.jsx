import React, { useState, useEffect, useRef } from 'react';
import Question from "../assets/question.svg";
import Box from "../assets/box.svg";
import gsap from 'gsap';

const FirstWidget = () => {
  const [isActive, setIsActive] = useState("aboutme");
  const buttonRefs = useRef([]); // Refs for each button to apply animations
  const contentRef = useRef(null); // Ref for the content animation

  const clicked = (e, active) => {
    // Trigger animation for the clicked button
    gsap.fromTo(
      buttonRefs.current[active],
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power1.inOut" }
    );

    // Update the active state
    setIsActive(active);
  };

  useEffect(() => {
    // Ensure initial button animation effect on page load
    buttonRefs.current.forEach((btn, index) => {
      gsap.fromTo(
        btn,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power1.inOut", delay: index * 0.1 }
      );
    });
  }, []);

  useEffect(() => {
    // Animate content on tab change
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 }, // Start from the right with zero opacity
      { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" } // Fade in to full opacity and slide into position
    );
  }, [isActive]); // Trigger animation whenever the active tab changes

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (isActive) {
      case "aboutme":
        return (
          <p className="text-[#969696] text-justify" ref={contentRef}>
            I am Akash Kapoor, a web developer skilled in React.js, Next.js, and the MERN stack.
            I've built projects like GitHub Commit Notifier (Extension), A-Expense Tracker, and more,
            showcasing my expertise in full-stack development and software development.
            Currently, I'm in my final year of BTech and eager to combine web development and cybersecurity in my next project.
          </p>
        );
      case "exp":
        return (
          <p className="text-[#969696] text-justify" ref={contentRef}>
            I have experience working on various web development projects, including a GitHub Commit Notifier extension
            that provides real-time notifications for new commits, an A-Expense Tracker application, and a variety of
            full-stack development tasks. My experience spans across both front-end and back-end development, and I am proficient
            in technologies like JavaScript, React, Node.js, and Express.
          </p>
        );
      case "rec":
        return (
          <p className="text-[#969696] text-justify" ref={contentRef}>
            Recommended projects and tools for further learning include diving deeper into advanced React concepts,
            exploring Next.js for server-side rendering, and experimenting with building RESTful APIs using Node.js and Express.
            Additionally, working on open-source projects and contributing to communities can provide valuable experience.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[50%] w-full max-w-[1024px] bg-[#363c43] rounded-[27px] shadow-lg shadow-black mx-auto">
      {/* First Half */}
      <div className="p-4 flex gap-4">
        <div>
          <img src={Question} className="" alt="" />
        </div>
        <div className="h-[56px] bg-black rounded-3xl flex justify-evenly items-center font-semibold text-[13px]">
          <div
            onClick={(e) => clicked(e, "aboutme")}
            ref={(el) => (buttonRefs.current["aboutme"] = el)}
            className={`rounded-2xl px-[55px] h-[45px] ${isActive === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
            flex justify-center items-center ml-2 hover:cursor-pointer 
            ${isActive !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
          >
            About Me
          </div>
          <div
            onClick={(e) => clicked(e, "exp")}
            ref={(el) => (buttonRefs.current["exp"] = el)}
            className={`rounded-2xl px-[54px] h-[45px] ${isActive === "exp" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
            flex justify-center items-center ml-2 hover:cursor-pointer   
            ${isActive !== "exp" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
          >
            Experiences
          </div>
          <div
            onClick={(e) => clicked(e, "rec")}
            ref={(el) => (buttonRefs.current["rec"] = el)}
            className={`rounded-2xl px-[48px] h-[45px] ${isActive === "rec" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
            flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
            ${isActive !== "rec" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
          >
            Recommended
          </div>
        </div>
      </div>
      {/* Second Half */}
      <div className="flex gap-4 p-2 ml-2.5">
        <div className="mt-5">
          <img src={Box} alt="" />
        </div>
        <div>
          {renderContent()}
        </div>
        <div>
          <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
        </div>
      </div>
    </div>
  );
};

export default FirstWidget;
