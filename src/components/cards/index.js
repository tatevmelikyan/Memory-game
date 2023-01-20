import React, {useEffect, useState} from 'react'
import {data, questionMarkImg} from '../../data/data.js'
import './cards.css'



function Cards() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const shuffleCards = () => {
        const shuffledCards = [...data,...data]
        .sort(() => Math.random() - 0.5)
        .map(card => ({...card, id: Math.random() }))
        setCards(shuffledCards)
        setTurns(0)
    }


const [disabled,setDisabled] = useState(false)
const [openedCards,setOpenedCards] = useState([])



    // const handleOpenClick = (id) => {
    //     setCardsData(cardsData.map(card => {
    //         if(card.id === id) {
    //             card.isOpened = true
    //             if(openedCards.length <= 2) {
    //                 setOpenedCards([...openedCards, card])
    //             }
    //         }
    //         return card;
    //     }))
    // }
  return (
    <>
    <button onClick={shuffleCards}>New Game</button>
    <div className='cards'> 
        {cards.map(card => {
        return <div 
        className='card' 
        key={card.id}
        // onClick={() => !card.isOpened && handleOpenClick(card.id)}
        >
            <div>
            <img className='front' src={card.image} alt="front card" />
            <img className='back' src={questionMarkImg} alt="back card"/>
            </div>
                
                 </div>
        }
    )}
    </div>
    </>
  )
}

export default Cards