import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {skeletonData} from '../categoryData'

export default function Skeleton() {
    return(
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
    )
}