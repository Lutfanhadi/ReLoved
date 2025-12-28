document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle
  const container = document.getElementById("containerNavbar");
  const toggleMenu = document.getElementById("toggleMenu");
  const toggleClose = document.getElementById("toggleClose");

  if (toggleMenu && toggleClose) {
    toggleMenu.addEventListener("click", () => {
      container.classList.toggle("-translate-x-full");
    });
    toggleClose.addEventListener("click", () => {
      container.classList.toggle("-translate-x-full");
    });
  }

  // password insibility
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.innerHTML = '<i class="fa-solid fa-eye"></i>'; // Ganti ikon menjadi "eye"
      } else {
        passwordInput.type = "password";
        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // Kembali ke "eye-slash"
      }
    });
  } else {
    console.error("Element #togglePassword atau #password tidak ditemukan!");
  }

  // Search Input Toggle
  const searchButton = document.getElementById("searchButton");
  const searchBox = document.getElementById("searchBox");
  const closeButton = document.getElementById("closeButton");

  searchButton.addEventListener("click", () => {
    searchBox.classList.remove("hidden");
  });

  closeButton.addEventListener("click", () => {
    searchBox.classList.add("hidden");
  });

  document.addEventListener("click", (event) => {
    if (
      !searchBox.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      searchBox.classList.add("hidden");
    }
  });

  // Love Button Toggle
 document.addEventListener("click", function (event) {
   if (event.target.classList.contains("icon-love")) {
     let defaultSrc1 = "./assets/svg/icon-love.svg";
     let defaultSrc2 = "../assets/svg/icon-love.svg";
     let likedSrc1 = "./assets/svg/icon-love-red.svg";
     let likedSrc2 = "../assets/svg/icon-love-red.svg";

     if (event.target.classList.contains("liked")) {
       let img = new Image();
       img.src = defaultSrc1;
       img.onload = function () {
         event.target.src = defaultSrc1;
       };
       img.onerror = function () {
         event.target.src = defaultSrc2;
       };

       event.target.classList.remove("liked");
     } else {
       let img = new Image();
       img.src = likedSrc1;
       img.onload = function () {
         event.target.src = likedSrc1;
       };
       img.onerror = function () {
         event.target.src = likedSrc2;
       };

       event.target.classList.add("liked");
     }
   }
 });

  // dropdown
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const menuContainer = document.getElementById("menuContainer");

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle("hidden");
    if (!dropdownMenu.classList.contains("hidden")) {
      menuContainer.classList.add("mt-0"); 
    } else {
      menuContainer.classList.remove("mt-0");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
      menuContainer.classList.remove("mt-0");
    }
  });

  // hover img barang
  document.querySelectorAll(".product-image").forEach((img) => {
    img.addEventListener("mouseover", () => {
      setTimeout(() => {
        img.src = img.getAttribute("data-hover");
      }, 100); 
    });

    img.addEventListener("mouseout", () => {
      setTimeout(() => {
        img.src = img.getAttribute("data-original");
      }, 100); 
    });
  });

});
