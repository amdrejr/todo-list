import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ( {children} ) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        const storedTodos = JSON.parse(localStorage.getItem('todos'));

        if(storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        } else {
            setTodos([
                {id: 1, title: 'Vamos começar!', content: 'Clique no botão abaixo para criar sua primeira tarefa.', date: null, completed: false}
            ])
        }
    }, [])

    return (
        <TodoContext.Provider value={ {todos, setTodos} } >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
