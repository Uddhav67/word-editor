let buttons =  document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i <btn.length; i++){
    btn[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        currnt[0].className = current[0].className.replace("active","");
        this.className += " active";
    })
}
function changeFont() {
    var selectedFont = document.getElementById("fontSelector").value;
    document.getElementById("txt").style.fontFamily = selectedFont;
}
function changeColor(color) {
    document.getElementById('txt').style.color = color;
}