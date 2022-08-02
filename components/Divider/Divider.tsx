import { DividerProps } from "./Divider.prop";
import styles from './Divider.module.css';
import cn from 'classnames';


export const Divider = ({ children, className,...props }: DividerProps): JSX.Element => {

  return (
    <hr className={cn(className, styles.hr)} {...props}/>
  )
}