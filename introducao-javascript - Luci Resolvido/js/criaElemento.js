var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = recebeDados(form);

    var msgOK = validaPaciente(paciente);

    if (msgOK.length > 0) {
      exibeMensagensErro(msgOK)
      return;
    }
    else {
      var ul = document.querySelector("#mensagemErro");
      ul.innerHTML = "";
    }

   adicionaPacienteNaTabela(paciente);

    form.reset();
});

function recebeDados(form) {
  var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaIMC(form.peso.value,form.altura.value)}
      return paciente
    };

function criaTrTd(paciente) {

      var pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente");

      pacienteTr.appendChild(criaTd(paciente.nome,"info-nome"));
      pacienteTr.appendChild(criaTd(paciente.peso,"info-peso"));
      pacienteTr.appendChild(criaTd(paciente.altura,"info-altura"));
      pacienteTr.appendChild(criaTd(paciente.gordura,"info-gordura"));
      pacienteTr.appendChild(criaTd(paciente.imc,"info-imc"));

      return pacienteTr;
};
function criaTd(dado,classe) {
      var td = document.createElement("td");
      td.textContent = dado;
      td.classList.add(classe);

      return td;
  };

  function validaPaciente(paciente) {
      var arrayErros = [];

      if (!validaPeso(paciente.peso)) arrayErros.push("O peso é inválido");
      if (!validaAltura(paciente.altura)) arrayErros.push("A altura é inválida");
      if (!validaNome(paciente.nome)) arrayErros.push("O nome é inválido");
      if (!validaGordura(paciente.gordura)) arrayErros.push("% gordura é inválido");
      return arrayErros;
  }

function exibeMensagensErro(arrayErros) {
   var ul = document.querySelector("#mensagemErro");
   ul.innerHTML = "";

   arrayErros.forEach(function(textoErro){
     var li = document.createElement("li");
     li.textContent = textoErro;
     ul.appendChild(li);
   });
}
  function adicionaPacienteNaTabela(paciente) {
       var pacienteTr = criaTrTd(paciente);
       var tabela = document.querySelector("#tabela-pacientes");
       tabela.appendChild(pacienteTr);
   }
