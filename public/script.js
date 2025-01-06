const texto = `
Izadora annes minha lindeza,

estou escrevendo isso pra deixar registrado o quanto eu te amo, eu não sei se vou te ter pra sempre, mas isso seria a melhor coisa da minha vida, você é a menina mais linda que eu ja vi além de ser a pessoa mais perfeita que eu ja conheci, eu te amo muito, tudo que eu te peço é que pra não se esqueça de mim independente do que aconteça e do tempo que passe, espero que vc possa ter uma boa memória de mim se for só isso que sobre.Desculpa estar aqui escrevendo um texto até meio melancólico mas é assim que eu fico quando penso em te perder.Izadora eu tenho certeza que vc é o amor da minha vida, e eu não imagino meu futuro ao lado de outra pessoa, eu necessito de vc na minha vida, quero formar uma família com vc e ter 3 filhos, quero acordar todos os dias do seu lado e poder admirar sua pela bronzeadinha bem de perto, quero me perder nos seus olhos castanhos, e dormir enquanto passo a mão nas suas costas.Eu te amo muito e se vc me ama nós vamos fazer dar tudo certo.

um beijo Dodora.
`;

let index = 0;

function digitarTexto() {
  const elemento = document.getElementById("texto");
  if (index < texto.length) {
    elemento.innerHTML += texto[index];
    index++;
    setTimeout(digitarTexto, 50); // Controla a velocidade da digitação
  } else {
    mostrarBotoes(); // Mostra os botões ao finalizar o texto
  }
}

function mostrarBotoes() {
  document.getElementById("botao-foto-musica").style.display = "block";
  document.getElementById("botao-diversao").style.display = "block";
}

window.onload = digitarTexto;
