import {useState, useEffect} from 'react'

import CardItem from './CardItem'
import List from '../../list'

// const list = [
//   {
//     id: 0,
//     front: 'بالتاكيد',
//     back: 'For sure/Definetly',
//   },
//   {
//     id: 1,
//     front: 'مصدر / مصادر (p)',
//     back: 'Source',
//   },
//   {
//     id: 2,
//     front: 'لاحظت',
//     back: 'Noticed',
//   },
//   {
//     id: 3,
//     front: 'زلزالٌ قوي يضرب #هايتي، ويسفر عن سقوطِ مئات الضحايا في جنوب غرب الجزيرة، بحسب وكالة "فرانس 24" والرئيس الأميركي جو #بايدن يعرض المساعدة.',
//     back: 'A strong earthquake strikes Haiti, resulting in hundreds of casualties in the south west of the island, according to France 24, and US President Joe Biden offers help.'
//   }
// ];

const CardList = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const shuffleArray = (array:object[]) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array)
    return array;
  }

  useEffect(() => {
    shuffleArray(List)
    setCurrentCard(0)
  },[])

  const nextCard = () => {
    if (currentCard < List.length -1) 
      setCurrentCard(currentCard + 1)
  }

  const previousCard = () => {
    if (currentCard > 0) 
      setCurrentCard(currentCard - 1)
  }

  return(
    <div>
      <CardItem front={List[currentCard].front} back={List[currentCard].back}/>
    
      <button className="previousButton" onClick={() => previousCard()}>Previous</button>
      <button className="nextButton" onClick={() => nextCard()}>Next</button>

    </div>

  )
}

export default CardList;