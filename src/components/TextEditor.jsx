import React, { useState } from "react";

const TextEditor = () => {
  const TextData = {
    color: "",
    fontsize: "",
  };
  const [textvalue, setTextvalue] = useState(TextData);

  return (
    <>
      <div className="text-center">
        <p
          style={{
            color: `${textvalue.color}`,
            fontSize: `${textvalue.fontsize}`,
          }}
        >
          THIS IS TEXT EDITOR
        </p>
        <select onChange={(e) => setTextvalue({ color: e.target.value })}>
          <option value="Red">Red</option>
          <option value="gray">gray</option>
          <option value="blue">blue</option>
        </select>
        <select onChange={(e) => setTextvalue({ fontsize: e.target.value })}>
          <option value="20px">20</option>
          <option value="50px">50</option>
        </select>
      </div>
    </>
  );
};

export default TextEditor;
