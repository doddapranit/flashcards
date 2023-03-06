import { useState } from 'react'
import FlashcardDeck from './components/FlashcardDeck'
import './App.css'

function App() {
  const cards = [
    {
      question: "What is Travis Scott's Real Name",
      answer: 'Jacques Bermon Webster II'
    },
    {
      question: "What is The Game's Debut Album Called",
      answer: 'The Documentary'
    },
    {
      question: "How is billionaire businessman, producer, and artist Shawn Carter better known?",
      answer: 'Jay-Z'
    },
    {
      question: 'Who Won the Grammy for Rap Album of the Year in 2022',
      answer: 'Kendrick Lamar'
    },
    {
      question: 'Where was J.Cole born?',
      answer: 'Frankfurt, Germany'
    },
    {
      question: 'Who released the album Indicud?',
      answer: 'Kid Cudi'
    },
    {
      question: 'Who Made the Song Through the Wire?',
      answer: 'Kanye West'
    },
    {
      question: 'Who released the album The Big Day?',
      answer: 'Chance the Rapper'
    },
    {
      question: 'Lauryn Hill was a member of which band formed in 1994?',
      answer: 'The Fugees'
    },
    {
      question: "What is Yeat's Real Name?",
      answer: 'Noah Olivier Smith'
    }
  ];

  return (
    <div className="App">
      <h1>Rap Trivia</h1>
       <FlashcardDeck cards={cards} />
       <h2>Here's some interesting trivia about rappers! How many did you know?</h2>
      <h2>Number of Cards: 10</h2>
    </div>
  )
}

export default App
