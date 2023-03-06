import React from 'react';

function Flashcard(props) {
    const [showBack,setShowBack] = React.useState(false);
    React.useEffect(() => {
        setShowBack(false);
      }, [props.question]);

    function handleClick() {
        setShowBack(!showBack)
    }
    return (
        <div className="flashcard" onClick={handleClick}>
          <div className={`flashcard-inner ${showBack ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <h3>{props.question}</h3>
            </div>
            <div className="flashcard-back">
              <p>{props.answer}</p>
            </div>
          </div>
        </div>
      );
}

export default Flashcard;