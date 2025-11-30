const conteudo = document.querySelector(".conteudo");
const tutorial = document.getElementById("tutorial");

const tutoriais = {
  foto: `
      <h2>📷 Mandar foto no Whatsapp</h2>
      <ul>
        <li>Abrir conversa <img src="ensino/Whatsapp/passo.jpg"/ alt=""></li>
        <li>Tocar no clipe <img src="ensino/Whatsapp/passo2v3.jpg"/ alt=""></li>
        <li>Escolher "Galeria" <img src="ensino/Whatsapp/passo3v2.jpg"/ alt=""></li>
        <li>Enviar <img src="ensino/Whatsapp/passo4.jpg"/ alt=""></li>
      </ul>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
  videochamada: `
      <h2>🎥 Fazer chamada de vídeo</h2>
      <ul>
        <li>1. Abrir conversa<img src="ensino/Whatsapp/passo.jpg"/ alt="">
</li>
<li>2. Tocar na câmera <img src="ensino/Whatsapp/passo2.jpg"/ alt=""></li>
        <li>3. Aguardar a resposta <img src="ensino/Whatsapp/passo3.png"/ alt=""></li>
      </ul>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
  voz: `
      <h2> 📞 Fazer ligação de voz</h2>
      <ul>
        <li>Abrir conversa <img src="ensino/Whatsapp/passo.jpg"/ alt=""></li>
        <li>Clicar no telefone <img src="ensino/Whatsapp/passo2v2.jpg"/ alt=""></li>
        <li>Esperar a ligação  <img src="ensino/Whatsapp/passo3.png"/ alt=""></li>
      </ul>
      <button onclick="voltar()">🔙 Voltar</button>
    `,
};

document.querySelectorAll(".opcao").forEach((btn) => {
  btn.onclick = () => {
    conteudo.style.display = "none";
    tutorial.style.display = "block";
    tutorial.innerHTML = tutoriais[btn.dataset.acao];
  };
});

window.voltar = () => {
  tutorial.style.display = "none";
  conteudo.style.display = "grid";
};
