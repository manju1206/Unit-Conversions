function ac() {
    let output = (document.getElementById('milimeter').value) / (1000000);
    document.getElementById("res").value = output;
}

if (milimeter === " " || (milimeter <=0)) {
    document.getElementById("milimeter_error").innerHTML='Please enter a valid number!';
}
else {
    document.getElementById("milimeter_error").innerHTML=" ";
}
