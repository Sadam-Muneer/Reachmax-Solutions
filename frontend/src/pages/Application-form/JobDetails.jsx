import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import WOW from "wowjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import { Row, Col } from "react-bootstrap";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    companyName: "",
    website: "",
  });

  const [services, setServices] = useState({
    WebDevelopment: {
      checked: false,
      price: "",
    },
    AndroidDevelopment: {
      checked: false,
      price: "",
    },
    SEO: {
      checked: false,
      price: "",
    },
    graphic_Designing: {
      checked: false,
      price: "",
    },
  });

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setServices({
      ...services,
      [name]: {
        ...services[name],
        checked: checked,
      },
    });
  };

  const handlePriceChange = (e, serviceName) => {
    const { value } = e.target;
    setServices({
      ...services,
      [serviceName]: {
        ...services[serviceName],
        price: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const servicesData = {};
    Object.keys(services).forEach((service) => {
      if (services[service].checked) {
        servicesData[service] = {
          price: services[service].price,
        };
      }
    });

    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: servicesData,
          message: formData.message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          companyName: "",
          website: "",
        });

        const updatedServices = {};
        Object.keys(services).forEach((service) => {
          updatedServices[service] = {
            checked: false,
            price: "",
          };
        });
        setServices(updatedServices);
      } else {
        const errorResult = await response.json();
        console.error("Error response:", errorResult);
        toast.error("Failed to submit form: " + errorResult.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("An error occurred while submitting the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="root pt-5">
        <div className="fullpage pt-5">
          <div className="jobs_career_section_2">
            <div className="container">
              {/* <video autoPlay loop muted playsInline className="background-clip">
              <source src="">

              </source>
            </video> */}
              <h3 className="application_title">Application Form</h3>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Your Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">
                        Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Enter Your Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="mb-3">
                      <label htmlFor="website" className="form-label">
                        Website
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mb-3">
                  <h1 className="application_title">
                    What Services Can We Provide You? *
                  </h1>
                  {Object.keys(services).map((service) => (
                    <div className="form-check" key={service}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={service}
                        name={service}
                        checked={services[service].checked}
                        onChange={handleServiceChange}
                      />
                      <label className="form-check-label" htmlFor={service}>
                        {service.replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </label>
                      {services[service].checked && (
                        <select
                          className="form-select"
                          value={services[service].price}
                          onChange={(e) => handlePriceChange(e, service)}
                        >
                          <option value="">Select price</option>
                          <option value="$500 to $1000 per Month">
                            $500 to $1000 per Month
                          </option>
                          <option value="$1000 to $3000 per Month">
                            $1000 to $3000 per Month
                          </option>
                          <option value="$3000 to $5000 per Month">
                            $3000 to $5000 per Month
                          </option>
                          <option value="$5000 to $10000 per Month">
                            $5000 to $10000 per Month
                          </option>
                        </select>
                      )}
                    </div>
                  ))}
                  <div>
                    <p>Estimated Monthly Budget *</p>
                  </div>
                </div>
                <div>
                  <p>Estimated Web Budget *</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="py-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ApplicationForm;
