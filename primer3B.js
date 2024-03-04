function cena_sa_porezom(porez_string, cena) {
    const porez=Number(porez_string)
    const c_p=cena + cena * porez
    return c_p

}

function izracunaj_event() {
    const inputCena = document.getElementById("cena")
    const radioButtonP1 = document.getElementById("p1")
    const radioButtonP2 = document.getElementById("p2")
    const radioButtonP3 = document.getElementById("p3")
    const radioButtonP4 = document.getElementById("p4")
    const spanRezultat = document.getElementById("rezultat")

    const cena = Number(inputCena.value)

    if (radioButtonP1.checked) {
         spanRezultat.innerText = cena_sa_porezom(radioButtonP1.value, cena)
    } else if (radioButtonP2.checked) {
        spanRezultat.innerText = cena_sa_porezom(radioButtonP2.value, cena)
    } else if (radioButtonP3.checked) {
        spanRezultat.innerText = cena_sa_porezom(radioButtonP3.value, cena)
    } else {
        spanRezultat.innerText = cena_sa_porezom(radioButtonP4.value, cena)
    }

}
const buttonIzracunaj = document.getElementById("izracunaj")
buttonIzracunaj.onclick = izracunaj_event