var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval( () => {
    if(count < 1000){
        count++;
        counter.innerHTML = count;
    }
}, 0.3);

setTimeout(() => {
    followers.innerHTML = "Followers on Instagram"
}, 5800)