import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(4).max(32).required(),
});

export default schema;
