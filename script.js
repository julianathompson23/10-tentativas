alert("oi")
let contador = 1;
let numero;

while(contador <= 10) {
  numero = prompt(`digite um numero, essa é a tentativa ${contador}`);
  contador++
  if (contador == 10) {
    alert("acabou suas tentativas");
  }
}
