import { useState } from "react";
import Button from "./Button.jsx";

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
            <Button label={"更新"} onClick={() => onUpdate(nextMemo)} />
            <Button label={"削除"} onClick={() => onDelete(memo.id)} />
          </>
        ) : (
          <Button label={"追加"} onClick={() => onAdd(nextMemo)} />
        )}
      </div>
    </>
  );
}
