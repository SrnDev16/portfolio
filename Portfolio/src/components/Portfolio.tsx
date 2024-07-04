import "./Portfolio.css";
import restaurant from "../assets/restaurant.png";
import responsive from "../assets/responsive.png";
import todo from "../assets/todo.png";
import search from "../assets/search.png";
import cnx from "../assets/cnx.png"

const Portfolio = () => {
  return (
    <div className="container-port" id="portfolio">
      <div className="port-con">
        <p>portfolio</p>
        <div className="port-img">
          <div className="img-box">
            <a href="https://cnxproject.netlify.app/" target="_blank">
              <img src={cnx} alt="portfolio" />
            </a>
            <p>Shopping with API</p>
          </div>
          <div className="img-box">
            <a href="https://srn-restaurant.netlify.app/" target="_blank">
              <img src={restaurant} alt="portfolio" />
            </a>
            <p>Restaurant</p>
          </div>
          <div className="img-box">
            <a href="https://tere-web-react.netlify.app/" target="_blank">
              <img src={responsive} alt="portfolio" />
            </a>
            <p>Webpage responsive</p>
          </div>
          <div className="img-box">
            <a href="https://todo-list-react-22.netlify.app/" target="_blank">
              <img src={todo} alt="portfolio" />
            </a>
            <p>Todo list</p>
          </div>
          <div className="img-box">
            <a href="https://search-country16.netlify.app/" target="_blank">
              <img src={search} alt="portfolio" />
            </a>
            <p>Search filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
