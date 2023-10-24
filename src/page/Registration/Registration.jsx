import { Box, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validationForm";
import supabase from "../../supabaseClient";
import MyButton from "../../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInAction, setUser } from "../../store/movieReducer";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });

  const registerNewUser = async (values) => {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name,
        },
      },
    });
  };

  const onSubmitHandler = (values) => {
    dispatch(setLoggedInAction(true));
    registerNewUser(values);
    dispatch(setUser(values.name));
    console.log(values);
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
  );
};

export default Registration;
