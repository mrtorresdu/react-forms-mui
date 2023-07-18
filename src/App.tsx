import { Send } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
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

const countries = [
  { label: 'Afganistán', id: 'AF' },
  { label: 'Alemania', id: 'DE' },
  { label: 'Argentina', id: 'AR' },
  { label: 'Australia', id: 'AU' },
  { label: 'Brasil', id: 'BR' },
  { label: 'Canadá', id: 'CA' },
  { label: 'China', id: 'CN' },
  { label: 'Colombia', id: 'CO' },
  { label: 'España', id: 'ES' },
  { label: 'Estados Unidos', id: 'US' },
  { label: 'Francia', id: 'FR' },
  { label: 'India', id: 'IN' },
  { label: 'Italia', id: 'IT' },
  { label: 'Japón', id: 'JP' },
  { label: 'México', id: 'MX' },
  { label: 'Reino Unido', id: 'GB' },
  { label: 'Rusia', id: 'RU' },
];

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', shipmentMethod: '', country: '' },
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
                      {...register('name', {
                        required: 'The name field is required',
                        minLength: { value: 2, message: 'The name must have at least 2 characters' },
                      })}
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
                      {errors.shipmentMethod && <FormHelperText>{errors.shipmentMethod.message}</FormHelperText>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Controller
                      name='country'
                      control={control}
                      rules={{ required: 'Please select country' }}
                      render={({ field: { onChange, value } }) => (
                        <Autocomplete
                          options={countries}
                          value={countries.find((country) => country.id === value) || null}
                          onChange={(_, data) => {
                            onChange(data?.id ?? '');
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label='Country'
                              variant='outlined'
                              error={!!errors.country}
                              helperText={errors.country?.message}
                            />
                          )}
                        />
                      )}
                    />
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
