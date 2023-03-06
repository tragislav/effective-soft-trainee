import styled from 'styled-components';

interface CardTextProps {
  fontSize: number;
}

export const CardDiv = styled.div`
  width: 567px;
  max-width: 567px;
  max-height: 780px;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.03em;
  margin-bottom: 60px;

  &:nth-child(3n + 2) {
    margin: 0 25px 60px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const CardTitle = styled.p`
  max-height: 36px;
  overflow: hidden;
  margin: 30px 0;
`;

export const CardText = styled.p<CardTextProps>`
  font-size: ${({ fontSize = 16 }) => fontSize}px;
  line-height: 24px;
`;
