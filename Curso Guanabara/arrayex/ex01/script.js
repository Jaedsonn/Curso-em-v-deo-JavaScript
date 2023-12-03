let corpo = document.getElementsByTagName("button")[0]
corpo.addEventListener("click", function () {
    carregar()
})

function carregar() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite outro número:"))
    let nums = [num1, num2]
    if (num2 < num1) {
        nums = [num2, num1]
    } else {
         nums = [num1, num2]
    }
    alert(nums)
}
