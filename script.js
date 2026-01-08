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
                break;
            case "x": chuoinho += "*"; kt = 0; break;
            case ",": chuoinho += "."; kt = 0; break;
            case "=": chuoinho = Number(eval(chuoinho).toFixed(2));kt = 1;  break;
            // Làm tròn 2 chữ số và bỏ số 0 (nếu có)
            default:
                if (kt === 1) {
                    chuoinho = "";
                }
                // Lấy ký tự cuối
                let lastChar = chuoinho.slice(-1);
                // Nếu nút hiện tại là toán tử
                if (["+", "-", "*", "/"].includes(bt.innerText)) {
                    if (["+", "-", "*", "/"].includes(lastChar)) {
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

