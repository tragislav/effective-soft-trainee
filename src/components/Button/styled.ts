import styled from 'styled-components';

interface StyledButtonProps {
  width: string;
  height: number;
}

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ theme }) => theme.mainBgColor};
  color: ${({ theme }) => theme.mainTextColor};
  width: ${({ width }) => width || '100%'};
  height: ${({ height = 70 }) => height}px;
`;
