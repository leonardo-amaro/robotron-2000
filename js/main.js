const Controles = document.querySelectorAll('.controle-ajuste');

function manipularDom(operacao, div) {
  const contador = div.querySelector('.controle-contador');
  operacao === "+" ? contador.value = parseInt(contador.value) + 1 : contador.value = parseInt(contador.value) - 1
};

Controles.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipularDom(evento.target.textContent, evento.target.parentNode)
  })
});
