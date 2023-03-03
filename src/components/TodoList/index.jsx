import './style.css'

import TodoItem from '../TodoItem';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';

const TodoList = () => {

    const [totalConc, setTotalConc] = useState(0)
    const { todos, setTodos } = useContext(TodoContext);

    useEffect(()=>{
        let contador = 0;
        todos.forEach(todo =>{
            if(todo.completed) {
                contador += 1;
            }
            console.log(contador)
            setTotalConc(contador)
        })
    })

    const handleToggle = (id) => {
        const updatedTodos = todos.map((todo, index) => {
            if(index == id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        })

        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    return (
        <div className="todoList" onDoubleClick={() => {
            setTodos([])
            console.log('resetado')
        }}>
            <span>Total de Tarefas: {todos.length}</span>
            <span>Concluídas: {totalConc}</span>
            <div className="todoViewer">
                {todos.map( (todo, index) => {
                    return <TodoItem key={index} index={index} todo={todo} onToggle={handleToggle} />
                })}
            </div>
        </div>
    )
}

export default TodoList