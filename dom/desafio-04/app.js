new Vue({
	el: '#desafio',
	data: {
		aplicarClasse: 'destaque',
		girar: false,
		aplicarEstilo: '',
		width: 8
		
	},
	methods: {
		iniciarEfeito() {

			setInterval(() => {
				this.aplicarClasse = this.aplicarClasse == 'destaque'
			 ? 'encolher' : 'destaque'
			}, 1000);
		},
		setGirar(event) {
			if(event.target.value == 'true'){
					this.girar = true
			}else if(event.target.value == 'false'){
				this.girar = false
			}
		},
		iniciarProgresso() {
			var width = this.width
			var elem = document.getElementById("barStatus");   
			
			var id = setInterval(frame, 1000);
			function frame() {
			  if (width >= 100) {
			  } else {
				width= width+10; 
				elem.style.width = width + '%'; 
			  }
			}
		  }
	},
	computed: {	}
})
