import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {strategyData} from '../data/categoryData'

export default function Strategy() {
    return(
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h5">Strategy</Typography>
          <MediaCard {...strategyData}/>
        </Grid>
    )
}