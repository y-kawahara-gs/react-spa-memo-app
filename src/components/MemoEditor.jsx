import { useState } from "react";
import ActionButton from "./ActionButton.jsx";

export default function MemoEditor({
  memo,
  exists,
  handleAddMemo,
  handleChangeMemo,
  handleDeleteMemo,
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
            <ActionButton
              name={"更新"}
              handleClick={() =>
                handleChangeMemo({
                  id: memo.id,
                  title: text.split("\n", 1),
                  content: text.split("\n").slice(1).join("\n"),
                })
              }
            />
            <ActionButton
              name={"削除"}
              handleClick={() => handleDeleteMemo(memo.id)}
            />
          </>
        ) : (
          <ActionButton
            name={"追加"}
            handleClick={() =>
              handleAddMemo({
                id: memo.id,
                title: text.split("\n", 1),
                content: text.split("\n").slice(1).join("\n"),
              })
            }
          />
        )}
      </div>
    </>
  );
}
