let currdisplay = document.querySelector("#display-calculator");

//edit display, add values
const display = (add_to_display) =>{
currdisplay.value += add_to_display;
}
//clear current display 
let button_clickedc = document.getElementById("c");
    button_clickedc.onclick = () => {
    currdisplay.value = '';
}
//return value of currdisplay
let button_clickedequal = document.getElementById("=");
    button_clickedequal.onclick = () => {
    currdisplay.value = eval(currdisplay.value);
}

let button_clicked1 = document.getElementById("1");
    button_clicked1.onclick = () => {
    display(1);
}

let button_clicked2 = document.getElementById("2");
button_clicked2.onclick = () => {
    display(2);
}

let button_clicked3 = document.getElementById("3");
button_clicked3.onclick = () => {
    display(3);
}

let button_clicked4 = document.getElementById("4");
    button_clicked4.onclick = () => {
    display(4);
}

let button_clicked5 = document.getElementById("5");
    button_clicked5.onclick = () => {
    display(5);
}

let button_clicked6 = document.getElementById("6");
    button_clicked6.onclick = () => {
    display(6);
}

let button_clicked7 = document.getElementById("7");
    button_clicked7.onclick = () => {
    display(7);
}

let button_clicked8 = document.getElementById("8");
    button_clicked8.onclick = () => {
    display(8);
}

let button_clicked9 = document.getElementById("9");
    button_clicked9.onclick = () => {
    display(9);
}

let button_clicked0 = document.getElementById("0");
    button_clicked0.onclick = () => {
    display(0);
}

let button_clickedadd = document.getElementById("+");
button_clickedadd.onclick = () => {
    display('+');
}

let button_clickedsub = document.getElementById("-");
button_clickedsub.onclick = () => {
    display('-');
}

let button_clickedmul = document.getElementById("*");
button_clickedmul.onclick = () => {
    display('*');
}

let button_clickeddiv = document.getElementById("/");
button_clickeddiv.onclick = () => {
    display('/');
}


