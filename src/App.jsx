import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Jujutsu Kaisen Wiki';


  useEffect(() => {
    setDisplayText(''); // Reset the displayText at the beginning

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1)); // Take a slice of the string up to the current index
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); 

    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="App">
      <h1>{displayText}</h1>
      <Cards />
    </div>
  );
}

export default App