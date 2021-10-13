class phldr{
    constructor(id,f,l,ob){
        this.id = id;
        this.first_name = f;
        this.last_name = l;
        this.own_bike = ob;
    }
}

let allCompetitors = [
    new phldr(1,'Joe','Boe',true),
    new phldr(2,'Jenny','Boetrios',false),
    new phldr(3,'Bobo','Dimplebottom',true),
    new phldr(4,'Jeeb','Bob',true),
    new phldr(5,'Harriet','Hair',false),
    new phldr(6,'Marsha','Ridergirl',true),
    new phldr(7,'Yes','Sir',true),
    new phldr(8,'No','Way',false),

]


async function getCompetitors(){

    fetch(`${location.protocol}//tour-de-hill.herokuapp.com/api/competitors`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        allCompetitors = data;
        makeBibs()
        return data;
    })

    // makeBibs()


}

function makeBibs(){

    const cont = document.querySelector('#cont');


    allCompetitors.forEach(comp => {

        let ownBike;

        if(comp.own_bike){
            ownBike = "Own Bike"
        } else {
            ownBike = "Tar Heel Bike"
        }

        const elem = `
            <div class="bibConts">
                <div>
                    <p>The Second Annual <strong>Tour De Hill</strong></p>
                </div> 
                <div>
                    <h1>${comp.id}</h1>
                    <h3>${comp.first_name} ${comp.last_name}</h3>
                </div>
                <div>
                    <p>${ownBike}</p>
                </div>
                <img src="./assets/monkey-2.png">
            </div>
        `
        cont.insertAdjacentHTML('beforeend',elem)

    })
}


getCompetitors()