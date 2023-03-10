// importing Link and useNavigate from react-router-dom
import { useNavigate,Link } from "react-router-dom";

const Navbar = ({searchText,setSearchText,searchResults}) => {
  const navigate = useNavigate()

  // Every time the text in our search bar changes we will update our keyword
  const updateSearchText = (e)  => {
    // if user types/searches something force user to navigate to our SearchView component
    navigate('/search')
    // set our SearchText in here to the text user has entered 
    setSearchText(e.target.value)
  }

  const submitButton = (e) =>{
    // if user submits the form force user to navigate to our SearchView component
    navigate('/search')
    // set our SearchText in here
    setSearchText(searchText)
    e.preventDefault();

  }
  return (
    // We will simply return a fancy Navbar using Bootstrap5
    <nav className="navbar navbar-expand-lg bg-white sticky-top mt-3">
      <div className="container-fluid">
        <Link className="navbar-brand  hover-effect-nav active" to="/">
          caretSurf
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link hover-effect-nav active  " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect-nav  " to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect-nav  " to="/contact">
               Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect-nav disabled" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect-nav disabled" to="/">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={submitButton}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by Title"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-dark" type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









