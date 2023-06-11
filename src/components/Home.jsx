import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech-Resolver</h1>
          <p>Solution to all technical problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          We're your trusted source for comprehensive solutions to all technical issues. 
          From software glitches to hardware challenges, our experts deliver timely resolutions, 
          empowering you to navigate with ease and peace of mind.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          We are a dedicated team of technical problem-solvers, 
          driven by their unwavering passion for conquering the
           complexities of technology. With a wide range of expertise
            and a knack for creative solutions, they are the driving 
            force behind resolving your toughest technical issues. 
            From troubleshooting software bugs to optimizing hardware 
            performance, our team is committed to delivering results 
            that exceed your expectations. Rest assured, you're in 
            capable hands as we navigate the intricacies of technology
             together, ensuring smooth and seamless digital experiences.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
