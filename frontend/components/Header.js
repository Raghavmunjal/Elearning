import { useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { Context } from "../context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/user/logout");
    toast.success(data.message);
    router.push("/");
  };

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
              {user === null && (
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Login
                  </Link>
                </li>
              )}
              {user === null && (
                <li className="nav-item">
                  <Link className="nav-link" href="/register">
                    Register
                  </Link>
                </li>
              )}
              {user !== null && (
                <li className="nav-item">
                  <Link className="nav-link" href="/user">
                    Dashboard
                  </Link>
                </li>
              )}
              {user !== null && (
                <li className="nav-item" onClick={logout}>
                  <Link className="nav-link" href="/">
                    Logout
                  </Link>
                </li>
              )}
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
