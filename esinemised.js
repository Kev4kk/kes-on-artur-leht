// kogu JS autor - Kevin Akkermann


// tulevikus teha see REST API kaudu fetchitavaks
// type järgi renderitakse kindlat tüüpi video
// src: kust võtta see video, lokaalsete puhul mp4 fail, YT videote puhul URL
// subtitle: alatekst, mis seletab esinemist
let esinemisteJSON = [
    {type: "video", src: "img/manguilu.mp4", subtitle: 'Esimest korda esines ansambel Kes on Artur? konkursil "Mängu Ilu", mis toimus Koolijazz 2023 raames Viljandi Pärimusmuusika Aidas.<br>3.1.2023.<br>Laul: "Vienna" - Billy Joel'},   
    {type: "video", src: "img/karlova.mp4", subtitle: 'Pärast pisikest pausi võis bändi näha ja kuulata Tartus, kohviku Anna Edasi ees, sest toimusid Karlova Päevad 2023.<br>20.5.2023.<br>Laul: "Fever" - Peggy Lee'},   
    {type: "video", src: "img/received_1263667907847806.mp4", subtitle: 'Augustikuus astus Kes on Artur? üles Põlva Kodukohvikute Päeval kohviku Ridali Taevas alal.<br>5.8.2023.<br>Laul: "Died in your arms" - Cutting Crew.'},   
    {type: "iframe", src: "https://www.youtube.com/embed/RKgw1H5jQJY?start=1370", subtitle: "Esinesime Hugo Treffneri Gümnassiumi õpetajate päeval. Lisaks Kertule ja Annale oli ka Lilian Hindrikson klaveril ja Robert Kirk trummidel.<br>6.10.2023"},
    {type: "video", src: "img/20231115_191047_2.mp4", subtitle: 'Novembris esinesid Anna ja Kertu Hugo Treffneri Gümnaasiumi kohvikute õhtul.<br>15.11.2023.<br>Laul: "Dancing Barefoot" - Patti Smith.'},   
];

// videote suurus
let w = 560;
let h = 315;

// funktsioon, mis nuppu vajutades näitab kindlat esinemist
function renderEsinemine(i) {
    var content = document.getElementById("content");
    var subtitle = document.getElementById("subtitle");
    var curEsinemine = esinemisteJSON[i];
    if (curEsinemine.type == "iframe") { // Online videote jaoks iframe kasutamine
        content.innerHTML = `<iframe width="${w}" height="${h}" src="${curEsinemine.src}" frameborder="0" allowfullscreen></iframe>`
    } else if (curEsinemine.type == "video") { // Lokaalsete videote jaoks <video>-tag
        content.innerHTML = `<video width="${w}" height="${h}" controls><source src="${curEsinemine.src}" type="video/mp4"></source></video>`
    } 
    subtitle.innerHTML = curEsinemine.subtitle;
}

// praegune esinemise video index 
let cur = 0; 
let N = esinemisteJSON.length;

var leftButton = document.getElementById("leftBtn");
var rightButton = document.getElementById("rightBtn");
leftButton.addEventListener("click", () => { // vasakule nupule funktsionaalsus
    cur = (N + cur - 1) % N; // selleks et 0 muutuks N-1-ks
    console.log(cur);-
    renderEsinemine(cur);
})
rightButton.addEventListener("click", () => { // vasakule nupule funktsionaalsus
    cur = (cur + 1) % N; // selleks et N+1 muutuks 0-ks
    console.log(cur);
    renderEsinemine(cur);
})