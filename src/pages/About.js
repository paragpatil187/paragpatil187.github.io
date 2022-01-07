import React from "react";
import Layout from "../compoents/Layout";

import AOS from 'aos';
AOS.init({
  duration:1000
});
function About() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen relative">
            <div className="h-3/4 pt-20 bg-theme">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute left-0 right-0 -bottom-34">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#2a2a2a"
                  fill-opacity="1"
                  d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,192C672,203,768,149,864,106.7C960,64,1056,32,1152,53.3C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-5">
        <p className="text-xl font-semibold text-center">
        After graduating in mechanical engineering, I worked in a petroleum company for a while. During this time I watched the growth in the IT industry and wanted to be a part of it. I wanted to learn to code and found Masai School. A self-motivated hard worker, I am enjoying my journey at Masai School where I am learning MERN stack, data structures, and algorithms. I am now a team player who is passionate about coding.
        Apart from coding, I love to swim and enjoy sports.
        My skill set includes Algorithms, data structures, object-oriented programming, Rest API, databases, JavaScript, HTML, MongoDB, Node.js.
        My projects can be found on: https://github.com/paragpatil187
        Feel free to hit me up at paragpatil187@gmail.com.
        </p>
        
      </div>
      

      
    </Layout>
  );
}

export default About;
