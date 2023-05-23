import React, { useContext, useState } from 'react';
import { FontSizeContext } from '../providers/FontProvider';
import { StyledForm, StyledInput, Wrapper } from './UnAuthenticatedApp.style';

const UnAuthenticatedApp = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useContext(FontSizeContext);

  const handleUsernameChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setError('');
    e.preventDefault();

    if (login === 'admin' && password === 'admin') {
      handleLogin();
    } else {
      setError('Błędny login lub haslo');
    }
  };
  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <StyledInput
          name="login"
          id="login"
          value={login}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <StyledInput
          name="password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign in</button>
      </StyledForm>
      <p>Login i hasło: admin admin</p>
      {error}
    </Wrapper>
  );
};

export default UnAuthenticatedApp;
