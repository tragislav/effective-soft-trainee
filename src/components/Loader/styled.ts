import styled, { keyframes } from 'styled-components';

/* stylelint-disable keyframes-name-pattern */
const loaderAnimation = keyframes`
  0% {
    transform: scale(1);
  };

  20% {
    transform: scale(1);
  };

  80% {
    transform: scale(1);
  };

  100% {
    transform: scale(1);
  };

  50% {
    transform: scale(1.5);
  };
`;

// eslint-disable-next-line import/prefer-default-export
export const LoaderDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;

  div {
    position: absolute;
    width: 24px;
    height: 24px;
    background: #163f2b;
    border-radius: 50%;
    animation: ${loaderAnimation} 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 148px;
    left: 264px;
  }

  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 88px;
    left: 248px;
  }

  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 44px;
    left: 208px;
  }

  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 28px;
    left: 148px;
  }

  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 44px;
    left: 88px;
  }

  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 88px;
    left: 44px;
  }

  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 148px;
    left: 28px;
  }

  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 208px;
    left: 44px;
  }

  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 248px;
    left: 88px;
  }

  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 264px;
    left: 148px;
  }

  div:nth-child(11) {
    animation-delay: -1s;
    top: 248px;
    left: 208px;
  }

  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 208px;
    left: 248px;
  }
`;
