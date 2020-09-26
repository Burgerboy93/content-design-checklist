import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {strategyData, scopeData, structureData, skeletonData, surfaceData} from '../data/categoryData';



export default function Home() {
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
          <Typography variant="h5">Scope</Typography>
          <MediaCard {...scopeData} />
          <Typography variant="h5">Structure</Typography>
          <MediaCard {...structureData} />
          <Typography variant="h5">Skeleton</Typography>
          <MediaCard {...skeletonData} />
          <Typography variant="h5">Surface</Typography>
          <MediaCard {...surfaceData} />
        </Grid>
    )
}