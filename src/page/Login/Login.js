import { useDispatch } from "react-redux";
import MyButton from "../../components/UI/button/MyButton";
import supabase from "../../supabase/supabaseClient";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { setUserAction } from "../../store/movieReducer";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/validationForm";
import MyLocalStorage from "../../utils/MyLocalStorage";
import { useState } from "react";
import { MyModal } from "../../components/UI/modal/Modal";


export const Login = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmitHandler = (values) => {
    const signIn = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setOpen(true)
      } else if (data.user.email !== null) {
        dispatch(setUserAction(values.email));
        MyLocalStorage.setItem("user", values.email);
        navigate("/");
      }
    };
    signIn();

  };

  return (
    <>
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
      <MyModal open={open} setOpen={setOpen}>Что-то пошло не так. Проверьте правильность написания Email/Пароль</MyModal>
    </>
  );
};
