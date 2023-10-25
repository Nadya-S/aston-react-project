import { useDispatch } from "react-redux";
import MyButton from "../../components/UI/button/MyButton";
import supabase from "../../supabase/supabaseClient";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { setLoggedInAction, setUser } from "../../store/movieReducer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitHandler = (values) => {
    const signIn = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
    };
    signIn();
    dispatch(setLoggedInAction(true));
    dispatch(setUser(values.email)); // не знаю как вытянуть имя из supabase
    navigate("/");
  };

  return (
    <Box
      component="form"
      sx={{ marginTop: 20 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        sx={{ mb: 2 }}
        label="Email"
        fullWidth
        required
        type="email"
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />
      <TextField
        sx={{ mb: 2 }}
        label="Password"
        fullWidth
        required
        type="password"
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />
      <MyButton type="submit">ВОЙТИ</MyButton>
    </Box>
  );
};
