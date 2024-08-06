import "./footer.css";
import fimg from "../../Assets/Croods Friends.svg";
import fimg2 from "../../Assets/Instagram post - 1 (8).svg";
import fimg3 from "../../Assets/facebook.svg";
import fimg4 from "../../Assets/instagram.svg";
import fimg5 from "../../Assets/twitter.svg";
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer() {
  // const [formData, setFormData] = useState([]);
  //   const navigate = useNavigate()
  //   const [prev, setprev] = useState([]);
  //   const [nameError, setNameError] = useState("");
  //   const [PhoneError, setPhoneError] = useState("");
  //   const [fromError, setFromError] = useState("");
  //   const [ToError, setToError] = useState("");

    useEffect(() => {
    }, [])
  const year = new Date().getFullYear();

  function num(e) {
    const value = e.target.value;
    const numbericValue = Number(value);

    if (value.length > 10) {
        e.target.value = value.slice(0, 10);
    }

    if (isNaN(numbericValue)) {
        e.target.value = "";
    }
}
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs
          .sendForm('service_cp9dfxe', 'template_q9otj0r', form.current, {
              publicKey: '7i1I80lXy5wbnWwYt',
          })
          .then(
              () => {
                  alert('Thank You ');
              },
              (error) => {
                alert('Failed Please Try Again');
                  console.log('FAILED...', error.text);
              },
          );
  };


  return (
    <>
      <div className="footer_mainWrapper" id="sec-contact">
        <div className="footer_img">
          <img src={fimg} alt="" />
        </div>
        <div className="footer_form">
          <div className="contain">
            <p id="sec-contact">CONTACT US</p>
            <h2>Let’s Collaborate Now!</h2>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <label htmlFor="name"> Full Name</label> <br />
              <input
              id="Your Name"
              type="text"
              name='message'
              placeholder="Your Name"
              required
          />
            </div>
            <div className="form_innersection">
              <div className="email">
                <label htmlFor="email"> Email</label> <br />
                <input type="email" name="user_email"  placeholder="Your Gmail" required/>
              </div>
              <div className="date">
                <label htmlFor="date"> Contact</label> <br />
                <input
                id="Your Contact No."
                type="tel"
                name="message"
                placeholder="Your Contact No."
                onInput={num}
                required
            />
              </div>
            </div>
            <div className="message">
              <label htmlFor="massage"> Massage</label> <br />
              <textarea
                name="message"
                id="msg"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="button">
              <button type="submit" value='send'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="copyright_section">
        <div className="copy_img">
          <img src={fimg2} alt="" />
        </div>
        <div className="social_logo">
        <NavLink to="https://www.facebook.com/share/BjKQwtCMSE7vtsTs/?mibextid=qi2Omg"><img src={fimg3} alt="" /></NavLink> 
        <NavLink to="https://www.instagram.com/cleancodin">  <img src={fimg4} alt="" /></NavLink>
        <NavLink to="https://www.linkedin.com/company/techgicus-software-solutions-pvt-ltd/">  <img src={fimg5} alt="" /></NavLink>

        </div>
        <div className="text_copy">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Copyright © {year} Powered by Techgicus Software Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
