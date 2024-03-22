function goTo(imgId) {
    var source = document.getElementById('Source');
    var destination = document.getElementById('Destination');
    
    var choosenImg = document.getElementById(imgId);
    var parentId = choosenImg.parentNode.id;
    var imgCloned = choosenImg.cloneNode(true);
    imgCloned.style.marginRight = "1px";
    imgCloned.style.marginLeft = "1px";

    var price = document.getElementById('price');
    var newPrice = parseFloat(price.innerText);
    var albumName = document.getElementById('name');

    if (parentId == source.id){
        destination.appendChild(imgCloned);
        newPrice += 7.50;
        price.innerText = newPrice.toFixed(2);

        albumName.innerText = imgCloned.alt;
        imgCloned.id = choosenImg.id + "cloned";
        imgCloned.onclick = function() {
            var price = document.getElementById('price');
            var newPrice = parseFloat(price.innerText);
            var albumName = document.getElementById('name');
        
            if (albumName.childNodes.length > 0) {
                if (this.previousElementSibling != albumName) {
                    albumName.innerText = this.previousElementSibling.alt;
                } else if (this.nextElementSibling && this.nextElementSibling.childNodes.length > 0) {
                    albumName.innerText = this.nextElementSibling.alt;
                } 
                else {
                    albumName.innerText = "Nom de l'album";
                }
            }
            
            
           
            destination.removeChild(this); // Supprimer l'image clonée lorsque cliquée
            newPrice -= 7.50;
            price.innerText = newPrice.toFixed(2);
        };
    }
}
