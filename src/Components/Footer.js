import TwitterLogo from '../download.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* This component will return a simple footer section */}
      <footer className="mt-5 ">
        <div className="container mt-5">
              <div className="row g-3 m-3 mt-5 ">
                <div className="col-lg-6 col-md-6 col-sm-12 g-5 mt-5 text-start">
                  <div className="">
                    <h4>
                      Your Movie Browsing Buddy is here &#128513;!
                    </h4>
                    <big>
                      Browse the Latest movies to TV shows and every Important
                      Detail about it and so on.
                    </big>
                  </div>
                  <div>
                    <div className="fs-4">
                      Got any Ideas? &nbsp;
                      <small className="fs-6">
                        Please navigate to &#x2193;
                      </small>
                    </div>
                  </div>
                  <Link to="/contact" className="fw-bold hover-effect-nav">
                    Contact Us
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 g-5  text-lg-end">
                    <h4>
                    Browsing is fun don't you think?
                    </h4>
                    <div>
                    <big>Wanna know more about our services?</big>
                    <br/>
                    *All images from Unsplash.com
                    <div>
                    <small className="fs-6">Please navigate to &#x2192; </small> 
                    <Link to="/about" className="fw-bold hover-effect-nav ">
                      About Us
                    </Link>
                    </div>
                    </div>
                  <a
                    className=" me-3"
                    href="https://instagram.com/carethajrat"
                    target="_blank"
                  >
                    <img
                      src="https://user-images.githubusercontent.com/113019349/212677151-5fb7552c-e62a-4318-a1cf-a0972b1294ea.png"
                      alt="Instagram Icon "
                      height="30"
                      width="30"
                      target="_blank"
                      className="rounded-circle"
                    />
                  </a>
                  <a
                    className=" me-3"
                    href="mailto:khatrihajra173@gmail.com"
                    target="_blank"
                  >
                    <img
                      src="https://user-images.githubusercontent.com/113019349/212677160-3c3087d6-86f2-4992-ab3e-c7130b34c9b9.png"
                      alt="Mail Icon "
                      height="30"
                      width="30"
                      target="_blank"
                      className="rounded-circle"
                    />
                  </a>
                  <a
                    className=" me-3 "
                    href="https://twitter.com/Carethajrat"
                    target="_blank"
                  >
                    <img
                      src={TwitterLogo}
                      alt="Twitter Icon "
                      height="30"
                      width="30"
                      target="_blank"
                      className="rounded-circle"
                    />
                  </a>
                </div>
              </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
