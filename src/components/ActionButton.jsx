export default function ActionButton({ name, handleClick }) {
  return (
    <button className="action-button" onClick={handleClick}>
      {name}
    </button>
  );
}
