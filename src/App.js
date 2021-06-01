import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Todo from "./components/Todo.js";
import "./App.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addToDO = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello To-Dooer </h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addToDO}
          type="submit"
        >
          Add Todo
        </Button>
      </form>
      <ui>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ui>
    </div>
  );
}

export default App;
