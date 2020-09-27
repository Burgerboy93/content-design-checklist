import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddAll from './addall';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

export default function ChapterCard({id, category, title, pointOne, pointTwo, pointThree, link}) {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      console.log({title});
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
          <Typography variant="body2" color="textSecondary" component="p">
            {pointOne}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pointTwo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pointThree}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to ={link}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
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
