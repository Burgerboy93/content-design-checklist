import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";

import Grid from "@material-ui/core/Grid";
import {structureData} from '../data/categoryData'
import {chapter52Data, chapter44Data} from '../data/structureData'
import ChapterCard from '../chaptercard';
import AddAll from '../addall';
import { makeStyles } from '@material-ui/core/styles';


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

export default function Structure() {
  const classes = useStyles();
    return(
      <div>
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h5">Structure</Typography>
          <MediaCard {...structureData}/>
        </Grid>


<div id="content">
        <Grid container direction="row"   justify="center" alignItems="stretch" className="App" spacing={3}>
        <ChapterCard {...chapter52Data}/>
        <ChapterCard {...chapter44Data}/>


        <Grid container direction="column"   justify="center" alignItems="center" className="App" spacing={3}>
      <AddAll />
      </Grid>

        </Grid>
        </div>
        </div>
    )
}
