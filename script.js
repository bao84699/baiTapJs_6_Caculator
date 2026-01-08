let display = document.getElementById("display");
let button = document.querySelectorAll(".button");
const sound = new Audio("Pictures/light-switch-button-epic-stock-media-1-00-00.mp3");
let chuoinho = "";
let kt = 0;

button.forEach((bt)=>{
    bt.addEventListener("click",()=> {
        sound.play();
        switch(bt.innerText){
            case "AC": chuoinho = ""; kt = 0; break;
            case "DEL": chuoinho = chuoinho.slice(0,-1); break; 
            // --> Cắt vị trí cuôi
            case "+/-":
                if (chuoinho !== "") {
                    if (chuoinho.startsWith("(-") && chuoinho.endsWith(")")) {
                        chuoinho = chuoinho.slice(2, -1);
                    } 
                    else {
                        chuoinho = "(-" + chuoinho + ")";
                    }
                }
                break;           case ",": chuoinho += "."; kt = 0; break;
            case "=": chuoinho = Number(eval(chuoinho).toFixed(2));kt = 1;  break;
            default:
                if (kt === 1 && !["+", "-", "*", "/"].includes(bt.innerText)) {
                    chuoinho = "";
                }
                let lastChar = chuoinho.slice(-1);
                if (["+", "-", "*", "/",".","%"].includes(bt.innerText)) {
                    if (["+", "-", "*", "/",".","%"].includes(lastChar)) {
                        chuoinho = chuoinho.slice(0, -1) + bt.innerText;
                    } else if (chuoinho === "") {
                        if (bt.innerText === "-") chuoinho += "-";
                    } else {
                        chuoinho += bt.innerText;
                    }
                } else {
                    chuoinho += bt.innerText;
                }
                kt = 0;
        }
        display.textContent = chuoinho;
    })
})

