import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4)
  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup(){
      console.log('Unmount');
    }
  }, [counter])

  return (
    <>
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
    </>
  );
}

export default withLayout(Home)
