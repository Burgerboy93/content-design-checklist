import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {structureData} from '../categoryData'

export default function Structure() {
    return(
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
    )
}