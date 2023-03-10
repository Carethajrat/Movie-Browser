import { Link } from "react-router-dom";
const AboutView = () => {
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
              About Us
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero section in here */}
      <div
        className="container-fluid text-center  mt-5 mb-5"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/113019349/220018161-07e56c83-d5fc-4f3d-ac80-f0cc8cf4762c.jpg)",
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

      {/* about section */}
      <div className="container mt-5 mb-5">
        <div className="row row-cols-md-1 row-cols-sm-2  mt-5 mb-5 g-2">
          <div className="col-md-6  col-sm-8 mt-5 mb-5">
            <div className="card">
              <img
                src="https://user-images.githubusercontent.com/113019349/221853128-95f67739-e27a-4373-9e60-aaa4e072cd3a.jpg"
                alt="https://user-images.githubusercontent.com/113019349/221853128-95f67739-e27a-4373-9e60-aaa4e072cd3a.jpg"
                height="500px"
              />
            </div>
          </div>
          <div className="col-md-6  col-sm-8 mt-5 mb-5 p-2">
            <h1>caretSurf</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique enim odio error. Esse officia molestias aspernatur
              quidem, cupiditate quae dicta reprehenderit blanditiis dignissimos
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique enim odio error. Esse officia molestias aspernatur
              quidem, cupiditate quae dicta reprehenderit blanditiis dignissimos
            </p>
            <div className="row row-cols-1 row-cols-sm-2 mt-3 mb-3">
              <div className="col-lg-3 col-sm-6">
                <span>
                  <i className="fa fa-info"></i>
                  nformation
                </span>
              </div>
              <div className="col-lg-3 col-sm-6">
                <span>
                  <i className="fa fa-search"></i>
                  Searching
                </span>
              </div>
              <div className="col-lg-3 col-sm-6">
                <span>
                  <i className="fa fa-film"></i>
                  Movie Browsing
                </span>
              </div>
              <div className="col-lg-3 col-sm-6">
                <span>
                  <i className="fa fa-rocket"></i>
                  And so much more
                </span>
              </div>
            </div>
            <Link
              to="/search"
              className="btn fw-bold p-3 rounded-pill text-white fs-3"
              style={{ backgroundColor: "rgb(233, 15, 113)" }}
            >
              Try it on
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
