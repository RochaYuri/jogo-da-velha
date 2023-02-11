const gameBtn = document.querySelectorAll(".gameBtn");
const root = document.querySelector(":root");
const playerTimeText = document.querySelector(".playerTimeText");
const playersNameForm = document.querySelector(".playersNameForm");

const playerX = document.getElementById("player1Name");
const playerO = document.getElementById("player2Name");
const playerTurnText = document.getElementById("playerTurn");
const restartBtn = document.getElementById("restartBtn");
const playerTimeDiv = document.getElementById("playerTimeDiv");
const switchTheme = document.getElementById("themeSwitcher");
const body = document.getElementById("body");

const input = document.getElementsByTagName("input");

let playerTurnIndex = playerTurnGenerator();
let draw;

// EVENTO PARA ADICIONAR JOGADORES
playersNameForm.addEventListener("submit", function (ev) {
  ev.preventDefault(); // prevenindo a atualização da página

  document.getElementById("playerSymbolX").innerText =
    "Jogador X -> " + playerX.value; // Inserindo jogador X
  document.getElementById("playerSymbolO").innerText =
    "Jogador O-> " + playerO.value; // Inserindo jogador O

  console.log({ "Jogador X": playerX.value, "Jogador O": playerO.value });

  switch (playerTurnIndex) {
    case 1: // Caso número sorteado seja 0, player X começa
      playerTurnText.innerText = "Agora é a vez de " + playerX.value;
      break;
    case 2: // Caso número sorteado seja 1, player O começa
      playerTurnText.innerText = "Agora é a vez de " + playerO.value;
      break;
  }

  document.querySelectorAll(".gameBtn").forEach(function (gameBtn) {
    gameBtn.removeAttribute("disabled", "");
  });

  console.log("Turn of the player " + playerTurnIndex);
});

//FUNÇÃO QUE GERA O INDEX DE CADA JOGADOR (X -> JOGADOR 1 ||| O -> JOGADOR 2)
function playerTurnGenerator() {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}

// ALTERAÇÃO DO "DISPLAY" EM CADA INTERAÇÃO COM A INTERFACE DO JOGO (HASHTAG)
gameBtn.forEach(function (gameBtn) {
  gameBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (gameBtn.dataset.value === "-") {
      if (playerTurnIndex === 1) {
        // se estiver na vez do jogador 1
        ev.currentTarget.innerText = "X"; // marca
        gameBtn.dataset.value = "x"; // coloca o value do botão
        playerTurnIndex = 2; // muda para a vez do próximo jogador
        playerTurnText.innerText = "Agora é a vez de " + playerO.value;
        console.log("Turn of the player " + playerTurnIndex);
        winner(); // executa a função verificando se houve vitória
      } else {
        // se estiver na vez do jogador 2
        ev.currentTarget.innerText = "O"; // marca
        gameBtn.dataset.value = "o"; // coloca o value do botão
        playerTurnIndex = 1; // muda para a vez do próximo jogador
        playerTurnText.innerText = "Agora é a vez de " + playerX.value;
        console.log("Turn of the player " + playerTurnIndex);
        winner(); // executa a função verificando se houve vitória
      }
    } else {
      alert("erro! Este campo já foi selecionado!");
    }
  });
});

// REINICIANDO O JGOO
restartBtn.addEventListener("click", function (ev) {
  ev.preventDefault();
  gameBtn.forEach(function (gameBtn) {
    gameBtn.innerText = "";
    gameBtn.dataset.value = "-";
    // gameBtn.removeAttribute("disabled", "");
    gameBtn.classList.remove("winnerBorder");
    gameBtn.classList.add("gameBtn");
    document.getElementById("playerTimeDiv").classList.remove("winnerText");
    document.getElementById("playerTimeDiv").classList.remove("drawText");
    document.getElementById("playerSymbolX").innerText = "";
    document.getElementById("playerSymbolO").innerText = "";
    document.getElementById("player1Name").value = "";
    document.getElementById("player2Name").value = "";
    playerTurnText.innerText = "";
  });
});

