alert("digite as notas após o (ok)");

let N1 = parseInt(prompt("1ªnota: "));
let N2 = parseInt(prompt("2ªnota: "));
let N3 = parseInt(prompt("3ªnota: "));
let N4 = parseInt(prompt("4ªnota: "));

let soma = N1 + N2 + N3 + N4;

let media = (soma / 4);

if(media >= 6 && media <= 10) {
    alert("Sua media é: " + media + ", Esta aprovado");
}

else if(media >= 5 && media < 6) {
    alert("Sua media é: " + media + ", Esta de recuperação"); 
}

else if(media >= 1 && media < 5) {
    alert("Sua media é: " + media + ", Esta reprovado"); 
}