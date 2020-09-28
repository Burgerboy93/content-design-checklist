import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import {strategyData, scopeData, structureData, skeletonData, surfaceData} from '../data/categoryData';
import Box from '@material-ui/core/Box';


export default function Home() {
    return(
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justify="center"
        >
        <div class="strategyContainer">
        <div class="level">
        <div class="heading">
          <Typography variant="h5">Strategy</Typography>
          </div>
          <MediaCard {...strategyData}/>
          </div>
          </div>
          <div class="scopeContainer">
          <div class="level">
          <div class="heading">
          <Typography variant="h5">Scope</Typography>
          </div>
          <MediaCard {...scopeData} />
          </div>
          </div>
          <div class="structureContainer">
          <div class="level">
          <div class="heading">
          <Typography variant="h5">Structure</Typography>
          </div>
          <MediaCard {...structureData} />
          </div>
          </div>
          <div class="skeletonContainer">
          <div class="level">
          <div class="heading">
          <Typography variant="h5">Skeleton</Typography>
          </div>
          <MediaCard {...skeletonData} />
          </div>
          </div>
          <div class="surfaceContainer">
          <div class="level">
          <div class="heading">
          <Typography variant="h5">Surface</Typography>
          </div>
          <MediaCard {...surfaceData} />
          </div>
          </div>
        </Grid>
    )
}
