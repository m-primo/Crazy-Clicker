const crazyClicker = {
    counter: 0,
    get Reset() {
        this.counter = 0;
    },
    get Increment() {
        this.counter++;
    },
    get Show() {
        document.getElementById('counter').innerHTML = this.counter;
    },
    get Click() {
        this.Increment;
        this.Show;
        if(this.counter % 100 == 0) {
            if(this.counter != 0) {
                alert('Congrats! You got ' + this.counter + ' clicks.');
            }
        }
    },
};

window.onload = function() {
    document.getElementById('clickBTN').onclick = function() {
        crazyClicker.Click;
    };
    document.getElementById('resetBTN').onclick = function() {
        crazyClicker.Reset;
        crazyClicker.Show;
    };
};