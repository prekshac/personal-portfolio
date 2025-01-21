import React from "react";
import "./Home.css";
import myPic from "./my-pic.jpg";
const Home = () => {
  const ulStyle = {
    listStyleType: "disc",
    marginLeft: "2rem",
  };

  return (
    <div className="home-container">
      <div className="card-container">
        <div className="text-card">
          <h1>Hello, I am Preksha Chaturvedi! 👩‍💻</h1>
          <h3>
            Software Developer | Tech Enthusiast | Creative Problem Solver |
            Lifelong Learner
          </h3>

          <p>
            Welcome to my corner of the web! I'm an aspiring software developer
            with a strong foundation in programming and a passion for creating
            impactful digital solutions. With hands-on experience in MERN stack
            development and an eye for innovation, I strive to deliver efficient
            and user-friendly applications.
          </p>

          <section>
            <h3>💻 What I Bring to the Table:</h3>
            <ul style={ulStyle}>
              <li>
                <strong>Skills:</strong> Proficient in React.js, JavaScript,
                Python, and Java, with experience building dynamic web and
                mobile applications.
              </li>
              <li>
                <strong>Experience:</strong> Worked as a MERN Stack Intern at
                Digipodium, where I developed the <em>Admin Splasher</em>{" "}
                dashboard project.
              </li>
              <li>
                <strong>Projects:</strong> Created tools like{" "}
                <em>Text Utils</em> and <em>M-Leave</em> to streamline everyday
                tasks and improve efficiency.
              </li>
            </ul>
          </section>

          <section>
            <h3>📜 Beyond Coding:</h3>
            <ul style={ulStyle}>
              <li>
                Published a research paper on smart street illumination systems
                for sustainable urban infrastructure.
              </li>
              <li>
                Certified in IBM Cloud Essentials, Google My Business, and
                Problem Solving (HackerRank).
              </li>
              <li>
                Former head girl and an active event organizer with a flair for
                leadership and creativity.
              </li>
            </ul>
          </section>

          <p>
            <h3>🖥️ Let's Connect! </h3>
            <p>
              Explore my projects, read about my journey, or drop me a message
              to discuss potential collaborations.
            </p>
          </p>
        </div>

        <div className="image-card">
          <img src={myPic} alt="Preksha Chaturvedi" className="profile-image" />
        </div>
      </div>
    </div>
  );
};
export default Home;
