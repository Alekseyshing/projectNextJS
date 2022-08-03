import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { generateRandomKey } from '../generateRandomKey';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses, key: generateRandomKey() },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books, key: generateRandomKey() },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services, key: generateRandomKey() },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products, key: generateRandomKey() },
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const devlOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2: cases[(number % 10 < 5) ? number % 10 : 5 ]]
}