// FUNÇÃO QUE VERIFICA SE HOUVE VITÓRIA OU VELHA
function winner(
  gameBtn1,
  gameBtn2,
  gameBtn3,
  gameBtn4,
  gameBtn5,
  gameBtn6,
  gameBtn7,
  gameBtn8,
  gameBtn9
) {
  // PEGUEI TODOS OS BOTÕES
  gameBtn1 = document.getElementById("gameBtn1");
  gameBtn2 = document.getElementById("gameBtn2");
  gameBtn3 = document.getElementById("gameBtn3");
  gameBtn4 = document.getElementById("gameBtn4");
  gameBtn5 = document.getElementById("gameBtn5");
  gameBtn6 = document.getElementById("gameBtn6");
  gameBtn7 = document.getElementById("gameBtn7");
  gameBtn8 = document.getElementById("gameBtn8");
  gameBtn9 = document.getElementById("gameBtn9");
  if (
    // Enquanto algum botão possuir o data-value "-"
    gameBtn1.dataset.value === "-" ||
    gameBtn2.dataset.value === "-" ||
    gameBtn3.dataset.value === "-" ||
    gameBtn4.dataset.value === "-" ||
    gameBtn5.dataset.value === "-" ||
    gameBtn6.dataset.value === "-" ||
    gameBtn7.dataset.value === "-" ||
    gameBtn8.dataset.value === "-" ||
    gameBtn9.dataset.value === "-"
  ) {
    conditions(); // executa as condições
  } else {
    // se acabarem os campos
    conditions(); // executa as condições
    if (draw === true) {
      // se o empate persistir
      playerTurnText.innerText = "DEU VELHA!";
      gameBtn.forEach(function (gameBtn) {
        gameBtn.setAttribute("disabled", "");
      });
      playerTimeDiv.classList.add("drawText");
    }
  }
}

