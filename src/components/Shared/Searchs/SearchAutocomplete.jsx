import * as React from 'react';
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'black !important',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(8)})`,
    width: '100%',
    transition: theme.transitions.create('width'),
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      color: 'white !important',
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      border: '1px solid transparent',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50ch',
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    }
  },
}));

SearchAutocomplete.propTypes = {}

export default function SearchAutocomplete(props = {}) {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      sx={{
        display: 'inline-block',
        width: '100%',
        '& input': {
          width: '100%',
          bgcolor: 'background.paper',
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.background.paper),
        }
      }}
      id="custom-input-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      getOptionLabel={(option) => `${option.title} ${option.subTitle}`}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <StyledInputBase
            placeholder="Buscar historial"
            aria-label="search-imput"
            {...params.inputProps}
            sx={{ width: '100%'}}
          />
        </div>
      )}
      renderOption={(props, option, { inputValue }) => {
        const matchesTitles = match(option.title, inputValue, { insideWords: true });
        const partsTitle = parse(option.title, matchesTitles);

        const matchesSubTitle = match(option.subTitle, inputValue, { insideWords: true });
        const partsSubTitle = parse(option.subTitle, matchesSubTitle);

        return (
          <List {...props} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="" src={option.avatar} />
              </ListItemAvatar>
              <ListItemText
                sx={{ paddingBottom: '0.4rem', borderBottom: '1px solid #efefef' }}
                primary={
                  <React.Fragment>
                    <Typography variant="body1" color="text.primary">
                      {
                        partsTitle.map((part, index) => (
                          <span
                            key={index}
                            style={{ fontWeight: part.highlight ? 700 : 400 }}
                          >
                            {part.text}
                          </span>
                        ))
                      }
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {
                        partsSubTitle.map((part, index) => (
                          <span
                            key={index}
                            style={{ fontWeight: part.highlight ? 700 : 400 }}
                          >
                            {part.text}
                          </span>
                        ))
                      }
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        );
      }}
    />
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', subTitle: 'The Lord of the Rings: The Return of the King', avatar: "https://mui.com/static/images/avatar/3.jpg" },
  { title: 'The Godfather', subTitle: 'The Good, the Bad and the Ugly', avatar: "https://mui.com/static/images/avatar/2.jpg" },
  { title: 'The Godfather: Part II', subTitle: 'Fight Club', avatar: "https://mui.com/static/images/avatar/1.jpg" },
  { title: 'The Dark Knight', subTitle: 'The Lord of the Rings: The Fellowship of the Ring', avatar: "https://mui.com/static/images/avatar/3.jpg" },
  { title: '12 Angry Men', subTitle: 'Star Wars: Episode V - The Empire Strikes Back', avatar: "https://mui.com/static/images/avatar/2.jpg" },
  { title: "Schindler's List", subTitle: 'Forrest Gump', avatar: "https://mui.com/static/images/avatar/1.jpg" },
  { title: 'Pulp Fiction', subTitle: 'Star Wars: Episode IV - A New Hope', avatar: "https://mui.com/static/images/avatar/3.jpg" }
];