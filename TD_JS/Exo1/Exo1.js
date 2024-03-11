
function changerStyle(){
    var newP = document.querySelectorAll('p');
    newP.forEach(function(element){
        element.style.color = 'red';
        
    });
}

function effacer() {
    var newP = document.querySelectorAll('p');
    newP.forEach(function(element){
        element.parentNode.removeChild(element);
   });

}
  