import { Send } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import ButtonAppBar from './AppBar';

function App() {
  return (
    <Box maxWidth={'100%'}>
      <ButtonAppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: '90%', my: 7, p: 7 }}>
          <Typography variant='h2' component='h1' fontWeight={700} textAlign={'center'}>
            Purchase Order Form (Test)
          </Typography>
          <Box mt={3} display={'flex'} justifyContent={'center'}>
            <form action=''>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant='h3' component='h2' fontWeight={500}>
                        Customer Information
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField fullWidth name='name' label='Name' type='text' variant='outlined' />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField fullWidth name='address' label='Delivery Address' type='text' variant='outlined' />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField fullWidth name='tel' label='Phone Number' type='number' variant='outlined' />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField fullWidth name='email' label='Email' type='email' variant='outlined' />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                  <Button variant='contained' endIcon={<Send />}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
