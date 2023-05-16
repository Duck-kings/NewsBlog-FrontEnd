import * as yup from 'yup';

export const profileValidSchema = yup.object({
  firstName: yup.string().trim(),
  lastName: yup.string().trim(),
  pseudonym: yup.string().trim()
});

export type ProfileFormData = yup.InferType<typeof profileValidSchema>;
