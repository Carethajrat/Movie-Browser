const Hero = ({ text }) => {
  return (
    <>
      {/* This components will be used for SearchView to print whatever Movie by title user will surf. */}
      <div className="container text-center mb-5 mt-5">
        <h1>&#128065;</h1>
        <h1 className="text-dark p-2 fw-bold">{text}</h1>
      </div>
    </>
  );
};

export default Hero;
