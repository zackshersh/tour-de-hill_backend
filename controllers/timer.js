

const timer = {
    value: 0,
    timerStep: 100,
    start(){
        setInterval(() => {
            this.value += this.timerStep;
            if(this.value/this.timerStep % 10){
                console.log(this.value)
            }
        }, this.timerStep);
    },
    reset(){
        this.value = 0;
    }
}
 
module.exports = timer;