import './Button.css'

const Button = ({ children, ...rest} : React.ButtonHTMLAttributes<HTMLButtonElement> ) => {
  
    return (
            <button
            className="button" 
            {...rest}
          >
            {children}
          </button>
    )
}

export default Button;
