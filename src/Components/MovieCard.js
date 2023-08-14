const MovieCard = ({ movie }) => {
  let posterURL = movie.Poster;
  // check if the image is available or not
  // if not available for searched movie it will display our default image
  if (posterURL === "N/A") {
    posterURL =
      "https://user-images.githubusercontent.com/113019349/220330651-05133da9-f7de-4a02-b452-234bcade8631.jpg";
  }
  const detail = `movies/${movie.Title}`;
  const detailURL = `/${detail}`;

  return (
    <>
      {/* Our movie cards with image,Title and a button which further will display relevant movie details all dynamically */}
      <div className="col-lg-3 col-sm-6">
        <div className="card shadow-lg mt-3">
          <img src={posterURL} className="card-img-top" alt={movie.Title} />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <a href={detailURL} className="btn search-btn">
              Show details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
