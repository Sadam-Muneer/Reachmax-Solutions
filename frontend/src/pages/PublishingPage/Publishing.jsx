import publishingRight from "../../assets/imgs/publishing_right.png";
import utilizeIcon from "../../assets/imgs/utilize.png";
import gamesIcon1 from "../../assets/imgs/games_icon_1.png";
import gamesIcon2 from "../../assets/imgs/games_icon_2.png";
import gamesIcon3 from "../../assets/imgs/games_icon_3.png";
import gamesIcon4 from "../../assets/imgs/games_icon_4.png";
import iconInnovation from "../../assets/imgs/icon-innovation.jpg";
import iconStealth from "../../assets/imgs/icon-stealth.jpg";
import iconReadiness from "../../assets/imgs/icon-readiness.jpg";
import iconTeamwork from "../../assets/imgs/icon-teamwork.jpg";
import iconMobile from "../../assets/imgs/icon-mobile.jpg";
import iconMoreGames1 from "../../assets/imgs/icon_more_games_1.png";
import iconMoreGames2 from "../../assets/imgs/icon_more_games_2.png";
import iconMoreGames3 from "../../assets/imgs/icon_more_games_3.png";
import iconRing from "../../assets/imgs/ring.png";
import Footer from "../../generic_components/Footer/Footer";
import Navbar from "../../generic_components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="publishingcontent pt-5">
        <div className="publishing_section_1 pt-5">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-6">
                <h1>
                  Publishing Games
                  <br />
                  From Dreams to Reality
                </h1>
                <p>
                  Tamra has been collaborating with independent ventures, gaming
                  teams & companies for about 7 years now & we understand the
                  need of an exclusive strategy for every new project that comes
                  to our table. Understanding the dynamics of each individual
                  game & making a publishing strategy around it is what has
                  earned us the trust of many professionals & businessmen.
                </p>
                <a
                  className="wow slideOutUp learn_more"
                  href="https://inquiry.forms.app/gdpublishing/publish-your-game"
                  target="_blank"
                  style={{ visibility: "visible", animationName: "slideOutUp" }}
                >
                  Publish Your Game
                </a>
              </div>
              <div className="wow animate__animated animate__fadeInDown col-lg-6">
                <div className="solutions_right_icon">
                  <img alt="" src={publishingRight} />
                </div>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="publishing_section_2">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-6">
                <div className="utilize_icon">
                  <img alt="" src={utilizeIcon} />
                </div>
              </div>
              <div className="wow animate__animated animate__fadeInDown col-lg-6">
                <h1>
                  Utilize our global platform
                  <br />
                  for your amazing games.
                </h1>
                <p>
                  Tamra welcomes smart ventures & projects to get publish on our
                  platform. Our credible platform will help push your venture to
                  your desired ends & take out the best results.
                </p>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="publishing_section_3">
          <div className="ring">
            <img alt="" src={iconRing} />
          </div>
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <h1>
                  Publishing Games
                  <br />
                  From Dreams to Reality
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="clr"></div>
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <div className="games_services">
                  <div className="games_services_icons">
                    <img alt="" src={gamesIcon1} />
                  </div>
                  <div className="games_services_details">
                    <h3>Global existence.</h3>
                    <p>
                      We intensify your worldwide reach and keep your brand
                      updated on all the possible platforms and accuracy SMM.
                      Yielding us the perfect mix of being s global leader.
                    </p>
                    <p>
                      Understanding the pros & cons of the market & amplifying
                      existence brings about the brand loyalty and consequently
                      booming the brand image through the globe.
                    </p>
                  </div>
                </div>
                <div className="games_services_right">
                  <div className="games_services_icons">
                    <img alt="" src={gamesIcon2} />
                  </div>
                  <div className="games_services_detailsr">
                    <h3>Become market leader.</h3>
                    <p>
                      Making an extraordinary game can be hard, yet advertising
                      it very well may be much harder. Our group of spectators
                      is your crowd, which is more than 1,000,000 players to
                      date.
                    </p>
                    <p>
                      Cross-promotional mechanisms enable us to inspire alot of
                      users month to month dynamic clients to find and download
                      your game.
                    </p>
                  </div>
                </div>
                <div className="games_services">
                  <div className="games_services_icons">
                    <img alt="" src={gamesIcon3} />
                  </div>
                  <div className="games_services_details">
                    <h3>Develop desirability.</h3>
                    <p>
                      Our keen interest, development hacking and client securing
                      groups will enable you to recognize the best crowd to
                      create for and the best time to go to showcase.
                    </p>
                    <p>
                      Our executives and QA leads will counsel you on the most
                      proficient method to accomplish and surpass player desires
                      as far as game quality.
                    </p>
                  </div>
                </div>
                <div className="games_services_right">
                  <div className="games_services_icons">
                    <img alt="" src={gamesIcon4} />
                  </div>
                  <div className="games_services_detailsr">
                    <h3>It’s your venture!</h3>
                    <p>
                      Our central goal is to help you make extraordinary player
                      encounters. You hold the rights to your exceptional IP as
                      far as possible up to Global Launch, while
                    </p>
                    <div className="games_services_detailsr">
                      <h3>It’s your venture!</h3>
                      <p>
                        Our central goal is to help you make extraordinary
                        player encounters. You hold the rights to your
                        exceptional IP as far as possible up to Global Launch,
                        while we will always be here to guide you through the
                        journey.
                      </p>
                    </div>
                    <p>
                      We accept each game is unique and it requires that special
                      treatment it is made for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="publishing_section_4">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <h1>What are we looking for?</h1>
              </div>
            </div>
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <div className="side_space">
                  <div className="looking_serving">
                    <img alt="" src={iconInnovation} />
                    <h3>Innovation</h3>
                    <p>
                      A great idea in this time & age must include some level of
                      innovation & creativity, with the room of improvement. A
                      promising idea is easy to polish, sell & get returns from.
                    </p>
                  </div>
                  <div className="looking_serving">
                    <img alt="" src={iconStealth} />
                    <h3>Stealth</h3>
                    <p>
                      Many of the times, an exemplary idea is not that easy to
                      float in to the crowd. Going up from smaller markets to
                      big ones or dividing it into beta & alpha versions is one
                      way to go about it.
                    </p>
                  </div>
                  <div className="looking_serving">
                    <img alt="" src={iconReadiness} />
                    <h3>Readiness</h3>
                    <p>
                      Come to us prepared for the launch. Make necessary steps
                      to take it to 90% and then we will easily take over it
                      make it reach more than a 100%. Gutsy & bold steps give
                      you exponential success.
                    </p>
                  </div>
                  <div className="clr"></div>
                </div>
              </div>
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <div className="side_space2">
                  <div className="looking_servings">
                    <img alt="" src={iconTeamwork} />
                    <h3>Teamwork</h3>
                    <p>
                      A great piece of work is made by a great team working in
                      sync together. Passion & talent put to hard work yield
                      some unthinkable results beyond expectations.
                    </p>
                  </div>
                  <div className="looking_servings">
                    <img alt="" src={iconMobile} />
                    <h3>Mobile</h3>
                    <p>
                      We are mainly focused on the mobile platforms & we prefer
                      projects developed for iOS & Android. Hypercasual,
                      shooting, sports, adventure & kids games are our top
                      selling ideas.
                    </p>
                  </div>
                  <div className="clr"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="publishing_section_5">
          <div className="container">
            <div className="row">
              <div className="wow animate__animated animate__fadeInDown col-lg-12">
                <h1>Submit your project to learn more</h1>
                <div className="more_games_icons">
                  <img alt="" src={iconMoreGames1} />
                  <img alt="" src={iconMoreGames2} />
                  <img alt="" src={iconMoreGames3} />
                </div>
                <a
                  className="more_games"
                  href="https://inquiry.forms.app/gdpublishing/publish-your-game"
                  target="_blank"
                >
                  Publish Your Game
                </a>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="clr"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
