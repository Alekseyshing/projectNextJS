import { InputProps } from "./Input.prop";
import styles from './Input.module.css';
import cn from 'classnames';


export const  Input = ({ children, className, ...props }: InputProps): JSX.Element => {

  return (
    <input className={cn(className, styles.input)} {...props}/>
  )
}