

let ownBike = true;

let firstName = "";
let lastName = ""



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


console.log(document.body)
const submit = (e) => {

    e.preventDefault()

    let data = {
        first_name: document.querySelector('#first-name').value,
        last_name: document.querySelector('#last-name').value,
        own_bike: ownBike
    }

    console.log(JSON.stringify(data))
    console.log(window.location.href)

    console.log(window)
    console.log(self.origin)
    console.log(self.location)
    fetch('https://tour-de-hill.herokuapp.com/api/competitor', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data){
            document.querySelector('#register-cont').classList.add('hidden');
            document.querySelector('#success-cont').classList.remove('hidden');
            document.querySelector('.page-5').style.paddingTop = '0px'
        } else {
            document.querySelector('#failure-cont').classList.remove('hidden');

        }
        console.log(data)
    })
}



document.querySelector('form').addEventListener('submit',submit)

document.querySelectorAll('input').forEach(input => input.addEventListener('keypress',function(e){
    let id = e.target.id;

    if(id == "first-name"){
        firstName = e.target.value;
        console.log(firstName)
    } else {
        lastName = e.target.value;
        console.log(lastName)
    }
}))