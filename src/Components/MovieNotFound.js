import MovieNotFoundIcon from '../iconMovieNotFound.png';
import BackroundImage from "../about-background.png";

const MovieNotFound = () => {
  return (
    <>
      {/* In case if user has either typo or the movie simply just doesn't exist */}
      <div className="container-fluid"
        style={{
          backgroundImage:
            `url(${BackroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
          width:"100%"}}>
      <div className="App-header" style={{marginTop:"100px"}}>
        <div className="container  text-center mt-5 mb-5">
          <div className="col-12 mt-lg-5 mb-lg-5">
            <img
              src={MovieNotFoundIcon}
              alt="movie not available"
              style={{height:"200px",width:"200px"}}
            />
            <h2 className="text-dark p-2 fw-bold">
              Movie,TV Show you are looking for is not available,
              <br />
              Sorry about that!
            </h2>
          </div>
        </div>
      </div>
          </div>
    </>
  );
};

export default MovieNotFound;
