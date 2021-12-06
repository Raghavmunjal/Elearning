import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // use Router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/user");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      setLoading(false);
      dispatch({ type: "LOGIN", payload: data });
      window.localStorage.setItem("user", JSON.stringify(data));
      router.push("/user");
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  return (
    <>
      <form className="container gap mt-5" onSubmit={handleSubmit}>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="email" className="form-label text-muted">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="password" className="form-label text-muted">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 col-md-4 offset-md-4 mt-2">
          <button
            className="btn btn-submit "
            type="submit"
            onClick={handleSubmit}
            disabled={!email || !password || loading}
          >
            {loading ? (
              <span>
                <SyncOutlined spin /> Submitting
              </span>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <h6 className="text-muted mb-3 col-md-4 offset-md-4 mt-2">
          Create an account? <Link href="/register">Register</Link>
        </h6>
      </form>
    </>
  );
}
