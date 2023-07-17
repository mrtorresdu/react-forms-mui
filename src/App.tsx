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
import { Controller, useForm } from 'react-hook-form';
import ButtonAppBar from './AppBar';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', shipmentMethod: '' },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    console.table(data);
    reset();
  };

  return (
    <Box maxWidth={'100%'}>
      <ButtonAppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ width: '90%', my: 7, py: 3, px: 3 }}>
          <Typography variant='h4' component='h1' fontWeight={700} textAlign={'center'}>
            Purchase Order Form
          </Typography>
          <Box
            mt={3}
            display={'flex'}
            justifyContent={'center'}
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
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
                      fullWidth
                      {...register('name', { required: 'the name field is required', minLength: 2 })}
                      helperText={errors.name?.message}
                      error={!!errors.name}
                      label='Name'
                      type='text'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      {...register('email', {
                        required: 'The email field is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'The email field is invalid',
                        },
                      })}
                      helperText={errors.email?.message}
                      error={!!errors.email}
                      label='Email'
                      type='email'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth error={!!errors.shipmentMethod}>
                      <InputLabel required>Shipment Method</InputLabel>
                      <Controller
                        name='shipmentMethod'
                        control={control}
                        defaultValue=''
                        rules={{ required: 'Please select a shipment method' }}
                        render={({ field }) => (
                          <Select
                            label='Shipment Method '
                            required
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          >
                            <MenuItem value='standard'>Standard</MenuItem>
                            <MenuItem value='express'>Express</MenuItem>
                            <MenuItem value='priority'>Priority</MenuItem>
                          </Select>
                        )}
                      />
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
