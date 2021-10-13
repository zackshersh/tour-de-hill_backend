

const timer = {
    value: 0,
    timerStep: 100,
    start(){
        setInterval(() => {
            this.value += this.timerStep;
        }, this.timerStep);
    },
    reset(){
        this.value = 0;
    }
}
 
module.exports = timer;