import * as yup from 'yup';

export const loginValidSchema = yup.object({
  email: yup.string().trim().email().required('This field is requred'),
  password: yup
    .string()
    .trim()
    .required('This field is requred')
    .min(6, 'Password must be not less then 6 symbols')
});

export type LoginFormData = yup.InferType<typeof loginValidSchema>;
