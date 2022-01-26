function criaCalculadora(){
    return{
        display: document.querySelector('display'),




        inicia(){
            this.cliqueBotoes();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                console.log(el);
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }    
          
            }.bind(this));
        },

        btnParaDisplay(valor){
            
        }



    };
}
const calculador = criaCalculadora();
calculador.inicia();