export default function Button({ label, onClick }) {
  return (
    <button className="grey-border action-button" onClick={onClick}>
      {label}
    </button>
  );
}
