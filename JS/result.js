window.addEventListener('load', () => {

    var storedPerson = JSON.parse(localStorage.getItem('person'));
    var arr1 = [storedPerson.p1, storedPerson.p2];


    var dareArray = [
        "Sing a song in a public place.",
        "Do the chicken dance in a crowded area",
        "Talk to a stranger and make them laugh.",
        "Eat a spoonful of a spicy condiment.",
        "Do a funny dance in the middle of a store.",
        "Wear your clothes backward for the rest of the day.",
        "Put on a funny costume and walk around the block.",
        "Speak in a different accent for the next hour.",
        "Do 10 push-ups wherever you are right now.",
        "Go to a nearby park and swing on the swings.",
    ];

    var score1 = localStorage.getItem('s1');
    var score2 = localStorage.getItem('s2');

    if (storedPerson === null || storedPerson === undefined || score1 === null || score1 === undefined || score2 === null || score2 === undefined) {
        document.getElementById('playerName').innerHTML = "";
        document.getElementById('dareLoser').innerHTML = "";
    }

    if (score1 == 3) {
        document.getElementById('playerName').innerHTML = arr1[0] + " Win the Game.";
        document.getElementById('dareLoser').innerHTML = "Loser : " + arr1[1] + " DARE - " + dareArray[Math.floor(Math.random() * dareArray.length)];
    }
    if (score2 == 3) {
        document.getElementById('playerName').innerHTML = arr1[1] + " Win the Game.";
        document.getElementById('dareLoser').innerHTML = "Loser : " + arr1[0] + " DARE - " + dareArray[Math.floor(Math.random() * dareArray.length)];
    }
});


function restartGame() {
    localStorage.removeItem('s1');
    localStorage.removeItem('s2');
    window.location.replace('page1.html');
}

function exitGame() {
    localStorage.clear();
    window.location.replace('index.html');
}