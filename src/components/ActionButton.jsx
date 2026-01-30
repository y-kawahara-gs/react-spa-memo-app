export default function ActionButton({ name, onSmash }) {
  return (
    <button className="action-button" onClick={onSmash}>
      {name}
    </button>
  );
}
