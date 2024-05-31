import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureWorkSlide1 from "../../assets/imgs/feature_work_slide_1.jpg";
import featureWorkSlide2 from "../../assets/imgs/feature_work_slide_2.jpg";
import featureWorkSlide3 from "../../assets/imgs/feature_work_slide_3.jpg";
import "./Slick.css";

const ReactSlicks = () => {
  const settings = {
    dots: true,
    infinite: true, // Set to true to continuously slide without stopping
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="solutions_section_6">
      <div className="container">
        <div className="row">
          <div className="wow animate__animated animate__slideInDown col-lg-12">
            <h1>Featured Work</h1>
            <p></p>
          </div>
        </div>
        <div className="slider-container border-rounded">
          <Slider {...settings}>
            <div className="slide-item  px-2">
              <img src={featureWorkSlide1} alt="Slide 1" />
            </div>
            <div className="slide-item  px-2">
              <img src={featureWorkSlide2} alt="Slide 2" />
            </div>
            <div className="slide-item  px-2">
              <img src={featureWorkSlide3} alt="Slide 3" />
            </div>
            <div className="slide-item  px-2">
              <img src={featureWorkSlide1} alt="Slide 4" />
            </div>
            <div className="slide-item  px-2">
              <img src={featureWorkSlide2} alt="Slide 5" />
            </div>
            <div className="slide-item px-2">
              <img src={featureWorkSlide3} alt="Slide 6" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReactSlicks;
