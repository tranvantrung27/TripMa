function loadRegisterForm() {
    fetch("html/dangky/dangky.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("search-flight-placeholder").innerHTML = html;
      })
      .catch(err => console.error("Lỗi tải form đăng ký:", err));
  }
  