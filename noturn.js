// noturn.js
const toggle = document.getElementById("toggle");

// Verifica se já existe um tema salvo
if (localStorage.getItem("modo") === "escuro") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("modo", "escuro");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("modo", "claro");
  }
});
