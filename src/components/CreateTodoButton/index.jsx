import './style.css'

import { AiOutlinePlus } from 'react-icons/ai';

const CreateTodoButton = ({handleClick}) => {
    return (
        <button onClick={handleClick} className='createTodoButton'>
            <AiOutlinePlus />
        </button>
    )
}

export default CreateTodoButton