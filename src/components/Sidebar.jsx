import React, { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar, "sidebar");
  
  return (
    <>
      <div className="d-flex vh-100 position-relative">
        <div className={`${sidebar ? "active_sidebar" : ""} `}>
          <div
            className={`${
              sidebar ? "sidebar_left_0" : "sidebar_left_300"
            } sidebar_parent position-fixed px-3 pt-3`}
          >
            <div className="text-right">
              <svg
                onClick={() => setSidebar()}
                width="25"
                height="25"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.13323 1.5665L18.9999 14.4332L31.7999 1.63317C32.0826 1.33223 32.4232 1.09149 32.8013 0.925378C33.1793 0.75927 33.587 0.671218 33.9999 0.666504C34.8839 0.666504 35.7318 1.01769 36.3569 1.64281C36.982 2.26794 37.3332 3.11578 37.3332 3.99984C37.341 4.40851 37.2652 4.81446 37.1104 5.19278C36.9556 5.57109 36.7252 5.91379 36.4332 6.19984L23.4666 18.9998L36.4332 31.9665C36.9826 32.504 37.3048 33.2318 37.3332 33.9998C37.3332 34.8839 36.982 35.7317 36.3569 36.3569C35.7318 36.982 34.8839 37.3332 33.9999 37.3332C33.5751 37.3508 33.1512 37.2799 32.7553 37.125C32.3593 36.97 31.9999 36.7344 31.6999 36.4332L18.9999 23.5665L6.16656 36.3998C5.88491 36.6907 5.54844 36.923 5.17657 37.0832C4.80469 37.2434 4.40477 37.3283 3.99989 37.3332C3.11584 37.3332 2.26799 36.982 1.64287 36.3569C1.01775 35.7317 0.666558 34.8839 0.666558 33.9998C0.658786 33.5912 0.734609 33.1852 0.889374 32.8069C1.04414 32.4286 1.27458 32.0859 1.56656 31.7998L14.5332 18.9998L1.56656 6.03317C1.01717 5.4957 0.695023 4.76788 0.666558 3.99984C0.666558 3.11578 1.01775 2.26794 1.64287 1.64281C2.26799 1.01769 3.11584 0.666504 3.99989 0.666504C4.79989 0.676504 5.56656 0.999837 6.13323 1.5665Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="d-grid">
              <div className="pt-5">
                <button
                  className="sidebar_btn text-white px-4 py-2 bg-dark w-100"
                  onClick={() => setSidebar()}
                >
                  Button One
                </button>
              </div>
              <div className="pt-3">
                <button
                  className="sidebar_btn text-white px-4 py-2 bg-dark w-100"
                  onClick={() => setSidebar()}
                >
                  Button Two
                </button>
              </div>
              <div className="pt-3">
                <button
                  className="sidebar_btn text-white px-4 py-2 bg-dark w-100"
                  onClick={() => setSidebar()}
                >
                  Button Three
                </button>
              </div>
            </div>
          </div>
          <div className="faded" onClick={() => setSidebar()}></div>
        </div>

        <div className="min-vh-100 d-flex justify-content-center align-items-center w-100">
          <button
            onClick={() => setSidebar(!sidebar)}
            className="sidebar_btn text-white px-4 py-2"
          >
            Sidebar
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
