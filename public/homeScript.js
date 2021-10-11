

let ownBike = true;



const choiceClick = (e) => {
    let target = e.target;
    let classes = e.target.classList;

    let chosen = false;

    classes.forEach(elemClass => {
        if(elemClass == "chosen"){
            chosen = true;
        }
    })

    if(chosen){
        return
    } else {
        e.target.classList.add('chosen');

        if(e.target.textContent == 'Tar Heel Bike'){
            ownBike = false

            document.querySelector('#own').classList.remove('chosen')
        } else {
            ownBike = true

            document.querySelector('#heel').classList.remove('chosen')
        }
    }

    console.log(ownBike)


}

document.querySelectorAll('.choice').forEach(choice => choice.addEventListener('mousedown', choiceClick))





const submit = () => {

    let data = {
        first_name: document.querySelector('#first-name').textContent,
        last_name: document.querySelector('#last-name').textContent,
        own_bike: ownBike
    }

    fetch('https://tour-de-hill.herokuapp.com/api/competitor', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}



document.querySelector('#register-button').addEventListener('mousedown',submit)