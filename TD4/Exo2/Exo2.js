function goTo(imgId) {
    var source = document.getElementById('Source');
    var destination = document.getElementById('Destination')
    
    var choosenImg = document.getElementById(imgId);
    var imgCloned = choosenImg.cloneNode(true);
    imgCloned.style.marginRight = "1px";
    imgCloned.style.marginLeft = "1px";

    var price = document.getElementById('price');
    var newPrice = parseFloat(price.innerText);

    var albumName = document.getElementById('name');

    if (choosenImg.parentNode == source){
        source.removeChild(choosenImg);
        destination.appendChild(imgCloned);
        newPrice += 7.50;
        albumName.innerText = imgCloned.alt
    } else {
        if(choosenImg.previousElementSibling == albumName) {
            albumName.innerText = "Nom de l'album";
        }else{
            albumName.innerText = choosenImg.previousElementSibling.alt;
        }
        destination.removeChild(choosenImg);
        source.appendChild(imgCloned);
        newPrice -= 7.50;
    }
    price.innerText = newPrice.toFixed(2);
}