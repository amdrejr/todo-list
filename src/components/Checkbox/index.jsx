import './style.css'

const Checkbox = ({handleToggle, completed, id}) => {
    return (
        <div className="checkbox-wrapper-15">
            <input 
                className="inp-cbx" 
                type="checkbox" 
                style={{display: "none"}}
                onChange={handleToggle}    
                checked={completed} 
                id={`checkbox_${id}`}
            />
            <label className="cbx" htmlFor={`checkbox_${id}`}>
                <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
                </span>
            </label>
        </div>
    )
}

export default Checkbox