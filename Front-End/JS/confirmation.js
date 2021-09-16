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

    const productsBought = [
        "5be1ed3f1c9d44000030b061",
        "5be1ed3f1c9d44000030b061"
    ];

    const order = {
        contact: contactClient,
        products: productsBought,
    };

    // console.log(localStorage)
    /*
        CREATE - objet pour API
    **********/

    // POST request using fetch()
    // let promise = fetch("http://localhost:3000/api/cameras/order",
    // {
    //     method: "POST",
    //     body: JSON.stringify(order),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));

//--------------

    const getOrder = async function () {
        let init = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(order)
        }
        let promise = await fetch("http://localhost:3000/api/cameras/order", init)
        let response = await promise.json()

        // console.log(response.orderId) //

        document.querySelector("#orderID span").textContent = response.orderId

        return response
    }

    getOrder()

    // getOrder().then((response) => {
    //     console.log(response.orderId)
    // })



})
/*
    PROMISE
**********/



/**********
    PROMISE
*/


// localStorage.setItem("contactClient", JSON.stringify(contactClient))


// const productsBought = [
//     obj1 = {
//         "test1":"test1"
//     },
//     obj2 = {
//         "test2":"test2"
//     }
// ];
// localStorage.setItem("productsBought", JSON.stringify(productsBought))

// const order = {
//     contact: contactClient,
//     products: productsBought,
// };
// localStorage.setItem("order", JSON.stringify(order))

// let priceConfirmation = 200

// const options = {
//     method: "POST",
//     body: JSON.stringify(order),
//     headers: { "Content-Type": "application/json" },
//   };

//   fetch("http://localhost:3000/api/cameras/order", options)
//   .then((response) => response.json())
//   .then((response) => {
//       console.log("TEST - response\n")
//       console.log(response)
//   })
//   .then((data) => {
//     // localStorage.clear();
//     console.log("TEST - data\n")
//     console.log(data)
//     // console.log(data.orderId)
//     // localStorage.setItem("orderId", data.orderId);
//     // localStorage.setItem("total", priceConfirmation);
//   })
//   .catch((err) => {
//     alert("Il y a eu une erreur : " + err);
//   });


/**********
    GET - API order
*/
// const getOrder = async function () {
//     let reponse = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//     let order = await reponse.json()
//     return order
// }

// getOrder().then((order) => {
//     console.log("TEST - order")
//     console.log(order)
// })



// POST request using fetch()
// let promise = fetch("http://localhost:3000/api/cameras/order",
// {
//     method: "POST",
//     body: JSON.stringify(order),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));



/*
    GET - API order
**********/