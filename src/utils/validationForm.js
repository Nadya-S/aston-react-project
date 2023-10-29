import {  object, string } from 'zod';

export const registerSchema = object({
  name: string()
    .nonempty('Имя обязательно')
    .max(10, 'Имя должно содержать не более 10 символов'),
  email: string().nonempty('Требуется электронная почта').email('Адрес электронной почты недействителен'),
  password: string()
    .nonempty('Требуется пароль')
    .min(8, 'Пароль должен содержать более 8 символов')
    .max(32, 'Пароль должен содержать не более 32 символов'),
})

export const loginSchema = object({
  email: string().nonempty('Требуется электронная почта').email(),
  password: string()
    .nonempty('Требуется пароль')
    .min(8, 'Пароль должен содержать более 8 символов')
    .max(32, 'Пароль должен содержать не более 32 символов'),
})