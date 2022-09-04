
export class ArbolLG{
    #raiz;

    ArbolLG(){
        this.#raiz = null;
    }
    get raiz(){
        return this.#raiz
    }
    set raiz(raiz){
        this.#raiz = raiz
    }

    construyeArbol(s){
        s.replace(/\s+/g, '');
        let pila = new Pila();
        this.raiz = new NodoLg(null);
        this.raiz.asignaDato(s[1]);
        if(s.length === 2){
            return
        }
        let x = new NodoLg(null);
        this.raiz.asignaLiga(x);
        let ultimo = x;
        for(let i = 3; i <= s.length - 2; i++){
            switch(s[i]){
                case '(':
                    x = new NodoLg(null);
                    ultimo.asignaSw(1);
                    x.asignaDato(ultimo.retornaDato());
                    ultimo.asignaDato(x);
                    pila.apilar(ultimo);
                    ultimo = new NodoLg(null);
                    x.asignaLiga(ultimo);
                    break
                case ',':
                    x = new NodoLg(null);
                    ultimo.asignaLiga(x);
                    ultimo = x;
                case ')':
                    ultimo = pila.desapilar();
                    break
                default:
                    ultimo.asignaDato(s[i]);
            }
        }
    }

    altura(){

    }
    grado(){

    }
}