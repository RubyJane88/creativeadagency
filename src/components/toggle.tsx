import React from "react";

const Toggle = () => {
  const toggled = document.querySelector(".toggle");
  // const navigation = document.querySelector(".navigation");

  toggled?.addEventListener("click", () => {
    // console.log("event listeners");
    toggled?.classList.toggle("active");
    // navigation?.classList.toggle("active");
  });
  return <div></div>;
};

export default Toggle;
