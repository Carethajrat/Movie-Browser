import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// we will use useParams for accessing our URL

const MovieView = () => {
  const { Title } = useParams();
  console.log(Title);
  const [movieDetails, setMovieDetails] = useState({});
  const imdbSearch = `https://www.imdb.com/title/${movieDetails.imdbID}/?ref_=fn_al_tt_1`;
  const [isLoading, setLoading] = useState(true);
  let imageURL = movieDetails.Poster;
  // check if the image is available or not
  // if not available for searched movie it will display our default image
  if (imageURL === "N/A") {
    imageURL =
      "https://user-images.githubusercontent.com/113019349/220330651-05133da9-f7de-4a02-b452-234bcade8631.jpg";
  }

  useEffect(() => {
    console.log("make an api request");
    // make an APi request based on the title a user has requested
    fetch(`https://www.omdbapi.com/?s=${Title}&apikey=da0212a5`)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data, "ye setmoviedetails me");

        setMovieDetails(data.Search[0]);
        setLoading(false);
      });
  }, [Title]);

  function renderMovieView() {
    // Display Loading in case it takes a bit longer time to load just so the user dose'nt freak out
    if (isLoading) {
      return (
        <>
          <div className="container justify-content-center text-center mt-5">
            <div className="row row-cols-1">
              <div className="col-12 " style={{ marginTop: "150px" }}>
                <div className="spinner-border" role="status">
                  <span className="invisible">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    // Display the details once loaded
    if (movieDetails) {
      return (
        <>
          <div
            className="container-fluid text-center mt-3 banner-movieview"
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.5)),url(${imageURL})`,
            }}
          >
            <p className="text-white fw-bold fs-1 text-padding">
              {movieDetails.Title}
            </p>
          </div>
          <div className="container justify-content-center mt-5 mb-5">
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col-lg-4 col-sm-6">
                <img
                  src={imageURL}
                  alt="the movie details"
                  height="auto"
                  width="100%"
                  className="img-fluid shadow rounded"
                ></img>
              </div>
              <div className="col-lg-8 col-sm-6  justify-content-start p-2">
                <h1>{movieDetails.Title}</h1>
                <h4>{movieDetails.Year}</h4>
                <p className=" fs-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique enim odio error. Esse officia molestias aspernatur
                  quidem, cupiditate quae dicta reprehenderit blanditiis
                  dignissimos veritatis, natus asperiores repudiandae facere
                  iste? Nemo?
                </p>
                <p className="text-success fw-bold fs-4">
                  Wanna know more about {movieDetails.Title}?
                  <br /> Click down below
                </p>
                <a href={imdbSearch} className="btn search-btn">
                  More details
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  // Now simply just call the function above and it will accordingly return the details
  return renderMovieView();
};

export default MovieView;
