import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import hero from '/images/rescue-pets.jpeg'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box'; // Add this import for the Box component

const defaultTheme = createTheme();


const Home = () => {
  const [audio] = useState(new Audio('/music/homepagemusic.mp3'));
  const location = useLocation(); // Get the current location using useLocation

  const handlePlay = () => {
    audio.volume = 0.2;
    audio.play().catch((error) => console.error('Audio playback failed', error));
  };

  const handlePause = () => {
    audio.pause();
  };

  useEffect(() => {
    if (location.pathname === '/home') { // Check if the current page is the home page
      handlePlay();
    }
    return () => audio.pause(); // Pause the audio when the component unmounts
  }, [audio, location]);


  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="about-container" style={{ textAlign: 'center' }}>
        <div>
          <div className='hero'>
            <img src={hero} alt="Hero" />;
          </div>
          <h1 className="title" style={{ fontSize: '2.3rem', margin: '1rem 0' }}>
            Learn More
          </h1>
        </div>
        <div className="about" style={{ margin: '1rem 0' }}>
          <p style={{ fontSize: '1.25rem' }}>
            Here at Pick-A-Pet, we connect lonely pets with loving families. From dogs to cats to monkeys, you can explore what kind of pet is right for you.
          </p>
        </div>
        <div class="contact">
          <h3 style={{ fintSize: '1rem' }}>
            Once you find your purrrfect pet, call <strong>555-555-5555</strong> to adopt today!
          </h3>
        </div>
      </div>
      <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', }}>
        <button onClick={handlePlay} className="music-button">Start the music!</button>
        <button onClick={handlePause} className="music-button">Stop the music!</button>
      </div>

    </ThemeProvider>
  );
};

export default Home;
