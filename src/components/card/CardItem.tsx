import {useState} from 'react'

const Card = (props:any) => {
  const [flip, setFlip] = useState(false)

  const flipCard = () => {
    setFlip(!flip)
  }

  return(
    <div>

      <div onClick={() => flipCard()}>
        { !flip && 
          <article className="card">
            <header className="card-header">
              <h2>{props.front}</h2>
            </header>
          </article>      
        }

        { flip && 
          <article className="card">
            <header className="card-header">
              <h2>{props.back}</h2>
            </header>
          </article>
        }      
      </div >

    </div>

  )
}

export default Card
