let my_color = document.querySelector(".body");
let text_color = document.querySelector(".text-color");
let prev_color = null; 
let tx_color = null;
function changeBackground(color, darkcolor)
{
    my_color.classList.add(color);
    my_color.classList.remove(prev_color);
    text_color.classList.add(darkcolor);
    text_color.classList.remove(tx_color);
    prev_color = color;
    tx_color = darkcolor;
}