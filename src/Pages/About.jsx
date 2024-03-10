import React from "react";
import myImage from "../assets/Profile.jpg";

function About() {
  return (
    <div> 
    <h1 className=" font-serif text-white text-center mt-10 mb-10 ">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 ">
        <div className="flex justify-center ">
          <div className="h-[400px] w-[350px] p-2 mt-5 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]">
            <img
              className="h-full w-[500px] object-cover rounded-[20px]"
              src={myImage}
              alt="Profile Photo"
            />
          </div>
        </div>
        <div className=" font-serif text-white whitespace-break-spaces text-xl mt-5 ">
          <p>
            👋 Hey, I'm Sabin Lamichhane, a Software Engineer fresh out of
            Pokhara University. <br/><br/><hr/><br/><br/> 

            🚀 Specializing in React.js for front-end
            development, I love turning design ideas into interactive web
            applications. My college projects equipped me with solid
            problem-solving skills and a knack for collaboration.<br/><br/><hr/><br/><br/>

             🌱 Currently delving into Node.js to become a full-stack developer, I'm all about
            continuous learning and staying on top of tech trends. <br/><br/><hr/><br/><br/> 

            💻 TechStack: <br/><br/>
            
            <ul className=" list-disc ml-5"> 
            <li>Front-end: React.js, HTML, CSS, JavaScript</li>
            <li>Back-end: Exploring Node.js</li>
            <li>Version Control: Git </li>
            </ul>
            <br/><br/><hr/><br/><br/> 
            
            
            🌐 Beyond coding, I explore
            new tech, work on personal projects, and contribute to the tech
            community. Excited about the endless possibilities in full-stack
            development, I aim to make a positive impact in the tech world.<br/><br/><hr/><br/><br/>

             🔗 Check out my portfolio for projects and feel free to connect. Open
            to new opportunities and collaborations!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
