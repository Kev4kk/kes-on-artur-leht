// kogu JS autor - Kevin Akkermann


// tulevikus teha see REST API kaudu fetchitavaks
let esinemisteJSON = [
    {type: "video", src: "img/manguilu.mp4", subtitle: 'Esimest korda esines ansambel Kes on Artur? konkursil "Mängu Ilu", mis toimus Koolijazz 2023 raames Viljandi Pärimusmuusika Aidas. 03.1.2023. Laul: "Vienna" - Billy Joel'},   
    {type: "video", src: "img/karlova.mp4", subtitle: 'Pärast pisikest pausi võis bändi näha ja kuulata Tartus, kohviku Anna Edasi ees, sest toimusid Karlova Päevad 2023. 20.5.2023. Laul: "Fever" - Peggy Lee'},   
    {type: "video", src: "img/received_1263667907847806.mp4", subtitle: 'Augustikuus astus Kes on Artur? üles Põlva Kodukohvikute Päeval kohviku Ridali Taevas alal. 5.8.2023. Laul: "Died in your arms" - Cutting Crew.'},   
    {type: "iframe", src: "https://www.youtube.com/embed/RKgw1H5jQJY?start=1370", subtitle: "Esinesime Hugo Treffneri Gümnassiumi õpetajate päeval 6.10.2023. Lisaks Kertule ja Annale oli ka Lilian Hindrikson klaveril ja Robert Kirk trummidel."},
    {type: "video", src: "img/20231115_191047_2.mp4", subtitle: 'Novembris esinesid Anna ja Kertu Hugo Treffneri Gümnaasiumi kohvikute õhtul. 15.11.2023. Laul: "Dancing Barefoot" - Patti Smith.'},   
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
    console.log(cur);-
    renderEsinemine(cur);
})
rightButton.addEventListener("click", () => {
    cur = (cur + 1) % N; // selleks et 0 muutuks N-1-ks
    console.log(cur);
    renderEsinemine(cur);
})