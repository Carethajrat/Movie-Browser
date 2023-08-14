import { Link } from "react-router-dom";
import ImageContact from '../contact-us.jpg';
const ContactView = () => {
  return (
    <>
      {/* Breadcrumbs for user to have a good track of path using Bootstrap5 */}
      <div className="ms-3 mt-2 mb-5 fw-bold">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "rgb(233, 15, 113)" }}
              >
                Home
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Hero section in here */}
      <div
        className="container-fluid text-center  mt-5 mb-5"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/113019349/220018133-49f46087-1172-486c-aed7-e6f7f7f1c4d9.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className=" text-padding ">
          <h1 className="fw-bold text-white p-5">Contact Us</h1>
        </div>
      </div>
      {/* contact section */}
      <div className="container offset-md-1 mt-5 mb-5">
        <div className="row row-cols-md-1 row-cols-sm-2 mt-5 mb-5 g-2">
          <div className="col-md-6  col-sm-8 mt-5 mb-5">
            <div className="card border-0 ">
              <div className="">
              <img
                src={ImageContact}
                alt="contact us"
                className="img-fluid float-lg-end"
              />
              </div>
            </div>
          </div>
          <div className="col-md-6  col-sm-8  mt-5 mb-5 p-2 ">
            <h1>caretSurf</h1>
            <p>
              <span>
                <i className="fa fa-phone"></i>
              </span>
              Toll free <br /> 12365478925
            </p>
            <p>
              24/7 support,
              <br /> we'd be so happy to help
            </p>
            <p>
              <span>
                <i className="fa fa-mail-bulk"></i>
              </span>
              Share your thaughts on <br />
              khatrihajra173@gmail.com
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique enim odio error. Esse officia molestias aspernatur
              quidem, cupiditate quae dicta reprehenderit blanditiis dignissimos
            </p>
            <h4>Chat us</h4>
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
    </>
  );
};

export default ContactView;