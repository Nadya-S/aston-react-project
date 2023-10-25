import { useNavigate } from "react-router-dom";
import MyButton from "../UI/button/MyButton";

const BackButton = () => {
  const navigate = useNavigate();

  return <MyButton onClick={() => navigate(-1)}>НАЗАД</MyButton>;
};

export default BackButton;
