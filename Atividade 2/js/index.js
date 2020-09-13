/*Vue.component('item-table', {
    template:'Nome</th><th>E-mail</th><th>Nascimento</th><th>Serviços</th><th>Total</th></tr>'
});*/
Vue.component('table-vue',{
    template: '#table-vue'
});

Vue.component('item-table', {
    template: '#item-vue'
});

Vue.component('tr-vue', {
    template: '#tr-vue'
});

var app = new Vue({
    el:'#app',
    mounted: function(){
        if(localStorage.quantid){
            this.cont = localStorage.quantid;
            alert("quantidade de registros: " + localStorage.quantid);
        }
        else alert("quantidade de registros: 0");
    },
    data:{
        cont: 0,
        ok: true,
        valores: [],
        nome: 'tar',
        email: '',
        nascimento: '',
        servicos: [
            {status: false, descricao:'Processing - 1 micro - $ 1,00 per hour', valor: 1},
            {status: false, descricao:'Storage - 10 GB HD - $ 0,5 per hour', valor: 0.5},
            {status: false, descricao:'Processing - 1 medium - $ 2,00 per hour', valor: 2},
            {status: false, descricao:'Storage - 1 TB HD - $ 1,00 per hour', valor: 1},
            {status: false, descricao:'Processing - 1 large - $ 10,00 per hour', valor: 10},
            {status: false, descricao:'Storage - 100 GB SSD - $ 5,00 per hour', valor: 5}
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
        },
        add: function(){
            var ano = this.nascimento.substr(0, 4);
            var idade = 2020-parseInt(ano);
            if(idade >= 18){
                this.cont++;
                var item_tabela = [], total = 0, s = "";
                item_tabela.push(this.nome);
                item_tabela.push(this.email);
                item_tabela.push(this.nascimento);
                for(i = 0; i < this.servicos.length; i++){
                    s += this.servicos[i].descricao;
                    total += this.servicos[i].status ? this.servicos[i].valor : 0;
                }
                item_tabela.push(s);
                item_tabela.push("$"+total+" per hour");
                this.valores.push(item_tabela);
                localStorage.quantid = this.cont+"";
            }
            else alert("Individuo menor de 18 anos!");
        }
    }
});