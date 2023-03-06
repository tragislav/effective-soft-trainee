import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { registrationUser } from 'api/users';
import Button from '../../components/Button';
import { ReactComponent as RegistrationImage } from '../../assets/images/registration.svg';
import {
  RegistrationContainer,
  ImageDiv,
  RegistrationContent,
  RegistrationTitle,
  PostForm,
  FormInput,
  AlertText,
} from './styled';
import schema from './validation';

type Inputs = {
  username: string;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  };
  password: string;
  phone: string;
  address?: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
};

function Registration() {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.address = {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    };
    registrationUser(data)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        reset();
      })
      .catch((err: string) => {
        console.error(err);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  const regInputs = {
    username: register('username'),
    name: {
      firstname: register('name.firstname'),
      lastname: register('name.lastname'),
    },
    email: register('email'),
    password: register('password'),
    phone: register('phone'),
  };

  return (
    <RegistrationContainer>
      <ImageDiv>
        <RegistrationImage />
      </ImageDiv>
      <RegistrationContent>
        {success && <AlertText>Success</AlertText>}
        {error && (
          <AlertText background="red">
            Something was wrong, please try again!
          </AlertText>
        )}
        <RegistrationTitle>Sign Up</RegistrationTitle>
        <PostForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FormInput
              ref={regInputs.username.ref}
              name={regInputs.username.name}
              onBlur={regInputs.username.onBlur}
              onChange={regInputs.username.onChange}
              type="text"
              placeholder="Username"
              required
            />
            <FormInput
              ref={regInputs.name.firstname.ref}
              name={regInputs.name.firstname.name}
              onBlur={regInputs.name.firstname.onBlur}
              onChange={regInputs.name.firstname.onChange}
              type="text"
              placeholder="First name"
              required
            />
            <FormInput
              ref={regInputs.email.ref}
              name={regInputs.email.name}
              onBlur={regInputs.email.onBlur}
              onChange={regInputs.email.onChange}
              type="email"
              placeholder="Email"
              required
            />
            <FormInput
              ref={regInputs.name.lastname.ref}
              name={regInputs.name.lastname.name}
              onBlur={regInputs.name.lastname.onBlur}
              onChange={regInputs.name.lastname.onChange}
              type="text"
              placeholder="Last name"
              required
            />
            <FormInput
              ref={regInputs.password.ref}
              name={regInputs.password.name}
              onBlur={regInputs.password.onBlur}
              onChange={regInputs.password.onChange}
              type="password"
              placeholder="Password"
              required
            />
            <FormInput
              ref={regInputs.phone.ref}
              name={regInputs.phone.name}
              onBlur={regInputs.phone.onBlur}
              onChange={regInputs.phone.onChange}
              type="text"
              placeholder="Phone"
              required
            />
          </div>
          <Button type="submit" text="LOG IN" width="400px" />
        </PostForm>
      </RegistrationContent>
    </RegistrationContainer>
  );
}

export default Registration;
