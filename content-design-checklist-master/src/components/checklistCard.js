import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ACTIONS } from './services/useLocalStorage';
import ChecklistContext from './services/CheckListContext.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChecklistCard(props) {
    const { id, title } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const context = useContext(ChecklistContext) 
  const {checklist, dispatch} = context;


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function handleClick (event, value) {
    const action = ACTIONS.REMOVE_CHAPTER
    dispatch({ type: action , payload: {id}})

  }

  return (
    <List className={classes.root}>
          <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': id }}
              />
            </ListItemIcon>
            <ListItemText id={id} primary={title} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={handleClick}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
  );
}