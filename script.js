
  document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.querySelector(".wp-block-navigation__responsive-container-open");
      const menuContainer = document.querySelector(".wp-block-navigation__responsive-container");

      menuToggle.addEventListener("click", function () {
          menuContainer.classList.toggle("is-menu-open");
      });

      const closeButton = document.querySelector(".wp-block-navigation__responsive-container-close");
      closeButton.addEventListener("click", function () {
          menuContainer.classList.remove("is-menu-open");
      });
  });

