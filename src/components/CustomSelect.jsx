import React, { useState } from "react";

const CustomSelect = () => {
  const SelectData = ["Red", "Yellow", "Pink"];
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState();
  console.log(show, "show");
  return (
    <>
      <div>
        <p onClick={() => setShow(!show)}>{show2 ? show2 : "Choose text"}</p>

        {show && (
          <ul>
            {SelectData.map((obj, index) => {
              return (
                <li key={index}
                  onClick={() => {
                    setShow2(obj);
                    setShow(false);
                  }}
                >
                  {obj}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
