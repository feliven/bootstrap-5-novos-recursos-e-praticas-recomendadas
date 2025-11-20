document.addEventListener("DOMContentLoaded", () => {
  const botaoModoClaro = document.getElementById("botao-modo-claro");

  botaoModoClaro.addEventListener("click", () => {
    const tema = botaoModoClaro.checked ? "light" : "dark";
    document.body.setAttribute("data-bs-theme", tema);
  });
});
