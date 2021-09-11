import {useState, useEffect} from 'react'

import CardItem from './CardItem'
import List from '../../data/list'

const CardList = () => {
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
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