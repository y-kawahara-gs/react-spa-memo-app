import { useState } from "react";
import MemoEditor from "./components/MemoEditor.jsx";
import MemoList from "./components/MemoList.jsx";
import "./App.css";

const memosStorage = {
  set: (memo) => localStorage.setItem("memos", JSON.stringify(memo)),
  get: () => JSON.parse(localStorage.getItem("memos")),
};

function App() {
  const [memos, setMemos] = useState(() => {
    return memosStorage.get() || [];
  });
  const [targetId, setTargetId] = useState(null);
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

  function handleAdd(editingMemo) {
    setMemos((memos) => {
      const resultMemo = [...memos, editingMemo];
      memosStorage.set(resultMemo);
      return resultMemo;
    });
    setTargetId(null);
  }

  function handleUpdate(editingMemo) {
    setMemos((memos) => {
      const resultMemo = memos.map((memo) => {
        return memo.id === editingMemo.id ? editingMemo : memo;
      });
      memosStorage.set(resultMemo);
      return resultMemo;
    });
    setTargetId(null);
  }

  function handleDelete(memoId) {
    setMemos((memos) => {
      const resultMemo = memos.filter((memo) => memo.id !== memoId);
      memosStorage.set(resultMemo);
      return resultMemo;
    });
    setTargetId(null);
  }

  return (
    <div>
      <p>一覧</p>
      <div className="window">
        <MemoList memos={memos} onSetId={handleSetId} />
      </div>
      {targetId ? (
        <>
          <p>編集</p>
          <div className="window">
            <MemoEditor
              key={targetMemo ? targetMemo.id : newMemo.id}
              memo={targetMemo ? targetMemo : newMemo}
              exists={targetMemo ? true : false}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
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
