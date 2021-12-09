import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import { TeamOutlined } from "@ant-design/icons";

const InstructorNav = () => {
  const [current, setCurrent] = useState("/instructor");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser, window.location]);
  const {
    state: { user },
  } = useContext(Context);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/instructor">
        <a className={`nav-link ${current === "/instructor" && "active"}`}>
          <i className="fas fa-user-circle p-2"></i>Dashboard
        </a>
      </Link>
      <Link href="/instructor/course/create">
        <a
          className={`nav-link ${
            current === "/instructor/course/create" && "active"
          }`}
        >
          <i className="fas fa-video p-2"></i>Create Course
        </a>
      </Link>
    </div>
  );
};

export default InstructorNav;
