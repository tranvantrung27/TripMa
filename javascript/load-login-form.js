function loadLoginForm() {
    fetch("html/dangnhap/dangnhap.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("search-flight-placeholder").innerHTML = html;
      })
      .catch(err => console.error("Lỗi tải form đăng nhập:", err));
  }
  