function convertDate(dateString) {
    var parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}


function calculateAge(birthday) {
    var today = new Date();
    var birthDate = convertDate(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


var playersTable = document.getElementById('playersTable');


for (var i = 1; i < playersTable.rows.length; i++) {
    var row = playersTable.rows[i];
    var birthday = row.cells[2].innerHTML
    var age = calculateAge(birthday);
    row.cells[4].innerHTML = age;
}
