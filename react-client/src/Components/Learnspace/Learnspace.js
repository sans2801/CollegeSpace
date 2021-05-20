import {
  AppBar,
  makeStyles,
  Toolbar,
  Popover,
  Button,
  Paper,
  Grid,
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
  branch: ["all"],
};

// MUI Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiToolBar-root": {
      justifyContent: "center",
    },
  },
  paper: {
    background: "white",
    color: "black",
    paddingBottom: "50px",
    paddingTop: "30px",
    "& .MuiPaper-root": {
      flexGrow: 1,
      background: "#f6f6f6",
      justifyContent: "space-between",
      backgroundColor: "rgb(236, 234, 234)",
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "black",
    },
  },
  search: {
    maxWidth: "1000px",
  },
}));

const Learnspace = () => {
  const [contentList, setContentList] = useState(initialContentList);

  useEffect(() => {
    axios.get("http://localhost:3001/users/getbooks").then((response) => {
      console.log(response.data);
      setContentList(response.data);
    });
  }, []);

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

  const handleRequestSearch = (event) => {
    setQuery(event);
  };

  const handleCancelSearch = (event) => {
    setQuery("");
  };

  const open = Boolean(anchorE1);

  const fuse = new Fuse(contentList, {
    keys: ["name", "author"],
    includeScore: true,
  });
  const results = fuse.search(query);
  const resultsItem = results.map((content) => content.item);
  const contentResults = query ? resultsItem : contentList;
  // setContentList(contentResults);
  
  const filterByType =
    values.type === "all"
      ? contentResults
      : contentResults.filter((content) => content.type === values.type);

  console.log(values.type, filterByType, "filterByType");
  console.log(filterByType);
  console.log(contentResults);
  // console.log(filterByBranch);
  const filterByBranch =
    values.branch[0] === "all"
    
      ? filterByType
      : filterByType.filter((content) => {
          var br = true;
          br = br && content.branch[0] === values.branch[0];
          if (content.branch.length > 1) {
            br = br || content.branch[1] === values.branch[0];
          }
          return br;
        });

  console.log(values.branch, filterByBranch, "filterByBranch");
  
  const filterByYear =
    values.year === "all"
      ? filterByBranch
      : filterByBranch.filter((content) => content.year === values.year);
  console.log(values.year, filterByYear, "filterByYear");
  console.log(contentResults);
  // console.log(results);
  const handleOnRequestSearch = () => {
    // console.log(filterByYear)
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.paper}>
          <Grid container>
            {/* <Typography style={{ color: "black" }}>
              Back to CollegeSpace
            </Typography> */}
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={9} md={6}>
              <SearchBar
                maxWidth="1000px"
                name="query"
                value={query}
                onRequestSearch={handleRequestSearch}
                onCancelSearch={handleCancelSearch}
                className={classes.search}
                placeholder="Search"
              />
            </Grid>
            <Grid item xs={2} md={2}>
              <Grid item md={2}></Grid>
              <Button onClick={handleOnClick}>
                <TuneIcon />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Popover
        open={open}
        anchorE1={anchorE1}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
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
      <ContentCard contentList={filterByYear} />
    </div>
  );
};

export default Learnspace;
