import React, { useState } from "react";

const CustomTabs = () => {
  const tabsData = [
    {
      btnText: "Anjali",
      btnPara:
        "Hello everyone , My Name is Anjali Chanda ,and I am complete my B.com degree in 2022. I completed my I.T. training from Radialcode by Hisar.",
      //   para: "This is second stanza",
    },
    {
      btnText: "Neha",
      btnPara:
        "Hello everyone , My Name is Neha Rai ,and I am complete my B.com degree in 2022. I completed my I.T. training from Radialcode by Hisar.",
      para: "This is second stanza",
    },
    {
      btnText: "Muskan",
      btnPara:
        "Hello everyone , My Name is Muskan Saini ,and I am complete my B.com degree in 2022.",
      para: "This is second stanza",
    },
    {
      btnText: "Pallavi",
      btnPara:
        "Hello everyone , My Name is Pallavi Tiwari. I completed my I.T. training from Radialcode by Hisar.",
      //   para: "This is second stanza",
    },
  ];
  const [tabs, setTabs] = useState(tabsData[3]);

  return (
    <>
      <div className="text-center pt-5 min-vh-100 tabs_parent mx-auto">
        <h1 className="pb-5 text-info">Custom Tabs</h1>
        {tabsData.map((obj, index) => {
          return (
            <button
              key={index}
              className={`${
                obj.btnText == tabs.btnText ? "bg-danger" : ""
              } tabs_btn bg-info text-white px-5 py-2 mx-3`}
              onClick={() => setTabs(obj)}
            >
              {obj.btnText}
            </button>
          );
        })}
        <div>
          <p className="tabs_para_parent tabs_parent mx-auto bg-info text-white">
            {tabs.btnPara}
          </p>
          <p className="tabs_para_parent tabs_parent mx-auto bg-info text-white">
            {tabs.para}
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomTabs;
