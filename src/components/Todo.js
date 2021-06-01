import React, { useState } from "react";
import "../Todo.css";
import db from "../firebase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button, makeStyles, Modal } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "fixed",
    top: 300,
    left: 500,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });

    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div class={classes.paper}>
          <h1>I am a modal</h1>
          <input
            value={input}
            placeholder={props.todo.todo}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>edit me</Button>
        <DeleteForeverIcon
          onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
        >
          Delete
        </DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
