import { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Paper, Link } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { search } from "../api/API";
import TickerChip from "./TickerChip";
import { Link as RouterLink } from "react-router-dom";
import { getRoute, PAGES } from "../routes";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: {...theme.search },
    card: {...theme.card, padding: 0, marginTop: theme.spacing(0.5)},
    button: { ...theme.button, marginLeft: 5 },
    links: { color: theme.palette.text.primary },
  })
);

const SearchPaper = (props) => {
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

const SearchBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let isActive = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    search(inputValue)
    .then((results) => isActive && setOptions([...new Set(results.names.concat(results.tickers))]));

    return () => {
      isActive = false;
    };
  }, [value, inputValue]);

  return (
    <Autocomplete
      autoComplete
      fullWidth
      options={options}
      value={inputValue}
      getOptionLabel={(option) => (option.ticker===undefined) ? option : option.ticker}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      PaperComponent={SearchPaper}
      renderInput={(params) => (
        <TextField
          label="Search..."
          variant="outlined"
          fullWidth
          type={"search"}
          className={classes.input}
          style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          {...params}
        />
      )}
      renderOption={(option) => {
        return (
          <RouterLink
            component={Link}
            to={`${getRoute(PAGES.SINGLE_STOCK).path.slice(0,-4)}/${option.ticker}`}
            variant="body2"
            color="textSecondary"
            className="links"
          >
            <TickerChip showFullName ticker={option}/>
          </RouterLink>
        );
      }}
    />
  );
};
export default SearchBar;
