import classes from './Button.module.css'

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  children: any
}

const Button = (props: Props) => {
  return (
    <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;
