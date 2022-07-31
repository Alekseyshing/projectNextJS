import { TopPageComponentProps } from "./TopPageComponent.props";
import cn from 'classnames';
import { HhData, Htag, P, Tag } from "../../components";
import styles from './TopPageComponent.module.css'
import { generateRandomKey } from "../../generateRandomKey";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { Advantages } from "../../components/Advantages/Advantages";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page?.title}</Htag>
        {products && <Tag color="grey" size="medium">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p => (<div key={generateRandomKey()}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page?.category}</Htag>
        <Tag color="red" size="medium">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

     {page && page.advantages && page.advantages.length > 0 &&
        <div>
          <Htag tag='h2'>Преимущства</Htag>
          <Advantages advantages={page.advantages} />
        </div>
      }

      {page.seoText && <P>{page.seoText}</P>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(tag => <Tag color='primary' key={generateRandomKey()}>{tag}</Tag>)}
    </div>
  )
}