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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//icons
import MailLockTwoToneIcon from '@mui/icons-material/MailLockTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
//utilities
import { validateEmail, validatePassword } from '../../utilities/functions';
//images
import registered from '../../images/registered.png';

Register.propTypes = {
  handleClose: PropTypes.func,
  handleOpenLogin: PropTypes.func,
}

export default function Register(props = {}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const [formData, setFormData] = React.useState(initFormData());
  const [formDataValid, setFormDataValid] = React.useState(false);
  const [bussinessTypeList, setBussinessTypeList] = React.useState([]);

  React.useEffect(() => {
    setBussinessTypeList(initBussinessTypeList());
  }, []);

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
      },
      passwordConfirm: {
        value: "",
        valid: undefined,
        okMsg: "",
        errorMsg: ""
      },
      bussinessType: {
        value: "",
        valid: undefined,
        okMsg: "",
        errorMsg: ""
      }
    }
  }

  function initBussinessTypeList() {
    return [
      {
        value: "CNA01",
        label: "Clínica nuticionista",
      },
      {
        value: "COA01",
        label: "Clínica odontológica",
      },
      {
        value: "TAZ01",
        label: "Taller automotiz",
      }
    ];
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
  const handleMouseDownAllPassword = (event) => { event.preventDefault(); };

  function validateField(value, key) {
    const auxFormData = { ...formData };
    let validate;
    const emailErrors = ["Este campo es obligatorio.", "El email es incorrecto."];
    const passwordErrors = ["Este campo es obligatorio.", "Las contraseñas no coinciden."]

    switch (key) {
      case "email": validate = validateEmail(value, emailErrors); break;
      case "password": validate = validatePassword(value, passwordErrors); break;
      case "passwordConfirm": validate = validatePassword(value, passwordErrors, formData.password.value, true); break;
      case "bussinessType": validate = validateBussinessType(value); break;
      default: validate = false;
    }

    auxFormData[key].valid = validate?.valid;
    auxFormData[key].value = value;
    auxFormData[key].errorMsg = validate?.errorMsg;

    setFormData(auxFormData);
  }

  function validateBussinessType(value) {
    let validate = {
      valid: false,
      errorMsg: ""
    };

    if (value !== "") {
      validate.valid = true;
    } else {
      validate.errorMsg = "Este campo es obligatorio.";
    }

    return validate;
  }

  function formValidate() {
    const emailValid = formData.email.valid;
    const passwordValid = formData.password.valid;
    const passwordConfirmValid = formData.passwordConfirm.valid;
    const bussinesTypeValid = formData.bussinessType.valid;

    if (emailValid && passwordValid && passwordConfirmValid && bussinesTypeValid) {
      setFormDataValid(true);
    } else {
      setFormDataValid(false);
    }
  }

  function handleOnSubmit() {
    const sendData = formData;
    debugger;
    props.handleClose();
  }

  function changeForm() {
    setFormData(initFormData());
    props.handleOpenLogin();
  }

  function render() {
    const bussinessTypeValue = formData?.bussinessType?.value;
    const selected = bussinessTypeList?.find(el=>el.value === bussinessTypeValue);
    const selectedValue = selected ? selected.value : "";
   
    return (
      <div style={{ padding: '2rem' }}>
        <DialogTitle sx={{ color: '#2e7d32', fontSize: '2rem', lineHeight: '2rem', marginLeft: '-0.6rem' }}>Regístrate</DialogTitle>
        <DialogContent sx={{ mb: '2rem' }}>
          <DialogContentText sx={{ mb: '1rem' }}>
            LLena el siguiente formulario para registrarte.
          </DialogContentText>

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
                        onMouseDown={handleMouseDownAllPassword}
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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockTwoToneIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  color="success"
                  id="passwordConfirm"
                  label="Repite la constraseña"
                  type={showPasswordConfirm ? 'text' : 'password'}
                  value={formData?.passwordConfirm?.value}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={handleMouseDownAllPassword}
                      >
                        {showPasswordConfirm ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  }}
                  onChange={(event) => {
                    validateField(event.target.value, "passwordConfirm");
                  }}
                  error={formData?.passwordConfirm?.valid !== undefined ? !formData?.passwordConfirm?.valid : false}
                  helperText={<div style={{ minHeight: '1rem' }}>{formData?.passwordConfirm?.valid !== undefined ? !formData?.passwordConfirm?.valid ? formData?.passwordConfirm?.errorMsg : "" : ""}</div>}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BusinessCenterTwoToneIcon color="success" sx={{ mr: 1, my: 0.5 }} />
                <FormControl variant="standard" fullWidth>
                  <InputLabel color="success" variant="standard" htmlFor="uncontrolled-native">
                    Selecciona tipo de empresa
                  </InputLabel>
                  <Select
                    labelId="bussinessType"
                    id="bussinessType"
                    label="Tipo de empresa"
                    value={selectedValue}
                    onChange={(event) => {
                      validateField(event.target.value, "bussinessType");
                    }}
                    error={formData?.bussinessType?.valid !== undefined ? !formData?.bussinessType?.valid : false}
                    helperText={<div style={{ minHeight: '1rem' }}>{formData?.bussinessType?.valid !== undefined ? !formData?.bussinessType?.valid ? formData?.bussinessType?.errorMsg : "" : ""}</div>}
                  >
                    {
                      bussinessTypeList?.map((option, index) => {
                        return (
                          <MenuItem key={index} value={option.value}>
                            <span dangerouslySetInnerHTML={{ __html: option.label }} />
                          </MenuItem>
                        );
                      })
                    }
                  </Select>
                  <FormHelperText><div style={{ minHeight: '1rem' }}>{formData?.passwordConfirm?.valid !== undefined ? !formData?.passwordConfirm?.valid ? "Incorrect entry." : "" : ""}</div></FormHelperText>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ width: `40%` }}>
              <img src={registered} alt='' style={{ maxWidth: '100%' }} />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="success"
            size="large"
            onClick={() => changeForm()}
          >¿Ya tienes cuenta?
          </Button>
          <Button
            onClick={() => handleOnSubmit()}
            disabled={!formDataValid}
            variant="contained"
            color="success"
            size="large"
            startIcon={<HowToRegTwoToneIcon />}
          >Regístrate
          </Button>
        </DialogActions>
      </div>
    );
  }

  return render();
}