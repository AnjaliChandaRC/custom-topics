import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-center pt-5 mt-5">
        {count >= 0 && count <= 10 ? <h2>{count}</h2> : ""}

        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 border-0 bg-danger text-white px-4 py-2"
        >
          Plus
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="ml-5 border-0 bg-danger text-white px-4 py-2"
        >
          Minus
        </button>
      </div>
    </>
  );
};

export default Count;
