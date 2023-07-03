import React, { useState } from "react";

const FormTypical = () => {
  const typicalData = {
    event: "",
    email: "",
    password: "",
    confirmPassword: "",
    select: "",
    date: "",
    time: "",
    checkbox: false,
  };
  const [typicalform, setTypicalForm] = useState(typicalData);
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      typicalform.event &&
      typicalform.email &&
      typicalform.password &&
      typicalform.confirmPassword &&
      typicalform.select &&
      typicalform.date &&
      typicalform.time &&
      typicalform.checkbox &&
      regex.test.email
    ) {
      setError(false);
      setTypicalForm(typicalData);
      console.log(typicalform, "typicalform");
    }
  };
  return (
    <>
      <div className="text-center mt-5 typical_form_parent typical_form_parent_width mx-auto px-4">
        <h3 className="text-danger pt-3">Typical Form</h3>
        <form action="" onSubmit={(e) => OnsubmitHandler(e)}>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Event Name"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, event: e.target.value })
              }
              value={typicalform.event}
            />
            <p className="mb-0 text-danger">
              {error && typicalform.event === ""
                ? "PLEASE FILL THIS INPUT"
                : ""}
            </p>
          </div>
          <div className="pt-4">
            <input
              type="email"
              placeholder="Email"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, email: e.target.value })
              }
              value={typicalform.email}
            />
            <p className="mb-0 text-danger">
              {error && typicalform.email === "" ? (
                "PLEASE FILL THIS INPUT"
              ) : error && regex.test(typicalform.email) === false ? (
                <p className="text-danger fw-bold">Email Not Valid</p>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Password"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, password: e.target.value })
              }
              value={typicalform.password}
            />
            <p className="mb-0 text-danger">
              {error && typicalform.password === ""
                ? "PLEASE FILL THIS INPUT"
                : ""}
            </p>
          </div>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({
                  ...typicalform,
                  confirmPassword: e.target.value,
                })
              }
              value={typicalform.confirmPassword}
            />
            <p className="mb-0 text-danger">
              {error && typicalform.confirmPassword === ""
                ? "PLEASE FILL THIS INPUT"
                : ""}
            </p>
          </div>
          <div className="pt-4">
            <select
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, select: e.target.value })
              }
              value={typicalform.select}
            >
              <option value="Red">CHOOSE YOUR OPTIONS</option>
              <option value="React">React</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
            </select>
          </div>
          <div className="pt-4">
            <input
              type="date"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, date: e.target.value })
              }
              value={typicalform.date}
            />
          </div>
          <div className="pt-4">
            <input
              type="time"
              className="w-100 typical_form_parent py-2"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, time: e.target.value })
              }
              value={typicalform.time}
            />
          </div>
          <div className="pt-4">
            <input
              type="checkbox"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, checkbox: e.target.checked })
              }
              checked={typicalform.checkbox}
            />
          </div>
          <div className="py-4">
            <button className="typical_form_parent bg-transparent px-3 py-1">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormTypical;
