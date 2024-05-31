import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/imgs/solutions_right.png";
import skillone from "../../assets/imgs/solutions_icon_1.png";
import skilltwo from "../../assets/imgs/solutions_icon_2.png";
import skillthree from "../../assets/imgs/solutions_icon_3.png";
import skillfour from "../../assets/imgs/solutions_icon_4.png";
import skillfive from "../../assets/imgs/solutions_icon_5.png";
import img11 from "../../assets/imgs/develop_icon_1.png";
import img2 from "../../assets/imgs/develop_icon_2.png";
import img3 from "../../assets/imgs/develop_icon_3.png";
import img4 from "../../assets/imgs/develop_icon_4.png";
import img5 from "../../assets/imgs/develop_icon_5.png";
import img6 from "../../assets/imgs/develop_icon_6.png";
import img7 from "../../assets/imgs/develop_icon_7.png";
import img8 from "../../assets/imgs/develop_icon_8.png";
import arrowImg from "../../assets/imgs/arrow.png";
import startupsIcon from "../../assets/imgs/startups_icon.jpg";
import smbsIcon from "../../assets/imgs/smbs_icon.jpg";
import enterpriseIcon from "../../assets/imgs/enterprise_icon.jpg";
import inceptionIcon1 from "../../assets/imgs/icon_inception_1.jpg";
import inceptionIcon2 from "../../assets/imgs/icon_inception_2.jpg";
import inceptionIcon3 from "../../assets/imgs/icon_inception_3.jpg";
import inceptionIcon4 from "../../assets/imgs/icon_inception_4.jpg";
import inceptionIcon5 from "../../assets/imgs/icon_inception_5.jpg";
import ReactSlicks from "../../generic_components/Slider/ReactSlicks";
import techsIcon1 from "../../assets/imgs/techs_icon_1.png";
import techsIcon2 from "../../assets/imgs/techs_icon_2.png";
import techsIcon3 from "../../assets/imgs/techs_icon_3.png";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import "./solution.css";
import { Link } from "react-router-dom";
const Solution = () => {
  return (
    <>
      <Navbar />
      <div className="root pt-5">
        <div className="solutoinscontent pt-5">
          <div className="solutions_section_1">
            <div className="container">
              <div className="row">
                <div className="wow animate__animated animate__fadeInDown col-lg-6">
                  <h1>
                    Custom Solutions
                    <br />
                    for your game app
                  </h1>
                  <p>
                    This booming gaming industry requires businessmen to explore
                    &amp; collaborate with other ventures and dictate their
                    future more firmly. Latest technologies like artificial
                    intelligence (AI) and virtual reality (VR) create a
                    futuristic impact &amp; really captures the eye of digitally
                    prone users. Tamra Games is always on toes to traverse every
                    possible opportunity to collaborate, innovate &amp; invent
                    complex ideas &amp; their contrary execution for the users.
                  </p>
                  <Link
                    to="/solutions"
                    className="wow animate__animated animate__fadeIn learn_more"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="wow animate__animated animate__fadeInDown col-lg-6">
                  <div className="solutions_right_icon">
                    <img alt="" src={img1} />
                  </div>
                </div>
              </div>
              <div className="clr"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInLeft solutions_icons">
                    <img alt="" src={skillone} />
                  </div>
                  <div className="wow animate__animated animate__slideInLeft solutions_icons">
                    <img alt="" src={skilltwo} />
                  </div>
                  <div className="wow animate__animated animate__slideInLeft solutions_icons">
                    <img alt="" src={skillthree} />
                  </div>
                  <div className="wow animate__animated animate__slideInLeft solutions_icons">
                    <img alt="" src={skillfour} />
                  </div>
                  <div className="wow animate__animated animate__slideInLeft solutions_icons">
                    <img alt="" src={skillfive} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions_section_2">
            <div className="container">
              <div className="row">
                <div className="wow animate__animated animate__fadeInDown col-lg-12">
                  <h1>
                    Develop a better and secure
                    <br />
                    experience for your users
                  </h1>
                  <p></p>
                </div>
              </div>
              <div className="clr"></div>
              <div className="row">
                <div className="row_padding">
                  <div className="wow animate__animated animate__slideInLeft col-lg-4">
                    <div className="tabbar_top">
                      <a href="#solution">
                        <span>
                          <img alt="" src={img11} />
                        </span>
                        <br />
                        ideation
                        <img className="arrow" alt="" src={arrowImg} />
                      </a>
                      <a href="#solution">
                        <span>
                          <img alt="" src={img2} />
                        </span>
                        <br />
                        strategy
                        <img className="arrow" alt="" src={arrowImg} />
                      </a>
                      <a href="#solution">
                        <span>
                          <img alt="" src={img3} />
                        </span>
                        <br />
                        architecture
                      </a>
                    </div>
                    <div id="ideation" className="develop">
                      <h3>Required Gathering</h3>
                      <ul>
                        <li>Work Breakdown Structure</li>
                        <li>Project Plan</li>
                        <li>Project Budget</li>
                        <li>Requirements Docs</li>
                        <li>Use Cases</li>
                        <li>Use Stories</li>
                      </ul>
                    </div>
                    <div
                      id="strategy"
                      className="develop"
                      style={{ display: "none" }}
                    >
                      <h3>Required Strategy</h3>
                      <ul>
                        <li>Work Breakdown Structure</li>
                        <li>Project Plan</li>
                        <li>Project Budget</li>
                        <li>Requirements Docs</li>
                        <li>Use Cases</li>
                      </ul>
                    </div>
                    <div
                      id="architecture"
                      className="develop"
                      style={{ display: "none" }}
                    >
                      <h3>Required Architecture</h3>
                      <ul>
                        <li>Work Breakdown Structure</li>
                        <li>Project Plan</li>
                        <li>Project Budget</li>
                        <li>Requirements Docs</li>
                        <li>Use Cases</li>
                        <li>Use Stories</li>
                      </ul>
                    </div>
                  </div>
                  <div className="wow animate__animated animate__bounceInUp col-lg-4">
                    <div className="tabbar_top">
                      <a href="#solution">
                        <span>
                          <img alt="" src={img4} />
                        </span>
                        <br />
                        design
                        <img className="arrow" alt="" src={arrowImg} />
                      </a>
                      <a href="#solution">
                        <span>
                          <img alt="" src={img5} />
                        </span>
                        <br />
                        develop
                        <img className="arrow" alt="" src={arrowImg} />
                      </a>
                      <a href="#solution">
                        <span>
                          <img alt="" src={img6} />
                        </span>
                        <br />
                        testing
                      </a>
                    </div>
                    <div id="design" className="designdevelopment">
                      <h3>Design &amp; Development</h3>
                      <ul>
                        <li>Low-Fi Design</li>
                        <li>Hi-Fi Design</li>
                        <li>User Experience Design</li>
                        <li>Source Code</li>
                        <li>Compiled Code</li>
                        <li>Code Documentation</li>
                      </ul>
                    </div>
                    <div
                      id="development"
                      className="designdevelopment"
                      style={{ display: "none" }}
                    >
                      <h3>Design &amp; Development</h3>
                      <ul>
                        <li>Low-Fi Design</li>
                        <li>Hi-Fi Design</li>
                        <li>User Experience Design</li>
                        <li>Compiled Code</li>
                        <li>Code Documentation</li>
                      </ul>
                    </div>
                    <div
                      id="testing"
                      className="designdevelopment"
                      style={{ display: "none" }}
                    >
                      <h3>Design &amp; Development</h3>
                      <ul>
                        <li>Low-Fi Design</li>
                        <li>Hi-Fi Design</li>
                        <li>User Experience Design</li>
                        <li>Source Code</li>
                        <li>Compiled Code</li>
                        <li>Code Documentation</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="wow animate__animated animate__slideInRight col-lg-4"
                    style={{
                      visibility: "visible",
                      animationName: "slideInRight",
                    }}
                  >
                    <div className="tabbar_top">
                      <a href="#solution">
                        <span>
                          <img alt="" src={img7} />
                        </span>
                        <br />
                        release
                        <img className="arrow" alt="" src={arrowImg} />
                      </a>
                      <a href="#solution">
                        <span>
                          <img alt="" src={img8} />
                        </span>
                        <br />
                        support
                      </a>
                    </div>
                    <div id="release" className="supports">
                      <h3>Delivery &amp; Support</h3>
                      <ul>
                        <li>Release Management</li>
                        <li>Change Management</li>
                        <li>User Docs &amp; Training</li>
                        <li>Scheduled Maintenance</li>
                        <li>Adaptive Maintenance</li>
                        <li>Software Roadmap</li>
                      </ul>
                    </div>
                    <div
                      id="support"
                      className="supports"
                      style={{ display: "none" }}
                    >
                      <h3>Delivery &amp; Support</h3>
                      <ul>
                        <li>Release Management</li>
                        <li>Change Management</li>
                        <li>User Docs &amp; Training</li>
                        <li>Scheduled Maintenance</li>
                        <li>Adaptive Maintenance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="clr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solutions_section_3">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInDown col-lg-12">
                <h1>
                  Ready to start your project
                  <span>?</span>
                  <a href="/solutions" className="start">
                    Let’s Start
                  </a>
                </h1>
              </div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="solutions_section_4">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInDown col-lg-12">
                <h1>Businesses That Trust Us</h1>
                <p></p>
              </div>
            </div>
            <div className="clr"></div>
            <div className="row">
              <div className="row_padding2">
                <div className="wow animate__animated animate__slideInLeft col-lg-4">
                  <img alt="" src={startupsIcon} />
                  <h3>Startups</h3>
                  <ul>
                    <li>MVP for quick launch to market</li>
                    <li>Fixed price estimates for clear budgeting</li>
                    <li>Agile practices to accelerate project delivery</li>
                  </ul>
                </div>
                <div className="wow animate__animated animate__bounceInUp col-lg-4">
                  <img alt="" src={smbsIcon} />
                  <h3>SMBs</h3>
                  <ul>
                    <li>Flexibility engagement models</li>
                    <li>In-depth domain expertise & industry knowledge</li>
                    <li>Tried & Tested environment optimization methods</li>
                  </ul>
                </div>
                <div className="wow animate__animated animate__slideInRight col-lg-4">
                  <img alt="" src={enterpriseIcon} />
                  <h3>Enterprise</h3>
                  <ul>
                    <li>Consultancy to chalk out a future roadmap</li>
                    <li>Compliance with industry standards & regulations</li>
                    <li>Leverage emerging technologies</li>
                  </ul>
                </div>
              </div>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="solutions_section_5">
          <div className="solutions_section_5_inner">
            <div className="container">
              <div className="row">
                <div className="wow animate__animated animate__slideInDown col-lg-12">
                  <h1>We Serve The Inception</h1>
                  <p>
                    We publish your project in the best manner covering all the
                    important aspects that boost your game reach and ultimately
                    give you better results. Your game has to be attractive with
                    the potential to become a leading venture.
                  </p>
                </div>
                <div className="clr"></div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInLeft inception_details">
                    <div className="inception_icons">
                      <img alt="" src={inceptionIcon1} />
                    </div>
                    <div className="inception_detailsinner">
                      <div className="nombers">01</div>
                      <h3>App Discovery</h3>
                      <p>
                        App Discovery plays an important role in bringing up
                        your project to the right users. Automatically analyzing
                        artifacts of a software application and determining
                        metadata structures associated with the application
                        proves to be a very handy trick to improve your presence
                        on the app stores.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInRight inception_detailsright">
                    <div className="inception_icons">
                      <img alt="" src={inceptionIcon2} />
                    </div>
                    <div className="inception_detailsinner">
                      <div className="nombers">02</div>
                      <h3>Game Design</h3>
                      <p>
                        Game Design is quite dependent on the usability of the
                        interface. The experience taken in by the user dictates
                        the success or failure of a game or an app. To counter
                        that, every successful venture has put a lot of thought
                        &amp; effort into designing the perfectly smooth UI
                        &amp; UX for their product as it is one of the prominent
                        features of any victorious venture.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInLeft inception_details">
                    <div className="inception_icons">
                      <img alt="" src={inceptionIcon3} />
                    </div>
                    <div className="inception_detailsinner">
                      <div className="nombers">03</div>
                      <h3>Game Art</h3>
                      <p>
                        The gaming industry has users from all age groups &
                        approaches, and for that, all the present genres of the
                        world come into play one way or another. Determining the
                        design niche &amp; genre according to the target
                        audience defines the type of Game Art that may go
                        perfectly with the concept of the game. The merger of a
                        strong idea &amp; a perfect mood depiction is what a
                        perfect game has in it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInRight inception_detailsright">
                    <div className="inception_icons">
                      <img alt="" src={inceptionIcon4} />
                    </div>
                    <div className="inception_detailsinner">
                      <div className="nombers">04</div>
                      <h3>App Search Optimization</h3>
                      <p>
                        App search optimization brings your game to the top
                        levels of discovery in the app stores, but it has much
                        more to it. The speed, smoothness, and size of your app
                        also come into play when you’re trying to reach maximum
                        levels. Our dedicated team provides all the solutions
                        one might need to make a robustly optimized game.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="wow animate__animated animate__slideInLeft inception_details">
                    <div className="inception_icons">
                      <img alt="" src={inceptionIcon5} />
                    </div>
                    <div className="inception_detailsinner">
                      <div className="nombers">05</div>
                      <h3>App Marketing</h3>
                      <p>
                        Marketing is one of the major elements of a successful
                        business of any kind. Letting people know about your
                        products through Google adverts and in-app adverts
                        creates a sense of solid existence, consequently
                        boosting the brand image &amp; likability of a purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clr"></div>
            </div>
          </div>
        </div>
        <ReactSlicks />
        <div className="solutions_section_7">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInDown col-lg-12">
                <h1>We Know All The Techs</h1>
                <p>
                  Game District is always on toes to traverse every
                  <br />
                  possible opportunity to collaborate
                </p>
              </div>
              <div className="clr"></div>
              <div
                className="wow bounceInUp techs_icons"
                style={{ marginTop: "45px" }}
              >
                <img alt="" src={techsIcon1} />
              </div>
              <div
                className="wow bounceInUp techs_icons"
                style={{ marginTop: "45px" }}
              >
                <img alt="" src={techsIcon2} />
              </div>
              <div
                className="wow bounceInUp techs_icons"
                style={{ marginTop: "45px" }}
              >
                <img alt="" src={techsIcon3} />
              </div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Solution;
