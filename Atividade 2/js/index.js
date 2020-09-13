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
        nome: 'tar',
        email: '',
        nascimento: '',
        servicos: [
            {status: true, descricao:'Storage - 10 GB HD - $ 0,5 per hour'},
            {status: true, descricao:'Storage - 10 GB HD - $ 0,5 per hour'}
        ]
    },
    methods:{
        clear: function(){
            var i = 0;
            this.nome = '';
            this.email = '';
            this.nascimento = '';
            for(i = 0; i < this.servicos.length; i++)
                this.servicos[i].status = this.servicos[i].status ? false : false;
        }
    }
});