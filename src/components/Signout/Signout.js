import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";
import MyButton from "../UI/button/MyButton";
import { useDispatch } from "react-redux";
import { clearHistoryAction, setUserAction } from "../../store/movieReducer";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    dispatch(setUserAction(null));
    dispatch(clearHistoryAction());
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
