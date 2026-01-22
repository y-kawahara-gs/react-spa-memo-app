import { useState } from "react";

export default function MemoEditor({
  memo,
  exists,
  onAddMemo,
  onChangeMemo,
  onDeleteMemo,
}) {
  const [text, setText] = useState(`${memo.title}\n${memo.content}`);
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
            <button
              className="action-button"
              onClick={() =>
                onChangeMemo({
                  id: memo.id,
                  title: text.split("\n", 1),
                  content: text.split("\n").slice(1).join("\n"),
                })
              }
            >
              更新
            </button>
            <button
              className="action-button"
              onClick={() => onDeleteMemo(memo.id)}
            >
              削除
            </button>
          </>
        ) : (
          <button
            className="action-button"
            onClick={() =>
              onAddMemo({
                id: memo.id,
                title: text.split("\n", 1),
                content: text.split("\n").slice(1).join("\n"),
              })
            }
          >
            追加
          </button>
        )}
      </div>
    </>
  );
}
