import Header from './Header';
import { useEffect, useState } from 'react';
import produce from 'immer';
import './App.css';

export default function App() {
  const [rooms, setRooms] = useState(
    loadFromLocal('rooms') ?? [
      {
        title: 'Küche',
      },
      {
        title: 'Wohnzimmer',
      },
      {
        title: 'Bad',
      },
    ]
  );

  useEffect(() => {
    saveToLocal('rooms', rooms);
  }, [rooms]);

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

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
