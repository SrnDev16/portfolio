import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="container-contact" id="contact">
       <div className="contact-con">
            <p>contact</p>
          <ul>
            <li>Email : saranjangsuk@gmail.com</li>
            <li>Phone : 0857340046</li>
            <li>Line ID : oatsaran</li>
            <li>
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
            </li>
          </ul>
       </div>
    </div>
  );
};

export default Contact;
