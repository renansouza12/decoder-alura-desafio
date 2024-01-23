const textDecoder = document.querySelector(".decoder_text");
const btnEncrypt = document.querySelector(".btn_encrypt");
const btnDecrypt = document.querySelector(".btn_decrypt");

const decoderInput = document.querySelector(".decoder_text");

btnEncrypt.addEventListener("click", () => displayTextEncrypt());
btnDecrypt.addEventListener("click", () => displayTextDecrypt());


function displayTextEncrypt() {
    
    //variavel result foi declarada no sidebar.js
    result.value = textEncrypt();
    //variavel btnCopyText e btnCopiedText foram declaradas no sidebar.js 
    btnCopyText.classList.remove("copied");
    btnCopiedText.classList.remove("active");

   decoderInput.value = "";
}
function displayTextDecrypt() {
    result.value = textDecrypt();
    decoderInput.value = "";
 }
 

function textEncrypt() {
    return decoderInput.value.replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat")
}
function textDecrypt() {
    return decoderInput.value.replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u")
}

