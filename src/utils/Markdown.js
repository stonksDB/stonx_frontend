import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  withStyles,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  createStyles, Link
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

//Credits to https://gist.github.com/boganegru/a4da0b0da0b1233d30b10063b10efa8a
const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(1),
    },
    sectionContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    listItem: {
      marginTop: theme.spacing(1),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  })
);

const MarkdownParagraph = (props) => {
  const theme = useTheme();
  return <Typography style={{marginBottom: theme.spacing(1)}}>{props.children}</Typography>
}

const MarkdownHeading = withStyles(useStyles)(({...props }) => {
  const classes = useStyles();
  let variant;
  switch (props.level) {
    case 1:
      variant = "h5";
      break;
    case 2:
      variant = "h6";
      break;
    case 3:
      variant = "subtitle1";
      break;
    case 4:
      variant = "subtitle2";
      break;
    default:
      variant = "h6";
      break;
  }
  return <Typography
    className={classes.title}
    gutterBottom
    variant={variant}>
    {props.children}
  </Typography>
});

const MarkdownListItem = withStyles(useStyles)(({...props }) => {
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      <Typography component="span">{props.children}</Typography>
    </li>
  );
});

function MarkdownTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">{props.children}</Table>
    </TableContainer>
  );
}

const MarkdownTableCell = (props) => {
  return <TableCell><Typography>{props.children}</Typography></TableCell>
}

const MarkdownTableRow = (props) => {
  return <TableRow>{props.children}</TableRow>
}

const MarkdownTableBody = (props) => {
  return <TableBody>{props.children}</TableBody>
}

const MarkdownTableHead = (props) => {
  return <TableHead>{props.children}</TableHead>
}

const MarkdownLink = (props) => {
  const classes = useStyles();
  return <Link
    className={classes.link}
    target="_blank"
    {...props}
  >
    {props.children}
  </Link>
}

const Markdown = (props) => {
  const classes = useStyles();
  const renderers = {
    heading: MarkdownHeading,
    paragraph: MarkdownParagraph,
    link: MarkdownLink,
    listItem: MarkdownListItem,
    table: MarkdownTable,
    tableHead: MarkdownTableHead,
    tableBody: MarkdownTableBody,
    tableRow: MarkdownTableRow,
    tableCell: MarkdownTableCell,
  };

  return (
    <ReactMarkdown
      className={classes.sectionContainer}
      renderers={renderers}
      {...props}
    />
  );
}
export default Markdown;
