import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = ({ children }) => {
  console.log("HEADER");
  return (
    <section className="header">
      <div className="header__image_container">
        <Link to="/">
          <img className="header__image" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__navigation">{children}</div>
    </section>
  );
};

export default Header;
