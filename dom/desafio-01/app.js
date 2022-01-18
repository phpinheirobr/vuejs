new Vue({
    el: '#desafio',
    data: {
        nome: 'Pedro Pinheiro',
        idade: 32,
        linkImg: 'https://static1.purepeople.com.br/articles/5/31/41/15/@/3548703-novela-o-salvador-da-patria-relembre-opengraph_1200-2.jpg'
    },
    methods:{
        nomeInput: function(event) {
            event.target.value = this.nome
        }
    }
});