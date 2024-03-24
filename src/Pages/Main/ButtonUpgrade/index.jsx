import s from './ButtonUpgrade.module.css'

const ButtonUpgrade = (props) => {
    return (
        <button className={`${s.button} ${props.active}`} onClick={props.func} >{ props.content }</button>
    )
}

export default ButtonUpgrade;