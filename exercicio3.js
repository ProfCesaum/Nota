// Crie um programa que leia quatro notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média
//  atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO

// Quando o aluno estiver de recuperação perguntar qual a nota da
// prova de recuperação,
// calcular a nova média, que é media anterior mais a nota da prova de recuperação.
// Se a nova média for maior que 6 aluno aprovado pela recuperação caso contrário
// reprovado.

let nota1 = parseFloat(prompt("Digite a nota 1"));
let nota2 = parseFloat(prompt("Digite a nota 2"));
let nota3 = parseFloat(prompt("Digite a nota 3"));
let nota4 = parseFloat(prompt("Digite a nota 4"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media <= 4.9) {
  alert("Aluno reprovado");
} else if (media >= 5.0 && media <= 6.9) {
  alert("Aluno em Recuperação");
  let notaRec = parseFloat(prompt("Digite a nota da Recuperação"));
  media = (media + notaRec) / 2;
  if (media >= 6.0) {
    alert("Aluno Aprovado pela Recuperação");
  } else {
    alert("Aluno Reprovado pela Recuperação");
  }
} else {
  alert("Aluno Aprovado");
}
