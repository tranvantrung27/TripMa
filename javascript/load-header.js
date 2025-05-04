fetch("html/header/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // === Đăng ký ===
    const signupBtn = document.querySelector(".btn-signup");
    if (signupBtn) {
      signupBtn.addEventListener("click", () => {
        loadRegisterForm();
      });
    }

    // === Đăng nhập ===
    const loginBtn = document.querySelector("nav a:nth-child(3)");
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        loadLoginForm();
      });
    }

    // === Menu mobile ===
    const menuItems = document.querySelectorAll(".menu-list");
    menuItems.forEach((item) => {
      const text = item.textContent.trim();
      if (text === "Đăng ký") {
        item.addEventListener("click", () => {
          loadRegisterForm();
        });
      } else if (text === "Đăng Nhập") {
        item.addEventListener("click", () => {
          loadLoginForm();
        });
      }
    });
  });
