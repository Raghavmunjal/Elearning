import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        { name, email, password },
        config
      );
      setLoading(false);
      if (data.success === true) {
        toast.success("Registered Successfully");
      } else {
        toast.error("Registeration Failed");
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data);
    }
  };

  return (
    <>
      <form className="container gap mt-5" onSubmit={handleSubmit}>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="name" className="form-label text-muted">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            className="btn btn-submit"
            type="submit"
            onClick={handleSubmit}
            disabled={!name || !email || !password || loading}
          >
            {loading ? (
              <span>
                <SyncOutlined spin /> Submitting
              </span>
            ) : (
              "Register"
            )}
          </button>
        </div>
        <h6 className="text-muted mb-3 col-md-4 offset-md-4 mt-2">
          Already have an account? <Link href="/login">Login</Link>
        </h6>
      </form>
    </>
  );
}
