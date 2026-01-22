import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";

export default function MemoList({ memos, onSetId, onClick }) {
  const { isLogin } = useContext(LoginContext);
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button className="list-button" onClick={() => onSetId(memo.id)}>
              {memo.content.split("\n")[0]}
            </button>
          </li>
        ))}
        <li>
          {isLogin && <button className="grey-border" onClick={() => onSetId("new")}>追加</button>}
        </li>
      </ul>
    </>
  );
}
