import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import profileImg from "../assets/profile.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="container">
      <div className="media">
        <a
          href="https://www.facebook.com/saranjangsuk"
          target="_black"
          className="icon"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com/oat_sarann?igshid=NzZlODBkYWE4Ng"
          target="_black"
          className="icon"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://github.com/SrnDev16"
          target="_black"
          className="icon"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className="profile">
        <img src={profileImg} alt="profile" />
        <h2>Saran Jangsuk</h2>
        <p>I'm looking for web developer job.</p>
      </div>
      <div className="r-side">
        <p>WEB DEVELOPER</p>
      </div>
    </div>
  );
};

export default FirstSection;
