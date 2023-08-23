import { Link } from "react-router-dom";
import BakgrounImagePageNotFound from "../page-not-found.jpg";
import Image404 from '../page-not-found-img.png';
const PageNotFound = () => {
  return (
    <div>
      {/* Breadcrumbs for user to have a good track of path using Bootstrap5 */}
      <div className="ms-3 mt-2 mb-5 fw-bold">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "rgb(233, 15, 113)" }}
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Page not found
            </li>
          </ol>
        </nav>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
      url(${BakgrounImagePageNotFound})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
        className="mt-5 App-header"
      >
        <div className="container">
          <div class="col-md-6 col-lg-6 col-sm-4 text-center my-5 offset-md-3">
            <img
              src={Image404}
              alt="no content"
            />
            <h1 className="fw-bold text-light">We could not find this page!</h1>
            <p className="text-light fw-bold">Try visiting Home page or Contact us page for more information.</p>
            <Link
              to="/"
              className="btn fw-bold p-3 rounded-pill text-white fs-3 search-btn"
            >
              Home
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
};

export default PageNotFound;
