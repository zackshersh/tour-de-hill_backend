

async function buildList(){
    let data = await getCompetitors();

    console.log(data)
}

async function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
    .then(response => response.json());
    .then(data => {
        console.log(data)
        return data;
    })
}




buildList()