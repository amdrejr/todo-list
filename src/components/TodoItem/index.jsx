import Checkbox from '../Checkbox';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';

const TodoItem = ({index, todo, onToggle}) => {
    const {title, content, date, completed} = todo;

    const { todos, setTodos } = useContext(TodoContext);

    const completedCond = completed ? 'checked' : ''; 
    
    const handleToggle = () => {
        onToggle(index);
    };

    const removeTodo = () => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        // O primeiro argumento é o índice do elemento a partir do qual a modificação deve começar. 
        // O segundo argumento é o número de elementos a serem removidos a partir desse índice. 

        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }


    return (
        <div key={index} className="todoItem">
            <Checkbox handleToggle={handleToggle} completed={completed} id={index} />
            <div className='todoBody'>
                <div className='todoTitle'>
                    <h4 className={completedCond}> {title} </h4>
                    { date && <span className={`${completedCond} span-data`}>Até: {date} </span>}
                </div>
                {content.length > 0 && <p className={`todoContent ${completedCond}`}> {content} </p>}
            </div>
            <div className="icos">
                <Link to={`/edit-todo/${index}`}><FontAwesomeIcon icon={faGear} className="setting"/></Link>
                <FontAwesomeIcon 
                    icon={faTrash} 
                    className="trash"
                    onClick={removeTodo}
                />
            </div>
        </div>
    )
}

export default TodoItem
