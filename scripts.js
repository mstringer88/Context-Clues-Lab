var friendsNames = ["Matt", "Gio", "Logan", "Nate", "Mike"];
var weaponName = ["jousting pole", "paper airplane", "toilet seat", "battle axe", "toothpick", "hammer", "crossbow", "flamethrower", "pickle", "Thor's hammer", "sword", "photon laser", "screwdriver", "paperclip", "hatchet", "stun gun", "chainsaw", "machinegun", "trident", "velociraptor"];
var locationName = ["7th level of hell", "oval office", "library", "spaceship", "shed", "laundry room", "auditorium", "doctors office", "covered wagon", "tree house"];


for (var i = 1; i < 100; i++) {
    createAlert(i);
};
function createAlert(i) {
    var h3 = $(`<h3 id${i}>Accusation ${i}</h3>`);

    $(document.body).append(h3);
    
    h3.click(function () {
        var f = friendsNames[i % 5];
        var w = weaponName[i % 20];
        var l = locationName[i % 10];
        console.log(f);
        console.log(w);
        console.log(l);
        return alert(`Accusation ${i}: I accuse ${f}, with the ${w} in the ${l}!`)
    });
};
