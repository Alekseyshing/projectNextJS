import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './P.module.css';
import cn from 'classnames';


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

  return (
    <div>
      {products && products.length}
    </div>
  )
}