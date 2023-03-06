import styled from 'styled-components';

interface AlertTextProps {
  background?: string;
}

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageDiv = styled.div`
  width: 50%;
`;

export const LoginContent = styled.div`
  width: 50%;
`;

export const AlertText = styled.div<AlertTextProps>`
  color: ${({ theme }) => theme.mainTextColor};
  background: ${({ background = 'green' }) => background};
  margin: 0 auto;
  font-size: 18px;
  line-height: 26px;
  width: 400px;
  text-align: center;
  padding-top: 10px;
  height: 36px;
`;

export const BackLink = styled.div`
  margin: 10px 0 100px 90px;

  a {
    div {
      display: flex;

      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding-top: 1px;
      }
    }
  }
`;

export const LoginInner = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const LoginTitle = styled.h3`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
  padding-top: 10px;
`;

export const LoginForm = styled.form`
  width: 400px;
  margin: 0 auto;
`;

export const LoginInput = styled.input`
  width: 400px;
  height: 70px;
  border: 1px solid ${({ theme }) => theme.mainBgColor};
  box-sizing: border-box;
  margin-top: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding-left: 25px;

  &:nth-child(2) {
    margin-bottom: 60px;
  }
`;

export const SignUpLink = styled.div`
  text-align: left;
  width: 400px;
  margin: 0 auto;
  margin-top: 70px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  a {
    font-weight: bold;
    margin-top: 5px;
  }
`;
