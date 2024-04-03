<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
    <h2>Hello everyone</h2>
    <p> Today is <?php echo date(" F j, Y"); ?>. The current time is <?php echo date("h:i:s A");?>.</p>
    
    <?php 
    $players = array(
        array("Nom","Prénom","Date de naissance","Poste","Age"),
        array("Giroud","Olivier","30/09/1986","Attaquant",""),
        array("Kolo Muani","Randal","05/12/1998","Attaquant",""),
        array("Griezmann","Antoine","21/03/1991","Attaquant",""),
        array("Mbappé","Kylian","20/12/1998","Attaquant",""),
        array("Kanté","N'Golo","28/03/1991","Milieu",""),
        array("Umtiti","Samuel","14/09/1993","Défenseur",""),
        array("Lloris","Hugo","26/12/1986","Gardien","")
        
    );
    ?>
     
    <table id="playersTable">
        <?php foreach ($players as $player) { ?>
            <tr>
                <?php foreach ($player as $info) { ?>
                    <td><?php echo $info; ?></td>
                <?php } ?>
            </tr>
        <?php } ?>
    </table>
 <script src="Script.js"></script> 

</body> 
</html> 