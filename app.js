let textAreaInput = document.querySelector("#textInput");
let textAreaOutput = document.querySelector(".container__content__output");
let buttonEncrypt = document.querySelector("#butEncrypt");
let textOutputDefault = '<img src="./assets/High quality products 1 1.svg" alt="woman looking"><p class="container__content__output__placeholder"> <strong>Nenhuma mensagem encontrada</strong></p><p class="container__content__output__placeholder">Digite um texto que você deseja criptografar ou descriptografar.</p>';

function encryptText(){
    let textInput = textAreaInput.value.toLowerCase();
    if(textInput != ""){
        textAreaOutput.innerHTML = textInput;
    }else{
        textAreaOutput.innerHTML = textOutputDefault;
    }
    return;
}

buttonEncrypt.addEventListener("click", encryptText);
