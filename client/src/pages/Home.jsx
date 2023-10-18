import React from 'react';

import hero from '/images/rescue-pets.jpeg'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box'; // Add this import for the Box component

const defaultTheme = createTheme();


const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="about-container" style={{ textAlign: 'center' }}>
        <div>
          <div>
          <img src={hero} alt="Hero"/>;
          </div>
          <h1 className="title" style={{ fontSize: '2.3rem', margin: '1rem 0' }}>
            Learn More
          </h1>
        </div>
        <div className="about" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1rem' }}>
            Here at Pick-A-Pet, we connect lonely pets with loving families. From dogs to cats to monkeys, you can explore what kind of pet is right for you.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
