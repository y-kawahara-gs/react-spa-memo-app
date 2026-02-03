import { useState } from "react";
import Button from "./Button.jsx";

export default function MemoEditor({
  memo,
  exists,
  onAdd,
  onUpdate,
  onDelete,
}) {
  const [content, setContent] = useState(`${memo.content}`);
  const editingMemo = {
    id: memo.id,
    content,
  };
  return (
    <>
      <textarea
        cols="10"
        rows="10"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <div className="button-group">
        {exists ? (
          <>
            <Button label={"更新"} onClick={() => onUpdate(editingMemo)} />
            <Button label={"削除"} onClick={() => onDelete(memo.id)} />
          </>
        ) : (
          <Button label={"追加"} onClick={() => onAdd(editingMemo)} />
        )}
      </div>
    </>
  );
}
