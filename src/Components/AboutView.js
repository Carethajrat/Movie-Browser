import { Link } from "react-router-dom";
import BackgroundImageAbout from "../about-bg.jpg";
import AboutIcon from "../about-icon.png";
import BackroundImage from '../about-background.png';
const AboutView = () => {
  return (
    <>
      {/* Breadcrumbs for user to have a good track of path using Bootstrap5 */}
      <div className="ms-3 mt-2 mb-5 fw-bold">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li class="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "rgb(233, 15, 113)" }}
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero section in here */}
      <div
        className="container-fluid text-center  mt-5 mb-5"
        style={{
          backgroundImage: `url(${BackgroundImageAbout})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className="text-padding">
          <h1 className="fw-bold text-white p-5">About Us</h1>
        </div>
      </div>

      <div
        className="d-block d-sm-none d-md-block d-lg-block"
        style={{ marginTop: "150px" }}
      ></div>


      {/* about section */}
      <div className="container-fluid"
        style={{
          backgroundImage:
            `url(${BackroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
          width:"100%"}}>
      <div className="container ">
        <div className="col-md-6 col-lg-6 col-sm-4 text-center my-5 offset-md-3">
          <img
            src={AboutIcon}
            alt="no content"
            style={{ height: "100px", width: "100px" }}
          />
          <p className="fs-4">Who we are?</p>
          <p className="fs-5 text-start">
            We provide you with the best movie information based on your
            preferences. You can also search for movies by name,title and get all the
            information regarding that particular movie,TV shows and series.
            <br />
          </p>
          <Link
            to="/search"
            className="btn fw-bold p-3 rounded-pill text-white fs-4 search-btn mt-2"
          >
            Browse &#128513;
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutView;
