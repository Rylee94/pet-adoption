import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';
import { SAVE_PET } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Album() {
  const { loading, error, data } = useQuery(GET_PETS);
  const [savePet] = useMutation(SAVE_PET);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const petProfiles = data.petProfiles;

  const handleSavePet = async (petId) => {
    try {
      const { data: savePetData } = await savePet({
        variables: { petId },
      });
      console.log('Saved Pet:', savePetData.savePet);
    } catch (error) {
      console.error('Error saving pet:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} >
            {petProfiles.map((pet) => (
              <Grid item key={pet._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className="cards"
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={pet.photo ? `/images/${pet.photo}` : ''}
                    alt={pet.petName} className="cards"
                  />
                  <CardContent className="cards">
                    <Typography gutterBottom variant="h5" component="h2">
                    <strong>{pet.petName}</strong>
                    </Typography>
                    <Typography>
                      {pet.petType}<br />
                      {pet.breed}<br />
                      {pet.age} years old<br />
                      {pet.gender}<br />
                      <strong>About: </strong>{pet.aboutPet}<br />
                      <strong>Potty Trained: </strong>{pet.pottyTrained}
                    </Typography>
                  </CardContent>
                  <CardActions className="cards">
                    <Button size="small" onClick={() => handleSavePet(pet._id)} className="cards">
                      Save Pet
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}