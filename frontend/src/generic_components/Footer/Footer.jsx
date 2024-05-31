import { Link } from "react-router-dom";
import footerlogo from "../../assets/imgs/footer_logo.png";
import icons from "../../assets/imgs/icons.jpg";
import phone from "../../assets/imgs/icon_phone.jpg";
import email from "../../assets/imgs/icon_email.jpg";
import facebook from "../../assets/imgs/icon_facebook.jpg";
import Instagram from "../../assets/imgs/icon_instagram.jpg";
import Linkedin from "../../assets/imgs/icon_linkedin.jpg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget">
              <img
                className="footer_logonew"
                src={footerlogo}
                alt="Reachnax Solutions"
                title="Reachnax Solutions"
              />
              <p className="mb-0">
                Making you realize the power of Digital Intelligence.
              </p>

              <img
                className="footer_threeimages"
                src={icons}
                alt="Reachnax Solutions"
                title="Reachnax Solutions"
              />

              <div className="copy_right">
                © Copyright Reachnax Solutions 2023,
                <br /> All Rights Reserved.{" "}
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3 className="widget_title">Company</h3>
              <ul className="menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/publishing">Publishing</Link>
                </li>
                <li>
                  <Link to="/whygames">Why Games</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h3 className="widget_title">Get on board</h3>
              <ul className="menu">
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/termsAndConditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="widget">
              <h3 className="widget_title">Get in touch</h3>
              <p>
                <img className="footer-icon" alt="" src={phone} />
                <a href="tel:+1234567890">+1234567890</a>
              </p>
              <p>
                <img className="footer-icon" alt="" src={email} />
                <a href="mailto:contact@reachnaxsolutions.com">
                  contact@reachnaxsolutions.com
                </a>
              </p>
              <p>
                <img className="footer-icon" alt="" src={facebook} />
                <a href="https://www.facebook.com/ReachnaxSolutions">
                  Facebook
                </a>
              </p>
              <p>
                <img className="footer-icon" alt="" src={Instagram} />
                <a href="https://www.instagram.com/ReachnaxSolutions">
                  Instagram
                </a>
              </p>
              <p>
                <img className="footer-icon" alt="" src={Linkedin} />
                <a href="https://www.linkedin.com/company/reachnaxsolutions">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </footer>
  );
}

export default Footer;
