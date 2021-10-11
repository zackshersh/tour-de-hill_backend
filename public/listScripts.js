

async function buildList(competitors){
    competitors => {
        console.log(competitors)
        competitors.forEach(c => {
            let card = buildCard(c.id,c.first_name,c.last_name,c.own_bike,c.createdAt);
            document.querySelector('#cont').appendChild(card)
        })
    }



}

async function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buildList(data)
        return data;
    })
}

function buildCard(id,firstName,lastName,ownBike,createdAt){
    let cont = document.createElement('div');
    let s = cont.style

    s.margin = '4px';
    s.padding = '12px';
    s.display = "flex";
    s.justifyContent = "space-between";
    s.alignItems = "center"

    let idElem = document.createElement('p');
    idElem.textContent = id;
    cont.appendChild(idelem)

    let name = document.createElement('p');
    name.textContent = firstName + " " + lastName;
    cont.appendChild(name);

    let bike = document.createElement('p')
    if(ownBike){
        bike.textContent = "Own Bike"
    } else {
        bike.textContent = "Tar Heel Bike"
    }
    cont.appendChild(bike);

    let time = document.createElement('p');
    time.textContent = createdAt;
    time.style.fontSize = "8px";
    cont.append(time)


    return cont


}



// buildList()
getCompetitors()