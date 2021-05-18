import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      backgroundColor: "#ffeead",
      width: "80%",
      margin: theme.spacing(1)
    }
  }
}));

export const useForm = (initialFValues) => {
  const [values, setValues ] = useState(initialFValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};