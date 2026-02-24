let par = document.querySelector("p")
let btn = document.querySelectorAll("button")
let container = document.querySelector(".content")
let input = document.querySelector("input")

function empty() {
    input.value = "";
}
function showInput() {
    input.style.display = "block"
}

function inputValue(e,prop) {
    input.oninput = () => {
        e.style[prop] = input.value;
    }
}

function editTXt() {
    par.setAttribute("contenteditable", "true")
    par.focus()
}
btn[0].addEventListener("click", editTXt)


function editColor() {
    empty()
    showInput()
    inputValue(par , "color")

}
btn[1].addEventListener("click", editColor)


function editFont() {
    empty()
    showInput()
    inputValue(par,"fontSize")
}
btn[2].addEventListener("click", editFont)


function editBg() {
    empty()
    showInput()
     inputValue(container, "backgroundColor")
}
btn[3].addEventListener("click", editBg)

