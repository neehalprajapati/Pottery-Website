import './Login.css'

const Login = () => {
  return (
    <>
      <form className="animated-form shadow-lg p-4 rounded bg-light">
        <h3 className="text-center mb-4 text-primary">Login</h3>

        <div className="mb-3 fade-in">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3 fade-in" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 form-check fade-in" style={{ animationDelay: '0.4s' }}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary w-100 fade-in" style={{ animationDelay: '0.6s' }}>
          Submit
        </button>
      </form>
    </>
  )
}

export default Login;