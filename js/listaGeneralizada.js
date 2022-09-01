class listaGeneralizada{
    #primerNodo

    constructor(){
        this.#primerNodo = null
    }

    retornaPrimerNodo(){
        return this.#primerNodo
    }

    construyeLg(s){
        let pila = new Pila()
        let x = new nodoLg(null)
        this.#primerNodo = x
        let ultimo = x
        let n = s.length
        for (let i=2;i<n;i++){
            switch(s[i]){
                case ',':
                    x = new nodoLg(null)
                    ultimo.asignaLiga(x)
                    ultimo = x
                    break;

                case '(':
                    pila.apilar(ultimo)
                    x = new nodoLg(null)
                    ultimo.asignaSw(1)
                    ultimo.asignaDato(x)
                    ultimo = x
                    break;

                case ')':
                    ultimo = pila.desapilar()
                    break;

                default:
                    ultimo.asignaSw(0)
                    ultimo.asignaDato(s[i])
            }
        }
    }

    recorrerLg(p){
        let q = null
        while (!this.finDeRecorrido(p)){
            if(p.retornaSw() == 0){
                console.log(p.retornaDato())
                p = p.retornaLiga()
            }
            else{
                q = p.retornaDato()
                this.recorrerLg(q)
                p = p.retornaLiga()
            }
        }
    }

    finDeRecorrido(p){
        return p == null
    }

}