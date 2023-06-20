function getUserData() {
    // console.log(document.getElementById('player1').value);
    var players = {
        p1: document.getElementById('player1').value,
        p2: document.getElementById('player2').value
    };

    // Convert the object to a string and store it
    localStorage.setItem('person', JSON.stringify(players));

    setTimeout(() => {
        window.location.replace('page1.html');
    }, 3000);
}