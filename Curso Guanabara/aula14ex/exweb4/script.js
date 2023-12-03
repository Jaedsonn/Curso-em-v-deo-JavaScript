let calc = document.getElementById("btn")
let caixa = document.getElementById("dados")

calc.addEventListener("click", function(){
    calcular()
})

function calcular(){
    let cA = 80000
    let cB = 200000
    let anos = 0
    while(cA < cB){
        cA += cA * (3/100)
        cB += cB * (1.5/100)
        anos++
    } 
    caixa.innerHTML = `O ano A ultrapassará o ano B em ${anos} anos`
}



    
















































/* let nome = document.getElementById("nome")
let Idade = Number(document.getElementById("Idade"))
let Sexo = document.getElementById("Sexo")
let Salário = document.getElementById("Salário")
let eC = document.getElementById("estadoCivil")
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    validar()
})

function validar() {
    if (nome.value.length > 3) {
        
    }else {
        while (nome.value.length <= 3) {
            alert("O nome precisa conter mais de três caracteres")
            break
        }
    }
    if (Idade > 0 && Idade < 150 ) {
        alert("Vlw")
    } else {
        while (Idade < 0 || Idade > 150) {
            alert("Idade, apenas, entre 0 e 150 anos")
            break
        }
    }
}
 */