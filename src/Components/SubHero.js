const SubHero = ({ text }) => {
  return (
    <>
      {/* This components will be used for SearchView to print whatever Movie by title user will surf. */}
      <div className="container text-center mb-5 mt-5">
        <h1>&#9757;</h1>
        <div className="text-dark  fs-4 fw-bold">Hey There,</div>
        <div className="text-dark  fs-4 fw-bold">Type in the search bar to surf.</div>
        <div className="text-dark  fs-4 fw-bold">Happy Brow-surfing &#127940;&#128521;</div>
      </div>
    </>
  );
};

export default SubHero;
