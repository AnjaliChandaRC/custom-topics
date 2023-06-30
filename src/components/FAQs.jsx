import React, { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      heading: "Can you use HTML in React?",
      para: "By default, React does not permit you to inject HTML in a component, for various reasons including cross-site scripting. However, for some cases like a CMS or WYSIWYG editor, you have to deal with raw HTML. In this guide, you will learn how you can embed raw HTML inside a component.",
    },
    {
      heading: "Why HTML is used in React?",
      para: "It takes advantage of HTML's popularity and strength as the most popular programming language, by letting you use a very similar syntax to HTML to build interfaces and add dynamic features to it using JavaScript.",
    },
    {
      heading: "What is difference between HTML and React?",
      para: "HTML is a markup language, and in modern web development, it's being used to structure websites. On the other hand, React is a library for building websites. It uses plain HTML, but on top of that, it provides a lot of handy features that add interactivity, and complex logic to websites.",
    },
    {
      heading: "Which is better HTML or React?",
      para: "Choosing between HTML and React depends on your project's needs: For static websites: HTML is often the preferred choice for building a simple, mostly static website. For dynamic, complex applications: React is a far better option to HTML for building complex, highly interactive web applications.",
    },
  ];
  const [faqValue, setFaqValue] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="text-center text-info">
          <u>FAQs</u>
        </h1>
        <div className="row">
          <div className="col-8 m-auto pt-5">
            {faqData.map((obj, i) => {
              return (
                <>
                  <div className="accordion_parent">
                    <h2
                      key={i}
                      onClick={() => setFaqValue(i)}
                      className={`${
                        faqValue === i ? "accordion_transition" : ""
                      } text-info pt-3`}
                    >
                      {obj.heading}
                    </h2>
                    {faqValue === i ? (
                      <p className="accordion_text">
                        {obj.para}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
