import { useEffect } from "react";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import "./career.css";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import jobsCareerTitle from "../../assets/imgs/jobs_career_title.jpg";
import { Button } from "react-bootstrap";

const Careers = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="fullpage pt-5">
        <div className="jobs_career_section_1 pt-5">
          <img alt="" src={jobsCareerTitle} />
        </div>
        <div className="jobs_career_section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="jobs_breadcrumb">
                  <ul>
                    <li>
                      <Link to="/careers" style={{ textDecoration: "none" }}>
                        All Job Positions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="wow animate__animated animate__bounceInUp jobs_arae"
                style={{ display: "flex" }}
              >
                <div className="col-lg-3">
                  <h3>CG Artist</h3>
                  <div className="location">
                    Location: <b>Lahore</b>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    <Link to="/jobdetails" style={{ textDecoration: "none" }}>
                      Game District is an emerging Mobile Games Leader with 500+
                      Million Games Downloads and trusted by the Biggest
                      companies like NFL, Hobbits, LEGO, and Outfit7. We are
                      looking for a talented CG Artist to join our design team.
                    </Link>
                  </p>
                </div>
                <div className="col-lg-1"> </div>
                <div className="col-lg-2">
                  <Link to="/jobdetails" className="applybtnlink">
                    <Button
                      className="applybtn"
                      style={{ textDecoration: "none", textAlign: "center" }}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
                <div className="clr"></div>
              </div>
              <div
                className="wow animate__animated animate__bounceInUp jobs_arae"
                style={{ display: "flex" }}
              >
                <div className="col-lg-3">
                  <h3>Unity Game Developer</h3>
                  <div className="location">
                    Location: <b>Lahore</b>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>
                    <Link to="/jobdetails" style={{ textDecoration: "none" }}>
                      We are looking for a talented Unity 3D Developer to join
                      our design team. As a Unity Developer, you will be
                      responsible for planning and implementing game
                      functionality, building the game code, identifying
                      bottlenecks, and ensuring the quality of the finished
                      product.
                    </Link>
                  </p>
                </div>
                <div className="col-lg-1"> </div>
                <div className="col-lg-2">
                  <Link to="/jobdetails" className="applybtnlink">
                    <Button
                      className="applybtn"
                      style={{ textDecoration: "none", textAlign: "center" }}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
                <div className="clr"></div>
              </div>
              <div className="clr"></div>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="clr"></div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
