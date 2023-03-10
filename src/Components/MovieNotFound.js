const MovieNotFound = () => {
  return (
    <>
      {/* In case if user has either typo or the movie simply just doesn't exist */}
      <div className="App-header mt-5 mb-5">
        <div className="container  text-center mt-5 mb-5">
          <div className="col-12 mt-lg-5 mb-lg-5">
            <img
              src="https://user-images.githubusercontent.com/113019349/221499798-f7c155b7-d257-4c28-8b0e-914884b4dbd0.png"
              alt="movie not available"
            />
            <h5>
              Movie you are searching for is not available,
              <br />
              Sorry about that!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieNotFound;
