let nome = prompt("Digite seu nome:")
let Idade = prompt("Digite sua idade:")
let Sexo = prompt("Digite seu sexo(f ou m):")
let Salário = prompt("Digite seu salário:")
let eC = prompt("Digite seu Estado Civil('s', 'c', 'v', 'd';):")


    while(nome.length <=3){
        alert("O nome precisa ter mais de três digitos")
        nome = prompt("Digite seu nome:")
    }

    while(Idade < 0 || Idade > 150){
        alert("Idade entre 0 e 150 ano, por favor")
        Idade = prompt("Digite sua idade:")
    }

    while(Sexo !== 'f' && Sexo !== 'm'){
        alert("Digite f(feminino) ou m(masculino) para definir seu sexo")
        Sexo = prompt("Digite seu sexo(f ou m):")
    }

    while(eC !== 's' && eC !== 'd' && eC !== 'c' && eC !== 'v'){
        alert("Defina seu esado civil com :'s', 'c', 'v', 'd'")
        eC = prompt("Digite seu Estado Civil('s', 'c', 'v', 'd';):")
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