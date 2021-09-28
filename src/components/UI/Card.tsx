import React from 'react';
import classes from './Card.module.css';

interface Props {
  className?: string
  children: any
}

const Card = (props: Props) => {
  return(
    <div className={`${classes.card} ${props.className}` }>
      {props.children}
    </div>
  )
}

export default Card;
