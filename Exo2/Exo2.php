<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Exo2</title>
        <link rel="stylesheet" href="Exo2.css">
       
    </head>
    <body>
        <form action="Session.php" method="get">
            <div><label for="Surname">Quel est votre nom ?</label><input name="Surname"></div>
                <div><label for="Name">Quel est votre prénom ?</label><input name="Name"></div>
                    <div><label for="Birthdate">Quel est votre date de naissance ?</label><input name="Birthdate" value="xx/xx/xxxx" maxlength="10"></div>
                    <input class="submit" type="submit">           
        </form>
    </body>
</html>