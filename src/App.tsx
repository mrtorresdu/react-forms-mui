import { Send } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import ButtonAppBar from './AppBar';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.table(data);
  };

  return (
    <Box maxWidth={'100%'}>
      <ButtonAppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: '90%', my: 7, py: 3, px: 3 }}>
          <Typography variant='h4' component='h1' fontWeight={700} textAlign={'center'}>
            Purchase Order Form
          </Typography>
          <Box mt={3} display={'flex'} justifyContent={'center'} component='form' onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant='h5' component='h2' fontWeight={500}>
                      Customer Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      {...register('name', { required: true })}
                      label='Name'
                      type='text'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      {...register('email', { required: true })}
                      label='Email'
                      type='email'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <InputLabel required>Shipment Method</InputLabel>
                      <Select
                        required
                        label='Shipping Method'
                        {...register('shipping-method', { required: true })}
                        defaultValue={''}
                      >
                        <MenuItem value='standard'>Standard</MenuItem>
                        <MenuItem value='express'>Express</MenuItem>
                        <MenuItem value='priority'>Priority</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                <Button type='submit' variant='contained' endIcon={<Send />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
