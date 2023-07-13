// Verifica se o cookie de aceitação já foi definido
if (document.cookie.indexOf("cookies-aceitos=true") === -1) {
  // Cria o elemento do pop-up
  var popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.backgroundColor = "#357599";
  popup.style.borderRadius = "20px";
  popup.style.padding = "20px";
  popup.style.color = "#fff";
  popup.style.textAlign = "center";
  popup.style.fontFamily = "Tinos";
  popup.style.zIndex = "9999"; // Adiciona essa propriedade para garantir que o pop-up seja exibido acima de qualquer outro elemento da página

  // Verifica a largura da tela
  if (window.innerWidth < 600) {
    popup.style.width = "90%"; // Ajusta a largura para telas menores que 600px
  } else {
    popup.style.width = "600px"; // Mantém a largura padrão para telas maiores que 600px
  }

  // Cria a sombra do botão
  var shadow = "2px 2px 2px rgba(0, 0, 0, 0.3)";

  // Cria o texto do pop-up
  var textoPopup = document.createTextNode("Usamos cookies para oferecer a melhor experiência. ");
  popup.appendChild(textoPopup);

  // Cria o link do pop-up
  var linkPopup = document.createElement("a");
  linkPopup.href = "privacidade.html";
  linkPopup.style.color = "#fff";
  linkPopup.style.textDecoration = "underline";
  linkPopup.style.marginLeft = "5px";
  linkPopup.style.marginRight = "5px";
  linkPopup.appendChild(document.createTextNode("Saiba mais"));
  popup.appendChild(linkPopup);

  // Cria o botão de aceitação do pop-up
  var botaoAceitar = document.createElement("button");
  botaoAceitar.style.backgroundColor = "#295872";
  botaoAceitar.style.borderRadius = "20px";
  botaoAceitar.style.border = "none";
  botaoAceitar.style.color = "#fff";
  botaoAceitar.style.padding = "10px 20px";
  botaoAceitar.style.marginTop = "10px";
  botaoAceitar.style.cursor = "pointer";
  botaoAceitar.style.display = "block";
  botaoAceitar.style.margin = "0 auto"; // Centraliza o botão na horizontal
  botaoAceitar.style.boxShadow = shadow; // Adiciona sombra ao botão
  botaoAceitar.appendChild(document.createTextNode("ENTENDI"));

  // Adiciona um evento de clique ao botão de aceitação do pop-up
  botaoAceitar.addEventListener("click", function () {
    // Define o cookie de aceitação
    document.cookie = "cookies-aceitos=true;max-age=31536000"; // 31536000 segundos = 1 ano

    // Remove o pop-up
    popup.parentNode.removeChild(popup);
  });

  // Adiciona o botão de aceitação do pop-up
  popup.appendChild(botaoAceitar);

  // Adiciona o pop-up ao corpo da página
  document.body.appendChild(popup);
}