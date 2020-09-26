import React from 'react';

import '../App.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({

  root: {
    flexGrow: 1,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },

  Card: {
    margin:'auto',

  }
});

export default function AddAll() {

  const classes = useStyles();


  const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (

    <div>
    <Button variant="contained" color="primary">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label="Add all to checklist"
      />
      </Button>


    </div>
  );
}
