/**********

*/
/*

**********/



/**********
    GET - API
*/
const getData = async function () {
    let response = await fetch('http://localhost:3000/api/cameras')
    let data = await response.json()
    return data
}
/*
    GET - API
**********/


/**********
    PROMISE
*/
getData().then((data) => {


    /**********
        DISPLAY - Affichage des produits du panier
    */
    let tbody = document.querySelector('tbody')
    let prix_total = null;

    for (counter = 0; counter < localStorage.index; counter++)
    {
        if (localStorage.getItem("item-" + counter))
        {
            let new_tr = tbody.appendChild(document.createElement('tr'))

                /***  Articles avec Datas  ***/
                let new_td
                item = JSON.parse(localStorage.getItem("item-" + counter))
                new_td = new_tr.appendChild(document.createElement('td'))
                new_td.textContent = item.name
                new_td = new_tr.appendChild(document.createElement('td'))
                new_td.textContent = item.objectif
                new_td = new_tr.appendChild(document.createElement('td'))
                new_td.textContent = item.quantite
                new_td = new_tr.appendChild(document.createElement('td'))
                new_td.textContent = item.prix
                prix_total += item.prix * item.quantite

                /***  Boutton Supprimer  ***/
                let new_button = new_tr.appendChild(document.createElement('button'))
                new_button.textContent = "Supprimer"
                new_button.id = "suppButton_" + counter
                
                    /***  Boutton Supprimer - EVENT LISTENER ***/
                    new_button.addEventListener('click', (event) => {
                        new_tr.remove()
                        localStorage.removeItem("item-" + new_button.id.replace(/\D/g,''))
                        document.location.reload();
                    })

            }
    }
    /*
        DISPLAY - Affichage des produits du panier
    **********/


    /**********
        DISPLAY - Prix Total (afficher)
    */
    document.querySelector("#prix-total").textContent = prix_total
    /**********
        DISPLAY - Prix Total (afficher)
    */


    /**********
        BUTTON - Remove ALL panier
    */
    let panier_remove = document.querySelector("button#panier_remove")
    panier_remove.addEventListener('click', (event) => { 
        panier_remove.parentElement.querySelector('table').remove()
        panier_remove.parentElement.querySelector("th#prix-total").remove()
        localStorage.clear()
    })
    /*
        BUTTON - Remove ALL panier
    **********/
    
})
/*
    PROMISE
**********/



/**********
    FUNCTION
*/
/*  replaceAt  */
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

/*  onlyNumber  */
function onlyNumber(id)
{
    var champ = document.getElementById(id);
    while (champ.value.match(/[^0-9]/))
    {
        champ.value = champ.value.replace(/[^0-9]/,'');
    }
    if (champ.value[5]) {
        let text = champ.value
        text = text.replaceAt(5, " ")
        champ.value = text 
    }
}
/*
    FUNCTION
**********/



/**********
    SEND FORM
*/
const btn_envoyerForm = document.querySelector("#envoyerForm");
btn_envoyerForm.addEventListener("click", () => {
    var form = {}
    form["nom"] = document.querySelector("#nom").value
    form["prenom"] = document.querySelector("#prenom").value
    form["adress"] = document.querySelector("#adress").value
    form["ville"] = document.querySelector("#ville").value
    form["cp"] = document.querySelector("#cp").value
    form["email"] = document.querySelector("#email").value

    localStorage.setItem("form", JSON.stringify(form))
})
/*
    SEND FORM
**********/
