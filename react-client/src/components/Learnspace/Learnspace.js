import {
  AppBar,
  Input,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Popover,
  Button,
  Paper,
  Container,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React, { useState, useEffect } from "react";
import TuneIcon from "@material-ui/icons/Tune";
import Filters from "./Filters";
import ContentCard from "./ContentCard";
import Fuse from "fuse.js";
import { useForm } from "../UI elements/useForm";
import axios from "axios";

// List of Content
const initialContentList = [
  // {
  //     title: "Signals and System",
  //     author: "B.P.Lathi",
  //     type: 'books',
  // },
  // {
  //     title: "Signals and System",
  //     author: "Deergharao",
  //     type: 'books',
  // },
  // {
  //     title: "Advanced Mathematics (baccho ke liye)",
  //     author: "H.K.Das",
  //     type: 'books',
  // },
  // {
  //     title: "Physics",
  //     author: "Wavhal",
  //     type: 'books',
  // },
  // {
  //     title: "Chemistry",
  //     author: "Sujhathap",
  //     type: 'books',
  // },
  // {
  //     title: "Engineering mathematics",
  //     author: "Yadav Kamble",
  //     type: 'books',
  // },
];

// type of filters
const allFilters = {
  type: "all",
  year: "all",
  branch: "all",
};

// MUI Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    background: "white",
    color: "black",
    "& .MuiPaper-root": {
      borderRadius: "50px",
      flexGrow: 1,
      margin: "0 25px",
      background: "#f6f6f6",
    },
  },
}));

const Learnspace = () => {
  const [contentList, setContentList] = useState(initialContentList);
  // const fetchContentList = ;

  useEffect(() => {
    axios.get("http://localhost:3001/users/getbooks").then((response) => {
      // console.log(response.data);
      setContentList(response.data);
      console.log(contentList);
    });
  }, [contentList]);

  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [anchorE1, setAnchorE1] = useState(null);
  const { values, setValues, handleChange } = useForm(allFilters);

  const handleOnClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  const handleOnChange = (event) => {
    setQuery(event);
  };

  const open = Boolean(anchorE1);

  const fuse = new Fuse(contentList, {
    keys: ["title", "author"],
    includeScore: true,
  });
  const results = fuse.search(query);

  const contentResults = query ? results : contentList;
  // console.log(contentResults);
  // const filterByType = (values.type !== 'all') ? contentResults.filter(content => content.type === values.type):  contentResults;
  // const filterByBranch = (values.branch !== 'all') ? filterByType.filter(content => content.branch === values.branch):  filterByType;
  // const filterByYear = (values.branch !== 'all') ? filterByBranch.filter(content => content.year === values.year):  filterByBranch;

  console.log(values.type);
  console.log(results);
  const handleOnRequestSearch = () => {
    // console.log(filterByYear)
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.paper}>
          <Typography>Back to CollegeSpace</Typography>
          <SearchBar
            name="query"
            value={query}
            onChange={handleOnChange}
            onRequestSearch={handleOnRequestSearch}
          />
          <Button onClick={handleOnClick}>
            <TuneIcon />
          </Button>
          <Popover
            open={open}
            anchorE1={anchorE1}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Paper
              style={{
                padding: "20px",
                background: "#f6f6f6",
                maxWidth: "900px",
              }}
            >
              <Filters
                values={values}
                setValues={setValues}
                handleChange={handleChange}
              />
            </Paper>
          </Popover>
        </Toolbar>
      </AppBar>
      <ContentCard />
    </div>
  );
};

export default Learnspace;
