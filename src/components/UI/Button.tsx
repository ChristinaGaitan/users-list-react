import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css'

type ButtonTypes = (Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">)["type"]

  interface Props {
    type?: ButtonTypes
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
