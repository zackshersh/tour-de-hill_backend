

function buildList(){
    getCompetitors()
}

function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
        .then((res) => {
            console.log(res.json());
            return res.json();
        })
}




buildList()