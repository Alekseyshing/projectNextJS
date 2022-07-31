import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { generateRandomKey } from '../../generateRandomKey';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';


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
      <div key={generateRandomKey()}>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`} key={generateRandomKey()}>
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
      </div>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
          {menu?.map(m => {    
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
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {

    
    
    return (
      pages.map(p => (
        <div key={generateRandomKey()}>
          <Link href={`/${route}/${p.alias}}`} >
            <a key={p._id} className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}}` === router.asPath
            })}>
              {p.category}
            </a>
          </Link>
        </div>
      ))
    )
  }

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  )
}