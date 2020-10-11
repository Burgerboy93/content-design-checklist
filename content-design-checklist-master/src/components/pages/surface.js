import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {data} from '../data/chapterData';
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
  const filterChapters = data.filter(category => {
    return category.category.includes("surface");
  });

    return(
      <div class="Surface">
        <Grid
          container

          direction="column"
          alignItems="center"
          justify="center"
        >
        <div class="catHeading">
          <Typography variant="h5">Surface</Typography>
          </div>
        </Grid>
        <div id="content">
        <Grid container direction="row"   justify="center" alignItems="stretch" className="App">
        {filterChapters.map((chapter) => (
          <div key={filterChapters.id}>
          <ChapterCard {...chapter} />
          </div>
        ))}
        <Grid container direction="column"   justify="center" alignItems="center" className="App">
      
      </Grid>
        </Grid>
        </div>
        </div>
    )
}
