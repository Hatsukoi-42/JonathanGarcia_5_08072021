/**********
    GET - API
*/
const getData = async function () {
    let response = await fetch('http://localhost:3000/api/cameras')
    let data = await response.json()
    return data // useless ?
}
/*
    GET - API
**********/



/**********
    PROMISE
*/
getData().then((data) => {

    /**********
        DISPLAY - panier
    */
    let tbody = document.querySelector('tbody')
    let prix_total = null;
    for (counter = 0; counter < localStorage.index; counter++)
    {
        if (localStorage.getItem("item-" + counter))
        {
            
            let new_tr = tbody.appendChild(document.createElement('tr'))
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
            }
    }
    document.querySelector("#prix-total").textContent = prix_total
    /*
        DISPLAY - panier
    **********/

    /**********
        DISPLAY - form
    */    
    let form = JSON.parse(localStorage.getItem("form"))
    let cible = document.getElementById("coordonnees")

    /*  nom  */
    let nom = document.createElement("span")
        nom.textContent = "Nom : " + form["nom"]
        cible = cible.insertAdjacentElement("afterend", nom)
    
    /*  prenom  */
    let prenom = document.createElement("span")
        prenom.textContent = "Prenom : " + form["prenom"]
        cible = cible.insertAdjacentElement("afterend", prenom)
    
    /*  adress  */
    let adresse = document.createElement("span")
            adresse.textContent = "Adresse : " + form["adress"]
            cible = cible.insertAdjacentElement("afterend", adresse)
    
    /*  ville  */
    let ville = document.createElement("span")
        ville.textContent = "Ville : " + form["ville"]
        cible = cible.insertAdjacentElement("afterend", ville)
    
    /*  cp  */
    let cp = document.createElement("span")
        cp.textContent = "Code Postal : " + form["cp"]
        cible = cible.insertAdjacentElement("afterend", cp)

    /*  email  */
    let email = document.createElement("span")
        email.textContent = "Email : " + form["email"]
        cible = cible.insertAdjacentElement("afterend", email)        
    /*
        DISPLAY - form
    **********/ 

    /**********
        CREATE - objet pour API
    */
    const contactClient = {
        firstName: nom,
        lastName: prenom,
        city: ville,
        address: adresse,
        email: email
    }

    let productsBought = []
    let index = 0
    for (counter = 0; counter < localStorage.index; counter++)
    {
        if (localStorage.getItem("item-" + counter))
        {
            productsBought[index] = JSON.parse(localStorage.getItem("item-" + counter)).id
            index++
        }
    }

    const order = {
        contact: contactClient,
        products: productsBought,
    };
    /*
        CREATE - objet pour API
    **********/


    /**********
        POST - envoie et récupération de l'ID
    */    
    const getOrder = async function () {
        if (!order.products.length) {return}

        let init = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(order)
        }
        let promise = await fetch("http://localhost:3000/api/cameras/order", init)
        let response = await promise.json()

        document.querySelector("#orderID span").textContent = response.orderId

        return response
    }

    getOrder()
    /*
        POST - envoie et récupération de l'ID
    **********/ 

        
})
/*
    PROMISE
**********/