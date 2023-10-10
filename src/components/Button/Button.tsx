import './Button.css'

const Button = ({disabled, children, onClick} : React.HTMLProps<HTMLButtonElement> ) => {
  
    return (
            <button
            className="button" 
            disabled={disabled}
            onClick={onClick}
          >
            {children}
          </button>
    )
}

export default Button;
