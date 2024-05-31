import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "wowjs/css/libs/animate.css";
import WOW from "wowjs";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import "./whygames.css";
import leftIcon from "../../assets/imgs/left-icon.jpg";
import centerIcon from "../../assets/imgs/icon-g.jpg";
import rightIcon from "../../assets/imgs/right-icon.jpg";
import client1 from "../../assets/imgs/why-client-1.jpg";
import client2 from "../../assets/imgs/why-client-2.jpg";
import client3 from "../../assets/imgs/why-client-3.jpg";
import client4 from "../../assets/imgs/why-client-4.jpg";
import gameIcon1 from "../../assets/imgs/game-icon-1.png";
import gameIcon2 from "../../assets/imgs/game-icon-2.png";
import gameIcon3 from "../../assets/imgs/game-icon-3.png";
import gameIcon4 from "../../assets/imgs/game-icon-4.png";
import eraImg from "../../assets/imgs/era.jpg";
import userAcquisition from "../../assets/imgs/icon-user-acquisition.jpg";
import engagement from "../../assets/imgs/icon-engagement.jpg";
import monetization from "../../assets/imgs/icon-monetization.jpg";
import ventureIcon1 from "../../assets/imgs/venture-icon-1.jpg";
import ventureIcon2 from "../../assets/imgs/venture-icon-2.jpg";
import ventureIcon3 from "../../assets/imgs/venture-icon-3.jpg";
import insideImg from "../../assets/imgs/inside.jpg";
import insideG1 from "../../assets/imgs/inside-g-1.jpg";
import insideG2 from "../../assets/imgs/inside-g-2.jpg";
import insideG3 from "../../assets/imgs/inside-g-3.jpg";
import insideG4 from "../../assets/imgs/inside-g-4.jpg";
import insideG5 from "../../assets/imgs/inside-g-5.jpg";
import insideG6 from "../../assets/imgs/inside-g-6.jpg";
import insideG7 from "../../assets/imgs/inside-g-7.jpg";
import insideG8 from "../../assets/imgs/inside-g-8.jpg";
import insideG9 from "../../assets/imgs/inside-g-9.jpg";
import insideG10 from "../../assets/imgs/inside-g-10.jpg";

