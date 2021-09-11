import {useState} from 'react'

const Card = (props:any) => {
  const [flip, setFlip] = useState(false)

  const flipCard = () => {
    setFlip(!flip)
  }

  return(
    <div>

      <section onClick={() => flipCard()}>
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
      </section>

    </div>

  )
}

export default Card

