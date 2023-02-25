import React, { Fragment, useState, useEffect } from 'react'

function ListTodo() {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><button className="btn btn-success">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Fragment>
    )
}

export default ListTodo