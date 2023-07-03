import React, { useState } from "react";

const FormValidation = () => {
  const [initialvalue, setInitialvalue] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    checkbox: false,
  });
  const [formerror, setFormerror] = useState(false);
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const Submitbtn = (e) => {
    e.preventDefault();
    setFormerror(true);
    if (
      initialvalue.name !== "" &&
      initialvalue.email !== "" &&
      initialvalue.password !== "" &&
      initialvalue.confirmpassword !== "" &&
      initialvalue.checkbox !== "" &&
      regex.test(initialvalue.email)
    ) {
      setFormerror(false);
      setInitialvalue({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-lg-4">
              <h3 className="fs-1 fw-bold text-success text-center">Form</h3>
              <div className="input_parent_bg mt-4">
                <div>
                  <input
                    onChange={(e) =>
                      setInitialvalue({ ...initialvalue, name: e.target.value })
                    }
                    className="w-100 input_bg color_pink"
                    type="text"
                    value={initialvalue.name}
                    placeholder="Name"
                  />
                  {formerror && initialvalue.name === "" ? (
                    <p className="text-danger fw-bold">Name is required</p>
                  ) : (
                    initialvalue !== ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        email: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="email"
                    value={initialvalue.email}
                    placeholder="Email"
                  />
                  {formerror && initialvalue.email === "" ? (
                    <p className="text-danger fw-bold">Email is required</p>
                  ) : formerror && regex.test(initialvalue.email) === false ? (
                    <p className="text-danger fw-bold">Email Not Valid</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        password: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="password"
                    placeholder="Password"
                    value={initialvalue.password}
                  />
                  {formerror && initialvalue.password === "" ? (
                    <p className="text-danger fw-bold">Password is required</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-3">
                  <input
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        confirmpassword: e.target.value,
                      })
                    }
                    className="w-100 input_bg color_pink"
                    type="password"
                    value={initialvalue.confirmpassword}
                    placeholder="Confirm Password"
                  />
                  {formerror && initialvalue.confirmpassword === "" ? (
                    <p className="text-danger fw-bold">
                      Confirm Password is required
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center pt-3">
                  <input
                    id="dfgh"
                    type="checkbox"
                    onChange={(e) =>
                      setInitialvalue({
                        ...initialvalue,
                        checkbox: e.target.checked,
                      })
                    }
                  />
                </div>
                <div className="text-center mt-4">
                  <button onClick={(e) => Submitbtn(e)} className="common_btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
