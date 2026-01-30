export default function MemoList({ memos, onSetId }) {
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button className="list-button" onClick={() => onSetId(memo.id)}>
              {memo.title}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => onSetId("new")}>追加</button>
        </li>
      </ul>
    </>
  );
}
