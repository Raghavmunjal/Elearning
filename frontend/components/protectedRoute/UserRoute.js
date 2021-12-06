import { useState, useEffect } from "react";
import axios from "axios";
import LoadingToRedirect from "../LoadingToRedirect";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    isValidUser();
  }, []);
  const isValidUser = async () => {
    try {
      const { data } = await axios.get("/api/user/isvalid");
      if (data.success === true) setOk(true);
    } catch (error) {
      console.log(error);
      setOk(false);
    }
  };
  return <>{!ok ? <LoadingToRedirect /> : <>{children}</>}</>;
};

export default UserRoute;
