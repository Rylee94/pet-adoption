import React, { useEffect, useState} from 'react';
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
const [isPlaying, setIsPlaying] = useState(true);

useEffect(() => {
  isPlaying ? audio.play() : audio.pause();
}, [isPlaying, audio]);

const handlePlay = () => {
  setIsPlaying(true);
  audio.play().catch((error) => console.error('Audio playback failed', error));
};
  
const handlePause = () => {
    setIsPlaying(false);
};
  
  useEffect(() => {
    audio.volume = 0.2;
  }, [audio]);
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
      <div style={{ position: 'relative', bottom: '-100px', right: '-1000px'}}>
        <button onClick={handlePlay}>Start the music!</button>
        <button onClick={handlePause}>Stop the music!</button>
      </div>

    </ThemeProvider>
  );
};

export default Home;
