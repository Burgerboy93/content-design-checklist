import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";

import Grid from "@material-ui/core/Grid";
import {skeletonData} from '../data/categoryData'
import {chapter50Data, chapter48Data, chapter23Data} from '../data/skeletonData'
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

export default function Scope() {
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
          <Typography variant="h5">Skeleton</Typography>
          <MediaCard {...skeletonData}/>
        </Grid>


<div id="content">
        <Grid container direction="row"   justify="center" alignItems="stretch" className="App" spacing={3}>
        <ChapterCard {...chapter50Data}/>
        <ChapterCard {...chapter48Data}/>
        <ChapterCard {...chapter23Data}/>

          <Grid container direction="column"   justify="center" alignItems="center" className="App" spacing={3}>
        <AddAll />
        </Grid>
        </Grid>
        </div>
        </div>
    )
}
