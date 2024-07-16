document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach(function (item) {
    item.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });
});
