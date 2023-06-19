import { useRef } from "react"
import { ButtonType } from "../../types/ButtonType.type";

const Button = ({style="button", name="button"}: ButtonType) => {
    const buttonRef = useRef(null);

    return (
    <button 
        ref={buttonRef} 
        className={style}
    >
        {name}
    </button>
  )
}

export default Button