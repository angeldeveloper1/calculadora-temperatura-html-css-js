var c = document.getElementById("celsius");
var f = document.getElementById("farenheit");

function celsius () {
  var resultado = c.value * 9/5 + 32;

  f.value = resultado;
}

function farenheit () {
  var resultado = (f.value - 32) * 5/9;

  c.value = resultado;
}