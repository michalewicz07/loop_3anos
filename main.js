
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o melhor o colégio público de Arapongas?");

    
    if (respostaTime.toLowerCase() === "GARCEZ") {
      alert("Isso mesmo! O Garcez!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Errou! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
