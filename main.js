function timesGenerator(){
    let number = document.getElementById(`number`)
    let result = document.getElementById(`result`)

    if(number.value.length == 0){
        alert(`Insira um número`)
    } else {
        number = Number(number.value)
        result.innerHTML = ``
        for(let factorOne = 0; factorOne <= 10; factorOne++){
            result.innerHTML += `<p>${number} X ${factorOne} = ${factorOne * number}</p>`
        }
    }
}