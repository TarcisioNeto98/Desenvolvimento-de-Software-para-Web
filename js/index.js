var limpar_inputs = (input, checkbox) => {
    var i = 0;
    while(i < checkbox.length){
        if(i < input.length) input[i].value = "";
        checkbox[i].checked = false;
        i++;
    }
};

var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
var checkboxs = document.querySelectorAll('input[type="checkbox"]');
var clear = document.getElementById('clear'), add = document.getElementById('add');
var table = document.getElementById('table'), valores = [1, 2, 0.5, 1, 10, 5];

clear.addEventListener('click', function(){
    limpar_inputs(inputs, checkboxs);
});

add.addEventListener('click', () => {
    var insercao = document.createElement('tr');
    table.appendChild(insercao);
    var servicos = document.createElement('td');
    var valor = document.createElement('td'), total = 0;
    for(i = 0; i < inputs.length; i++){
        var campo = document.createElement('td');
        campo.textContent = inputs[i].value;
        insercao.appendChild(campo);
    }
    var j = 0;
    while(j != checkboxs.length){
        if(checkboxs[j].checked){
            servicos.innerHTML += checkboxs[j].value+'<br>';
            total += valores[j];
        }
        j++;
    }
    valor.textContent = total+"";
    insercao.appendChild(servicos);
    insercao.appendChild(valor);
});