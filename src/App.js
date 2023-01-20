import React, {useState, useEffect} from 'react'
import './App.css'
import { data } from './data/data'
import SingleCard from './components/singleCard/singleCard'


function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    let didWin = false
    for(let card of cards) {
      if(card.matched) {
        didWin = true
      } else {
        didWin = false;
        break;
      }
    }

    if(didWin) {
     setTimeout(() => {
      setWon(true)
     },1000) 
    }
  }, [cards])

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.image === choiceTwo.image) {
        setCards(prevCards => prevCards.map(card => {
          if(card.image === choiceOne.image) {
            card.matched = true
          }
          return card;
        }))
      } 
     setTimeout(resetTurns, 1000) 
    }
  }, [choiceOne, choiceTwo])

  //shuffle cards
  const shuffleCards = () => {
      const shuffledCards = [...data,...data]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random() }))
      setCards(shuffledCards)
      setTurns(0)
      setChoiceOne(null)
      setChoiceTwo(null)
      setWon(false)
  }


  //handle a choice

  const handleChoice = (card) => {
    if(card.id !== choiceOne?.id) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }


  //reset choices and increase turns

  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // console.log('1:::', choiceOne,':::',"2:::", choiceTwo, ':::');
  console.log(cards);
  console.log(won,'rendered');

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>Restart Game</button>

{ 
won ? 
<div className='won'>Congrats! You won with {turns} turns.</div> 
:
 <div className="wrapper">

 <div className='card-grid'> 
        {cards.map(card => <SingleCard  
        key={card.id} 
        card={card} 
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}
         /> )}
    </div>

    <p>Turns: {turns}</p>

</div>
  }

    </div>
  )
}

export default App