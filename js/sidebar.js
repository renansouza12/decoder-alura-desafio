const btnsMinimize = document.querySelectorAll(".minimize");
const btnsMaximaize = document.querySelectorAll(".maximize");
const btnsClose = document.querySelectorAll(".close");

const decoderCard = document.querySelector('.decoder_card');
const decryptedCard = document.querySelector('.message_decoder');
const warningCard = document.querySelector('.warning_message');

const decodeIcone = document.querySelector(".decode_icon");
const warningIcone = document.querySelector(".warning_icon");
const decryptIcone = document.querySelector(".decrypt_icon");

const rotateIcone = document.querySelector(".rotate_icon");

const minimizeBarDecode = document.querySelector('.minimized_bar_decode');
const minimizeBarDecrypt = document.querySelector('.minimized_bar_decrypt');
const minizeBarWarning = document.querySelector('.minimized_bar_warning');

btnsMinimize.forEach((btnMinimize, i) => {
    btnMinimize.addEventListener("click", () => {
        i == 0 ? (minimizeDiv(decoderCard), displayIcone(decodeIcone), addClass(minimizeBarDecode, 'minimized')) :
            i == 1 ? (minimizeDiv(decryptedCard), displayIcone(decryptIcone), addClass(minimizeBarDecrypt, 'minimized')) :
                i == 2 ? (minimizeDiv(warningCard), displayIcone(warningIcone), addClass(minizeBarWarning, 'minimized')) : '';
    })
})
btnsMaximaize.forEach((btnMaximaize, i) => {
    btnMaximaize.addEventListener("click", () => {
        i == 0 ? maximizeDiv(decoderCard) : i == 1 ? maximizeDiv(decryptedCard) : i == 2 ? maximizeDiv(warningCard) : '';
    })
})
btnsClose.forEach((btnClose, i) => {
    btnClose.addEventListener("click", () => {
        i == 0 ? (closeDiv(decoderCard), displayIcone(decodeIcone)) :
            i == 1 ? (closeDiv(decryptedCard), displayIcone(decryptIcone)) :
                i == 2 ? (closeDiv(warningCard), displayIcone(warningIcone)) : '';
    })
})

warningIcone.addEventListener("click", () => displayCardMinimized(warningCard, minizeBarWarning));
decodeIcone.addEventListener("click", () => displayCardMinimized(decoderCard, minimizeBarDecode));
decryptIcone.addEventListener("click", () => displayCardMinimized(decryptedCard, minimizeBarDecrypt));
rotateIcone.addEventListener("click", () => rotateCard())
function minimizeDiv(div) {
    div.style.display = "none";
}
function displayIcone(icon) {
    icon.style.display = 'block';
}

function maximizeDiv(div) {
    div.classList.toggle('maximized');
}
function closeDiv(div) {
    div.style.display = "none";
    decoderInput.value = "";
    result.value = "";
}
function addClass(element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

function displayCardMinimized(div, minimizeBar) {
    div.style.opacity = 1;
    div.style.display = "block";
    removeClass(minimizeBar, 'minimized');
}


function removeClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function rotateCard() {
    decoderCard.classList.toggle('rotated');
    warningCard.classList.toggle('rotated');
    decryptedCard.classList.toggle('rotated');
    rotateIcone.classList.toggle('rotated');
}