import './style.css'

import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const GoBackButton = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1);

    return (
        <button className="goBackButton" onClick={goBack}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}

export default GoBackButton