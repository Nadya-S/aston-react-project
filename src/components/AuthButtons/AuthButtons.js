import { Link } from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const AuthButtons = () => {
  return (
    <div className="auth-buttons__container">
      <Link to="/signin">
        <MyButton>ВХОД</MyButton>
      </Link>
      <Link to="/signup">
        <MyButton>РЕГИСТРАЦИЯ</MyButton>
      </Link>
    </div>
  );
};

export default AuthButtons;
