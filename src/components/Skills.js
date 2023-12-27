/* eslint-disable jsx-a11y/img-redundant-alt */

import figma from "../assets/img/figma.png";
import javascript from "../assets/img/javascript.png";
import database from "../assets/img/database.png";
import react from "../assets/img/react.png";
import rails from "../assets/img/rubyonrails.png";
import css from "../assets/img/css3.png";
import html5 from "../assets/img/html.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack</h2>
                        <p>These are the tools I can use to bring your vision to life.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html5} alt="Image"  />
                                <h5>Html 5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={database} alt="Image" />
                                <h5>Data Structure</h5>
                            </div>
                            <div className="item">
                                <img src={rails} alt="Image" />
                                <h5>Ruby on Rails</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
