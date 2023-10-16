import React from 'react';

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
          <h1 className="title" style={{ fontSize: '2rem', margin: '1rem 0' }}>
            Home
          </h1>
        </div>
        <div className="about" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.25rem' }}>
            Who will you choose and remember for a lifetime?
          </p>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nSz16ngdsG0?si=U7FMArzcLfMjoFh7&amp;clip=UgkxD-nPzt4kYchlqZebVAogOFS2G-Hc0F5L&amp;clipt=EAAY6IQB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
