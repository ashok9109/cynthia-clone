const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

var main = document.querySelector("main");

var crsr = document.querySelector("#crsr");

main.addEventListener("mousemove", function (dets) {
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y
    });
});

var menu = document.querySelector("#menu");

var menbar = document.querySelector("#menu-bar");

var clos = document.querySelector("#menu-bar i");

menu.addEventListener("click", function () {
    menbar.style.top = "30px"

});

clos.addEventListener("click", function () {
    menbar.style.top = "-50px"
});

var elem = document.querySelectorAll(".elem");


elem.forEach(function (val) {

    var rotate = 0;
    var difrot = 0;

    val.addEventListener("mousemove", function (dets) {
        difrot = dets.x-rotate;
        rotate = dets.x;
        var diff = dets.y - val.getBoundingClientRect().top;
        gsap.to(val.querySelector("img"), {
            opacity: 1,
            top: diff,
            left: dets.clientX,
            ease: Power1,
            rotate:gsap.utils.clamp(-20,20, difrot)
        });
    });
    
    val.addEventListener("mouseleave", function () {
        gsap.to(val.querySelector("img"), {
            opacity: 0,
        });
    });
});

function animation() {
    gsap.to("#ani-move", {
        transform: "translateX(-200%)",
        duration: 50,
        repeat: -1,
        ease: "none"
    });
};
animation();