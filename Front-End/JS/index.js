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
    ADD - DataBase ( API Promise )
*/
getData().then((data) => {

    var main = document.querySelector('main')

    for (let i = 0; i < data.length; i++)
    {
        let newArticle = document.createElement('div')

            newArticle.appendChild(document.createElement('img'))
            newArticle.querySelector('img').src = data[i].imageUrl

            let newDiv = newArticle.appendChild(document.createElement('div'))

                newDiv.appendChild(document.createElement('h3'))
                newDiv.querySelector('h3').textContent = data[i].name

                newDiv.appendChild(document.createElement('span'))
                newDiv.querySelector('span').textContent = data[i].description

                newDiv.appendChild(document.createElement('strong'))
                let number = data[i].price / 100
                number = number.toFixed(2)
                newDiv.querySelector('strong').textContent = number + " €"

                newDiv.appendChild(document.createElement('a'))
                newDiv.querySelector('a').href = "./produit.html" + "?id=" + data[i]._id
                newDiv.querySelector('a').textContent = "Voir le produit"
        
        main.appendChild(newArticle)
    }
    
})
/*
    ADD - DataBase ( API Promise )
**********/







