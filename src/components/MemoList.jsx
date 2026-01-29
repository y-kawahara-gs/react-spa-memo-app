export default function MemoList({ memos, handleClick }) {
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button
              className="list-button"
              onClick={() => handleClick(memo.id)}
            >
              {memo.title}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => handleClick("new")}>追加</button>
        </li>
      </ul>
    </>
  );
}
