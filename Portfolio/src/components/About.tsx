import "./About.css";
import AboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="about-con">
        <div className="img-con">
          <img src={AboutImg} alt="about image" />
        </div>
        <div className="detail">
          <p className="title">About</p>
          <p>Saran Jangsuk</p>
          <p className="text-detail">
            I am looking for a job as web developer. I would to be part of top{" "}
            <br />
            talented people and work the fantastic places. I want to improve my{" "}
            <br />
            skills and make the most of my skills.
          </p>
          <br />
          <p className="title">INTERNSHIP EXPERIENCE</p>
          <p className="text-detail">Microcontroller program (Assembly)</p>
          <br />
          <p className="title">WORK EXPERIENCES</p>
          <p className="text-detail">
            Sawang Daen Din Business Technical Vocational Callage <br />
            Teacher as major computer business
          </p>
          <div className="skill-box">
            <ul>
              <p className="title">Skill</p>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>MUI</li>
            </ul>
            <ul>
              <p className="title">Tool</p>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>IntelliJ IDE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
