import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import './navstyle.css';
const Navbar = () => {
  const location = useLocation();

  const getColor = (current) => {
    if (location.pathname === current) {
      return '#79E0EE';
    }
    return null;
  }
  return (
    <>
      <nav className="style navbar navbar-expand-lg" style={{ paddingLeft: '60px' }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler  navbar-toggler-sm ms-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" style={{
              boxShadow: "2px 2px 10px silver", borderRadius: "10px",
              marginRight: '60px'
            }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <div className="d-flex justify-content-center">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className=" fs-5" to="/">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/')) }}>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="fs-5" to="/general">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/general')) }}>General</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="fs-5" to="/business">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/business')) }}>Business</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="fs-5" to="/entertainment">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/entertainment')) }}>Entertainment</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="fs-5" to="/health">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/health')) }}>Health</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" fs-5" to="/sports">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/sports')) }}>Sports</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" fs-5" to="/science">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/science')) }}>Science</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" fs-5" to="/technology">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/technology')) }}>Technology</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" fs-5" to="/weather">
                    <span className="badge text-dark" style={{ backgroundColor: getColor(('/weather')) }}>Weather</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-flex justify-content-evenly">
              <Link to="/register" className="icon" style={{ cursor: 'pointer' }}>
                <span className="badge text-dark" style={{ backgroundColor: '#D0F5BE' }}>Register</span>
              </Link>
              <Link to="/signin" className="icon1">
                <span className="badge text-dark" style={{ backgroundColor: '#D0F5BE' }}>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
