import {MdMessage} from 'react-icon/md'
import style from './Button.module.css'
const Button=()=>{
    return(
        <button className={style.primary_btn}>
            <MdMessage />
        </button>
    )
}
export default Button;