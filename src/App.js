import Header from './Header';
import { useState } from 'react';
import produce from 'immer';
import './App.css';

export default function App() {
  const [rooms, setRooms] = useState([
    {
      title: 'Küche',
    },
    {
      title: 'Wohnzimmer',
    },
    {
      title: 'Bad',
    },
  ]);

  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      {rooms.map(({ title, isClean }, index) => (
        <button onClick={() => toggleCleaningStatus(index)} key={title}>
          {title} {isClean && '✔'}
        </button>
      ))}
    </main>
  );
  function toggleCleaningStatus(index) {
    // with immerjs:
    const newState = produce(rooms, (draft) => {
      draft[index].isClean = !draft[index].isClean;
    });
    setRooms(newState);
  }
}
