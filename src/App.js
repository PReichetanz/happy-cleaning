import Header from './Header';
import Room from './Room.js';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <Header>Happy Cleaning!</Header>
      <Room text="Küche" isClean />
      <Room text="Bad" />
      <Room text="Wohnzimmer" />
    </main>
  );
}
