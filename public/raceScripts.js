
document.querySelector('#startTime').addEventListener('mousedown',() => {
    clientTimer.start()
    fetch(`${location.protocol}//tour-de-hill.herokuapp.com/api/race/startTime`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})

const clientTimer = {
    value: 0,
    step: 100,
    start(){
        setInterval(() => {
            this.value += this.step;
            this.updateDisplay()
        }, this.step);
    },
    updateDisplay(){
        document.querySelector('#timeDisplay').textContent = this.value/1000;
    }
}