

async function buildList(){
    let data = await getCompetitors();

    console.log(data)
}

async function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
        .then((res) => {
            let data = await res.json();
            console.log(res)
            console.log(data);
            return data;
        })
}




buildList()