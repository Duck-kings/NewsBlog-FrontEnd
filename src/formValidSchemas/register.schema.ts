import * as yup from 'yup';

export const registerValidSchema = yup.object({
  firstName: yup.string().trim().required('This field is requred'),
  lastName: yup.string().trim().required('This field is requred'),
  pseudonym: yup.string().trim().default(''),
  email: yup.string().trim().email().required('This field is requred'),
  password: yup
    .string()
    .trim()
    .required('This field is requred')
    .min(6, 'Password must be not less then 6 symbols')
});

export type RegisterFormData = yup.InferType<typeof registerValidSchema>;
