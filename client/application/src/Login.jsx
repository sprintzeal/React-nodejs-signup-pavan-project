import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://media.istockphoto.com/id/1322479796/photo/glowing-light-market-chart-of-business-glowing-stock-graph-or-investment-financial-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=0igMuWm8mvNA1iG_Gt9I65IBcf9g-WKZoAlLuO6m3YY=");
  background-size: cover;
  
`;


const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleText = styled.p`
  margin-top: 20px;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5001/login', { email, password })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        alert('User Not Founded:', error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5001/register', { name, email, password })
      .then(() => {
        alert('Registration successful Please Login Now');
      })
      .catch((error) => {
        alert('Registration failed:', error);
      });
  };

  return (
    <Container>
      <Card>
        <Title>{isLogin ? 'Login' : 'Register'}</Title>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        </form>
        <ToggleText onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </ToggleText>
      </Card>
    </Container>
  );
};

export default LoginRegisterPage;
