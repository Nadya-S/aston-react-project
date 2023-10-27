import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";
import MyButton from "../UI/button/MyButton";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/movieReducer";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    dispatch(setUserAction(null));
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <MyButton onClick={signOut}>Выйти</MyButton>
    </>
  );
};

export default Signout;
