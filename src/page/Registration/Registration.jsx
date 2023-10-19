import { Box, TextField, Button} from "@mui/material";
import { useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validationForm";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm({resolver: zodResolver(registerSchema)});
  const navigate = useNavigate()

  const onSubmitHandler = (values) => {
    console.log(values)
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate('/')
    }
  }, [isSubmitSuccessful])

  return (
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          sx={{ mb: 2 }}
          label='Name'
          fullWidth
          required
          type='name'
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          {...register('name')}
        />
        <TextField
          sx={{ mb: 2 }}
          label='Email'
          fullWidth
          required
          type='email'
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <TextField
          sx={{ mb: 2 }}
          label='Password'
          fullWidth
          required
          type='password'
          error={!!errors['password']}
          helperText={errors['password'] ? errors['password'].message : ''}
          {...register('password')}
        />
        <Button type='submit'>Зарегистрироваться</Button>
      </Box>
  )
};

export default Registration;
