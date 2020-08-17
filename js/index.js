var clear = document.getElementById('clear'), add = document.getElementById('add');
var table = document.getElementById('table');

add.addEventListener('click', () => {
    var checkboxs = document.querySelectorAll('input[type="checkbox"]');
    var i;
    for(i = 0; i < checkboxs.length; i++){
        alert(checkboxs[i].value == 'Processing - 1 micro - $ 1,00 per hour');
    }
});