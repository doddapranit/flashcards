import Flashcard from './Flashcard';
import { useState } from 'react';

function FlashcardDeck(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [showGuess, setShowGuess] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');

  const handleNext = () => {
    const nextCardIndex = (currentCard + 1) % props.cards.length;
    setIsFlipped(false);
    setCurrentCard(nextCardIndex);
    setShowGuess(false);
    setUserGuess('');
  }

  const handlePrevious = () => {
    const previousCardIndex = (currentCard - 1 + props.cards.length) % props.cards.length;
    setIsFlipped(false);
    setCurrentCard(previousCardIndex);
    setShowGuess(false);
    setUserGuess('');
  }

  const handleGuess = (e) => {
    e.preventDefault();
    setShowGuess(true);
  }

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  }

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  }

  return (
    <div className="flashcard-deck">
      <Flashcard question={props.cards[currentCard].question} answer={props.cards[currentCard].answer} handleClick={handleClick} isFlipped={isFlipped} />
      <div className="button-container">
      {!showGuess && !isFlipped && (
          <form onSubmit={handleGuess}>
            <input type="text" placeholder="Enter your guess" value={userGuess} onChange={handleInputChange} />
            <button type="submit">Guess</button>
          </form>
        )}
        {showGuess && <p className={userGuess === props.cards[currentCard].answer ? 'correct' : 'incorrect'}>{userGuess === props.cards[currentCard].answer ? 'Correct!' : 'Incorrect'}</p>}
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardDeck;
