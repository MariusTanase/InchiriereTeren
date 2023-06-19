import { useRef } from "react"
import { ButtonType } from "../../types/ButtonType.type";
import {Link} from 'react-router-dom';

const Button = ({style="button", name="button", linkTo}: ButtonType) => {
    const buttonRef = useRef(null);

    return (
        linkTo && linkTo.length > 0 ?
        <a href={linkTo} ref={buttonRef} className={style}>
            {name}
        </a>
        : 
        <button ref={buttonRef} className={style}>
            {name}
        </button>

  )
}

export default Button