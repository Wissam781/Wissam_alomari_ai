"use strict";

// وسام العمري AI
// الملف المسؤول عن التفاعلات الأساسية للواجهة

document.addEventListener("DOMContentLoaded", () => {
  console.log("Wissam Alomari AI is ready.");

  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("is-open");
    });
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;

      if (language === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
      } else if (language === "en") {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }
    });
  });
});
