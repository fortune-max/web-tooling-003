import React from "react";

type todo = {
    text: string;
    isCompleted: boolean;
};

type TodoItemProps = {
    todo: todo;
    index: number;
    completeTodo: (index: number) => void;
    removeTodo: (index: number) => void;
};

const TodoItem = ({ todo, index, completeTodo, removeTodo }: TodoItemProps) => {
    return (
        <div
            className="todo-item"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
};

type TodoFormProps = {
    addTodo: (text: string) => void;
};

const TodoForm = ({ addTodo }: TodoFormProps) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
};

const Todo = () => {
    const [todos, setTodos] = React.useState<todo[]>([]);

    const addTodo = (text: string) => {
        const newTodos: todo[] = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index: number) => {
        const newTodos: todo[] = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (index: number) => {
        const newTodos: todo[] = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            <h1>Todo List</h1>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default Todo;
