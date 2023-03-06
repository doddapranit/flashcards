import Flashcard from './Flashcard'
import { useState } from 'react'

function FlashcardDeck(props) {
    const [currentCard, setCurrentCard] = useState(0);
  
    const handleNext = () => {
      setCurrentCard(Math.floor(Math.random() * props.cards.length));
    }
  
    const handlePrevious = () => {
      setCurrentCard(Math.floor(Math.random() * props.cards.length));
    }
  
    return (
      <div className="flashcard-deck">
        <Flashcard question={props.cards[currentCard].question} answer={props.cards[currentCard].answer} />
        <div className="button-container">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }

  export default FlashcardDeck;
  
