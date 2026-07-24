import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-light fixed-top ax-navbar">
    <div className="container">
      <Link className="navbar-brand brand" to="/"><span className="brand-mark">N</span>Node <span>Multi-Tenant API</span></Link>
      <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"><i className="bi bi-list" /></button>
      <div className="collapse navbar-collapse" id="navigation">
        <div className="navbar-nav mx-auto gap-lg-2">
          <a className="nav-link" href="#home">Home</a><a className="nav-link" href="#features">Features</a><NavLink className="nav-link" to="/api">API</NavLink><NavLink className="nav-link" to="/login">Login</NavLink>
        </div>
        <a className="btn btn-primary btn-sm nav-demo" href="#dashboard">View Demo <i className="bi bi-arrow-up-right ms-1" /></a>
      </div>
    </div>
  </nav>
}
