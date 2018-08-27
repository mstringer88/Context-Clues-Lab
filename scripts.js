var friendsNames = ["Matt", "Gio", "Logan", "Nate", "Mike"];
var weaponName = ["jousting pole", "paper airplane", "toilet seat", "battle axe", "toothpick", "hammer", "crossbow", "flamethrower", "pickle", "Thor's hammer", "sword", "photon laser", "screwdriver", "paperclip", "hatchet", "stun gun", "chainsaw", "machinegun", "trident", "velociraptor"];
var locationName = ["7th level of hell", "oval office", "library", "spaceship", "shed", "laundry room", "auditorium", "doctors office", "covered wagon", "tree house"];


for (var i = 1; i < 100; i++) {
    createAlert(i);
}
function createAlert(i) {
    var h3 = `Accusation ${i}`;
    $('h3').click(function callAlert() {
        var f = friendsNames[i % 5];
        var w = weaponName[i % 20];
        var l = locationName[i % 10];
        return alert(`${h3}: I accuse ${f}, with the ${w} in the ${l}!`)
        console.log(f);
        console.log(w);
        console.log(l);
        console.log(h3);
    })
}








