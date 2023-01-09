const Controles = document.querySelectorAll('[data-controle]');

function manipularDom(operacao, div) {
  const contador = div.querySelector('[data-contador]');
  operacao === "+" ? contador.value = parseInt(contador.value) + 1 : contador.value = parseInt(contador.value) - 1
};

Controles.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipularDom(evento.target.dataset.controle, evento.target.parentNode)
  })
});
