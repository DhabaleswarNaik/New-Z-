import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loading from './loading.gif';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={{ background: '#fff3cd' }} className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/in/general">
              <img src={loading} alt="" width="40" height="40" background="transparent" />
              New-Z
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/in/general">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/in/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/in/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/in/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/in/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/in/technology">Technology</Link></li>
                    <li><Link className="dropdown-item" to="/in/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/in/sports">Sports</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </Link>
                  <ul className="dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <li><Link className="dropdown-item" to="/in/general">India</Link></li>
                    <li><Link className="dropdown-item" to="/ae/general">United Arab Emirates</Link></li>
                    <li><Link className="dropdown-item" to="/au/general">Australia</Link></li>
                    <li><Link className="dropdown-item" to="/br/general">Brazil</Link></li>
                    <li><Link className="dropdown-item" to="/ca/general">Canada</Link></li>
                    <li><Link className="dropdown-item" to="/ch/general">Switzerland</Link></li>
                    <li><Link className="dropdown-item" to="/cn/general">China</Link></li>
                    <li><Link className="dropdown-item" to="/gb/general">United Kingdom</Link></li>
                    <li><Link className="dropdown-item" to="/it/general">Italy</Link></li>
                    <li><Link className="dropdown-item" to="/jp/general">Japan</Link></li>
                    <li><Link className="dropdown-item" to="/kr/general">South Korea</Link></li>
                    <li><Link className="dropdown-item" to="/nz/general">New Zealand</Link></li>
                    <li><Link className="dropdown-item" to="/ru/general">Russia</Link></li>
                    <li><Link className="dropdown-item" to="/th/general">Thailand</Link></li>
                    <li><Link className="dropdown-item" to="/us/general">United States</Link></li>
                    <li><Link className="dropdown-item" to="/za/general">South Africa</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
