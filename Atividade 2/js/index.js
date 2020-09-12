/*Vue.component('item-table', {
    template:'Nome</th><th>E-mail</th><th>Nascimento</th><th>Serviços</th><th>Total</th></tr>'
});

Vue.component('table-vue',{
    props: ['item'],
    template: '<table class="table-striped"><item-table/><tr><td>ssss</td></tr></table>'
});*/

var app = new Vue({
    el:'#app',
    data:{
        nome: '',
        email: '',
        nascimento: '',
        servicos: {
            service1: {status: true, descricao:'Storage - 10 GB HD - $ 0,5 per hour'}
        }
    }/*,
    methods:{
        clear: function(){
            this.nome = '';
            this.email = '';
            this.nascimento = '';
        }
    }*/
});