import React, { useEffect } from "react";
import { Button } from "./ui/button.js";
import { Input } from "./ui/input.js";
import { Field } from "./ui/field.js";
import { Checkbox } from "./ui/checkbox.js";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
  ItemMedia,
} from "./ui/item.js";
const HomePage = () => {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todosFromStorage);
    // console.log("Current Todos:", todos);
  }, []);

  function handleDelete(index) {
    setTodos(todos.filter((todo) => todo.id !== index));
    // console.log("Current Todos:", todos);
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== index)),
    );
  }
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };
  function handleToggleDone(index) {
    const updatedTodos = todos.map((todo) =>
      todo.id === index ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-6xl font-bold  ">Todo List</h1>
      <div className="mt-8 flex justify-center space-x-4">
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTodo();
          }}
        >
          <Field orientation="horizontal" className="w-screen   max-w-md">
            <Input
              type="text"
              value={inputValue}
              placeholder="Add a new todo..."
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={inputValue.trim() === ""}
            >
              Add Todo
            </Button>
          </Field>
        </form>
      </div>
      <div className="mt-8 flex justify-center">
        <ul className="mt-4 w-full max-w-md">
          {todos.map((todo) => (
            <Item
              variant="outline"
              key={todo.id}
              id={`todo-${todo.id}`}
              className="mb-2"
            >
              <ItemMedia variant="icon">
                <Checkbox
                  id="terms-checkbox-2"
                  name="terms-checkbox-2"
                  // onChange={}
                  checked={todo.isDone}
                  onCheckedChange={() => handleToggleDone(todo.id)}
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{todo.text}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(todo.id)}
                >
                  Dlete
                </Button>
              </ItemActions>
            </Item>
            // <li
            //   key={todo.id}
            //   id={`todo-${todo.id}`}
            //   className="flex items-center justify-between bg-gray-100 p-4 rounded mb-2"
            // >
            //   <div>
            //     <input
            //       type="checkbox"
            //       onChange={() => handleToggleDone(todo.id)}
            //       checked={todo.isDone}
            //     />
            //     <span className="ml-4">{todo.text}</span>
            //   </div>
            //   <Button
            //     onClick={() => handleDelete(todo.id)}
            //     variant="destructive"
            //   >
            //     Delete
            //   </Button>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
