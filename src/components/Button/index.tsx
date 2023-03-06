import { StyledButton } from './styled';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  handleSubmit?: () => void;
  width?: string;
  height?: number;
}

function Button({
  text = 'text',
  type = 'button',
  handleSubmit,
  width = '100%',
  height = 70,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={handleSubmit}
      width={width}
      height={height}
    >
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  width: '100%',
  height: 70,
  type: 'button',
  handleSubmit: () => null,
};

export default Button;
