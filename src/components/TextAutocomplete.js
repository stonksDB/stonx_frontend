import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, InputAdornment, Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { search } from "../api/API";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: theme.search,
    card: {...theme.card, padding: 0, marginTop: theme.spacing(0.5)},
    button: { ...theme.button, marginLeft: 5 },
  })
);

const AutoCompletePaper = (props) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
      {...props}
      className={classes.card}
    />
  );
};

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

    search(inputValue)
    .then((results) => {
      if (active) {
        let newOptions = [];

        if (results) newOptions = [...newOptions, ...results];
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
      value={inputValue}
      getOptionSelected={(option, value) => true}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      PaperComponent={AutoCompletePaper}
      renderInput={(params) => (
        <TextField
          label="Search..."
          variant="outlined"
          fullWidth
          type={"search"}
          className={classes.input}
          style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: "white"}}
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
};
export default TextAutocomplete;