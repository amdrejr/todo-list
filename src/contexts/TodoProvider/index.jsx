import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ( {children} ) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('todos')).length == 0) {
            setTodos([
                {id: 1, title: 'Vamos começar!', content: 'Clique no botão abaixo para criar sua primeira tarefa.', date: null, completed: false}
            ])
        } else {
            setTodos(JSON.parse(localStorage.getItem('todos')));
        }
    }, [])

    return (
        <TodoContext.Provider value={ {todos, setTodos} } >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
