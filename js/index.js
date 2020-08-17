var limpar_inputs = (input, checkbox) => {
    var i = 0;
    alert("eai");
    while(i < checkbox.length){
        if(i < input.length) input[i].value = "";
        checkbox[i].checked = false;
        i++;
    }
};

var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
var checkboxs = document.querySelectorAll('input[type="checkbox"]');
var clear = document.getElementById('clear'), add = document.getElementById('add');
var table = document.getElementById('table');

clear.addEventListener('click', function(){
    limpar_inputs(inputs, checkboxs);
});

/*add.addEventListener('click', () => {
});*/