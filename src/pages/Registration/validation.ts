import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
  username: yup.string().required(),
  name: yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
  }),
  phone: yup.string().required(),
});

export default schema;
