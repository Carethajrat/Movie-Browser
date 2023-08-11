import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* Hero section in here  */}
      <div
        className="container-fluid mt-lg-3 mb-5 text-lg-start text-md-start text-sm-center"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/113019349/220018103-d5faca1f-cfa3-497c-9f61-93d119c4307c.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="col-lg-4 col-md-6 col-sm-12 ms-sm-0 ms-lg-5 ">
          <p className="text-white ms-sm-0 ms-lg-5 fs-lg-3 fs-sm-6 text-padding-home">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            enim odio error. Esse officia molestias aspernatur quidem,
            cupiditate quae dicta reprehenderit blanditiis dignissimos <br />
            <Link
              to="/search"
              className="btn btn-light fw-bold w-lg-25 w-sm-0 rounded-0 mt-3  "
            >
              Surf Now
            </Link>
          </p>
        </div>
      </div>

      {/* Movie time section!!! */}
      <div className="container mt-5 mb-5 text-center">
        <div className="row row-cols-1   mt-5 mb-5">
          <div className="col-lg-6 col-sm-6 mt-5 mb-5">
            <div className="card  hover-scale mt-5 mb-5 border-0">
              <img
                src="https://user-images.githubusercontent.com/113019349/221782162-33ede162-4a05-4259-95de-7a07d1d10fcd.jpg"
                className="card-img-top"
                alt="https://user-images.githubusercontent.com/113019349/221782162-33ede162-4a05-4259-95de-7a07d1d10fcd.jpg"
                height="450px"
              />
              <div className="card-body">
                <p className="card-text">
                  Watching a movie with family is an amazing pleasure and that
                  too with delicious food haaan!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mt-5 mb-5">
            <div className="card  hover-scale border-0 ">
              <img
                src="https://user-images.githubusercontent.com/113019349/221782248-e12e3598-42d2-4185-922e-e4c481aec8f8.jpg"
                className="card-img-top"
                alt="https://user-images.githubusercontent.com/113019349/221782248-e12e3598-42d2-4185-922e-e4c481aec8f8.jpg"
                height="200px"
              />
              <div className="card-body">
                <p className="card-text">
                  It's Like being in the crowd all happy.
                </p>
              </div>
            </div>
            <div className="card  hover-scale border-0 ">
              <img
                src="https://user-images.githubusercontent.com/113019349/221782262-441c8d03-1f86-415a-bfd5-b2ba6cacb255.jpg"
                className="card-img-top"
                alt="https://user-images.githubusercontent.com/113019349/221782262-441c8d03-1f86-415a-bfd5-b2ba6cacb255.jpg"
                height="200px"
              />
              <div className="card-body">
                <p className="card-text">Netflix and Popcorn Tudummmmm!</p>
              </div>
            </div>
            <div className="card  hover-scale border-0 ">
              <img
                src="https://user-images.githubusercontent.com/113019349/221782232-363f57ae-ee42-4a2d-a3ea-baab23af4c7b.jpg"
                className="card-img-top"
                alt="https://user-images.githubusercontent.com/113019349/221782232-363f57ae-ee42-4a2d-a3ea-baab23af4c7b.jpg"
                height="200px"
              />
              <div className="card-body">
                <p className="card-text">Do it in The Big Bang Theory style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A link to Search Section and soon to watch movie section */}
      <div className="container text-center mt-5 mb-5">
        <div className="row row-cols-1 mt-5 mb-5">
          <div className="col-sm-4 col-lg-6 border-end border-secondary border-3">
            <h4 className="fw-bold mt-5 mb-3">
              Browsing is fun don't you think?
            </h4>
            <Link
              to="/search"
              className="btn fw-bold p-3 w-50 text-white fs-3"
              style={{ backgroundColor: "rgb(233, 15, 113)" }}
            >
              Take me in
            </Link>
          </div>
          <div className="col-sm-4 col-lg-6">
            <h4 className="fw-bold mt-5 mb-3">Watch Movie</h4>
            <Link
              className=" disabled btn fw-bold p-3 w-50 text-white fs-3"
              to="/"
              style={{ backgroundColor: "rgb(233, 15, 113)" }}
            >
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
