document.addEventListener("DOMContentLoaded", () => {
  // Get isLoggedIn value from localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Select product menu link and dropdown links
  const productsMenu = document.getElementById("productsMenu");
  const dropdownLinks = document.querySelectorAll("#productsDropdown .dropdown-menu a");

  if (isLoggedIn === "true") {
    // ✅ If logged in, enable the menu and links
    if (productsMenu) productsMenu.classList.remove("disabled-link");

    dropdownLinks.forEach(link => {
      link.classList.remove("disabled-link");
    });

  } else {
    // 🚫 If not logged in (or value not set), disable the menu and links
    if (productsMenu) productsMenu.classList.add("disabled-link");

    dropdownLinks.forEach(link => {
      link.classList.add("disabled-link");
    });
  }
});

  
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  });
  