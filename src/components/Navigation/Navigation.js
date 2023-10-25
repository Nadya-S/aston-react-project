import { Link } from "react-router-dom";
import Signout from "../Signout/Signout";
import "./Navigation.css";

const Navigation = ({ user }) => {
  return (
    <section className="navigation">
      <p className="navigation__user">{user}</p>
      <Link to="/favorites" className="navigation__link">
        ИЗБРАННОЕ
      </Link>
      <Link to="/history" className="navigation__link">
        ИСТОРИЯ
      </Link>
      <Signout />
    </section>
  );
};

export default Navigation;
