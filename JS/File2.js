var storedPerson = JSON.parse(localStorage.getItem('person'));
if (storedPerson === null || storedPerson === undefined) {
    window.location.replace('index.html');
}
var arr1 = [storedPerson.p1, storedPerson.p2];
var c1 = 0;
var c2 = 0;
console.log(arr1[0]);
window.addEventListener('load', function() {

    document.getElementById('status').innerHTML = "";
    document.getElementById('player1').innerHTML = arr1[0];
    document.getElementById('player2').innerHTML = arr1[1];

});

function rollDicee() {
    var n1 = Math.floor(6 * Math.random());
    var n2 = Math.floor(6 * Math.random());
    outputDicee(n1, n2);
}

function outputDicee(n1, n2) {
    if (n1 !== 0 && n2 !== 0) {
        document.getElementById('i1').setAttribute('src', 'images/dice' + n1 + '.png');
        document.getElementById('i2').setAttribute('src', 'images/dice' + n2 + '.png');
        checkDicee(n1, n2);
    }
}

function checkDicee(n1, n2) {
    if (n1 == n2) {
        document.getElementById('status').innerHTML = "Draw";
    } else if (n1 > n2) {
        c1++;
        document.getElementById('p1msg').innerHTML = c1;
        document.getElementById('status').innerHTML = arr1[0] + "Wins This Round";
        console.log("p1" + c1);
        checkWin();
    } else if (n1 < n2) {
        c2++;
        document.getElementById('p2msg').innerHTML = c2;
        document.getElementById('status').innerHTML = arr1[1] + "Wins This Round";
        console.log("p2" + c2);
        checkWin();
    } else {
        rollDicee();
    }
}

function checkWin() {
    if (c1 === 3) {
        var candi1 = c1;
        localStorage.setItem('s1', candi1);
        window.location.replace("result.html");
    }
    if (c2 === 3) {
        var candi2 = c2;
        localStorage.setItem('s2', candi2);
        window.location.replace("result.html");
    }
}
