import * as yup from 'yup';

export const createArticleValidSchema = yup.object().shape({
  file: yup
    .mixed<FileList>()
    .required('This field is requred')
    .test(
      'File exist',
      'You don`t choose image for article!',
      (files: FileList) => {
        if (files.length > 0) return true;

        return false;
      }
    )
    .test(
      'fileSize',
      'File too large!',
      (files: FileList) => files[0] && files[0].size < 50000
    ),
  title: yup.string().trim().required('This field is requred'),
  description: yup.string().trim().required('This field is requred')
});

export type createArticleFormData = yup.InferType<
  typeof createArticleValidSchema
>;
