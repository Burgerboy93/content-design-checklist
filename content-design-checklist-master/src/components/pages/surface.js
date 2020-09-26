import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {surfaceData} from '../categoryData'

export default function Surface() {
    return(
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h5">Surface</Typography>
          <MediaCard {...surfaceData}/>
        </Grid>
    )
}