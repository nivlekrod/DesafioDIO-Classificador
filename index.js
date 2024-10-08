const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante",];
console.log("Lista de Ranks: ");
for (let i = 0; i < ranks.length; i++) {
  console.log(`- ${ranks[i]}`);
}

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite a sua quantidade de XP: ", (xp) => {
    let rank;
    if (xp < 1000) {
      rank = "Ferro";
    } else if (xp <= 2000) {
      rank = "Bronze";
    } else if (xp <= 5000) {
      rank = "Prata";
    } else if (xp <= 7000) {
      rank = "Ouro";
    } else if (xp <= 8000) {
      rank = "Platina";
    } else if (xp <= 9000) {
      rank = "Ascendente";
    } else if (xp <= 10000) {
      rank = "Imortal";
    } else {
      rank = "Radiante";
    }

    console.log(`O nome do seu herói é ${nome}, a sua quantidade de XP é ${xp} e você está no rank ${rank}`);

    rl.close();
  });
});
