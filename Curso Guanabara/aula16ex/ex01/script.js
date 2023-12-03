let btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    avaliar()
})

let num = document.getElementById("numero")
/* let n = num.value */
let numeros = []

function avaliar() {
    if (num.value < 1 || num.value > 100) {
        alert("Digite um número entre 1 e 100")
    } else {
        numeros.push(num.value)
        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j < i; j++) {
                if (numeros[i] === numeros[j]) {
                    alert("Os números não podem ser iguais");
                    /* numeros.pop() */
                    numeros.splice(i, 1);
                    return;
                }
            }
        }
        let seltab = document.getElementById("select")
        let item = document.createElement("option")
        seltab.appendChild(item)
        item.text = `O valor ${num.value} foi adicionado`
        item.value = num.value
    }
}

let final = document.getElementById("end")
end.addEventListener("click", function () {
    finish()
})

function finish() {
    let res = document.getElementById("res")
    res.innerHTML = ""
    res.innerHTML += ` Ao todo, temos ${numeros.length} cadastrados<br>`
    var maior = Math.max.apply(null, numeros)
    res.innerHTML += `O maior número cadastrado foi ${maior}<br>`
    var menor = Math.min.apply(null, numeros)
    res.innerHTML += `O menor número cadastrado foi ${menor}<br>`
    var sum = 0
    for (var i = 0; i < numeros.length; i++) {
        sum += Number(numeros[i])
    }
    res.innerHTML += `O menor número cadastrado foi ${sum}<br>`
    var media = sum / numeros.length
    res.innerHTML += `A média dos valores é ${media}`
}





