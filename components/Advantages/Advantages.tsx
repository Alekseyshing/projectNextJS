import styles from "./Advantages.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg"
import { priceRu } from "../../helpers/helpers";
import {AdvantagesProps} from "./Advantages.props"
import CheckIcon from "./check.svg"

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  console.log(advantages);
  

  return (
    <>
        {advantages.map(a => (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vline} />
            <div>{a.title}</div>
          </div>
        ))}

    </>
  )
}