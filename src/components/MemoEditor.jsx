import { useState } from "react";
import ActionButton from "./ActionButton.jsx";

export default function MemoEditor({ memos, memo, exists, handleAction }) {
  const [text, setText] = useState(`${memo.title}\n${memo.content}`);
  const memoId = memo.id;
  const nextMemo = {
    id: memo.id,
    title: text.split("\n", 1),
    content: text.split("\n").slice(1).join("\n"),
  };
  return (
    <>
      <textarea
        cols="10"
        rows="10"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="button-group">
        {exists ? (
          <>
            <ActionButton
              name={"更新"}
              handleClick={() =>
                handleAction(
                  memos.map((memo) => {
                    return memo.id === nextMemo.id ? nextMemo : memo;
                  }),
                )
              }
            />
            <ActionButton
              name={"削除"}
              handleClick={() =>
                handleAction(memos.filter((memo) => memo.id !== memoId))
              }
            />
          </>
        ) : (
          <ActionButton
            name={"追加"}
            handleClick={() => handleAction([...memos, nextMemo])}
          />
        )}
      </div>
    </>
  );
}
