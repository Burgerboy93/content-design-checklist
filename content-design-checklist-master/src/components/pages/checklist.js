import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import ChecklistCard from "../checklistCard";
import Grid from "@material-ui/core/Grid";
import ChecklistContext from '../services/CheckListContext.js';
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
});

export default function Checklist() {
  const classes = useStyles();
  const context = useContext(ChecklistContext) 
  const {checklist, dispatch} = context;

const strategyChapters = checklist.filter((strategy) => {
  return strategy.category.includes("strategy");
});

const scopeChapters = checklist.filter((scope) => {
  return scope.category.includes("scope");
});

const structureChapters = checklist.filter((structure) => {
  return structure.category.includes("structure");
});

const skeletonChapters = checklist.filter((skeleton) => {
  return skeleton.category.includes("skeleton");
});

const surfaceChapters = checklist.filter((surface) => {
  return surface.category.includes("surface");
});





  return (
    <div>
      <div class='container'>
      <Typography variant="h5">Strategy</Typography>
      {strategyChapters.map((chapter) => (
        <div key={chapter.id}>
            <ChecklistCard {...chapter} />
        </div>
      ))}
      </div>
      <div class='container'>
      <Typography variant="h5">Scope</Typography>
      {scopeChapters.map((chapter) => (
        <div key={chapter.id}>
            <ChecklistCard {...chapter} />
        </div>
      ))}
      </div>
      <div class='container'>
      <Typography variant="h5">Structure</Typography>
      {structureChapters.map((chapter) => (
        <div key={chapter.id}>
            <ChecklistCard {...chapter} />
        </div>
      ))}
      </div>
      <div class='container'>
      <Typography variant="h5">Skeleton</Typography>
      {skeletonChapters.map((chapter) => (
        <div key={chapter.id}>
            <ChecklistCard {...chapter} />
        </div>
      ))}
      </div>
      <div class='container'>
      <Typography variant="h5">Surface</Typography>
      {surfaceChapters.map((chapter) => (
        <div key={chapter.id}>
            <ChecklistCard {...chapter} />
        </div>
      ))}
      </div>
    </div>
  );
}
