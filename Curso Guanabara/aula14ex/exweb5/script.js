 /* let num = document.getElementById("numero")
 let box = document.getElementById("res")
 function gerarTab() {
    let n = Number(num.value)
    let i = 1
    if(num.value.length == 0){
        alert("digite um número")
    } else{
        box.innerText = ""
        while(i <= 10){
            box.innerHTML += `${n} x ${i} = ${n*i}<br>`
            i++
        }

    }
} */

let num = document.getElementById("numero")
 let box = document.getElementById("res")

 function gerarTab(){
    let n = Number(num.value)
    if(num.value.length == 0){
        alert("digite um número")
    } else {
        box.innerHTML = ""
        for(let i = 1; i<= 10; i++){
            box.innerHTML += `${n} x ${i} = ${n*i}<br>`
        }
    }
 }
