new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        botaoAlert() {
            alert('botão clicado!')
        },
        getValor(event) {
            this.valor = event.target.value;
        }
    }
})