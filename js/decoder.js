const btnEncrypt = document.querySelector(".btn_encrypt");
const btnDecrypt = document.querySelector(".btn_decrypt");

const decoderInput = document.querySelector(".decoder_text");

btnEncrypt.addEventListener("click", () => displayTextEncrypt());
btnDecrypt.addEventListener("click", () => displayTextDecrypt());


function displayTextEncrypt() {
    //variavel result foi declarada no copy.js
    result.value = textEncrypt();
    //variavel btnCopyText e btnCopiedText foram declaradas no copy.js
   btnCopy.classList.remove('active');
}
function displayTextDecrypt() {
    result.value = textDecrypt();

    btnCopy.classList.remove('active');
 }
 

function textEncrypt() {
    let accentsRemoved = removeAccents(decoderInput.value);
    return accentsRemoved.toLowerCase().replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
}
function textDecrypt() {
    accentsRemoved = removeAccents(decoderInput.value);
    return accentsRemoved.toLowerCase().replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
}
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
