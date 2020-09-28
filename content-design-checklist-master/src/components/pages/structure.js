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

export default function Structure() {
  const classes = useStyles();
  const filterChapters = data.filter(category => {
    return category.category.includes("structure");
  });

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
        </Grid>


        <div id="content">
        <Grid container direction="row"   justify="center" alignItems="stretch" className="App" spacing={3}>
        {filterChapters.map((chapter) => (
          <div key={filterChapters.id}>
          <ChapterCard {...chapter} />
          </div>
        ))}
        <Grid container direction="column"   justify="center" alignItems="center" className="App" spacing={3}>
      <AddAll />
      </Grid>

        </Grid>
        </div>
        </div>
    )
}
