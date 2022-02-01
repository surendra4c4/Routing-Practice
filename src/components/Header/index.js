// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="logo-name">Wave</p>
    </div>
    <ul className="list-container">
      <li className="list-item">
        <Link className="home-link" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="home-link" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="home-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
