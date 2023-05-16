import * as yup from 'yup';

export const commentValidSchema = yup.object({
  text: yup.string().trim().required('This field is required')
});

export type CommentFormData = yup.InferType<typeof commentValidSchema>;
