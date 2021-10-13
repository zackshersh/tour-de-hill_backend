
// let allCompetitors = []




async function buildList(competitors){
    console.log(competitors)
    competitors.forEach(c => {
        console.log(c)
        let card = buildCard(c.id,c.first_name,c.last_name,c.own_bike,c.createdAt);
        console.log(card)
        document.querySelector('#cont').appendChild(card)
    })




}

async function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // cmpetitors = data;
        buildList(data)
        return data;
    })
}

function buildCard(id,firstName,lastName,ownBike,createdAt){
    console.log('starting cont')
    let cont = document.createElement('div');
    cont.classList.add('compCard')
    let s = cont.style

    s.borderTop = "1px solid black"

    let idElem = document.createElement('p');
    idElem.textContent = id;
    cont.appendChild(idElem)

    let name = document.createElement('p');
    name.textContent = firstName + " " + lastName;
    cont.appendChild(name);

    let bike = document.createElement('p')
    if(ownBike){
        bike.textContent = "Own Bike"
        bike.style.color = "rgb(0,100,0)"
    } else {
        bike.textContent = "Tar Heel Bike"
        bike.style.color = "rgb(0,0,100)"
    }
    cont.appendChild(bike);

    let time = document.createElement('p');
    time.textContent = createdAt;
    time.style.fontSize = "8px";
    cont.append(time)

    console.log(cont)


    return cont


}



// buildList()
getCompetitors()