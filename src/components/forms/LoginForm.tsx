import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginData from '../../models/LoginData';
import { Alert } from '@mui/material';
type Props = {
    submitFn: (loginData: LoginData)=>boolean
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tel-ran.com">
        Tel-Ran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm({submitFn}: Props) {
    const [flAlert, setAlert] = React.useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {email: data.get('email') as string, password: data.get('password') as string}
    console.log(loginData);
    if(!submitFn(loginData)) {
        setAlert(true)
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: {xs: 15, sm: 1, md: 15},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            {flAlert && <Alert onClose={() => setAlert(false)} severity='error'
             sx={{width: '50vw', mb: {xs: 5,sm:1,md: 5}}}>Wrong Credentials</Alert>}
          <Avatar sx={{  bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Box component="form" onSubmit={handleSubmit} sx={{mt: {xs: 8, sm: 2, md:10}}} >
            <TextField
              
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              
              autoFocus
            />
            <TextField
            sx={{mt: {xs: 5, sm:2, md: 5}}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: {xs: 5, sm:2, md: 5}}}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{mt: {xs: 5, sm:2, md: 5}  }} />
      </Container>
    </ThemeProvider>
  );
}