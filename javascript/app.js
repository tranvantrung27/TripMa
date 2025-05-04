document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".btn-signup");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      loadRegisterForm();
    });
  }
});
