import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  /* Define your styles here */
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;