//

let number = document.getElementById("number");
let tahminBtn = document.getElementById("btnGuess");
let result = document.getElementById("result");
let rnd = Math.floor(Math.random()*10);



tahminBtn.addEventListener("click", () => {
    
    var txt = number.value;
    

    if(txt == ""){
        result.innerText = "Değer Girmediniz."
        result.style.fontSize = "25px";
        result.style.border = "2px solid crimson"
    }

    else if(txt < 0){
        result.innerText = "Lütfen 0-9 arası sayı seçiniz."
        result.style.fontSize = "25px";
        result.style.border = "2px solid crimson"
    }

    else if(txt > 10){
        result.innerText = "Lütfen 0-9 arası sayı seçiniz."
        result.style.fontSize = "25px";
        result.style.border = "2px solid crimson"
    }

    else if(txt > rnd){
        result.innerText="Tahmin Büyük";
        result.style.fontSize = "25px";
        result.style.border = "2px solid crimson"
    }

    else if(txt < rnd){
        result.innerText = "Tahmin Küçük";
        result.style.fontSize = "25px";
        result.style.border = "2px solid crimson"
    }
    
    else{
        result.innerText = "Tebrikler Doğru Cevap.";
        result.style.fontSize = "25px";
        result.style.border = "2px solid green"
    }

    
})


