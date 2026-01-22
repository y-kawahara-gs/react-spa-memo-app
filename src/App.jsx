import { useState } from "react";
import Window from "./components/Window.jsx";
import MemoEditor from "./components/MemoEditor.jsx";
import MemoList from "./components/MemoList.jsx";
import "./App.css";

function App() {
  const [memos, setMemos] = useState(() => {
    const saveMemos = JSON.parse(localStorage.getItem("memos"));
    return saveMemos ? saveMemos : [];
  });
  const [targetId, setTargetId] = useState("");
  const targetMemo = memos.find((memo) => memo.id === targetId);
  const lastId = memos.length > 0 ? memos.slice(-1)[0].id : 0;
  const newMemo = {
    id: lastId + 1,
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

  function handleAddMemo(nextMemo) {
    setMemos((memos) => {
      const resultMemo = [...memos, nextMemo];
      localStorage.setItem("memos", JSON.stringify(resultMemo));
      return resultMemo;
    });
  }

  function handleChangeMemo(nextMemo) {
    setMemos((memos) => {
      const resultMemo = memos.map((memo) => {
        return memo.id === nextMemo.id ? nextMemo : memo;
      });
      localStorage.setItem("memos", JSON.stringify(resultMemo));
      return resultMemo;
    });
  }

  function handleDeleteMemo(memoId) {
    setMemos((memos) => {
      const resultMemo = memos.filter((memo) => memo.id !== memoId);
      localStorage.setItem("memos", JSON.stringify(resultMemo));
      return resultMemo;
    });
    setTargetId("");
  }

  return (
    <div>
      <p>一覧</p>
      <Window
        content={
          <MemoList
            memos={memos}
            newMemoId={newMemo.id}
            onClick={handleSetId}
          />
        }
      />
      {targetId !== "" ? (
        <>
          <p>編集</p>
          <Window
            className="window"
            content={
              <MemoEditor
                key={targetMemo ? targetMemo.id : newMemo.id}
                memo={targetMemo ? targetMemo : newMemo}
                exists={targetMemo ? true : false}
                onAddMemo={handleAddMemo}
                onChangeMemo={handleChangeMemo}
                onDeleteMemo={handleDeleteMemo}
              />
            }
          />
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default App;
