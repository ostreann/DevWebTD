function changeImage(isHovered) {
    var defaultImage = document.getElementById('defaultImage');
    var hoverImage = document.getElementById('hoverImage');

    if (isHovered) {
        defaultImage.style.display = 'none';
        hoverImage.style.display = 'block';
    } else {
        defaultImage.style.display = 'block';
        hoverImage.style.display = 'none';
    }

}

function displayImgInfo() {
    var img = document.getElementById('displayedImg');

    var source = img.src;
    var name = img.alt;
    var size = img.naturalHeight + " × " + img.naturalWidth;

    var message = "Source: " + source + "\n";
    message += "Nom: " + name + "\n";
    message += "Taille: " + size;

    alert(message);
}

function randomImg(){
    var Emplacement = document.getElementById('rdmImg');
    var images = [
        { src: "img/Matthieu-chaise.jpeg", alt: "Le fou de la chaise"},
        { src: "img/loup-malicieux.jpeg", alt: "Le loup malicieux"},
        { src: "img/Matthieu-table.jpeg", alt:"Le fou de la table"},
        { src: "img/Ostrean.jpeg", alt:"Le fou du pouf"},

    ];
    var nbImg = images.length;
   
    Emplacement.innerHTML = '';

   var randomNumber = Math.floor(Math.random() * nbImg);
   var randomImage = images[randomNumber];

   var imgElement = document.createElement("img");
   imgElement.src = randomImage.src;
   imgElement.alt = randomImage.alt;
   imgElement.id = "displayedImg";
   imgElement.onclick = displayImgInfo;
   Emplacement.appendChild(imgElement);
}


