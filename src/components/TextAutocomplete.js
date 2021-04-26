import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import API, { ENDPOINTS } from "../utils/API";
import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: theme.input,
    button: { ...theme.button, marginLeft: 5, },
  })
);

const TextAutocomplete = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    API({method: "GET", url: ENDPOINTS.SEARCH, params: {key: inputValue} })
      .then((results) => {
        if (active) {
          let newOptions = [];

          if (value)
            newOptions = [value];

          if (results.data)
            newOptions = [...newOptions, ...results.data];

          setOptions(newOptions);
        }
      });

    return () => {
      active = false;
    };
  }, [value, inputValue]);

  return (
    <Autocomplete
      autoComplete
      fullWidth
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          label="Search..."
          variant="outlined"
          fullWidth
          type={"search"}
          className={classes.input}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          {...params}
        />
      )}
      renderOption={(option) => {
        return (
          <Typography variant="body2" color="textSecondary">
            {option}
          </Typography>
        );
      }}
    />
  );
}
export default TextAutocomplete;
