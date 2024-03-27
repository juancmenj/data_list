import * as React from 'react';
import { useNavigate } from "react-router-dom";
//import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const StyledInputBase = styled(Paper)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '1px solid rgba(68,89,100,0.6) !important',
  [theme.breakpoints.up('sm')]: {
    border: '1px solid transparent !important',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.30)
    }
  },
  '& .MuiInputBase-input': {
    color: 'rgba(68,89,100,1) !important',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    transition: theme.transitions.create('width'),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0),
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.up('sm')]: {
      border: '1px solid transparent !important',
      color: 'white !important',
    }
  }
}));

SearchAutocomplete.propTypes = {}

const categoryType = "TAZ01"; //sera un estado global de redux

export default function SearchAutocomplete(props = {}) {
  const navigate = useNavigate();
  const [autocompleteValue, setAutocompleteValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const optionData = [
    { id: 'P-ABC001', owner: 'Jose Perez', brand: 'Toyota Corolla 2021', avatar: "https://mui.com/static/images/avatar/3.jpg" },
    { id: 'P-ABC002', owner: 'Juan Lopez', brand: 'Toyota Corolla 2020', avatar: "https://mui.com/static/images/avatar/2.jpg" },
    { id: 'P-ABC003', owner: 'Griselda Rodriguez', brand: 'Toyota Corolla 2005', avatar: "https://mui.com/static/images/avatar/1.jpg" },
    { id: 'P-ABC024', owner: 'Alejo Sibrian', brand: 'Honda Civic 2021', avatar: "https://mui.com/static/images/avatar/3.jpg" },
    { id: 'P-ABC035', owner: 'Joselin Salazar', brand: 'Honda Civic 2021', avatar: "https://mui.com/static/images/avatar/2.jpg" },
    { id: 'P-ABC046', owner: 'Pedro Paramo', brand: "Nissan Centra 2010", avatar: "https://mui.com/static/images/avatar/1.jpg" },
    { id: 'P-ABC057', owner: 'Rita Cuellar', brand: 'Chevrolet Spark 2015', avatar: "https://mui.com/static/images/avatar/3.jpg" }
  ];

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    } else {
      setLoading(true);
      (async () => {
        await sleep(800);
        setOptions([...optionData]);
        setLoading(false);
      })();
    }
  }, [open]);

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  const handleChange = (event, value) => {
    if (value && value.id) {
      const route = `/user/activity/${value.id}`;
      navigate(route);
    }
    return;
  };

  function renderOptionsAutocomplete(optionElement, value, variant = "") {
    const matches = match(optionElement, value, { insideWords: true });
    const parts = parse(optionElement, matches);

    return (
      <Typography variant={variant} color="text.primary">
        {
          parts.map((part, index) => (
            <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
              {part.text}
            </span>
          ))
        }
      </Typography>
    );
  }

  function renderOptionLabel(option) {
    //get type
    let optionType;

    switch (categoryType) {
      case "CNA01": optionType = ``; break;
      case "COA01": optionType = ``; break;
      case "TAZ01": optionType = `${option?.id} ${option?.owner} ${option?.brand}`; break;
      default: optionType = ``;
    }

    return optionType;
  }

  function renderListItemText(option, inputValue) {
    if (categoryType === "CNA01") {
      return;
    }

    if (categoryType === "COA01") {
      return;
    }

    if (categoryType === "TAZ01") {
      return (
        <React.Fragment>
          {renderOptionsAutocomplete(`${option?.id} | ${option?.brand}`, inputValue, "body1")}
          {renderOptionsAutocomplete(option?.owner, inputValue, "body2")}
        </React.Fragment>
      );
    }
  }

  function render() {
    const optionData = options.map((option) => {
      const firstLetter = option.owner[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
      };
    });

    return (
      <Autocomplete
        inputValue={autocompleteValue}
        sx={{
          display: 'inline-block',
          width: '100%',
          //height: '3rem',
          '& input': {
            width: '100%',
            //height: '2rem',
            bgcolor: 'background.paper',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          }
        }}
        id="autocomplete"
        open={open}
        onOpen={() => { setOpen(true); }}
        onClose={() => { setOpen(false); }}
        options={optionData.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        //groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => renderOptionLabel(option)}
        renderInput={(params) =>
          <div ref={params.InputProps.ref}>
            <StyledInputBase
              component="form"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <InputBase
                placeholder="Buscar historicos"
                aria-label="search-input"
                {...params.inputProps}
                sx={{ width: '100% !important' }}
                endAdornment={
                  <Box sx={{ p: '8px 10px 2px 10px', color: 'white' }} aria-label="directions">
                    {loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : null}
                  </Box>
                }
              />
            </StyledInputBase>
          </div>
        }
        renderOption={(props, option, { inputValue }) => {
          const listItemTextValue = renderListItemText(option, inputValue);

          return (
            <List {...props} sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="" src={option?.avatar} />
                </ListItemAvatar>
                <ListItemText primary={listItemTextValue} />
              </ListItem>
            </List>
          )
        }}
        noOptionsText={'No se encontró ningún registro'}
        onChange={handleChange}
        loading={loading}
        loadingText={"Espere, cargando data..."}
        onInputChange={(event, newInputValue, reason) => {
          if (reason === "reset") {
            setAutocompleteValue("");
            return;
          } else {
            setAutocompleteValue(newInputValue)
          }
        }}
      />
    );
  }

  return render();
}
