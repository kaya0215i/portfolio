// メニューバー
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav_toggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("show");
    nav.classList.toggle("show");
  });
  window.addEventListener("scroll", function () {
    navToggle.classList.remove("show");
    nav.classList.remove("show");
  });
});

//フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeinElems = document.querySelectorAll(".fadein-before");

  function checkFadeIn() {
    fadeinElems.forEach((elem) => {
      const elemTop = elem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (windowHeight > elemTop + 70) {
        elem.classList.add("fadein-after");
      } else {
        elem.classList.remove("fadein-after");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  window.addEventListener("load", checkFadeIn);
});
