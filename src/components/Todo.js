import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import "./Todo.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import React from "react";

const Todo = ({ todo }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo.value.todo} secondary={todo.value.todo} />
      </ListItem>
      <DeleteForeverIcon
        className="todo__delete"
        fontSize="large"
        onClick={() => deleteDoc(doc(db, "todos", todo.id))}
      />
    </List>
  );
};

export default Todo;
