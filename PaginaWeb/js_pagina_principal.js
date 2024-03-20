//Aquesta funció fa botar un confirm per demanar si vols anar a aquella pàgina web
function confirm_ada(){
    let demanar_ada = confirm("Estas segur/a de que vols canviar de pàgina?")

    if (demanar_ada) {
        window.location.href = "ada lovelace codi html.html"
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

//Aquesta funció fa botar un confirm per demanar si vols anar a aquella pàgina web
function confirm_margaret(){
    let demanar_margaret = confirm("Estas segur/a de que vols canviar de pàgina?")

    if (demanar_margaret) {
        window.location.href = "margaret hamilton codi html.html"
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//Aquesta funció ens valida el camp del nom al formulari que hi ha a la pàgina d'ada lovelace
validar = function validacio_ada() {
    let nom = "[A-Za-z]{20}"
    if (nom.test (document.getElementById("pregunta1")).value) {
        return false
    }
    else {
        return true
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

//Aquesta funció ens afegeix el valor que hem introduït al camp "nom" del formulari i ens diu hola
function afegir_element_formulari(){
    let h5 = document.createElement("h5")
    let nom = document.getElementById("pregunta1").value
    h5.textContent = "Hola, " + nom
    let afegir = document.header
    afegir.appendchild(h5)
}

/////////////////////////////////////////////////////////////////////////////////////////////

//Aquesta funció ens canvia el fons de pantalla de tota la web
var color_original = "#F4F5E5"
var color_actual = ""
var color_canviat = "#84967c"

function canviar_color() {
    if (color_actual === color_canviat) {
        document.body.style.backgroundColor = color_original;
        color_actual = color_original;  
    } else {
        document.body.style.backgroundColor = color_canviat;
        color_actual = color_canviat;  
    }
    const elements = document.getElementsByTagName("*");
    for (let x = 0; x < elements.length; x++) {
        if (color_actual === color_canviat) {
            elements[x].style.backgroundColor = color_original;
        } else {
            elements[x].style.backgroundColor = color_canviat;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////

//Aquesta funció ens mostra un text quan pitjam un botó
function mostrar_curiositat() {
    let curiositat = document.createElement ("p")
    curiositat.classList.add("p_curiositat")
    curiositat.appendChild(document.createTextNode("Al 2017 va surtir una col·lecció de LEGO inspirada en dones programadores, i na Margaret Hamilton era una d'elles!"))
    let pare = document.getElementById("idh1")
    var germa = pare.firstChild
    pare.insertBefore (curiositat, germa)
}