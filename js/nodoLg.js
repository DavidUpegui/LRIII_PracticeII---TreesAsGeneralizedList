class NodoLg extends NodoSimple{
    #sw

    constructor(x){
        super(x)
        this.#sw = 0
    }

    retornaSw(){
        return this.#sw
    }

    asignaSw(sw){
        this.#sw = sw
    }
}