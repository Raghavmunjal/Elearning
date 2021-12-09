import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";

const UserNav = () => {
  const [current, setCurrent] = useState("/user");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser, window.location]);

  const {
    state: { user },
  } = useContext(Context);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user">
        <a className={`nav-link ${current === "/user" && "active"}`}>
          <i className="fas fa-user-circle p-2"></i>Dashboard
        </a>
      </Link>
      {user && user.role && !user.role.includes("Instructor") && (
        <Link href="/user/become-instructor">
          <a
            className={`nav-link ${
              current === "/user/become-instructor" && "active"
            }`}
          >
            <i className="fas fa-users-cog p-2"></i>Become an Instructor
          </a>
        </Link>
      )}
    </div>
  );
};

export default UserNav;
