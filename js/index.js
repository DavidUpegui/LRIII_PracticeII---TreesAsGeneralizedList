
const nav = document.getElementById('nav');
const btnToggleMenu = document.getElementById('toggle-menu');
const btnEnterTree = document.getElementById('btnEnterTree');
const output = document.getElementById('output');
const txtEnterTreeException = document.getElementById('enterTreeException');
const inputTree = document.getElementById('inputTree');
const btnSearchElement = document.getElementById('btnSearchElement');
const inputElement = document.getElementById('inputElement');
const txtTreeString = document.getElementById('txtTreeString');
const txtElementAttributes = document.getElementById('txtElementAttributes');
const txtElementFounded = document.getElementById('txtElementFounded');
const txtWrongTreeException = document.getElementById('txtWrongTreeException');
const txtElementNotFoundException = document.getElementById('txtElementNotFoundException');
const treeHigh = document.getElementById('treeHigh');
const treeGrade = document.getElementById('treeGrade');
const treeLeaves = document.getElementById('treeLeaves');
const txtElementLevel = document.getElementById('elementLevel');
const txtElementGrade = document.getElementById('elementGrade');
const txtElementAncestor = document.getElementById('elementAncestor');
const btnInstructions = document.getElementById('btnInstructions');
const modal = document.getElementById('modal');
const btnModalClose = document.getElementById('btnModalClose');
//Toggle navbar menu
btnToggleMenu.addEventListener('click', ()=>{
    Visual.toggleNav(nav);
});

//Verify if some tree has been ingresed in the input for enable or disable the enter button
inputTree.addEventListener('keyup', ()=>{
    Visual.verifyInput(inputTree,btnEnterTree);
});


btnEnterTree.addEventListener('click' , ()=>{
    Visual.hideHTML(output);
    arbol = new ArbolLG();
    try{
        arbol.construyeArbol(inputTree.value);
        let altura = arbol.altura(); 
        let grado = arbol.grado();   
        let cantHojas = arbol.hojas(); 
        Visual.hideHTML(txtWrongTreeException);
        Visual.hideHTML(txtElementAttributes);
        Visual.hideHTML(txtEnterTreeException);
        inputElement.value = '';
        txtTreeString.innerHTML = `${inputTree.value}`;
        Visual.showHTML(output);
        Visual.writeAttribute(altura,treeHigh);
        Visual.writeAttribute(grado,treeGrade);
        Visual.writeAttribute(cantHojas,treeLeaves);
    }catch(e){
        let msg;
        Visual.hideHTML(txtEnterTreeException);
        switch(e.message){
            case 'FirstParenthesisMissing':
                msg = 'Error al ingresar el árbol: Faltó el paréntesis inicial'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'OpenParenthesisError':
                msg = 'Error al ingresar el árbol: El siguiente símbolo después de un paréntesis  debe un registro'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'CommaError':
                msg = 'Error al ingresar el árbol: El siguiente símbolo después de una coma debe ser un registro'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'CloseParenthesisError':
                msg = 'Error al ingresar el árbol: El siguiente símbolo después de un paréntesis cerrado debe ser un registro o un paréntesis cerrado'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'CharacterError':
                msg = 'Error al ingresar el árbol: No pueden haber 2 registros juntos sin ser separados por algún paréntesis o coma'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'CloseParenthesisMissing':
                msg = 'Error al ingresar el árbol: Hace falta un paréntesis cerrado'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'OpenParenthesisMissing':
                msg = 'Error al ingresar el árbol: Hace falta un paréntesis abierto'
                Visual.showException(msg, txtWrongTreeException);
                break;
            case 'RootWithSiblingsError':
                msg = 'Error al ingresar el árbol: La raíz no puede tener hermanos'
                Visual.showException(msg, txtWrongTreeException);
        }
    }
})

//Verify if some element has been ingresed in the input for enable or disable the enter button
inputElement.addEventListener('keyup', ()=>{
    Visual.verifyInput(inputElement,btnSearchElement);
});

//Show the element output when the button search is pressed
btnSearchElement.addEventListener('click' , ()=>{
    let el  = inputElement.value;
    Visual.hideHTML(txtElementAttributes)
    if(arbol.buscarRegistro(el) !== null){
        let elementGrade = arbol.gradoRegistro(el); 
        let elementLevel = arbol.nivelRegistro(el); 
        let elementAncestor = arbol.ancestrosRegistro(el); 
        Visual.hideHTML(txtElementNotFoundException);
        Visual.showHTML(txtElementAttributes);
        txtElementFounded.innerHTML = `${inputElement.value}`
        Visual.writeAttribute(elementGrade, txtElementGrade);
        Visual.writeAttribute(elementLevel, txtElementLevel);
        Visual.writeAttribute(elementAncestor, txtElementAncestor);
    }
    else{
        Visual.showHTML(txtElementNotFoundException);
        Visual.hideHTML(txtElementAttributes);
    }
});

btnInstructions.addEventListener('click', ()=>{
    modal.classList.remove('modal-hidden');
    document.querySelector('body').style.overflowY = 'hidden';
    if(window.innerWidth <=768){
        Visual.toggleNav(nav);
    }
});

btnModalClose.addEventListener('click', ()=>{
    modal.classList.add('modal-hidden');
    document.querySelector('body').style.overflowY = 'auto';
});

// str = '(a(b(c,d(e)),f,g(h,i(j,k(l)),m,n)),p)';
