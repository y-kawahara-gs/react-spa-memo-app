export default function MemoList({ memos, newMemoId, onClick }) {
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button className="list-button" onClick={() => onClick(memo.id)}>
              {memo.title}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => onClick(newMemoId)}>追加</button>
        </li>
      </ul>
    </>
  );
}
