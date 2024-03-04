function izracunaj_event() {
    const inputCena=document.getElementById("cena")
    const radioButtonsPorez=document.getElementsByName("porez")
    const spanRezultat=document.getElementById("rezultat")

    const cena =Number (inputCena.value)

    for(let rbPorez of radioButtonsPorez) {
       if(rbPorez.checked) {
        const porez= Number(rbPorez.value)
        spanRezultat.innerText=cena + cena * porez
        
       }
    }
   
}


const buttonIzracunaj=document.getElementById("izracunaj")
buttonIzracunaj.onclick=izracunaj_event