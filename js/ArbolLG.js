
class ArbolLG{
    #raiz = null;
    #string;

    ArbolLG(){
    }
    get raiz(){
        return this.#raiz
    }
    set raiz(raiz){
        this.#raiz = raiz
    }
    get string(){
        return this.#string;
    }
    set string(string){
        this.#string = string;
    }

    construyeArbol(s){
        /*
        TODO Faltan las validaciones
        */
        let newS = s.replace(/\s+/g, '');
        let contParenthesis = 0;
        let pila = new Pila();
        this.string = newS;
        this.raiz = new NodoLg(null);
        console.log(`El dato que entra en la raíz es ${newS[1]}`);
        this.raiz.asignaDato(newS[1]);
        if(s.length === 2){
            return
        }
        let x = new NodoLg(null);
        this.raiz.asignaLiga(x);
        let ultimo = x;
        for(let i = 3; i <= s.length - 2; i++){
            switch(newS[i]){
                case '(':
                    contParenthesis++
                    x = new NodoLg(null);
                    ultimo.asignaSw(1);
                    x.asignaDato(ultimo.retornaDato());
                    ultimo.asignaDato(x);
                    pila.apilar(ultimo);
                    ultimo = new NodoLg(null);
                    x.asignaLiga(ultimo);
                    break
                case ",":
                    x = new NodoLg(null);
                    ultimo.asignaLiga(x);
                    ultimo = x;
                    break
                case ')':
                    ultimo = pila.desapilar();
                    contParenthesis--
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

    containElement(el){
        return this.string.includes(el);
    }
}