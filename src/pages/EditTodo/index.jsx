import './style.css'

import { useContext } from 'react';

import { TodoContext } from '../../contexts/TodoProvider';
import GoBackButton from '../../components/GoBackButton';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {

    const navigate = useNavigate();
    const { todos, setTodos } = useContext(TodoContext)

    const { index } = useParams();

    

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;
        const date = event.target.date.value;

        const options = { timeZone: 'UTC' }; // usar o fuso horário do usuário aqui
        const dateFormatter = new Intl.DateTimeFormat('pt-BR', options);
        const formatedDate = date == 0 ? null :  dateFormatter.format(new Date(date));

        const editedTodo = {
            title: title,
            content: content,
            date: formatedDate,
            completed: false
        }

        let addEditedToTodos = todos;  
        addEditedToTodos[index] = editedTodo
              
        setTodos(addEditedToTodos);
        localStorage.setItem('todos', JSON.stringify(todos));
        navigate(-1);
    }


    return ( 
        <section className='createTodo'>
            {console.log(index)}
            <GoBackButton />
            <form onSubmit={handleSubmit} className="createTodo-content">
                <h2>Editar Tarefa</h2>

                <label htmlFor="title">Título</label>
                <input 
                    type="text" 
                        name='title' 
                        id='title'  
                        maxLength={30} 
                        defaultValue={todos[index].title}
                        required/>

                <label htmlFor='content'>Conteúdo</label>
                <textarea 
                    name='content' 
                    id='content' 
                    defaultValue={todos[index].content}
                    />

                <label htmlFor='date'>Data Final</label>
                <input type="date" name='date' id='date'/>

                <div className='btns'>
                    <button>Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </section>
    )
}

export default EditTodo