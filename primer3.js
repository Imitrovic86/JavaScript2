function izracunaj_event() {
    const inputCena = document.getElementById("cena")
    const radioButtonP1 = document.getElementById("p1")
    const radioButtonP2 = document.getElementById("p2")
    const radioButtonP3 = document.getElementById("p3")
    const radioButtonP4 = document.getElementById("p4")
    const spanRezultat = document.getElementById("rezultat")


    const cena = Number(inputCena.value)


    if (radioButtonP1.checked) {
        const porez = Number(radioButtonP1.value)
        const cena_sa_porezom = cena + cena * porez
        // const cena_sa_porezom = cena * (1+ porez)
        spanRezultat.innerText = cena_sa_porezom

    } else if (radioButtonP2.checked) {
        const porez = Number(radioButtonP2.value)
        const cena_sa_porezom = cena + cena * porez
        // const cena_sa_porezom = cena * (1+ porez)
        spanRezultat.innerText = cena_sa_porezom
    } else if (radioButtonP3.checked) {
        const porez = Number(radioButtonP3.value)
        const cena_sa_porezom = cena + cena * porez
        // const cena_sa_porezom = cena * (1+ porez)
        spanRezultat.innerText = cena_sa_porezom
    } else if (radioButtonP4.checked) {
        const porez = Number(radioButtonP4.value)
        const cena_sa_porezom = cena + cena * porez
        // const cena_sa_porezom = cena * (1+ porez)
        spanRezultat.innerText = cena_sa_porezom
    }


}

        const buttonIzracunaj = document.getElementById("izracunaj")
        buttonIzracunaj.onclick = izracunaj_event