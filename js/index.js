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

//Toggle navbar menu
btnToggleMenu.addEventListener('click', ()=>{
    console.log('Has been clicked')
    nav.classList.toggle('nav--show');
});

//Verify if some tree has been ingresed in the input for enable or disable the enter button
inputTree.addEventListener('keyup', ()=>{
    if (inputTree.value === ""){
        btnEnterTree.classList.add('btn--disabled');
    }else{
        btnEnterTree.classList.remove('btn--disabled');
    }
});

//Show the output when enter button is clicked
btnEnterTree.addEventListener('click', ()=>{
    /*
    If (Tree isn´t correct){
        txtWrongTreeException.classList.remove('hidden');
    }
    else{
    */
    txtWrongTreeException.classList.add('hidden');
    output.classList.remove('hidden');
    txtElementAttributes.classList.add('hidden');
    inputElement.value=''
    txtEnterTreeException.classList.add('hidden');
    txtTreeString.innerHTML = `${inputTree.value}`
    btnEnterTree.classList.add('btn--disabled');
    inputTree.value = "";
});

//Verify if some element has been ingresed in the input for enable or disable the enter button
inputElement.addEventListener('keyup', ()=>{
    if (inputElement.value === ""){
        btnSearchElement.classList.add('btn--disabled');
    }else{
        btnSearchElement.classList.remove('btn--disabled');
    }
});

//Show the element output when the button search is pressed
btnSearchElement.addEventListener('click' , ()=>{
    /*
    if(ElementNotFound)
        txtElementNotFoundException.classList.remove('hidden')
    */
    txtElementNotFoundException.classList.add('hidden');
    txtElementAttributes.classList.remove('hidden');
    txtElementFounded.innerHTML = `${inputElement.value}`
    btnSearchElement.classList.add('btn--disabled');
});



