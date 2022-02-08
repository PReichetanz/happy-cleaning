import Room from './Room.js';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <Room text="Küche" isClean />
      <Room text="Bad" />
      <Room text="Wohnzimmer" />
    </main>
  );
}
