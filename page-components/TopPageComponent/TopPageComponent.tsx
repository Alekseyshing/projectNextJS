import { TopPageComponentProps } from "./TopPageComponent.props";
import cn from 'classnames';
import { HhData, Htag, P, Product, Sort, Tag } from "../../components";
import styles from './TopPageComponent.module.css'
import { generateRandomKey } from "../../generateRandomKey";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { Advantages } from "../../components/Advantages/Advantages";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { useReducedMotion } from "framer-motion";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const shouldReduceMotion = useReducedMotion()
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort})
  }

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products})
  }, [products])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page?.title}</Htag>
        {products && <Tag color="grey" size="medium" aria-label={products.length + 'элементов'}>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div role="list">
        {sortedProducts && sortedProducts.map(p => (<Product role="listitem" layout={shouldReduceMotion ? false : true} key={p._id} product={p}/>))}
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

      {page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page?.tags.map(tag => <Tag color='primary' key={generateRandomKey()}>{tag}</Tag>)}
    </div>
  )
}