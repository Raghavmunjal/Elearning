export default function register() {
  return (
    <>
      <form className="container gap mt-5">
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="name" className="form-label text-muted">
            Name
          </label>
          <input type="text" className="form-control" id="name" autoFocus />
        </div>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="email" className="form-label text-muted">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3 col-md-4 offset-md-4">
          <label htmlFor="password" className="form-label text-muted">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 col-md-4 offset-md-4 mt-2">
          <button className="btn btn-submit" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
