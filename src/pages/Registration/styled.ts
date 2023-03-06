import styled from 'styled-components';

interface AlertTextProps {
  background?: string;
}

export const RegistrationContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageDiv = styled.div`
  width: 50%;
`;

export const AlertText = styled.p<AlertTextProps>`
  color: ${(props) => props.theme.mainTextColor};
  background: ${({ background = 'green' }) => background};
  margin: 0 40px;
  font-size: 18px;
  line-height: 26px;
`;

export const RegistrationContent = styled.div`
  width: 50%;
  text-align: center;
  align-self: center;
`;

export const RegistrationTitle = styled.h3`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const PostForm = styled.form`
  width: 880px;
  padding: 20px 40px 20px 0;

  div {
    margin-bottom: 85px;
  }
`;

export const FormInput = styled.input`
  width: 390px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.mainBgColor};
  box-sizing: border-box;
  margin-top: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding-left: 25px;

  &:nth-child(even) {
    margin-left: 20px;
  }
`;
