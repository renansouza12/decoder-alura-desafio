const message = document.querySelector(".message_warning");
const btnClose = document.querySelector(".ri-close-fill");

btnClose.addEventListener("click",()=> closeMessageWarning());

function closeMessageWarning(){
    message.style.display = "none";
}