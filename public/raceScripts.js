
document.querySelector('#startTime').addEventListener('mousedown',() => {
    fetch(`${location.protocol}//tour-de-hill.herokuapp.com/api/race/startTime`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})