const TamraGames = () => {
  React.useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <div className="pt-5">
        <Navbar />
        <div className="whygames_section_1 pt-5">
          <div className="container">
            <div className="whygames_section_inner">
              <div className="row">
                <div className="wow animate__animated animate__fadeInDown col-lg-12">
                  <div className="whyicons">
                    <img className="whyleft-icon" src={leftIcon} alt="" />
                    <img className="whycenter-icon" src={centerIcon} alt="" />
                    <img className="whyright-icon" src={rightIcon} alt="" />
                  </div>
                  <p>Emerging mobile game leaders</p>
                </div>
              </div>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="whygamesbg"></div>
        </div>

        <div className="whygames_section_2">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInLeft col-lg-3">
                <img src={client1} alt="" />
              </div>
              <div className="wow animate__animated animate__slideInLeft col-lg-3">
                <img src={client2} alt="" />
              </div>
              <div className="wow animate__animated animate__slideInLeft col-lg-3">
                <img src={client3} alt="" />
              </div>
              <div className="wow animate__animated animate__slideInLeft col-lg-3">
                <img src={client4} alt="" />
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="wow animate__animated animate__slideInLeft content_details">
                  <h4>Create your next</h4>
                  <h2>Viral Game App</h2>
                  <p>
                    85% of the top grossing apps are games. App Store growing at
                    an unprecedented rate has made game development an
                    opportunity of our decade. Turn your idea into reality and
                    build the next viral mobile game.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="game_app">
                  <div className="game_icons">
                    <img
                      className="margin_icon_1 wow rollIn"
                      src={gameIcon1}
                      alt=""
                    />
                    <img
                      className="margin_icon_2 wow rollIn"
                      src={gameIcon2}
                      alt=""
                    />
                    <img className="wow rollIn" src={gameIcon3} alt="" />
                    <img
                      className="margin_icon_3 wow rollIn"
                      src={gameIcon4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_4">
          <img src="imgs/ring.png" alt="" className="ring_whygames" />
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInLeft col-lg-6">
                <div className="era_img">
                  <img src={eraImg} alt="" />
                </div>
              </div>
              <div className="wow slideInRight col-lg-6">
                <div className="text_area">
                  <h4>the era of</h4>
                  <h2>Mobile Games</h2>
                  <p>
                    With 2 Billion smartphone users around the world, App Store
                    &amp; Google Play revenues are expected to reach tens of
                    billions of dollars in the next couple of years. Clearly,
                    mobile is taking over a big part of the entertainment
                    business traditionally generated by PCs &amp; games console.
                  </p>
                  <p>
                    This makes game app development a tremendous opportunity in
                    the consumer technology revolution we are experiencing now.
                    Not surprisingly, game apps represent the majority of
                    revenues out of developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_5">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInLeft col-lg-6">
                <div className="text_2ndarea">
                  <h4>the challenge of</h4>
                  <h2>Delivering The Best</h2>
                  <p>
                    The rising numbers of mobile users &amp; digital opinions
                    has made game development a crucial &amp; challenging task.
                    But our team at Game District counters all the hurdles with
                    professional approach &amp; tactics.
                  </p>
                  <p>
                    Separating the venture into Design, Development &amp;
                    Publishing allows us to cater the various aspects of the
                    game properly.
                  </p>
                </div>
              </div>
              <div className="wow animate__animated animate__slideInRight col-lg-6">
                <div className="services_delivering_raw">
                  <div className="services_delivering margintop">
                    <img src={userAcquisition} alt="" />
                    <h5 style={{ fontWeight: 700 }}>User Acquisition</h5>
                    <p>
                      If your customer acquisition costs are too high, you may
                      not be able to sustain your business. Most successful game
                      apps, such as Candy Crush or QuizUp, have hacked their
                      growth by implementing smart referral and viral features.
                    </p>
                  </div>
                </div>
                <div className="services_delivering_raw">
                  <div className="services_delivering">
                    <img src={engagement} alt="" />
                    <h5 style={{ fontWeight: 700 }}>Engagement</h5>
                    <p>
                      Cryptocurrencies are no longer unregulated. Depending on
                      their status and location, digital currency apps may have
                      to comply with rules such as Anti-Money Laundering
                      Programs, Suspicious Activity Reports etc.
                    </p>
                  </div>
                  <div className="services_delivering">
                    <img src={monetization} alt="" />
                    <h5 style={{ fontWeight: 700 }}>Monetization</h5>
                    <p>
                      How to monetize users is another frequent challenge game
                      developers face. The industry has shifted from ads to
                      in-app purchases, but building an efficient and
                      sustainable business is not easy at all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_6">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInDown col-lg-12">
                <div className="text_3rdarea">
                  <h4>How can we help in</h4>
                  <h2>Your Venture</h2>
                  <p>
                    In Game Development, achieving greatness is about turning
                    your creative vision into a seamless and engaging player
                    experience. That’s what makes a difference between
                    awesomeness and mediocrity when it comes to engagement.
                  </p>
                  <p>
                    However, your overall strategy should go way beyond
                    development aspect. Although your product strategy should be
                    about crafting an amazing user experience, it needs to think
                    about implementing an effective monetization and business
                    strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="venture_icon">
                  <img
                    className="margin_icon_1 wow rollIn"
                    src={ventureIcon1}
                    alt=""
                  />
                  <img
                    className="margin_icon_2 wow rollIn"
                    src={ventureIcon2}
                    alt=""
                  />
                  <img
                    className="margin_icon_3 wow rollIn"
                    src={ventureIcon3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_7">
          <div className="container">
            <div className="whygames_section_7inner">
              <div className="row">
                <div className="wow animate__animated animate__slideInLeft col-lg-12">
                  <div className="text_4tharea">
                    <h4>It all starts with</h4>
                    <h2>The Right Strategy</h2>
                    <p>
                      The quality of game design ultimately depends on
                      creativity and vision. But that represents only part of
                      the story. Transforming this creative vision into an
                      engaging and seamless user experience, while building a
                      viable business model on top of it, is what separates
                      mediocrity from greatness.
                    </p>
                    <p>
                      At Game District, we understand this. Our product managers
                      worked on a wide range of top selling game apps, which
                      cumulatively achieved tens of millions of downloads.
                    </p>
                    <p>
                      From fleshing out the initial creative idea, building an
                      exciting storyboard and crafting an amazing user
                      experience to building a viable monetization energy, our
                      product manager will work with you on every aspect of your
                      game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="home_section_inside_gamedistrict">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__slideInDown col-lg-12">
                <img alt="" src={insideImg} />
                <p>
                  Game District longs for fresh &amp; young minds who can mould
                  their approaches with the changing challenges of the digital
                  industry. A growing mind is one of the cherished sights for us
                  as it’s a proof of growth &amp; success in the right
                  direction.
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="wow animate__animated animate__slideOutUp inside_gamedistrict_pic">
            <div className="inside_img">
              <img src={insideG1} alt="" />
              <img src={insideG2} alt="" />
            </div>
            <div className="inside_img2">
              <img src={insideG3} alt="" />
              <img src={insideG4} alt="" />
            </div>
            <div className="inside_img3">
              <img src={insideG5} alt="" />
              <img src={insideG6} alt="" />
            </div>
            <div className="inside_img4">
              <img src={insideG7} alt="" />
              <img src={insideG8} alt="" />
            </div>
            <div className="inside_img5">
              <img src={insideG9} alt="" />
              <img src={insideG10} alt="" />
            </div>
          </div>
        </div>

        <div className="home_section_joinus">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <a className="apply_now" href="/whygames">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
      <Footer />
    </>
  );
};

export default TamraGames;
