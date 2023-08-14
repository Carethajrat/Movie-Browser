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
          Cinema has been a part of the entertainment industry for a long time. It creates a massive impact on people all over the world. In other words, it helps them give a break from monotony. It has evolved greatly in recent years too. Cinema is a great escape from real life. <br />
            <Link
              to="/search"
              className="btn  w-sm-0 rounded-0 mt-3 search-btn-banner "
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
                className=" img-fluid img-fluid"
                alt="https://user-images.githubusercontent.com/113019349/221782162-33ede162-4a05-4259-95de-7a07d1d10fcd.jpg"
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
                className=" img-fluid"
                alt="https://user-images.githubusercontent.com/113019349/221782248-e12e3598-42d2-4185-922e-e4c481aec8f8.jpg"
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
                className=" img-fluid"
                alt="https://user-images.githubusercontent.com/113019349/221782262-441c8d03-1f86-415a-bfd5-b2ba6cacb255.jpg"
              />
              <div className="card-body">
                <p className="card-text">Netflix and Popcorn Tudummmmm!</p>
              </div>
            </div>
            {/* <div className="card  hover-scale border-0 ">
              <img
                src="https://user-images.githubusercontent.com/113019349/221782232-363f57ae-ee42-4a2d-a3ea-baab23af4c7b.jpg"
                className=" img-fluid"
                alt="https://user-images.githubusercontent.com/113019349/221782232-363f57ae-ee42-4a2d-a3ea-baab23af4c7b.jpg"
              />
              <div className="card-body">
                <p className="card-text">Do it in The Big Bang Theory style.</p>
              </div>
            </div> */}
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
              className="btn fw-bold p-3 w-50 text-white fs-3 search-btn"
            >
              Take me in
            </Link>
          </div>
          <div className="col-sm-4 col-lg-6">
            <h4 className="fw-bold mt-5 mb-3">Watch Movie</h4>
            <Link
              className=" disabled btn fw-bold p-3 w-50 text-white fs-3 "
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
