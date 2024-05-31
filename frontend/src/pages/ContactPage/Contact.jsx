import { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./contact.css";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import facebookIcon from "../../assets/imgs/facebook_icon.png";
import instaIcon from "../../assets/imgs/insta_icon.png";
import innIcon from "../../assets/imgs/inn_icon.png";
import youtubeIcon from "../../assets/imgs/youtube_icon.png";
import mailIcon from "../../assets/imgs/mail_icon.png";
import gameDistrictImage from "../../assets/imgs/game-district2.jpg";
import dotsImage from "../../assets/imgs/dots.jpg";
import globalIcon1 from "../../assets/imgs/global_icon_contact_1.jpg";
import globalIcon2 from "../../assets/imgs/global_icon_contact_2.jpg";
import globalIcon3 from "../../assets/imgs/global_icon_contact_3.jpg";
import globalIcon4 from "../../assets/imgs/global_icon_contact_4.jpg";
import globalIcon5 from "../../assets/imgs/global_icon_contact_5.jpg";
import globalIcon6 from "../../assets/imgs/global_icon_contact_6.jpg";

const Contact = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const globalIcons = [
    globalIcon1,
    globalIcon2,
    globalIcon3,
    globalIcon4,
    globalIcon5,
    globalIcon6,
  ];

  return (
    <>
      <Navbar />
      <div className="contactcontent pt-5">
        <div className="contact_section_1 pt-5">
          <div className="container">
            <div className="row">
              <p>it’s not hard to find your</p>
              <h1>partners</h1>
              <div className="wow animate__animated animate__slideInLeft col-lg-5">
                <div className="social_icons_contact">
                  <Link to="https://www.facebook.com/gamedistrict1/">
                    <img src={facebookIcon} alt="Facebook" />
                  </Link>
                  <Link to="https://www.instagram.com/gamedistrict.co/">
                    <img src={instaIcon} alt="Instagram" />
                  </Link>
                  <Link to="https://www.linkedin.com/company/game-district/about/">
                    <img src={innIcon} alt="LinkedIn" />
                  </Link>
                  <Link to="#youtube">
                    <img src={youtubeIcon} alt="YouTube" />
                  </Link>
                </div>
              </div>
              <div className="wow animate__animated animate__slideInRight col-lg-7">
                <div className="contact_section_2_right">
                  <div className="contact_form_partners">
                    <h4>
                      Write something about your project so we can get back to
                      you with a proposal in 24hours.
                    </h4>
                    <p>
                      <img className="mail_icon" src={mailIcon} alt="Mail" />
                    </p>
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f71-p37-o1"
                      dir="ltr"
                      lang="en-US"
                    >
                      <form
                        action="https://formsubmit.co/hamzaalchamak442979@gmail.com"
                        method="post"
                        className="wpcf7-form"
                        encType="multipart/form-data"
                      >
                        <p>
                          <span className="wpcf7-form-control-wrap Name">
                            <input
                              type="text"
                              name="Name"
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              placeholder="Name*"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap EmailId">
                            <input
                              type="email"
                              name="EmailId"
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              placeholder="Email Id*"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap CompanyName">
                            <input
                              type="text"
                              name="CompanyName"
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              placeholder="Company Name*"
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap ApproxBudget">
                            <input
                              type="text"
                              name="ApproxBudget"
                              size="40"
                              className="wpcf7-form-control wpcf7-text"
                              aria-invalid="false"
                              placeholder="Approx Budget"
                            />
                          </span>
                        </p>
                        <p>
                          <b>Optional</b>
                        </p>
                        <p>
                          <span className="wpcf7-form-control-wrap ProjectDetails">
                            <textarea
                              name="ProjectDetails"
                              cols="40"
                              rows="10"
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Project Details"
                            ></textarea>
                          </span>
                        </p>
                        <div className="file">
                          <span className="wpcf7-form-control-wrap Dropitlikeitshot">
                            <input
                              type="file"
                              name="Dropitlikeitshot"
                              size="40"
                              className="wpcf7-form-control wpcf7-file drop_it"
                              accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                              aria-invalid="false"
                            />
                          </span>
                          <label>Drop it like it’s hot</label>
                        </div>
                        <p>
                          <input
                            type="submit"
                            className="wpcf7-form-control wpcf7-submit"
                            value="submit your project"
                          />
                        </p>
                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
      </div>
      <div
        className="about_section_7"
        style={{ backgroundColor: "rgb(248, 248, 248)" }}
      >
        <div className="container">
          <div className="row">
            <div className="wow animate__animated animate__slideInDown col-lg-12">
              <img alt="Game District" src={gameDistrictImage} />
              <p>
                Dubai<span>-</span>SanFrancisco<span>-</span>Manama
                <span>-</span>Lahore
              </p>
            </div>
            <div className="dots">
              <img alt="Dots" src={dotsImage} />
            </div>
            <div className="col-lg-12">
              <div className="global_icon">
                {globalIcons.map((icon, index) => (
                  <img
                    key={index}
                    alt={`Global Icon ${index + 1}`}
                    src={icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
