   var txtn = Number(prompt("Digite um número entre 0 e 10"))

  if(txtn >= 0 && txtn <=10){
     alert("Obrigado")
  } 
  while(txtn < 0 || txtn > 10){
      alert("Número inválido")
      txtn = Number(prompt("Digite um número entre 0 e 10")) 
    }
    /*a variável txtn só foi posta após ver uma resolução do chatgpt,
    antes, por não ultilizar a variável txtn no while o código caia
    em um loop, porém após usar nota-se que atualizamos a variável
    e a rodamos novamente para que a condição seja cumprida.*/
 
  
   

 