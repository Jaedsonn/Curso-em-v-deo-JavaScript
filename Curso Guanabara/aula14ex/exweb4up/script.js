
calc.addEventListener("click", function(){
    calcular()
})

function calcular(){
    let a = Number(prompt("Informe a o tamanho da população da cidade A"))
    let txA = Number(prompt("Informe a taxa de crescimento ao ano da cidade A"))
    
    let b = Number(prompt("Informe a o tamanho da população da cidade B"))
    let txB = Number(prompt("Informe a taxa de crescimento ao ano da cidade B"))
    
    let anos = 0
    while(a < b  && anos < 1000){
        let taxaA = a *(txA/100)
        let taxaB = b *(txB/100)
        a +=taxaA
        b += taxaB
        anos++
    } 
    if (anos < 1000) {
        alert(`O ano A ultrapassará o ano B em ${anos} anos`);
    } 
 } 

 

 /* let calc = document.getElementById("btn");
let caixa = document.getElementById("dados");

calc.addEventListener("click", function(){
    calcular();
});

function calcular(){
    let a = Number(prompt("Informe a o tamanho da população da cidade A"));
    let txA = Number(prompt("Informe a taxa de crescimento ao ano da cidade A"));
    
    
    
    let b = Number(prompt("Informe a o tamanho da população da cidade B"));
    let txB = Number(prompt("Informe a taxa de crescimento ao ano da cidade B"));
    
    let anos = 0;
    while (a < b && anos < 1000) {
        let taxaA = a * (txA / 100)
        let taxaB = b * (txB / 100)
        a += taxaA;
        b += taxaB;
        anos++;
    } 
    if (anos < 1000) {
        alert(`O ano A ultrapassará o ano B em ${anos} anos`);
    } else {
        alert("As populações nunca se igualarão.");
    }
}   */
