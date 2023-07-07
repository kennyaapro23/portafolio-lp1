function saludar() {
    alert("Hola mundo javascript");
}
function sumar() {
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var suma=num1+num2;
    console.log(suma);
    document.getElementById("resultado").innerHTML="Resultado :"+suma;
}
function restar() {
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var restar=num1-num2;
    console.log(restar);
    document.getElementById("resultado").innerHTML="Resultado :"+restar;
}
function producto() {
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var producto=num1*num2;
    console.log(producto);
    document.getElementById("resultado").innerHTML="Resultado :"+producto;
}
function dividir() {
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var dividir=num1/num2;
    console.log(dividir);
    document.getElementById("resultado").innerHTML="Resultado :"+dividir;
}
function cambiarRojo(){
    document.getElementById("car").src="imagen/img/rojo.jpg"
}
function cambiarBlanco(){
    document.getElementById("car").src="imagen/img/blanco.jpg"
}
function cambiarGris(){
    document.getElementById("car").src="imagen/img/gris.jpg"
}
function cambiarMarron(){
    document.getElementById("car").src="imagen/img/marron.jpg"
}
function cambiarNegro(){
    document.getElementById("car").src="imagen/img/negro.jpg"
}