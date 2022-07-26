import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios'; 
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  
  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup(){
      console.log('Unmount');
    }
  }, [counter])

  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down' onClick={() => setCounter(x => x - 1)}>Кнопка2</Button>
      <P size='small'>Текст параграф</P>
      <P>Текст параграф2</P>
      <P size='large'>Текст параграф3</P>
      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='small' color='green'>green</Tag>
      <Tag size='medium' color='primary'>primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Input placeholder='тест'/>
      <Textarea placeholder='тест2'/>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}