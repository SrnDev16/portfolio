import { useState } from "react";
import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [click , setClick] = useState<boolean>(false)
    const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <div className="header-con">
        <div className="logo-con">
          <h1>Saran Jangsuk</h1>
        </div>
        <ul className={click ? "menu active": "menu"}>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1CC3PrNwGSX003wle66ZWJfq1oC1AX2V2/view?usp=sharing" target="_blank">RESUME</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div className="mobile-icon" onClick={handleClick}>
            {click ? <CloseIcon/> : <MenuIcon/>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
