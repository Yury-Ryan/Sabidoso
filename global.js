// Pega os elementos padrão
const conteudo = document.querySelector(".conteudo");
const tutorial = document.getElementById("tutorial");

// Função universal para carregar tutorial
function carregarTutorial(acao) {
  const dados = tutoriais[acao];

  let html = `<h2>${dados.titulo}</h2><ul>`;

  dados.passos.forEach((item) => {
    const [texto, img] = item.split("|");
    html += `<li>${texto} <img src="${img}" alt=""></li>`;
  });

  html += `</ul><button onclick="voltar()">🔙 Voltar</button>`;

  conteudo.style.display = "none";
  tutorial.style.display = "block";
  tutorial.innerHTML = html;
}

// Função voltar
function voltar() {
  tutorial.style.display = "none";
  conteudo.style.display = "grid";
}

// Aplica clique nas opções
document.querySelectorAll(".opcao").forEach((op) => {
  op.addEventListener("click", () => {
    const acao = op.dataset.acao;
    carregarTutorial(acao);
  });
});
