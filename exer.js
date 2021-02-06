var team = ['Neur', 'boateng', 'hernandez', 'kimmich', 'lewandoski', 'roben',
    'ribery', 'coman', 'thiago', 'messi', 'cr7', 'icardi', 'zlathan',
    'lukaku', 'neymar', 'cavani', 'fati'];
var Equipe1 = [];
var Equipe2 = [];
document.getElementById('tirer').onclick = function () {
    var confrontation = team[Math.floor(Math.random() * 17)]
    var adv = team[Math.floor(Math.random() * 17)]

    if (Equipe1.includes(confrontation) || Equipe2.includes(adv) || Equipe1.includes(adv) || Equipe2.includes(confrontation)) {
     //   document.getElementById('trillage').innerHTML = 'tayari';
     //alert("Tayari")
    }
    else {
        Equipe1.push(confrontation);
        Equipe2.push(adv);
        document.getElementById('trillage').innerHTML += confrontation + ' vs ' + adv + '</br>';
    }
}

