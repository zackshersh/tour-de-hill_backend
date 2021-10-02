

function buildList(){
    getCompetitors()
}

function getCompetitors(){
    fetch('https://tour-de-hill.herokuapp.com/api/competitors')
        .then((res) => {
            console.log(res);
            return res;
        })
}




buildList()