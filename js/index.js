
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
    arbol = new ArbolLG();
    console.log(`Construte el árbol basado en ${inputTree.value}`);
    arbol.construyeArbol(inputTree.value);

    //¿Esperar a las excepciones/Validaciones?
    //¿Hace falta guardar el arbol en el sessionStorage?

    // let altura = arbol.altura(); //TODO
    // let grado = arbol.grado();   //TODO
    // let cantHojas = arbol.hojas(); //TODO

    Visual.hideHTML(txtWrongTreeException);
    Visual.hideHTML(txtElementAttributes);
    Visual.hideHTML(txtEnterTreeException);
    inputElement.value = '';
    txtTreeString.innerHTML = `${inputTree.value}`;
    Visual.disableButton(btnEnterTree);
    inputTree.value = "";
    Visual.showHTML(output);
    Visual.writeAttribute(altura = 1,treeHigh);
    Visual.writeAttribute(grado = 1,treeGrade);
    Visual.writeAttribute(cantHojas = 1,treeLeaves);
})

//Verify if some element has been ingresed in the input for enable or disable the enter button
inputElement.addEventListener('keyup', ()=>{
    Visual.verifyInput(inputElement,btnSearchElement);
});

//Show the element output when the button search is pressed
btnSearchElement.addEventListener('click' , ()=>{
    let el  = inputElement.value;
    if(arbol.containElement(el)){
        // let elementGrade = arbol.elementGrade(el); //TODO
        // let elementLevel = arbol.elementLevel(el); //TODO
        // let elementAncestor = arbol.elementAncestor(el); //TODO
        Visual.hideHTML(txtElementNotFoundException);
        Visual.showHTML(txtElementAttributes);
        txtElementFounded.innerHTML = `${inputElement.value}`
        Visual.disableButton(btnSearchElement);
        Visual.writeAttribute(elementGrade = 1, txtElementGrade);
        Visual.writeAttribute(elementLevel = 1, txtElementLevel);
        Visual.writeAttribute(elementAncestor = 1, txtElementAncestor);
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
