class Visual{

    static toggleNav(nav){
        nav.classList.toggle('nav--show');
    }

    static disableButton(btn){
        btn.classList.add('btn--disabled');
    }

    static verifyInput(input,btn){
        if (input.value === ""){
            btn.classList.add('btn--disabled');
        }else{
            btn.classList.remove('btn--disabled');
        }
    }

    static hideHTML(htmlElement){
        htmlElement.classList.add('hidden')
    }

    static showHTML(htmlElement){
        htmlElement.classList.remove('hidden');
    }

    static writeAttribute(value, htmlElement){
        htmlElement.innerHTML = value;
    }

}