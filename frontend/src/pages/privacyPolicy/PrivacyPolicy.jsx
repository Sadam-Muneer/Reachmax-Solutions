import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-container py-5">
        <div className="container py-5">
          <h1>Privacy Policy</h1>
          <p>Welcome to Reachnax Solutions!</p>

          <h2>Introduction</h2>
          <p>
            Reachnax Solutions is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Website includes:
            <ul>
              <li>
                Personal Data: Personally identifiable information, such as your
                name, shipping address, email address, and telephone number, and
                demographic information, such as your age, gender, hometown, and
                interests, that you voluntarily give to us when you register
                with the Website or when you choose to participate in various
                activities related to the Website.
              </li>
              <li>
                Derivative Data: Information our servers automatically collect
                when you access the Website, such as your IP address, your
                browser type, your operating system, your access times, and the
                pages you have viewed directly before and after accessing the
                Website.
              </li>
            </ul>
          </p>

          <h2>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Website to:
            <ul>
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>
                Fulfill and manage purchases, orders, payments, and other
                transactions related to the Website.
              </li>
              <li>
                Generate a personal profile about you to make future visits to
                the Website more personalized.
              </li>
            </ul>
          </p>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
            <ul>
              <li>
                By Law or to Protect Rights: If we believe the release of
                information about you is necessary to respond to legal process,
                to investigate or remedy potential violations of our policies,
                or to protect the rights, property, and safety of others, we may
                share your information as permitted or required by any
                applicable law, rule, or regulation.
              </li>
              <li>
                Business Transfers: We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
            </ul>
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2>Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you believe we might have any information from or about
            a child under 13, please contact us.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
            <br />
            <strong>Reachnax Solutions</strong>
            <br />
            Email:{" "}
            <a href="mailto:contact@reachnaxsolutions.com">
              contact@reachnaxsolutions.com
            </a>
            <br />
            Phone: <a href="tel:+1234567890">+1234567890</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
