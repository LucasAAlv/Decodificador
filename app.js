// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let textAreaInput = document.querySelector("#textInput");
let textAreaOutput = document.querySelector(".container__content__output");
let buttonEncrypt = document.querySelector("#butEncrypt");
let buttonDecrypt = document.querySelector("#butDecrypt");
let textOutputDefault = '<img src="./assets/High quality products 1 1.svg" alt="woman looking"><p class="container__content__output__placeholder"> <strong>Nenhuma mensagem encontrada</strong></p><p class="container__content__output__placeholder">Digite um texto que você deseja criptografar ou descriptografar.</p>';
let encryptPattern = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

console.table(encryptPattern);

function encryptText(){
    let textInput = textAreaInput.value.toLowerCase();

    if(textInput != ""){
        for(i = 0; i < encryptPattern.length; i++){
            let vogal = encryptPattern[i][0];
            let encryptedVogal = encryptPattern[i][1];
            if(textInput.includes(vogal)){
                textInput = textInput.replaceAll(vogal,encryptedVogal);
            }
        }
        textAreaOutput.innerHTML = textInput;
    }
    else{
        textAreaOutput.innerHTML = textOutputDefault;
    }
}

function decryptText(){
    let textInput = textAreaInput.value.toLowerCase();

    if(textInput != ""){
        for(i = encryptPattern.length-1; i > 0; i--){
            let vogal = encryptPattern[i][0];
            let encryptedVogal = encryptPattern[i][1];
            if(textInput.includes(vogal)){
                textInput = textInput.replaceAll(encryptedVogal,vogal);
            }
        }
        textAreaOutput.innerHTML = textInput;
    }
    else{
        textAreaOutput.innerHTML = textOutputDefault;
    }
}

buttonEncrypt.addEventListener("click", encryptText);
buttonDecrypt.addEventListener("click", decryptText);
