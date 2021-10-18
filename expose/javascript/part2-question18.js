function x(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    }
    setInterval(x, 1000);