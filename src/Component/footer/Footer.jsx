import "./footer.css";
import fimg from "../../Assets/Group 9146.svg";
import fimg2 from "../../Assets/Instagram post - 1 (8).svg";
import fimg3 from "../../Assets/facebook.svg";
import fimg4 from "../../Assets/instagram.svg";
import fimg5 from "../../Assets/twitter.svg";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer_mainWrapper">
        <div className="footer_img">
          <img src={fimg} alt="" />
        </div>
        <div className="footer_form">
          <div className="contain">
            <p>CONTACT US</p>
            <h2>Let’s Collaborate Now!</h2>
          </div>

          <form action="">
            <div className="name">
              <label htmlFor="name"> Full Name</label> <br />
              <input type="text" name="name" id="name" />
            </div>
            <div className="form_innersection">
              <div className="email">
                <label htmlFor="email"> Email</label> <br />
                <input type="email" name="email" id="email" />
              </div>
              <div className="date">
                <label htmlFor="date"> Date</label> <br />
                <input type="date" name="date" id="date" />
              </div>
            </div>
            <div className="massage">
              <label htmlFor="massage"> Massage</label> <br />
              <textarea
                name="massage"
                id="massage"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Send Massage</button>
            </div>
          </form>
        </div>
      </div>
      <div className="copyright_section">
        <div className="copy_img">
          <img src={fimg2} alt="" />
        </div>
        <div className="social_logo">
          <img src={fimg3} alt="" />
          <img src={fimg4} alt="" />
          <img src={fimg5} alt="" />
        </div>
        <div className="text_copy">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Get in Touch</p>
          <p>Copyright © {year} TechLearning. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
