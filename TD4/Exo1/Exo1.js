
function changerStyle(){
    var colors = ['red','green','blue'];
    var newP = document.querySelectorAll('p');
    newP.forEach(function(element, i){
        element.style.color = colors[i%3];
        
    });
}

function effacer() {
    var newP = document.querySelectorAll('p');
    newP.forEach(function(element){
        element.parentNode.removeChild(element);
   });

}
  