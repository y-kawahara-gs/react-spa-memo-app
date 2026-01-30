import { useState } from "react";
import MemoEditor from "./components/MemoEditor.jsx";
import MemoList from "./components/MemoList.jsx";
import "./App.css";

function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemos = JSON.parse(localStorage.getItem("memos"));
    return storedMemos ? storedMemos : [];
  });
  const [targetId, setTargetId] = useState("");
  const targetMemo = memos.find((memo) => memo.id === targetId);
  const newMemo = {
    id: self.crypto.randomUUID(),
    title: "<1行目にタイトル>",
    content: "<２行目以下に内容>",
  };

  function handleSetId(memoId) {
    if (targetId === memoId) {
      setTargetId("");
    } else {
      setTargetId(memoId);
    }
  }

  function handleAction(resultMemo) {
    setMemos(() => {
      localStorage.setItem("memos", JSON.stringify(resultMemo));
      return resultMemo;
    });
    setTargetId("");
  }

  return (
    <div>
      <p>一覧</p>
      <div className="window">
        <MemoList memos={memos} onSetId={handleSetId} />
      </div>
      {targetId !== "" ? (
        <>
          <p>編集</p>
          <div className="window">
            <MemoEditor
              key={targetMemo ? targetMemo.id : newMemo.id}
              memo={targetMemo ? targetMemo : newMemo}
              memos={memos}
              exists={targetMemo ? true : false}
              onAction={handleAction}
            />
          </div>
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default App;
