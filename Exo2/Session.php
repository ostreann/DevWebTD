<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Session</title>
    <link rel="stylesheet" href="Exo2.css">
</head>
<body>
    <?php

    if(isset($_GET['Surname'], $_GET['Name'], $_GET['Birthdate'])) {
        $nom = $_GET['Surname'];
        $prenom = $_GET['Name'];
        $dateNaissance = $_GET['Birthdate'];


        $dateActuelle = new DateTime();
        $dateNaissanceObj = DateTime::createFromFormat('d/m/Y', $dateNaissance);
        $age = $dateActuelle->diff($dateNaissanceObj)->y;

        echo "Bonjour $prenom $nom, ";
        echo "vous avez $age ans.";
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
    ?>
</body>
</html>
