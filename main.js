const hero = document.querySelector(".hero"),
    heroBoy = document.querySelector(".heroBoy"),
    vilan = document.querySelector(".vilan");

function jump() {
    if(!hero.classList.contains("animate")) {
        hero.classList.add("animate")
        vilan.style.animation = "move 1s infinite linear";
    }
    setTimeout(function() {
        hero.classList.remove("animate");
    }, 300)
};
document.onkeydown =  (e) => e.key === " " ? jump(): e=1;
// Check if HERO is Alive
let isAlive = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue("left"));
    if(vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
        vilan.style.animation = "none";
        document.getElementById('fail').play();
        alert("Game Over, Press spacebar to restart");
    }
}, 10);