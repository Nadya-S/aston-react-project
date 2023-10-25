import supabase from "../../supabase/supabaseClient";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";


export const Login = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmitHandler = values => {
        const signIn = async () => {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            })
        }
        signIn()
    };

    return (
        <Box
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmitHandler)}
        >
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
            <Button type="submit">Войти</Button>
        </Box>
    )
}