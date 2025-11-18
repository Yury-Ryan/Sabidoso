//funcionamento de  interação
document.getElementById("principal").style.display = "none";

setTimeout(() => {
  document.querySelector(".subt").style.cssText =
    "color: white; backdrop-filter: blur(5px); background-color: #00000033;   margin-top: 60px; border-radius: 20px;  -webkit-text-stroke: 1px black;";
}, 1000);
function começar() {
  setTimeout(() => {
    document.getElementById("titulo").style.cssText =
      "background-color:#00000000;  background-size:300%; background-position: -120vw 0px;";
  }, 100);
  setTimeout(() => {
    document.getElementById("titulo").style.cssText =
      "background-color:#00000000; background-size:300%; background-position: -120vw 0px; color:white ; opacity:0;";
    document.querySelector(".subt").style.cssText =
      "color:#00000000; -webkit-text-stroke: 1px #00000000; margin-top: 60px ;";
  }, 1200);
  setTimeout(() => {
    document.getElementById("titulo").style.display = "none";
    document.querySelector(".subt").style.display = "none";
  }, 3000);
  //botão em si^

  //outras reações
  setTimeout(() => {
    document.getElementById("principal").style.display = "flex ";
  }, 3000);

  setTimeout(() => {
    document.querySelector(".container1").style.cssText =
      "opacity:1; backdrop-filter: blur(0px); justify-content: flex-start; backdrop-filter: grayscale(100%) blur(10px) ; ";
  }, 3100);
}
//botão de sos

function mostrarTelefones() {
  setTimeout(() => {
    document.getElementById("principal").style.display = "none";
  }, 300);
  setTimeout(() => {
    document.getElementById("telefones").style.display = "block";
  }, 300);
}

//botão de voltar
function voltar() {
  setTimeout(() => {
    document.getElementById("principal").style.display = "block";
  }, 300);
  setTimeout(() => {
    document.getElementById("telefones").style.display = "none";
  }, 300);
}

//Funcionamento de aplicação
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("✅ Service Worker registrado!"))
      .catch((err) =>
        console.log("❌ Falha ao registrar o Service Worker:", err)
      );
  });
}
