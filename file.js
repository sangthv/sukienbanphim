function uparrowpresed(){
    let element=document.getElementById("Nobita");
    element.style.top=parseInt(element.style.top) -5 + 'px';
}
function downarrowpresed(){
    var element= document.getElementById("Nobita");
    element.style.top=parseInt(element.style.top) +5 + 'px';
}
function leftarrowpresed(){
    var element=document.getElementById("Nobita");
    element.style.left=parseInt(element.style.left) -5 + 'px';
}
function rightarrowpresed(){
    var element= document.getElementById("Nobita");
    element.style.right=parseInt(element.style.right) +5 +'px';
}
function moveselection(evt){
    switch (evt.keycode){
        case 37:
            leftarrowpresed();
            break;
        case 39:
            rightarrowpresed();
            break;
        case 38:
            uparrowpresed();
            break;
        case 40:
            downarrowpresed();
            break;
    }
}
function docready(){
    window.addEventListener('keydown', moveselection);
}