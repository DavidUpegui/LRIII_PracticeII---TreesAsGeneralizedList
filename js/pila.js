class Pila {
    constructor(){
        this.stack = [];
    }

    apilar(elemento){
        this.stack.push(elemento)
        return this.stack
    }

    desapilar(){
        return this.stack.pop()
    }

    cima(){
        return this.stack[this.stack.length - 1]
    }

    size(){
        return this.stack.length
    }

    print(){
        console.log(this.stack)
    }
}