import React, { useState } from 'react';

function App() {
  // Alustetaan tila (state) laskurin arvolle
  const [laskuri, setLaskuri] = useState(0);

  // Funktio lisää laskurin arvoa yhdellä
  const lisaa = () => {
    setLaskuri(laskuri + 1);
  };

  // Funktio vähentää laskurin arvoa yhdellä
  const vahenna = () => {
    setLaskuri(laskuri - 1);
  };

  return (
    <div>
      <h1>Yksinkertainen Laskuri</h1>
      <p>Laskurin arvo: {laskuri}</p>
      <button onClick={lisaa}>Lisää</button>
      <button onClick={vahenna}>Vähennä</button>
    </div>
  );
}

export default App;

