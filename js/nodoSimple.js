class nodoSimple {
    #dato
    #liga

    constructor(d){
        this.#dato = d;
        this.#liga = null;
    }

    retornaDato(){
        return this.#dato
    }

    retornaLiga(){
        return this.#liga
    }

    asignaDato(d){
        this.#dato = d
    }

    asignaLiga(l){
        this.#liga = l
    }
}