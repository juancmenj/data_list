import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
//import FormHelperText from '@mui/material/FormHelperText';
//icons
import MailLockTwoToneIcon from '@mui/icons-material/MailLockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
//utilities
import { validateEmail, validatePassword } from '../../utilities/functions';
//images
import password from '../../images/password.png';

LogIn.propTypes = {
  handleClose: PropTypes.func,
  handleOpenRegister: PropTypes.func
}

export default function LogIn(props = {}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState(initFormData());
  const [formDataValid, setFormDataValid] = React.useState(false);

  React.useEffect(() => {
    formValidate();
  }, [formData]);

  function initFormData() {
    return {
      email: {
        value: "",
        valid: undefined,
        okMsg: "",
        errorMsg: ""
      },
      password: {
        value: "",
        valid: undefined,
        okMsg: "",
        errorMsg: ""
      }
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  function validateField(value, key) {
    const auxFormData = { ...formData };
    let validate;
    const emailErrors = ["Este campo es obligatorio.", "El email es incorrecto."];
    const passwordErrors = ["Este campo es obligatorio.", "Las contraseñas no coinciden."]

    switch (key) {
      case "email": validate = validateEmail(value, emailErrors); break;
      case "password": validate = validatePassword(value, passwordErrors); break;
      default: validate = false;
    }

    auxFormData[key].valid = validate?.valid;
    auxFormData[key].value = value;
    auxFormData[key].errorMsg = validate?.errorMsg;

    setFormData(auxFormData);
  }

  function formValidate() {
    const emailValid = formData.email.valid;
    const passwordValid = formData.password.valid;

    if (emailValid && passwordValid) {
      setFormDataValid(true);
    } else {
      setFormDataValid(false);
    }
  }

  function handleOnSubmit() {
    debugger;
    props.handleClose();
  }

  function changeForm() {
    setFormData(initFormData());
    props.handleOpenRegister();
  }

  function render() {
    return (
      <div style={{ padding: '2rem' }}>
        <DialogTitle
          sx={{ color: '#2e7d32', fontSize: '2rem', lineHeight: '2rem', marginLeft: '-0.6rem' }}
        >Iniciar sesión</DialogTitle>
        <DialogContent sx={{ mb: '2rem' }}>
          <DialogContentText sx={{ mb: '1rem' }}>Ingresa tus credenciales</DialogContentText>

          <Stack direction="row" spacing={2} sx={{minHeight: '42vh'}}>
            <Box sx={{ width: `60%` }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MailLockTwoToneIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  color="success"
                  id="email"
                  label="Correo electrónico"
                  type="text"
                  value={formData?.email?.value}
                  fullWidth
                  variant="standard"
                  onChange={(event) => {
                    validateField(event.target.value, "email");
                  }}
                  error={formData?.email?.valid !== undefined ? !formData?.email?.valid : false}
                  helperText={<div style={{ minHeight: '1rem' }}>{formData?.email?.valid !== undefined ? !formData?.email?.valid ? formData?.email?.errorMsg : "" : ""}</div>}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenTwoToneIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  color="success"
                  id="password"
                  label="Constraseña"
                  type={showPassword ? 'text' : 'password'}
                  value={formData?.password?.value}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  }}
                  onChange={(event) => {
                    validateField(event.target.value, "password");
                  }}
                  error={formData?.password?.valid !== undefined ? !formData?.password?.valid : false}
                  helperText={<div style={{ minHeight: '1rem' }}>{formData?.password?.valid !== undefined ? !formData?.password?.valid ? formData?.password?.errorMsg : "" : ""}</div>}
                />
              </Box>
            </Box>
            <Box sx={{ width: `40%` }}>
              <img src={password} alt='' style={{ maxWidth: '100%' }} />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="success"
            size="large"
            onClick={()=> changeForm()}
          >¿No tienes una cuenta?
          </Button>
          <Button
            onClick={() => handleOnSubmit()}
            disabled={!formDataValid}
            variant="contained"
            color="success"
            size="large"
            startIcon={<HowToRegTwoToneIcon />}
          >Entrar
          </Button>
        </DialogActions>
      </div>
    );
  }

  return render();
}