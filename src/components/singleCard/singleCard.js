import React from 'react'
import './singleCard.css'
import { coverImage } from '../../data/data'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if(!disabled) {
            handleChoice(card) 
        }
    }
  return (
    <>
    {/* {card.matched ? <div className='card' >Matched</div> : */}
     <div className='card' >
            <div className={flipped ? 'flipped' : ''} >
            <img className='front' src={card.image} alt="card front" />
            <img 
            className='back' 
            src={coverImage} 
            onClick={handleClick}
            alt="card back"/>
            </div>
                
    </div>
{/* } */}
    </>
   
  )
}
