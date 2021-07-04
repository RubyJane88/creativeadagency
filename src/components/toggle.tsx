import React from "react";

const Toggle = () => {
  const toggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");

  toggle?.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });

  return <div></div>;
};

export default Toggle;
