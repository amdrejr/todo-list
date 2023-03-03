import './style.css'

const Logo = ({size}) => {
    const style = {
        width: size,
        filter: `drop-shadow(${size/11}px 0px ${size/10}px var(--color-red))`
    }
    return <img  
        className="logo-img" 
        style={style}
        src="/src/assets/logo.png" 
        alt="logobanner" />
}

export default Logo