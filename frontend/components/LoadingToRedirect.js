import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Result } from "antd";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current_count) => --current_count);
    }, 1000);

    // redirect once count is equal to 0
    count === 0 && router.push("/");

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="container p-5 text-center">
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <h6 className="text-danger">
            <b>Redirecting you in {count} seconds</b>
          </h6>
        }
      />
    </div>
  );
};

export default LoadingToRedirect;
