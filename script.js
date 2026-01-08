let display = document.getElementById("display");
let button = document.querySelectorAll(".button");
const sound = new Audio("Pictures/light-switch-button-epic-stock-media-1-00-00.mp3");
let chuoinho = "";

button.forEach((bt)=>{
    bt.addEventListener("click",()=> {
        sound.play();
        switch(bt.innerText){
            case "AC": chuoinho = ""; break;
            case "DEL": chuoinho = chuoinho.slice(0,-1); break; 
            // --> Cắt vị trí cuôi
            case "x": chuoinho += "*"; break;
            case ",": chuoinho += "."; break;
            case "=": chuoinho = Number(eval(chuoinho).toFixed(2)); break;
            // Làm tròn 2 chữ số và bỏ số 0 (nếu có)
            default:
                chuoinho += bt.innerText;
        }
        display.textContent = chuoinho;
    })
})

