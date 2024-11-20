const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseover", () => {
  // Obter as dimensões visíveis da janela
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  // Gerar coordenadas aleatórias dentro dos limites da tela
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Atualizar a posição do botão, garantindo que ele permaneça dentro da tela visível
  noButton.style.position = "absolute"; // Certifique-se de que o botão esteja em posição absoluta
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
