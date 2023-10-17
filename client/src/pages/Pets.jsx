// src/components/PetList.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../utils/queries';

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
  const { loading, error, data } = useQuery(GET_PETS); // Define data inside the useQuery hook

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const petProfiles = data.petProfiles;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // ... (hero unit styles)
          }}
        >
          {/* ... (hero unit content) */}
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {petProfiles.map((pet) => (
              <Grid item key={pet._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {pet.photo ? (
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '56.25%',
                      }}
                      image={`/images/${pet.photo}`}
                      alt={pet.petName}
                    />
                  ) : (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pet.petName}
                      </Typography>
                      <Typography>
                        Type: {pet.petType}<br />
                        Breed: {pet.breed}<br />
                        Age: {pet.age}<br />
                        Gender: {pet.gender}<br />
                        About: {pet.aboutPet}<br />
                        Potty Trained: {pet.pottyTrained}
                      </Typography>
                    </CardContent>
                  )}
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* ... (footer content) */}
    </ThemeProvider>
  );
}





// function Copyright() {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }

//   const PetList = () => {
//         const { loading, error, data } = useQuery(GET_PETS);
    
//         if (loading) return <p>Loading...</p>;
//         if (error) return <p>Error: {error.message}</p>;
    
//         const petProfiles = data.petProfiles;}
    

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// export default function Album() {
//     return (
//       <ThemeProvider theme={defaultTheme}>
//         <CssBaseline />
//         <AppBar position="relative">
//           <Toolbar>
//             <Typography variant="h6" color="inherit" noWrap>
//               Album layout
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <main>
//           {/* Hero unit */}
//           <Box
//             sx={{
//               bgcolor: 'background.paper',
//               pt: 8,
//               pb: 6,
//             }}
//           >
//             <Container maxWidth="sm">
//               <Typography
//                 component="h1"
//                 variant="h2"
//                 align="center"
//                 color="text.primary"
//                 gutterBottom
//               >
//                 Pets
//               </Typography>
//               <Typography variant="h5" align="center" color="text.secondary" paragraph>
//                 The pets below are up for adoption and are looking for a happy home!
//               </Typography>
//               <Stack
//                 sx={{ pt: 4 }}
//                 direction="row"
//                 spacing={2}
//                 justifyContent="center"
//               >
//               </Stack>
//             </Container>
//           </Box>
//           <Container sx={{ py: 8 }} maxWidth="md">
//             {/* End hero unit */}
//             <Grid container spacing={4}>
//               {cards.map((card) => (
//                 <Grid item key={card} xs={12} sm={6} md={4}>
//                   <Card
//                     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                   >
//                     <CardMedia
//                       component="div"
//                       sx={{
//                         // 16:9
//                         pt: '56.25%',
//                       }}
//                       image="https://source.unsplash.com/random?wallpapers"

//                     />
//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography gutterBottom variant="h5" component="h2">
//                       {pet.petName}
//                       </Typography>
//                       <Typography>
//                       Type: {pet.petType}
//                       Breed: {pet.breed}
//                       Age: {pet.age}
//                       Gender: {pet.gender}
//                       About: {pet.aboutPet}
//                       Potty Trained: {pet.pottyTrained}
//                       </Typography>
//                     </CardContent>
//                     <CardActions>
//                       <Button size="small">View</Button>
//                       <Button size="small">Like</Button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </main>
//         {/* Footer */}
//         <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//           <Typography variant="h6" align="center" gutterBottom>
//             Footer
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             align="center"
//             color="text.secondary"
//             component="p"
//           >
//             Something here to give the footer a purpose!
//           </Typography>
//           <Copyright />
//         </Box>
//         {/* End footer */}
//       </ThemeProvider>
//     );
//   }








// const PetList = () => {
//     const { loading, error, data } = useQuery(GET_PETS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     const petProfiles = data.petProfiles;

//     return (
//         <div>
//             <h2>Pets for Adoption</h2>
//             <ul>
//                 {petProfiles.map((pet) => (
//                     <li key={pet._id}>
//                         <p>{pet.petName}</p>
//                         {pet.photo ? (
//                             <img
//                                 src={`/images/${pet.photo}`}
//                                 alt={pet.petName}
//                                 style={{ maxWidth: '200px', maxHeight: '200px' }}
//                             />
//                         ) : (
//                             <p>No photo available</p>
//                         )}
//                         <p>Type: {pet.petType}</p>
//                         <p>Breed: {pet.breed}</p>
//                         <p>Age: {pet.age}</p>
//                         <p>Gender: {pet.gender}</p>
//                         <p>About: {pet.aboutPet}</p>
//                         <p>Potty Trained: {pet.pottyTrained}</p>
//                         {/* Render other pet fields as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PetList;
