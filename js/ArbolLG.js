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

    static validarArbolStr(str){
        let contParenthesis = 0;
        let e;
        if(str[2] == ','){
            e = new ArbolLgConstructionError('RootWithSiblingsError');
            throw e
        }
        if(str[0] !== '('){
            e = new ArbolLgConstructionError('FirstParenthesisMissing')
            throw e
        }
        if(str[str.length-1] !== ')'){
            e = new ArbolLgConstructionError('CloseParenthesisMissing')
            throw e
        }
        for(let i = 1; i < str.length - 1; i++){
            switch (str[i]) {
                case '(':
                    contParenthesis++
                    if(str[i+1] === '(' || str[i+1] === ',' || str[i+1] === ')'){
                        e = new ArbolLgConstructionError('OpenParenthesisError') 
                        throw e
                    }
                    break;
                case ',':
                    if(str[i+1] === '(' || str[i+1] === ',' || str[i+1] === ')'){
                        e = new ArbolLgConstructionError('CommaError')
                        throw e
                    }
                    break
                case ')':
                    contParenthesis--
                    if(contParenthesis === 0){
                        if(str[i+1] === ','){
                            e = new ArbolLgConstructionError('RootWithSiblingsError');
                            throw e;
                        }
                    }
                    if(str[i+1] !== ',' && str[i+1] !== ')' ){
                        e = new ArbolLgConstructionError('CloseParenthesisError')
                        throw e
                    }
                    break
                default:
                    if(str[i+1] !== '(' && str[i+1] !== ')' && str[i+1] !== ','){
                        e = new ArbolLgConstructionError('CharacterError')
                        throw e
                    }
                    break;
            }
        }
        if(contParenthesis>0){
            e = new ArbolLgConstructionError('CloseParenthesisMissing')
            throw e;
        }
        if(contParenthesis<0){
            e = new ArbolLgConstructionError('OpenParenthesisMissing')
            throw e;
        }
    }

    construyeArbol(s){
        let newS = s.replace(/\s+/g, '');
        ArbolLG.validarArbolStr(newS);
        let pila = new Pila();
        this.string = newS;
        this.raiz = new NodoLg(null);
        this.raiz.asignaDato(newS[1]);
        if(newS.length === 3){
            return
        }
        let x = new NodoLg(null);
        this.raiz.asignaLiga(x);
        let ultimo = x;
        for(let i = 3; i <= newS.length - 2; i++){
            switch(newS[i]){
                case '(':
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
                    break
                default:
                    ultimo.asignaDato(newS[i]);
            }
        }
    }

    muestraArbol(){
        let pila = [];
        let p = this.raiz;
        while(pila.length !== 0 || p != null){
            if(p === null){
                p = pila.pop()
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato()
                }
                console.log(p.retornaDato())
            }
            p = p.retornaLiga();
        }
    }

    altura(){
        let pila = []
        let p = this.raiz;
        let maxAltura = 1;
        let altura = 1
        if(p.retornaLiga() !==null){
            altura = 2;
            maxAltura = 2;
        }
        while(pila.length !== 0 || p != null){
            if(p === null){
                p = pila.pop()
                altura--
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);   
                    p = p.retornaDato()
                    altura++
                    if(altura> maxAltura){
                        maxAltura = altura;
                    }
                }
            }
            p = p.retornaLiga();
        }
        return maxAltura
    }

    grado(){
        let q;
        let pila = [];
        let p = this.#raiz;
        let grado = 0;
        q = p.retornaLiga();
        while(q !== null){
            grado++;
            q = q.retornaLiga();
        }
        let maxGrado = grado;
        while(pila.length !== 0 || p != null){
            grado = 0;
            if(p === null){
                p = pila.pop()
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato();
                    q = p.retornaLiga()
                    while(q !== null){
                        grado++;
                        q = q.retornaLiga();
                    }
                    if(grado > maxGrado){
                        maxGrado = grado;
                    }
                }
            }
            p = p.retornaLiga();
        }
        return maxGrado
    }
    
    hojas(){
        let pila = [];
        let p = this.raiz;
        let cantHojas = 0;
        while(pila.length !== 0 || p != null){
            if(p === null){
                p = pila.pop()
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato()
                }else{
                    cantHojas++
                }
            }
            p = p.retornaLiga();
        }
        return cantHojas - 1;
    }

    buscarRegistro(d){
        let pila = [];
        let p = this.raiz;
        while(pila.length !== 0 || p != null){
            if(p === null){
                p = pila.pop()
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato()
                }
                if(p.retornaDato() === d){
                    return p
                }
            }
            p = p.retornaLiga();
        }
        return null;
    }

    registroEsPadre(d){
        let pila = [];
        let p = this.#raiz;
        if(d === p.retornaDato()) return true;
        let bandera = false;
        while(pila.length !== 0 || p !== null){
            bandera = false;
            if(p === null){
                p = pila.pop()
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato()
                    bandera = true;
                }
                if(p.retornaDato() === d){
                    return bandera;
                }
            }
            p = p.retornaLiga();
        }
    }

    gradoRegistro(el){
        let pila = []
        let p = this.raiz;
        let grado = 0;
        if(el === p.retornaDato()){
            while(p !== null){
                grado++
                p = p.retornaLiga()
            }
            return grado - 1;
        }
        while(pila.length !== 0 || p !== null){
            if(p===null){
                p = pila.pop();
            }else{
                if(p.retornaSw()=== 1){
                    pila.push(p);
                    p = p.retornaDato()
                    if(p.retornaDato() === el){
                        p = p.retornaLiga();
                        while(p !== null){
                            grado++
                            p = p.retornaLiga()
                        }
                        return grado;
                    }
                }
                if(p.retornaDato() === el){
                    return grado;
                }
            }
            p = p.retornaLiga()
        }
    }

    nivelRegistro(d){
        if(this.raiz.retornaDato() === d){
            return 1
        }
        let pila = []
        let p = this.raiz.retornaLiga();
        let nivel = 1
        let bandera;
        while(pila.length !== 0 || p != null){
            bandera = false;
            if(p === null){
                p = pila.pop()
                nivel--
            }else{
                if(p.retornaSw() === 1){
                    pila.push(p);
                    p = p.retornaDato()
                    nivel++
                    bandera = true;
                }
                if(p.retornaDato() === d){
                    if(bandera) return nivel
                    else return nivel + 1
                }                
            }
            p = p.retornaLiga();
        }
    }

    ancestrosRegistro(e){
        let pilaRecorrido = [];
        let pilaAncestros = [];
        let p = this.raiz;
        if(p.retornaDato() === e){
            return 'No tiene ancestros, el registro es la raíz.'
        }
        pilaAncestros.push(p.retornaDato());
        while(pilaRecorrido.length !== 0 || p !== null){
            if(p === null){
                p = pilaRecorrido.pop();
                pilaAncestros.pop();
            }else{
                if(p.retornaSw() === 1){
                    pilaRecorrido.push(p);
                    p = p.retornaDato();
                    if(p.retornaDato() === e) break
                    else{
                        pilaAncestros.push(p.retornaDato());
                    }
                }else{
                    if(p.retornaDato() === e) break
                }
            }
            p = p.retornaLiga();
        }
        let str = ''
        while(pilaAncestros.length !== 0){
            if(pilaAncestros.length === 1){
                str = `${str}${pilaAncestros.pop()}`;
            }else{
                str = `${str}${pilaAncestros.pop()}, `;
            }
        }
        return str
    }
}



