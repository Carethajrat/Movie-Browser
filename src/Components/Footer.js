import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* This component will return a simple footer section */}
      <footer className="mt-5 ">
        <div className="container mt-5">
          <div className="row g-3 m-3 mt-5">
            <div className="col-lg-6 col-sm-8 g-5 mt-5 ">
              <p>
                <Link to="/" className="fw-bold">
                  caretSurf
                </Link>
                <br />
                <big>
                  Browse the Latest movies to TV shows and every Important
                  Detail about it and so on.
                </big>
              </p>
              <h4>Got any Ideas?</h4>
              <Link to="/contact" className="fw-bold">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6 col-sm-4 g-5 ">
              <big>
                Want to know more about us?
                <Link to="/about" className="fw-bold">
                  About Us
                </Link>
              </big>
              <br />
              <small className="fw-bold">*All images from Unsplash.com</small>
              <h3 className="m-lg-2 mb-lg-3">Chat us</h3>

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
                href="https://instagram.com/carethajrat"
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
                className=" me-3"
                href="https://instagram.com/carethajrat"
                target="_blank"
              >
                <img
                  src="https://user-images.githubusercontent.com/113019349/212677175-1dcdbac7-402e-40bd-92d4-9f889562e90e.jpg"
                  alt="Whatsapp Icon "
                  height="30"
                  width="30"
                  target="_blank"
                  className="rounded-circle"
                />
              </a>
              <a
                className=" me-3 "
                href="https://instagram.com/carethajrat"
                target="_blank"
              >
                <img
                  src="https://user-images.githubusercontent.com/113019349/212677170-ff77089c-95bb-422a-8932-61114a6b0b5b.jpg"
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
