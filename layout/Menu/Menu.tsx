import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';
import { generateRandomKey } from '../../generateRandomKey';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses, key: generateRandomKey() },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books, key: generateRandomKey() },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services, key: generateRandomKey() },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products, key: generateRandomKey() },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();
  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory === secondCategory){
        m.isOpened = !m.isOpened
      }
      return m
    }))
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock} key={generateRandomKey()}>
        <>
          {menu.map(m => {    
            if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2]?.split('%')[0])) {              
              m.isOpened = true;
            }
            
            return (
              <div key={m._id.secondCategory}>
                <div className={styles.secondLevel} key={generateRandomKey()} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                <div className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened 
                })}>
                    {buildThirdLevel(m.pages, menuItem.route)}
                </div>
              </div>
            );
          })}
        </>
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {

    
    
    return (
      pages.map(p => (
        <>
          <Link href={`/${route}/${p.alias}}`} key={generateRandomKey()}>
            <a key={p._id} className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}}` === router.asPath
            })}>
              {p.category}
            </a>
          </Link>
        </>
      ))
    )
  }

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  )
}