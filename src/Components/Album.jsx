import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField'
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chikoo.com/">
        Chikoo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();
const primaryColor = "#8957fe"
const secondaryColor = "#a4a4a4"
export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: 'white', color: '#00000' }}>
        <Toolbar>
          <img src="./chikoo.png" style={{ width: '100px' }} />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">

            <img src="./chikoo the alebrije.png" style={{ width: '500px' }} />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color={primaryColor}
              gutterBottom
            >
              Welcome to Chikoo!
            </Typography>
            <Typography
              component="h3"
              align="center"
              color={primaryColor}
              gutterBottom
            >
              Your preconsultant companion
            </Typography>
            <Stack
              sx={{ pt: 4, m: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Type your patient's password to see his clinic history "
                variant="outlined"
                sx={{
                  width: '100%',
                  "& .MuiInputLabel-root": { color: `#545454` }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: '#545454' },
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: '#545454',
                      color: `${secondaryColor}`
                    },
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: '#545454'
                  }
                }} />
            </Stack>
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: `${primaryColor}`,
                "&:hover": {
                  backgroundColor:`#643fba`, 
                }
              }}
            > Search Patient</Button>
          </Container>
        </Box>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Chikoo
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          &lt;&#47;&gt; with 💖 by David & Oscar
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
