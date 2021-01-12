
var titulo = document.querySelector(".titulo");
titulo.textContent="Nutrição";
var pacientes = document.querySelectorAll(".paciente");
for (var i=0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdIMC = paciente.querySelector(".info-imc");
  var peso = tdPeso.textContent
  var altura = tdAltura.textContent
  var pesoOK = validaPeso(peso)
  var alturaOK = validaAltura(altura)

  if (!pesoOK) {
      tdIMC.textContent = "peso inválido";
      paciente.classList.add("paciente-invalido");
    }
  else {
    if (!alturaOK) {
      tdIMC.textContent = "altura inválida";
      paciente.classList.add("paciente-invalido");
    }
    else {
      var imc = calculaIMC(peso,altura);
      tdIMC.textContent = imc;
         }
    }
}
function calculaIMC(peso,altura) {
  var imc = 0
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso <= 200) {
      return true;}
  else{
      return false;}
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3.00) {
     return true;}
  else {
     return false;}
}

function validaNome(nome) {
  if (nome.length == 0) return false;
  else return true;
}

function validaGordura(gordura) {
  if (gordura.length == 0) return false;
  else return true;
}
