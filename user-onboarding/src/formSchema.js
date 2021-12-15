import * as yup from 'yup';

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required('Name required!')
    .min(3, 'Name must be a minimum of 3 characters'),
  email: yup
    .string()
    .email('Must enter a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .required('You must choose a password')
    .min(8, 'Password must be at least 8 characters'),
  terms: yup.boolean().oneOf([true], 'Must accept terms of service')
})

export default formSchema;