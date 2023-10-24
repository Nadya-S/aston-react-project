import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";
import MyButton from "../UI/button/MyButton";
import { useDispatch } from "react-redux";
import { setLoggedInAction } from "../../store/movieReducer";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    dispatch(setLoggedInAction(false));

    navigate("/");
  };

  return (
    <>
      <MyButton onClick={signOut}>Выйти</MyButton>
    </>
  );
};

export default Signout;
