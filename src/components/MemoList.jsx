import { useLogin } from "../hooks/useLogin.jsx";

export default function MemoList({ memos, onSetId}) {
  const { isLogin, toggleLogin } = useLogin();
  return (
    <>
      <ul>
        <li>
          <button className="grey-border" onClick={toggleLogin}>
            {isLogin ? "ログアウト" : "ログイン"}
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
          {isLogin && (
            <button className="grey-border" onClick={() => onSetId("new")}>
              追加
            </button>
          )}
        </li>
      </ul>
    </>
  );
}
