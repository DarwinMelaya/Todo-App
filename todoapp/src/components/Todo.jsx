import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
