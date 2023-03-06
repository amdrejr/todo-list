import './style.css'

import { useContext } from 'react';

import { TodoContext } from '../../contexts/TodoProvider';
import { useNavigate } from 'react-router-dom';


import GoBackButton from '../../components/GoBackButton';

const CreateTodo = () => {

    const navigate = useNavigate();
    const { todos, setTodos } = useContext(TodoContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;
        const date = event.target.date.value;

        const options = { timeZone: 'UTC' }; // usar o fuso horário do usuário aqui
        const dateFormatter = new Intl.DateTimeFormat('pt-BR', options);
        const formatedDate = date == 0 ? null :  dateFormatter.format(new Date(date));

        const newTodo = {
            title: title,
            content: content,
            date: formatedDate,
            completed: false
        }
        
        setTodos([...todos, newTodo]);
        navigate(-1);
    }

    localStorage.setItem('todos', JSON.stringify(todos));

    return ( 
        <section className='createTodo'>
            <GoBackButton />
            <form onSubmit={handleSubmit} className="createTodo-content">
                <h2>Nova Tarefa</h2>

                <label htmlFor="title">Título</label>
                <input type="text" name='title' id='title' maxLength={30} required/>

                <label htmlFor='content'>Conteúdo</label>
                <textarea name='content' id='content'/>

                <label htmlFor='date'>Data Final</label>
                <input type="date" name='date' id='date'/>

                <div className='btns'>
                    <button onClick={() => {navigate(-1)}}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </section>
    )
}

export default CreateTodo