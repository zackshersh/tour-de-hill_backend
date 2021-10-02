

function buildList(){
    getCompetitors()
}

function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
        .then((res) => {
            let data = res.json();
            console.log(res)
            console.log(data);
            return data;
        })
}




buildList()