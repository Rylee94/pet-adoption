// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../App.css'

const theme = createTheme();

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="header" className="header-container">
        <Typography  className="header-title">
          Adopt-A-Pet!
        </Typography>
        <Typography className="header-subtitle">
          WE NEED A CATCHY THING HERE
        </Typography>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me" className="header-link">
                View My Profile and Pets
              </Link>
              <span className="header-logout" onClick={logout}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link to="/home" className="header-link">
                Home
              </Link>
              <Link to="/login" className="header-link">
                Login
              </Link>
              <Link to="/signup" className="header-link">
                Signup
              </Link>
              <Link to="/pets" className="header-link">
                Pets
              </Link>
            </>
          )}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
