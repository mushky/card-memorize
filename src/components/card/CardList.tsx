import React, { useState } from 'react'

import CardItem from './CardItem'

import BasicList from '../../data/list'
import BeCarefulSanad from '../../data/our-family-life-be-careful-sanad'

const CardList = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [selectedDeck, setSelectedDeck] = useState(BasicList)

  const Items = [BasicList, BeCarefulSanad]
  
  const nextCard = () => {
    if (currentCard >= selectedDeck.length - 1) {
      setCurrentCard(0)
    }

    if (currentCard < selectedDeck.length - 1) 
      setCurrentCard(currentCard + 1)
  }

  const selectChange = (event:any) => {
    const value = event.target.value
    setSelectedDeck(Items[value])
  }

  return(
    <div>
      <form>
      <select value={selectedDeck[0].front} onChange={selectChange}>
        <option value="0">{Items[0][0].front}</option>
        <option value="1">{Items[1][0].front}</option>
      </select> 
      </form>
      <CardItem front={selectedDeck[currentCard].front} back={selectedDeck[currentCard].back} nextCard={nextCard}/>
    </div>
  )
}

export default CardList;