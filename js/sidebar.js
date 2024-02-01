const btnsMinimize = document.querySelectorAll(".minimize");
const btnsMaximaize = document.querySelectorAll(".maximize");
const btnsClose = document.querySelectorAll(".close");

const decoderCard = document.querySelector('.decoder_card');
const decryptedCard = document.querySelector('.message_decoder');
const warningCard = document.querySelector('.warning_message');

const decodeIcone = document.querySelector(".decode_icon");
const warningIcone = document.querySelector(".warning_icon");
const decryptIcone = document.querySelector(".decrypt_icon");

const minimizeBar = document.querySelector('.minimized_bar');

btnsMinimize.forEach((btnMinimize,i)=>{
    btnMinimize.addEventListener("click", ()=>{
       i == 0 ?  (minimizeDiv(decoderCard),displayIcone(decodeIcone), addClass(minimizeBar, 'minimized')) : 
       i == 1 ?  (minimizeDiv(decryptedCard),displayIcone(decryptIcone), addClass(minimizeBar, 'minimized')) :
         i == 2 ? (minimizeDiv(warningCard),displayIcone(warningIcone), addClass(minimizeBar, 'minimized')) : '';
    })
})
btnsMaximaize.forEach((btnMaximaize,i)=>{
    btnMaximaize.addEventListener("click", ()=>{
       i == 0 ?  maximizeDiv(decoderCard) : i == 1 ?  maximizeDiv(decryptedCard) : i == 2 ? maximizeDiv(warningCard) : '';
    })
})
btnsClose.forEach((btnClose,i)=>{
    btnClose.addEventListener("click", ()=>{
       i == 0 ?  closeDiv(decoderCard) : i == 1 ?  closeDiv(decryptedCard) : i == 2 ? closeDiv(warningCard) : '';
    })
})

warningIcone.addEventListener("click", () => displayCardMinimized(warningCard,'minimized'));
decodeIcone.addEventListener("click", () => displayCardMinimized(decoderCard,'minimized'));
decryptIcone.addEventListener("click", () => displayCardMinimized(decryptedCard,'minimized'));

function minimizeDiv(div){
    div.style.opacity = 0;
}
function displayIcone(icon){
    icon.style.display = 'block';
}

function maximizeDiv(div){
    div.classList.toggle('maximized');
}
function closeDiv(div){
    div.style.display = "none";
}
function addClass(div, className){
    div.classList.add(className);
}

function displayCardMinimized(div) {
    div.style.opacity = 1;
    removeClass(minimizeBar, 'minimized');
}

function removeClass(div, className) {
    div.classList.remove(className);
}