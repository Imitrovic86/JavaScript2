function konvertuj_event() {
    const inputT = document.getElementById("t")
    const textareaRezultat = document.getElementById("rezultat")
    const t = Number(inputT.value)

    const radioButtonC=document.getElementById("c")
    const radioButtonF=document.getElementById("f")
    
    if (radioButtonC.checked) {
        const konvertovano_f = (t * 9 / 5) + 32
        const konvertovano_k = t + 273.15

         textareaRezultat.value = "Celzijus u Farenhajt: " + konvertovano_f + "\n" +
                                 "Celzijus u Kelvin: " + konvertovano_k

    }else if(radioButtonF.checked){
        const konvertovano_c = (5 / 9) * (t - 32)
        const konvertovano_k = (5 / 9) * (t - 32) + 273.15

         textareaRezultat.value = "Farenhajt u Celzijus: " + konvertovano_c + "\n" +
                             "Farenhajt u Kelvin: " + konvertovano_k


    }else {
        const konvertovano_c = t - 273.15
         const konvertovano_f = (t - 273.15) * 1.8 + 32

        textareaRezultat.value = "Kelvin u Celzijus: " + konvertovano_c + "\n" +
                                         "Kelvin u Farenhajt: " + konvertovano_f
    }


}

const buttonKonvertuj = document.getElementById("konvertuj")
buttonKonvertuj.onclick = konvertuj_event 