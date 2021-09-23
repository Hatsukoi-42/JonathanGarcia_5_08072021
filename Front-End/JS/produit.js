/**********
    GET - ID Article (http)
*/
let ArticleId = new URL(location.href).searchParams.get("id")
/*
    GET - ID Article (http)
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
        DISPLAY - Specific Article
    */
    var main = document.querySelector('main')

    for (let i = 0; i < data.length; i++)
    {
        if (data[i]._id == ArticleId)
        {
            /*  create - container <div>  */
            let newArticle = document.createElement('div')

                /*  add - image  */
                newArticle.appendChild(document.createElement('img'))
                newArticle.querySelector('img').src = data[i].imageUrl

                /*  create - container <div> */
                let newDiv = newArticle.appendChild(document.createElement('div'))
                
                    /*  add - name  */
                    newDiv.appendChild(document.createElement('h3'))
                    newDiv.querySelector('h3').textContent = data[i].name

                    /*  add - description  */
                    newDiv.appendChild(document.createElement('span'))
                    newDiv.querySelector('span').textContent = data[i].description
                    
                    /*  add - prix  */
                    newDiv.appendChild(document.createElement('strong'))
                    let number = data[i].price / 100
                    number = number.toFixed(2)
                    newDiv.querySelector('strong').textContent = number + " €"

                    /*  create - formulaire  */
                    newDiv.appendChild(document.createElement('form'))
                    let form = newDiv.querySelector('form')
                    form.action = 'commande' 

                        /* add - objectif */
                        let newFormDiv = form.appendChild(document.createElement('div'))

                            newFormDiv.appendChild(document.createElement('label'))
                            let label1 = newFormDiv.querySelector('label')
                            label1.for = 'objectif'
                            label1.textContent = "Objectif :"

                            newFormDiv.appendChild(document.createElement('select'))
                            let select1 = newFormDiv.querySelector('select')
                            select1.name = "objectif"
                            select1.id = "objectif"

                                for (let j = 0; j < data[i].lenses.length; j++) {
                                    let option = select1.appendChild(document.createElement('option'))
                                    option.value = j
                                    option.textContent = data[i].lenses[j]
                                }
                            
                        /* add - quantité */
                        newFormDiv = form.appendChild(document.createElement('div'))

                            newFormDiv.appendChild(document.createElement('label'))
                            let label2 = newFormDiv.querySelector('label:last-of-type')
                            label2.for = 'objectif'
                            label2.textContent = "Quantité :"

                            newFormDiv.appendChild(document.createElement('select'))
                            let select2 = newFormDiv.querySelector('select:last-of-type')
                            select2.name = "quantite"
                            select2.id = "quantite"

                                select2.appendChild(document.createElement('option'))
                                select2.querySelector('option:last-of-type').textContent = 1
                                select2.appendChild(document.createElement('option'))
                                select2.querySelector('option:last-of-type').textContent = 2
                                select2.appendChild(document.createElement('option'))
                                select2.querySelector('option:last-of-type').textContent = 3
                                select2.appendChild(document.createElement('option'))
                                select2.querySelector('option:last-of-type').textContent = 4
                                select2.appendChild(document.createElement('option'))
                                select2.querySelector('option:last-of-type').textContent = 5

                        /* add - bouton - ajouter au panier */
                        form.appendChild(document.createElement("input"))
                        let input1 = form.querySelector('input')
                        input1.type = "button"
                        input1.value = "Ajouter au panier"

            /*  push - article complet  */
            main.appendChild(newArticle)
        }
    }
    /*
        DISPLAY - Specific Article
    **********/


    /**********
        EVENT LISTENER - Ajout au panier
    */
    let myInput = document.querySelector('input')
    // Pourquoi je ne peux pas déclarer ma fonction en extérieur ?
    myInput.addEventListener('click', (event) => {

        for (let i = 0; i < data.length; i++)
        {
            if (data[i]._id == ArticleId)
            {

                let obj = {}
                obj['name'] = data[i].name
                obj['id'] = data[i]._id
                obj['prix'] = data[i].price / 100
                obj['objectif'] = document.getElementById('objectif').options[document.getElementById('objectif').selectedIndex].text
                obj['quantite'] = document.getElementById('quantite').value

                if (localStorage.index === undefined) {
                    localStorage.setItem('index', 0)
                }
                localStorage.setItem('item-' + localStorage.index++, JSON.stringify(obj))

                window.alert("Votre choix à été ajouté à votre panier.")
            }
        }
        
    })
    /*
        EVENT LISTENER - Ajout au panier
    **********/


})
/*
    PROMISE
**********/


