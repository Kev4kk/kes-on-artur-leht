// tulevikus teha see REST API kaudu fetchitavaks
let esinemisteJSON = [
    {type: "iframe", src: "https://www.youtube.com/embed/RKgw1H5jQJY?start=1370", subtitle: "Esinesime Hugo Treffneri Gümnassiumi õpetajate päeval. Lisaks Kertule ja Annale oli ka Lilian Hindrikson klaveril ja x trummidel."},
    {type: "video", src: "img/karlova.mp4", subtitle: "Karlova"},   
];
let w = 560;
let h = 315;

function renderEsinemine(i) {
    var content = document.getElementById("content");
    var subtitle = document.getElementById("subtitle");
    var curEsinemine = esinemisteJSON[i];
    if (curEsinemine.type == "iframe") {
        content.innerHTML = `<iframe width="${w}" height="${h}" src="${curEsinemine.src}" frameborder="0" allowfullscreen></iframe>`
    } else if (curEsinemine.type == "video") {
        content.innerHTML = `<video width="${w}" height="${h}" controls><source src="${curEsinemine.src}" type="video/mp4"></source></video>`
    }
    subtitle.innerText = curEsinemine.subtitle;
}

let cur = 0;
let N = esinemisteJSON.length;

var leftButton = document.getElementById("leftBtn");
var rightButton = document.getElementById("rightBtn");
leftButton.addEventListener("click", () => {
    cur = (N + cur - 1) % N; // selleks et 0 muutuks N-1-ks
    console.log(cur);
    renderEsinemine(cur);
})
rightButton.addEventListener("click", () => {
    cur = (N + cur - 1) % N; // selleks et 0 muutuks N-1-ks
    console.log(cur);
    renderEsinemine(cur);
})