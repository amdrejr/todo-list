import './style.css'

import { useNavigate } from 'react-router-dom';

import { TodoContext } from '../../contexts/TodoProvider';

import CreateTodoButton from '../../components/CreateTodoButton'
import Logo from '../../components/Logo'
import TodoList from '../../components/TodoList'
import { useContext } from 'react';

const Todos = () => {
    const {todos, setTodos} = useContext(TodoContext)

    const navigate = useNavigate();

    const handleCreateTodo = () => {
        navigate('/create-todo');
    }


    return (
        <section className="todos">
                <Logo size={80}/>
                <TodoList />
                <CreateTodoButton handleClick={handleCreateTodo}/>
        </section>
    )
}

export default Todos