import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";
import MyButton from "../UI/button/MyButton";

const Signout = () => {
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      <MyButton onClick={signOut}>Выйти</MyButton>
    </>
  );
};

export default Signout;
