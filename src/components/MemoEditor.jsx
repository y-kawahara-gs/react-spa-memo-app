import { useState } from "react";
import ActionButton from "./ActionButton.jsx";

export default function MemoEditor({
  memo,
  exists,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [text, setText] = useState(`${memo.title}\n${memo.content}`);
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
            <ActionButton name={"更新"} onSmash={() => onUpdate(nextMemo)} />
            <ActionButton name={"削除"} onSmash={() => onDelete(memo.id)} />
          </>
        ) : (
          <ActionButton name={"追加"} onSmash={() => onAdd(nextMemo)} />
        )}
      </div>
    </>
  );
}
