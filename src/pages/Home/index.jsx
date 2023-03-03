import './style.css';

import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

const Home = () => {
    return (
        <section className='home'>
            <div className="home-content">
                <Logo size={200}/>
                <h1>Lista de Tarefas</h1>
                <p>Pequenas ações podem te trazer um grande presente.</p>
                <Link to='/todos' className='home-btn'>Iniciar</Link>
            </div>
        </section>
    )
}

export default Home