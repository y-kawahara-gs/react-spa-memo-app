import { useAuth } from "../contexts/auth/useAuth.jsx";

export default function MemoList({ memos, onSetId }) {
  const { isAuthenticated, toggleLogin } = useAuth();
  return (
    <>
      <ul>
        <li>
          <button className="grey-border" onClick={toggleLogin}>
            {isAuthenticated ? "ログアウト" : "ログイン"}
          </button>
        </li>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button className="list-button" onClick={() => onSetId(memo.id)}>
              {memo.content.split("\n")[0]}
            </button>
          </li>
        ))}
        <li>
          {isAuthenticated && (
            <button className="grey-border" onClick={() => onSetId("new")}>
              追加
            </button>
          )}
        </li>
      </ul>
    </>
  );
}
