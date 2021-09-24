import React, {useEffect} from 'react'

import BasicList from '../../data/list'
import OurFamilyLifeBeCarefulSanad from '../../data/our-family-life-be-careful-sanad'
import ICard from '../../Models/ICard'

const DeckList = () => {
  //const [decks, setDecks] = useState([])
  
  useEffect(() => {
    //setDecks([])
    console.log(BasicList)
    console.log(OurFamilyLifeBeCarefulSanad)
  },[])

  return(
    <div>
      <div>
        <p>{BasicList[0].front}</p>
        {BasicList.map((card:ICard, index) => {
          <div key={card.id}>
            <p>{card.id}</p>
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>
        })}
      </div>

      <div>
        {OurFamilyLifeBeCarefulSanad.map((card:ICard)=> {
          <div>
            <p>{card.id}</p>
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>
        })}
      </div>


    </div>
  )


}

export default DeckList