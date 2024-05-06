const constainer = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  constainer.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  constainer.classList.remove("active");
});
