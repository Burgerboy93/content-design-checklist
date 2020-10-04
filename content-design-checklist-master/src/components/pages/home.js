import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import { categoryData } from "../data/categoryData";
import Downarrow from './images/downarrow.png'

export default function Home() {
  return (

    <div>
      {" "}
      {categoryData.map((category) => (
        <div key={category.id} id="container">
          <Grid
          container
          direction="column"
          alignItems="center"
          justify="stretch"
          >
          <div class={category.title}>
          <div class="level">
          <div class="heading">
            <Typography variant="h5">{category.title}</Typography>
            </div>
            <MediaCard {...category} />
            <div class="downarrow">
            <img src={Downarrow} alt="Down arrow" />;
            </div>
            </div>
            </div>
          </Grid>
        </div>
      ))}
    </div>
  );
}
