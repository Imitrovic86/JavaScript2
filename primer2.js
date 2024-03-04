/*
1. Dohvati element za dugme sa id "izracunaj"
2. Na vrhu script fajla definisati funkciju za dogadjaj "izracunaj event"
3. U funkciji dohvatite elemente za radijus "r" i za formulu "formula"
4. Pretvorite vrednost "r" elemnta u broj
5. Uzmite vrednost formule
6. kreirajte if naredbu sa uslovom da li je formula jednaka vrednosti "p". Kreirajte else deo je ako nije onda je "o".
7. Iznad if-a dohavtite p element sa id "ispis"
8. U if-u i else sa innerText ispisite rezultat
9.Formula sa povrsinu je r*r*Math.pi
10. Formula za obim je 2*r*Math.pi
*/

function izracunaj_event() {
    
    const inputR=document.getElementById("r")
    const selectFormula=document.getElementById("formula")
    const r=Number(inputR.value)
    const f=selectFormula.value

    const pIspis=document.getElementById("ispis")
    if(f=="p") {
        pIspis.innerText=r*r*Math.PI
    }else {
        pIspis.innerText=2*r*Math.PI
    }

}
const buttonIzracunaj=document.getElementById("izracunaj")
buttonIzracunaj.onclick=izracunaj_event