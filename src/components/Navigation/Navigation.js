import { Link } from "react-router-dom";
import Signout from "../Signout/Signout";
import "./Navigation.css";

const Navigation = () => {
  return (
    <section className="navigation">
      <p className="navigation__user">Имя пользователя</p>
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
