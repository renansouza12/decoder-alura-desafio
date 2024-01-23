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
   decoderInput.value = "";
   removeClassBtn()
}
function displayTextDecrypt() {
    result.value = textDecrypt();
    decoderInput.value = "";
    removeClassBtn()
 }
 

function textEncrypt() {
    return decoderInput.value.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
}
function textDecrypt() {
    return decoderInput.value.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
}

function removeClassBtn(){
    btnCopyText.classList.remove("copied");
    btnCopiedText.classList.remove("active");
}