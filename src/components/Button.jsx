export default function Button({ label, onClick }) {
  return (
    <button className="action-button" onClick={onClick}>
      {label}
    </button>
  );
}
