import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <nav
          id="navbar"
          className="navbar navbar-expand-lg order-last order-lg-0"
        >
          <h2 className="logo navbar-brand">
            <Link href="/">Kakshaa</Link>
          </h2>
          <button
            className="navbar-toggler navbar-light bg-light"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/register">
                  Register
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <button className="get-started-btn">Get Started</button>
            </form> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
