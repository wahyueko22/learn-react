import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const LoginFormComponent = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        // Handle form submission
        localStorage.setItem('token', `yes`);
        navigate('/admin');
    };

  return (
    <LoginFormContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginFormContainer>
  );
};

export default LoginFormComponent;