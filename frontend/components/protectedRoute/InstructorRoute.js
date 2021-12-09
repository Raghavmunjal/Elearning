import { useState, useEffect } from "react";
import axios from "axios";
import LoadingToRedirect from "../LoadingToRedirect";

const InstructorRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    isValidInstructor();
  }, []);
  const isValidInstructor = async () => {
    try {
      const { data } = await axios.get("/api/user/isInstructor");
      if (data.success === true) setOk(true);
    } catch (error) {
      console.log(error);
      setOk(false);
    }
  };
  return <>{!ok ? <LoadingToRedirect /> : <>{children}</>}</>;
};

export default InstructorRoute;
