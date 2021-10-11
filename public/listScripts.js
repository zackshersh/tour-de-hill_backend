

async function buildList(){
    let data = await getCompetitors();

    console.log(data)
}

async function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
        .then(async (res) => {
            let data = res.json()
            console.log(res)
            console.log(data[0]);
            return data;
        })
}




buildList()