function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c-1){
        fat *= c
    }
    return fat
}

let res = fatorial(5)
