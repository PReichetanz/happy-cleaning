import './Room.css';

export default function Room({ text, isClean }) {
  return (
    <section className="Room">
      {text}
      <span
        className={`Room__status Room__status--${isClean ? 'clean' : 'dirty'}`}
      ></span>
    </section>
  );
}
