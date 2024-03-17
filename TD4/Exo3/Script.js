
function getRandomInt() {
    return Math.floor(Math.random() * 100);
    }
    
var tableau = [];

function genererTableau() {
    tableau = []; 
        for (let i = 0; i < 10; i++) {
            tableau.push(getRandomInt());
        }
    
    document.getElementById('array-container').innerHTML = 'Tableau Original : ' + tableau.join(' - ');
    
    }

function triF() {
    tableau.sort(function(a, b) {
        return a - b;
    });

    document.getElementById('array-new').innerHTML = '<br>Tableau Trié : ' + tableau.join(' - ');
}