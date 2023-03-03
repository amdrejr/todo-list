import './style.css'

import { useNavigate } from "react-router-dom"

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoBackButton = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1);

    return (
        <button className="goBackButton" onClick={goBack}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
    )
}

export default GoBackButton