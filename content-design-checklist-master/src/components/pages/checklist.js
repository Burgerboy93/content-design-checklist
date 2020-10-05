import React from "react";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../categoryCard";
import Grid from "@material-ui/core/Grid";
import { categoryData } from "../data/categoryData";

export default function Checklist() {
  return (
    <div>
      {" "}
      {categoryData.map((category) => (
        <div key={category.id}>
          <Grid
            container
            spacing={4}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography variant="h5">{category.title}</Typography>
            <MediaCard {...category} />
          </Grid>
        </div>
      ))}
    </div>
  );
}
