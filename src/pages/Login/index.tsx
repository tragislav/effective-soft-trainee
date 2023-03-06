/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginUser } from 'api/users';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';
import { ReactComponent as LoginImage } from '../../assets/images/registration.svg';
import { ReactComponent as BackArrow } from '../../assets/images/arrow-left.svg';
import {
  LoginContainer,
  ImageDiv,
  LoginContent,
  AlertText,
  BackLink,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginInner,
  SignUpLink,
} from './styled';
import schema from './validation';

type Inputs = {
  username: string;
  password: string;
};

interface LoginResponse {
  token: string;
}

function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // const fromPage = location.state?.from?.pathname || '/';

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginUser(data)
      .then(({ token }) => {
        signIn(token);
        localStorage.setItem('token', token);
        // navigate(fromPage, { replace: true });
        navigate('/users', { replace: true });
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

  const username = register('username');
  const password = register('password');

  return (
    <LoginContainer>
      <ImageDiv>
        <LoginImage />
      </ImageDiv>
      <LoginContent>
        <BackLink>
          <Link to="/products">
            <div>
              <BackArrow />
              <p>BACK TO SHOPPING</p>
            </div>
          </Link>
        </BackLink>
        {success && <AlertText>Success</AlertText>}
        {error && (
          <AlertText background="red">
            Something was wrong, please try again!
          </AlertText>
        )}
        <LoginInner>
          <LoginTitle>Sign In</LoginTitle>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <LoginInput
              ref={username.ref}
              type="text"
              name={username.name}
              onBlur={username.onBlur}
              onChange={username.onChange}
              placeholder="Username"
              required
            />
            <LoginInput
              ref={password.ref}
              type="password"
              name={password.name}
              onBlur={password.onBlur}
              onChange={password.onChange}
              placeholder="Password"
              required
            />
            <Button type="submit" text="SIGN IN" width="400px" height={70} />
          </LoginForm>
          <SignUpLink>
            <p>Don’t have an account?</p>
            <Link to="/registration">SIGN UP</Link>
          </SignUpLink>
        </LoginInner>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
