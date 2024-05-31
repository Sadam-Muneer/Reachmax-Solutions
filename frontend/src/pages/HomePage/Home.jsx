import { useEffect } from "react";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import "./home.css";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/imgs/Home_images/animate.css";
import "../../assets/imgs/Home_images/style.css";
import sultanImage from "../../assets/imgs/image01.jpg";
import cooking from "../../assets/imgs/cooking.jpg";
import publishImage from "../../assets/imgs/publish.jpg";
import marketing from "../../assets/imgs/icon-marketing.jpg";
import strategy from "../../assets/imgs/icon-strategy.jpg";
import management from "../../assets/imgs/icon-management.jpg";
import bullion from "../../assets/imgs/bullion.png";
import bus from "../../assets/imgs/bus.jpg";
import racecartwo from "../../assets/imgs/racecartwo.jpg";
import plane from "../../assets/imgs/plane.jpg";
import kicker from "../../assets/imgs/kicker.jpg";
import racecar from "../../assets/imgs/racecar.jpg";
import iconpublished from "../../assets/imgs/icon-published-game.jpg";
import iconstrong from "../../assets/imgs/icon-strong-team.jpg";
import iconproject from "../../assets/imgs/icon-projects-delivered.jpg";
import iconfortune from "../../assets/imgs/icon-fortune.jpg";
import iconraised from "../../assets/imgs/icon-raisad.jpg";
import calmrigth from "../../assets/imgs/best-clan-right.jpg";
import calmleft from "../../assets/imgs/best-clan-left.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <div className="pt-5">
        <Navbar />
        <div className="home_section_gamesicon pt-5">
          <Container>
            <Row>
              <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <Image
                  src={sultanImage}
                  className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInLeft"
                  alt="Boat on Calm Water"
                />
              </Col>
              <Col lg={6} md={12}>
                <Row>
                  <Col xs={3} className="mb-4">
                    <Image
                      src={racecar}
                      className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                      alt="Wintry Mountain Landscape"
                    />
                  </Col>
                  <Col xs={3} className="mb-4">
                    <Image
                      src={bus}
                      className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                      alt="Mountains in the Clouds"
                    />
                  </Col>
                  <Col xs={3} className="mb-4">
                    <Image
                      src={racecartwo}
                      className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInDown"
                      alt="Boat on Calm Water"
                    />
                  </Col>
                  <Col xs={3} className="mb-4">
                    <Image
                      src={plane}
                      className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInLeft"
                      alt="Waves at Sea"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Image
                      src={kicker}
                      className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                      alt="Kicker"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <Image
                  src={cooking}
                  className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                  alt="Kicker"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={cooking}
                  className="w-100  shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                  alt="Kicker"
                />
              </Col>
              <Col xs={4}>
                <Image
                  src={cooking}
                  className="w-100 shadow-1-strong rounded mb-4 wow animate__animated animate__slideInUp"
                  alt="Kicker"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section className="fullpage">
        <div className="home_section_publish">
          <Container>
            <Row>
              <Col lg={12}>
                <h3 className="wow animate__animated animate__slideInLeft">
                  We Empower
                  <span>Small Startups</span>
                </h3>
                <h3 className="wow animate__animated animate__slideInLeft">
                  To Turn Into
                  <span className="bg">Big Enterprises.</span>
                </h3>
                <p className="wow animate__animated animate__slideInLeft">
                  Our app solutions multiply your ROI, enhance brand visibility,
                  and delight your customers.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={7}>
                <Image
                  className="wow animate__animated animate__slideInLeft"
                  alt=""
                  src={publishImage}
                />
                <Link
                  to="/publishing"
                  className="wow animate__animated animate__fadeInUpBig learn_more"
                >
                  Publish with Us
                </Link>
              </Col>
              <Col lg={5}>
                <div
                  className="wow animate__animated animate__slideInRight services_publish"
                  style={{
                    visibility: "visible",
                    animationName: "animate__animated animate__slideInRight",
                  }}
                >
                  <Image alt="" src={marketing} />
                  <h4>Marketing Expertise</h4>
                  <p>
                    Turn a great idea into a product concept that is ready to
                    start development
                  </p>
                </div>
                <div
                  className="wow animate__animated animate__slideInRight services_publish"
                  style={{
                    visibility: "visible",
                    animationName: "animate__animated animate__slideInRight",
                  }}
                >
                  <Image alt="" src={strategy} />
                  <h4>Release Strategy</h4>
                  <p>
                    Features enough to satisfy early customers & provide
                    feedback for future development.
                  </p>
                </div>
                <div
                  className="wow animate__animated animate__slideInRight services_publish"
                  style={{
                    visibility: "visible",
                    animationName: "animate__animated animate__slideInRight",
                  }}
                >
                  <Image alt="" src={management} />
                  <h4>Community Management</h4>
                  <p>
                    Answer critical queries through research, design,
                    prototyping, interviews & testing.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home_our_journey">
          <Container>
            <Row>
              <Col
                lg={12}
                className="wow animate__animated animate__slideInDown"
              >
                <div className="bgjourney">
                  <h1>Our Journey So Far</h1>
                </div>
                <p>
                  Since 2022, we have helped a number of start-ups
                  <br />
                  and big brands convert their digital ideas into engaging,
                  feature rich apps &amp; games.
                </p>

                <div className="trending_mobile_games">
                  <span>Building</span>
                  <b>trending mobile games</b>
                  <span>with</span>
                </div>
                <Image className="mplus" alt="" src={bullion} />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="wow animate__animated animate__rollIn journey_plus">
                  <Image alt="" src={iconpublished} />
                  <h5>
                    345
                    <span>+</span>
                  </h5>
                  <p>Published Games</p>
                </div>
                <div className="wow animate__animated animate__rollIn journey_plus">
                  <Image alt="" src={iconstrong} />
                  <h5>
                    350
                    <span>+</span>
                  </h5>
                  <p>Strong Team</p>
                </div>
                <div className="wow animate__animated animate__rollIn journey_plus">
                  <Image alt="" src={iconproject} />
                  <h5>
                    56k
                    <span>+</span>
                  </h5>
                  <p>Projects Delivered</p>
                </div>
                <div className="wow animate__animated animate__rollIn journey_plus">
                  <Image alt="" src={iconfortune} />
                  <h5>3</h5>
                  <p>Fortune 500 Clients</p>
                </div>

                <div className="wow animate__animated animate__rollIn journey_plus">
                  <Image alt="" src={iconraised} />
                  <h5>
                    $150
                    <span>M</span>
                  </h5>
                  <p>Raised by Clients</p>
                </div>
                <div className="learn_morearea">
                  <Link className="learn_more" to="/aboutus">
                    Learn More
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home_best_clan">
          <Container>
            <Row>
              <Col
                lg={4}
                sm={12}
                className="wow animate__animated animate__slideInLeft"
                style={{ visibility: "visible", animationName: "slideInLeft" }}
              >
                <Image alt="" src={calmleft} />
              </Col>
              <Col
                lg={4}
                sm={12}
                className="wow animate__animated animate__slideInDown"
                style={{ visibility: "visible", animationName: "slideInDown" }}
              >
                <div>
                  <h1>It’s the best clan you can find online</h1>
                </div>
                <p>
                  Tamra Games longs for fresh & young minds who can mould their
                  approaches with the changing challenges of the digital
                  industry. A growing mind is one of the cherished sights for us
                  as it’s a proof of growth & success in the right direction.
                </p>
                <Link className="learn_more" to="/aboutus">
                  About Us
                </Link>
              </Col>
              <Col
                lg={4}
                sm={12}
                className="wow animate__animated animate__slideInRight"
                style={{ visibility: "visible", animationName: "slideInRight" }}
              >
                <Image className="margin_top" alt="" src={calmrigth} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
