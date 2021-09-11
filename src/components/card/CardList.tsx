import {useState, useEffect} from 'react'

import CardItem from './CardItem'
import List from '../../data/list'

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
    console.log(currentCard)

    if (currentCard >= List.length - 1) {
      setCurrentCard(0)
    }

    if (currentCard < List.length - 1) 
      setCurrentCard(currentCard + 1)
  }

  return(
    <div>
      <CardItem front={List[currentCard].front} back={List[currentCard].back}/>
    
      <div className="confidenceButtons">
        <button className="confidence" onClick={() => nextCard()}>0</button>
        <button className="confidence" onClick={() => nextCard()}>1</button>
        <button className="confidence" onClick={() => nextCard()}>2</button>
        <button className="confidence" onClick={() => nextCard()}>3</button>
        <button className="confidence" onClick={() => nextCard()}>4</button>
      </div>

    </div>

  )
}

export default CardList;