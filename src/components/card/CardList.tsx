import React, { useState } from 'react'

import CardItem from './CardItem'
import List from '../../data/list'

const CardList = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    if (currentCard >= List.length - 1) {
      setCurrentCard(0)
    }

    if (currentCard < List.length - 1) 
      setCurrentCard(currentCard + 1)
  }

  return(
    <div>
      <CardItem front={List[currentCard].front} back={List[currentCard].back} nextCard={nextCard}/>
    </div>
  )
}

export default CardList;