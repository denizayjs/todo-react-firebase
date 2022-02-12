import { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Todo from "./components/Todo";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "todos")).then((item) =>
      setTodos(item.docs.map((item) => ({ id: item.id, value: item.data() })))
    );
  }, [todos]);
  const addTodo = (e) => {
    e.preventDefault();
    try {
      const docRef = addDoc(collection(db, "todos"), { todo: input });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          onClick={addTodo}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