// FUNÇÃO PARA AS CONDIÇÕES DE VITÓRIA
function conditions(
  gameBtn1,
  gameBtn2,
  gameBtn3,
  gameBtn4,
  gameBtn5,
  gameBtn6,
  gameBtn7,
  gameBtn8,
  gameBtn9
) {
  gameBtn1 = document.getElementById("gameBtn1");
  gameBtn2 = document.getElementById("gameBtn2");
  gameBtn3 = document.getElementById("gameBtn3");
  gameBtn4 = document.getElementById("gameBtn4");
  gameBtn5 = document.getElementById("gameBtn5");
  gameBtn6 = document.getElementById("gameBtn6");
  gameBtn7 = document.getElementById("gameBtn7");
  gameBtn8 = document.getElementById("gameBtn8");
  gameBtn9 = document.getElementById("gameBtn9");
  if (
    (gameBtn1.dataset.value === "x" &&
      gameBtn2.dataset.value === "x" &&
      gameBtn3.dataset.value === "x") ||
    (gameBtn1.dataset.value === "o" &&
      gameBtn2.dataset.value === "o" &&
      gameBtn3.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", ""); // desabilitando os botões
    });
    // DESTACANDO O CAMIHNO DA VITÓRIA
    gameBtn1.classList.add("winnerBorder");
    gameBtn1.classList.remove("gameBtn");
    gameBtn2.classList.add("winnerBorder");
    gameBtn2.classList.remove("gameBtn");
    gameBtn3.classList.add("winnerBorder");
    gameBtn3.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    // ESCREVENDO O VENCEDOR
    if (playerTurnIndex === 2) {
      // caso jogador 1
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      // caso jogador 2
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);

    // ===================TODOS OS EXEMPLOS ABAIXO SEGUEM O MESMO PADRÃO==========================
  } else if (
    (gameBtn1.dataset.value === "x" &&
      gameBtn4.dataset.value === "x" &&
      gameBtn7.dataset.value === "x") ||
    (gameBtn1.dataset.value === "o" &&
      gameBtn4.dataset.value === "o" &&
      gameBtn7.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn1.classList.add("winnerBorder");
    gameBtn1.classList.remove("gameBtn");
    gameBtn4.classList.add("winnerBorder");
    gameBtn4.classList.remove("gameBtn");
    gameBtn7.classList.add("winnerBorder");
    gameBtn7.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn1.dataset.value === "x" &&
      gameBtn5.dataset.value === "x" &&
      gameBtn9.dataset.value === "x") ||
    (gameBtn1.dataset.value === "o" &&
      gameBtn5.dataset.value === "o" &&
      gameBtn9.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn1.classList.add("winnerBorder");
    gameBtn1.classList.remove("gameBtn");
    gameBtn5.classList.add("winnerBorder");
    gameBtn5.classList.remove("gameBtn");
    gameBtn9.classList.add("winnerBorder");
    gameBtn9.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn2.dataset.value === "x" &&
      gameBtn5.dataset.value === "x" &&
      gameBtn8.dataset.value === "x") ||
    (gameBtn2.dataset.value === "o" &&
      gameBtn5.dataset.value === "o" &&
      gameBtn8.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn2.classList.add("winnerBorder");
    gameBtn2.classList.remove("gameBtn");
    gameBtn5.classList.add("winnerBorder");
    gameBtn5.classList.remove("gameBtn");
    gameBtn8.classList.add("winnerBorder");
    gameBtn8.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn3.dataset.value === "x" &&
      gameBtn6.dataset.value === "x" &&
      gameBtn9.dataset.value === "x") ||
    (gameBtn3.dataset.value === "o" &&
      gameBtn6.dataset.value === "o" &&
      gameBtn9.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn3.classList.add("winnerBorder");
    gameBtn3.classList.remove("gameBtn");
    gameBtn6.classList.add("winnerBorder");
    gameBtn6.classList.remove("gameBtn");
    gameBtn9.classList.add("winnerBorder");
    gameBtn9.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn3.dataset.value === "x" &&
      gameBtn5.dataset.value === "x" &&
      gameBtn7.dataset.value === "x") ||
    (gameBtn3.dataset.value === "o" &&
      gameBtn5.dataset.value === "o" &&
      gameBtn7.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn3.classList.add("winnerBorder");
    gameBtn3.classList.remove("gameBtn");
    gameBtn5.classList.add("winnerBorder");
    gameBtn5.classList.remove("gameBtn");
    gameBtn7.classList.add("winnerBorder");
    gameBtn7.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn4.dataset.value === "x" &&
      gameBtn5.dataset.value === "x" &&
      gameBtn6.dataset.value === "x") ||
    (gameBtn4.dataset.value === "o" &&
      gameBtn5.dataset.value === "o" &&
      gameBtn6.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn4.classList.add("winnerBorder");
    gameBtn4.classList.remove("gameBtn");
    gameBtn5.classList.add("winnerBorder");
    gameBtn5.classList.remove("gameBtn");
    gameBtn6.classList.add("winnerBorder");
    gameBtn6.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  } else if (
    (gameBtn7.dataset.value === "x" &&
      gameBtn8.dataset.value === "x" &&
      gameBtn9.dataset.value === "x") ||
    (gameBtn7.dataset.value === "o" &&
      gameBtn8.dataset.value === "o" &&
      gameBtn9.dataset.value === "o")
  ) {
    gameBtn.forEach(function (gameBtn) {
      gameBtn.setAttribute("disabled", "");
    });
    gameBtn7.classList.add("winnerBorder");
    gameBtn7.classList.remove("gameBtn");
    gameBtn8.classList.add("winnerBorder");
    gameBtn8.classList.remove("gameBtn");
    gameBtn9.classList.add("winnerBorder");
    gameBtn9.classList.remove("gameBtn");
    playerTimeDiv.classList.add("winnerText");
    if (playerTurnIndex === 2) {
      playerTurnText.innerText = playerX.value + " venceu!";
    } else {
      playerTurnText.innerText = playerO.value + " venceu!";
    }
    return (draw = false);
    // ==
  }
  draw = true;
}

// EVENTO PARA ALTERAR O TEMA
switchTheme.addEventListener("click", function (ev) {
  if (body.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#67819e");
    root.style.setProperty("--text-color", "#1b1a1a");
    root.style.setProperty("--border-color", "#2c2b2bda");
    root.style.setProperty("--symbol-color", "#2c2b2bda");
    body.dataset.theme = "light";
  } else if (body.dataset.theme === "light") {
    root.style.setProperty("--bg-color", "#1b1a1a");
    root.style.setProperty("--text-color", "#67819e");
    root.style.setProperty("--button-color", "#043257");
    root.style.setProperty("--button-text-color", "#ffeded");
    root.style.setProperty("--border-color", "#ffffff9a");
    root.style.setProperty("--symbol-color", "#ffffff9a");
    body.dataset.theme = "dark";
  }
});
