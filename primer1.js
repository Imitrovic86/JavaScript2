function calculate_event() {
    const inputX=document.getElementById("x")
    const inputY=document.getElementById("y")
    const selectOperation=document.getElementById("operation")

    const x=Number(inputX.value)
    const y=Number(inputY.value)
    const op=selectOperation.value

    const spanResult = document.getElementById("result")

    if(op=="add") {
        spanResult.innerText=x+y
    }else if(op=="sub") {
        spanResult.innerText=x-y
    }else if(op=="mul") {
        spanResult.innerText=x*y
    }else {
        spanResult.innerText=x/y
    }

}

const buttonCalculate=document.getElementById("calculate")
buttonCalculate.onclick=calculate_event