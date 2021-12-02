export default function login() {
  return (
    <>
      <form className="container gap mt-5">
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="email" className="form-label text-muted">
            Email
          </label>
          <input type="email" className="form-control" id="email" autoFocus />
        </div>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="password" className="form-label text-muted">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 col-md-4 offset-md-4 mt-2">
          <button className="btn btn-submit " type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
