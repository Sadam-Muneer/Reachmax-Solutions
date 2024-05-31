import "./TermandConditions.css";
import Navbar from "../../generic_components/Navbar/Navbar";
import Footer from "../../generic_components/Footer/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container py-5">
        <div className="container py-5">
          <h1>Terms and Conditions</h1>
          <p>Welcome to Reachnax Solutions!</p>

          <h2>Introduction</h2>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Reachnax Solutions Website.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Reachnax
            Solutions and/or its licensors own all the intellectual property
            rights and materials contained in this Website.
          </p>

          <h2>Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
            <ul>
              <li>Publishing any Website material in any other media</li>
              <li>
                Selling, sublicensing and/or otherwise commercializing any
                Website material
              </li>
              <li>Publicly performing and/or showing any Website material</li>
              <li>
                Using this Website in any way that is or may be damaging to this
                Website
              </li>
              <li>
                Using this Website in any way that impacts user access to this
                Website
              </li>
              <li>
                Engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website
              </li>
              <li>
                Using this Website to engage in any advertising or marketing
              </li>
            </ul>
          </p>

          <h2>Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, “Your Content” shall
            mean any audio, video text, images or other material you choose to
            display on this Website. By displaying Your Content, you grant
            Reachnax Solutions a non-exclusive, worldwide irrevocable,
            sub-licensable license to use, reproduce, adapt, publish, translate
            and distribute it in any and all media.
          </p>

          <h2>No warranties</h2>
          <p>
            This Website is provided “as is,” with all faults, and Reachnax
            Solutions express no representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            In no event shall Reachnax Solutions, nor any of its officers,
            directors and employees, be held liable for anything arising out of
            or in any way connected with your use of this Website whether such
            liability is under contract. Reachnax Solutions, including its
            officers, directors and employees shall not be held liable for any
            indirect, consequential or special liability arising out of or in
            any way related to your use of this Website.
          </p>

          <h2>Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent Reachnax Solutions from
            and against any and/or all liabilities, costs, demands, causes of
            action, damages and expenses arising in any way related to your
            breach of any of the provisions of these Terms.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>

          <h2>Variation of Terms</h2>
          <p>
            Reachnax Solutions is permitted to revise these Terms at any time as
            it sees fit, and by using this Website you are expected to review
            these Terms on a regular basis.
          </p>

          <h2>Assignment</h2>
          <p>
            The Reachnax Solutions is allowed to assign, transfer, and
            subcontract its rights and/or obligations under these Terms without
            any notification. However, you are not allowed to assign, transfer,
            or subcontract any of your rights and/or obligations under these
            Terms.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between Reachnax
            Solutions and you in relation to your use of this Website, and
            supersede all prior agreements and understandings.
          </p>

          <h2>Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with
            the laws of the State of [Your State], and you submit to the
            non-exclusive jurisdiction of the state and federal courts located
            in [Your State] for the resolution of any disputes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
