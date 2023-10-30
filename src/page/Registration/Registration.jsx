import { Box, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validationForm";
import supabase from "../../supabase/supabaseClient";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/movieReducer";
import MyLocalStorage from "../../utils/MyLocalStorage";
import { useState } from "react";
import { MyModal } from "../../components/UI/modal/Modal";

const Registration = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmitHandler = (values) => {

    const registerNewUser = async (values) => {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            name: values.name,
          }
        },
      });
      if (error) {
        setOpen(true)
      } else if (data.user !== null) {
        dispatch(setUserAction(values.name));
        MyLocalStorage.setItem("user", values.email);
        navigate("/");
      }
    };
    registerNewUser(values);
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
          label="Name"
          fullWidth
          required
          type="name"
          error={!!errors["name"]}
          helperText={errors["name"] ? errors["name"].message : ""}
          {...register("name")}
        />
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
        <MyButton type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</MyButton>
      </Box>
      <MyModal open={open} setOpen={setOpen}>Такой Email уже зарегистрирован</MyModal>
    </>
  );
};

export default Registration;
