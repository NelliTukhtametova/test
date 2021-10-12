
const form = document.forms[0];
var elems = form.elements;


form.onsubmit = function send(e) {
    e.preventDefault();
    for(var i =0; i< form.length; i++) {    
        if(elems[i].value == "") {
            elems[i].style.border = '2px solid red';       
        }
    }
}


window.onload = function() {
    form.onmouseover = function(){        
        for(var i =0; i< elems.length; i++)
        if(elems[i].style.border == '2px solid red') 
        elems[i].style.border = ""
    }
}

