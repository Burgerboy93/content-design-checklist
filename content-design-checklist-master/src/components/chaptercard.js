import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import { ACTIONS } from './services/useLocalStorage';
import ChecklistContext from './services/CheckListContext.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    height:450,
  },
  media: {
    height: 140,
  },
});

export default function ChapterCard(props) {

  const { id, category, title, pointOne, pointTwo, pointThree, link } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const context = useContext(ChecklistContext) 
  console.log('context', context);
  const {checklist, dispatch} = context;
  console.log('render card', checklist);

    function handleChange (event, value) {
//      const value = event.target.value;
      
      const action = value ? ACTIONS.ADD_TO_CHECKLIST : ACTIONS.REMOVE_CHAPTER;
      dispatch({ type: action , payload: {id, title, category}})
      setChecked(event.target.checked);

    };

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {pointOne}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {pointTwo}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {pointThree}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled ="true">
          Learn More
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name={title}
              color="primary"
            />
          }
          label={"Add to checklist"}
        />
      </CardActions>
    </Card>
  );
}
